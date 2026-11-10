require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('./db');

const app = express();
const PORT = Number(process.env.PORT || 3000);
const JWT_SECRET = process.env.JWT_SECRET || 'development-only-change-this-secret-32-chars';
if (process.env.NODE_ENV === 'production' && (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32)) {
  throw new Error('Thiếu JWT_SECRET an toàn. Hãy cấu hình JWT_SECRET (ít nhất 32 ký tự) trên Render.');
}
app.disable('x-powered-by');
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
const allowedOrigins = (process.env.FRONTEND_ORIGINS || process.env.FRONTEND_ORIGIN || 'http://127.0.0.1:5500,http://localhost:5500').split(',').map(x => x.trim()).filter(Boolean);
const isAllowedOrigin = origin => !origin || allowedOrigins.includes(origin) || /^https:\/\/[a-z0-9-]+\.github\.io$/i.test(origin);
app.use(cors({ origin(origin, callback) { if (isAllowedOrigin(origin)) return callback(null, true); return callback(new Error('Origin không được phép truy cập API: ' + origin)); }, credentials: false }));
app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());

const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 10, standardHeaders: 'draft-7', legacyHeaders: false, message: { message: 'Bạn đăng nhập quá nhiều lần. Vui lòng thử lại sau.' } });
const safeStudent = s => ({ id:s.id, student_number:s.student_number, full_name:s.full_name, email:s.email, class_name:s.class_name, major:s.major, year_of_study:s.year_of_study, phone:s.phone, date_of_birth:s.date_of_birth, gender:s.gender, address:s.address, avatar_url:s.avatar_url, status:s.status });
function auth(req,res,next) {
  const token = req.cookies?.studyhub_token || (req.headers.authorization?.startsWith('Bearer ') ? req.headers.authorization.slice(7) : null);
  if (!token) return res.status(401).json({ message:'Vui lòng đăng nhập.' });
  try { const payload=jwt.verify(token,JWT_SECRET); const student=db.prepare('SELECT * FROM students WHERE id=?').get(payload.sub); if(!student) return res.status(401).json({message:'Tài khoản không tồn tại.'}); req.student=student; next(); }
  catch { return res.status(401).json({message:'Phiên đăng nhập không hợp lệ hoặc đã hết hạn.'}); }
}
const asyncRoute = fn => (req,res,next)=>Promise.resolve(fn(req,res,next)).catch(next);
app.get('/api/health',(req,res)=>res.json({ok:true,service:'StudyHub API',timestamp:new Date().toISOString()}));
app.post('/api/auth/login',loginLimiter,(req,res)=>{
  const {email,password}=req.body||{};
  if(typeof email!=='string'||typeof password!=='string'||!email.trim()||!password) return res.status(400).json({message:'Vui lòng nhập email và mật khẩu.'});
  const normalizedEmail=email.trim().toLowerCase();
  const match=normalizedEmail.match(/^(\d{9})@st\.tvu\.edu\.vn$/);
  if(!match) return res.status(400).json({message:'Email phải có dạng MSSV@st.tvu.edu.vn.'});
  const student=db.prepare('SELECT * FROM students WHERE student_number=?').get(match[1]);
  if(!student||!bcrypt.compareSync(password,student.password_hash)) return res.status(401).json({message:'Email hoặc mật khẩu không đúng.'});
  const token=jwt.sign({sub:student.id},JWT_SECRET,{expiresIn:'8h'});
  res.json({message:'Đăng nhập thành công.',token,student:safeStudent(student)});
});
app.post('/api/auth/logout',(req,res)=>res.json({message:'Đã đăng xuất.'}));
app.patch('/api/auth/change-password',auth,(req,res)=>{
  const { currentPassword, newPassword } = req.body || {};
  if (typeof currentPassword !== 'string' || typeof newPassword !== 'string' || !currentPassword || newPassword.length < 8) {
    return res.status(400).json({ message: 'Vui lòng nhập mật khẩu hiện tại và mật khẩu mới có ít nhất 8 ký tự.' });
  }
  const student = db.prepare('SELECT password_hash FROM students WHERE id=?').get(req.student.id);
  if (!student || !bcrypt.compareSync(currentPassword, student.password_hash)) {
    return res.status(400).json({ message: 'Mật khẩu hiện tại không chính xác.' });
  }
  const passwordHash = bcrypt.hashSync(newPassword, 10);
  db.prepare('UPDATE students SET password_hash=?, updated_at=CURRENT_TIMESTAMP WHERE id=?').run(passwordHash, req.student.id);
  res.json({ message: 'Đổi mật khẩu thành công.' });
});
app.get('/api/auth/me',auth,(req,res)=>res.json({student:safeStudent(req.student)}));
app.get('/api/student/me',auth,(req,res)=>res.json({student:safeStudent(req.student)}));
app.patch('/api/student/profile',auth,(req,res)=>{
  const allowed=['full_name','phone','date_of_birth','gender','address','avatar_url']; const updates=[]; const values=[];
  for(const key of allowed) if(req.body && Object.hasOwn(req.body,key)){ if(typeof req.body[key]!=='string') return res.status(400).json({message:`Trường ${key} phải là chuỗi.`}); updates.push(`${key}=?`); values.push(req.body[key].trim()); }
  if(!updates.length) return res.status(400).json({message:'Không có thông tin hợp lệ để cập nhật.'});
  updates.push('updated_at=CURRENT_TIMESTAMP'); values.push(req.student.id); db.prepare(`UPDATE students SET ${updates.join(',')} WHERE id=?`).run(...values);
  res.json({message:'Cập nhật hồ sơ thành công.',student:safeStudent(db.prepare('SELECT * FROM students WHERE id=?').get(req.student.id))});
});
app.get('/api/student/courses',auth,(req,res)=>{
  const rows=db.prepare(`SELECT e.id AS enrollment_id,e.status,e.score,e.letter_grade,e.progress,e.is_retake,c.id AS course_id,c.course_code,c.course_name,c.lecturer,c.credits,c.tuition_credits,s.id AS semester_id,s.sequence_no,s.label AS semester_label,s.school_year
  FROM enrollments e JOIN courses c ON c.id=e.course_id JOIN semesters s ON s.id=e.semester_id WHERE e.student_id=? AND (? IS NULL OR s.sequence_no=?) ORDER BY s.sequence_no,c.course_code`).all(req.student.id, req.query.semester ? Number(req.query.semester) : null, req.query.semester ? Number(req.query.semester) : null);
  res.json({courses:rows});
});
app.get('/api/student/assignments',auth,(req,res)=>{
  const rows=db.prepare(`SELECT a.id,a.title,a.description,a.due_at,a.max_score,c.course_code,c.course_name,s.label AS semester_label,sub.status AS submission_status,sub.score,sub.submitted_at,sub.feedback
  FROM assignments a LEFT JOIN courses c ON c.id=a.course_id LEFT JOIN semesters s ON s.id=a.semester_id LEFT JOIN submissions sub ON sub.assignment_id=a.id AND sub.student_id=? WHERE (? IS NULL OR a.semester_id=(SELECT id FROM semesters WHERE sequence_no=?)) ORDER BY a.due_at`).all(req.student.id, req.query.semester ? Number(req.query.semester) : null, req.query.semester ? Number(req.query.semester) : null);
  res.json({assignments:rows});
});
app.get('/api/student/schedule',auth,(req,res)=>{
  const semesterNumber = req.query.semester ? Number(req.query.semester) : null;
  if (semesterNumber !== null && (!Number.isInteger(semesterNumber) || semesterNumber < 1 || semesterNumber > 8)) {
    return res.status(400).json({message:'Học kỳ không hợp lệ.'});
  }

  const semester = semesterNumber === null ? null : db.prepare(`
    SELECT id,sequence_no,label,school_year,status,start_date,end_date
    FROM semesters WHERE sequence_no=?
  `).get(semesterNumber);

  if (semesterNumber !== null && !semester) {
    return res.status(404).json({message:'Không tìm thấy thông tin học kỳ.'});
  }

  // Xác định trạng thái hiển thị từ ngày học thực tế; dữ liệu cũ có thể
  // đang lưu status='configured' nhưng ngày kết thúc đã qua.
  if (semester) {
    const dateParts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Ho_Chi_Minh', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(new Date());
    const part = type => dateParts.find(item => item.type === type)?.value || '';
    const today = `${part('year')}-${part('month')}-${part('day')}`;

    if (semester.status === 'locked') {
      semester.display_status = 'locked';
    } else if (semester.status === 'completed' || (semester.end_date && semester.end_date < today)) {
      semester.display_status = 'completed';
    } else if (semester.status === 'planned' || (semester.start_date && semester.start_date > today)) {
      semester.display_status = 'planned';
    } else {
      semester.display_status = 'in_progress';
    }
  }

  const rows=db.prepare(`SELECT ss.id,ss.title,ss.session_date,ss.start_time,ss.end_time,ss.room,ss.lecturer,
    c.course_code,c.course_name FROM class_schedule_sessions ss LEFT JOIN courses c ON c.id=ss.course_id
    WHERE ss.class_name=? AND (? IS NULL OR ss.semester_id=?)
    ORDER BY ss.session_date,ss.start_time`).all(
      req.student.class_name,
      semester ? semester.id : null,
      semester ? semester.id : null
    );

  res.json({schedule:rows,shared:true,class_name:req.student.class_name,semester});
});
app.get('/api/student/attendance',auth,(req,res)=>{
  const rows=db.prepare(`SELECT a.id,a.status,a.note,ss.title,ss.session_date,ss.start_time,ss.end_time,c.course_code,c.course_name FROM attendance a JOIN schedule_sessions ss ON ss.id=a.session_id LEFT JOIN courses c ON c.id=ss.course_id WHERE a.student_id=? ORDER BY ss.session_date DESC`).all(req.student.id);
  const total=rows.length; const present=rows.filter(x=>x.status==='present').length;
  res.json({attendance:rows,summary:{total,present,absent:rows.filter(x=>x.status==='absent').length,rate:total?Math.round(present/total*100):0}});
});
app.get('/api/student/certificates',auth,(req,res)=>res.json({certificates:db.prepare('SELECT id,title,issuer,issued_at,certificate_code,file_url FROM certificates WHERE student_id=? ORDER BY issued_at DESC').all(req.student.id)}));
app.get('/api/student/settings',auth,(req,res)=>{
  let settings=db.prepare('SELECT language,theme,email_notifications,assignment_reminders FROM student_settings WHERE student_id=?').get(req.student.id);
  if(!settings) { db.prepare('INSERT OR IGNORE INTO student_settings(student_id) VALUES (?)').run(req.student.id); settings=db.prepare('SELECT language,theme,email_notifications,assignment_reminders FROM student_settings WHERE student_id=?').get(req.student.id); }
  res.json({settings:{...settings,email_notifications:Boolean(settings.email_notifications),assignment_reminders:Boolean(settings.assignment_reminders)}});
});
app.patch('/api/student/settings',auth,(req,res)=>{
  const current=db.prepare('SELECT * FROM student_settings WHERE student_id=?').get(req.student.id)||{};
  const body=req.body||{}; const language=body.language??current.language??'vi'; const theme=body.theme??current.theme??'light';
  if(!['vi','en'].includes(language)||!['light','dark','system'].includes(theme)) return res.status(400).json({message:'Ngôn ngữ hoặc giao diện không hợp lệ.'});
  const toBool=(v,old)=>v===undefined?Number(old??1):(v===true||v===1?1:v===false||v===0?0:null);
  const email=toBool(body.email_notifications,current.email_notifications); const reminders=toBool(body.assignment_reminders,current.assignment_reminders);
  if(email===null||reminders===null) return res.status(400).json({message:'Giá trị thông báo không hợp lệ.'});
  db.prepare(`INSERT INTO student_settings(student_id,language,theme,email_notifications,assignment_reminders,updated_at) VALUES (?,?,?,?,?,CURRENT_TIMESTAMP)
  ON CONFLICT(student_id) DO UPDATE SET language=excluded.language,theme=excluded.theme,email_notifications=excluded.email_notifications,assignment_reminders=excluded.assignment_reminders,updated_at=CURRENT_TIMESTAMP`).run(req.student.id,language,theme,email,reminders);
  res.json({message:'Đã lưu cài đặt.',settings:{language,theme,email_notifications:Boolean(email),assignment_reminders:Boolean(reminders)}});
});

app.get('/api/student/dashboard',auth,(req,res)=>{
  const studentId=req.student.id;
  const selectedSemester = req.query.semester ? Number(req.query.semester) : null;
  if (selectedSemester !== null && (!Number.isInteger(selectedSemester) || selectedSemester < 1 || selectedSemester > 8)) {
    return res.status(400).json({message:'Học kỳ không hợp lệ.'});
  }
  const courses=db.prepare(`SELECT e.id enrollment_id,e.status,e.score,e.letter_grade,e.progress,
    c.id course_id,c.course_code,c.course_name,c.lecturer,c.credits,s.sequence_no,s.label semester_label
    FROM enrollments e JOIN courses c ON c.id=e.course_id JOIN semesters s ON s.id=e.semester_id
    WHERE e.student_id=? AND (? IS NULL OR s.sequence_no=?) ORDER BY s.sequence_no,c.course_code`).all(studentId,selectedSemester,selectedSemester);
  const assignments=db.prepare(`SELECT a.id,a.title,a.description,a.due_at,a.max_score,c.course_code,c.course_name,
    sub.status submission_status,sub.score,sub.submitted_at,sub.feedback
    FROM assignments a LEFT JOIN courses c ON c.id=a.course_id LEFT JOIN semesters sem ON sem.id=a.semester_id
    LEFT JOIN submissions sub ON sub.assignment_id=a.id AND sub.student_id=?
    WHERE (? IS NULL OR sem.sequence_no=?) ORDER BY a.due_at`).all(studentId,selectedSemester,selectedSemester);
  const schedule=db.prepare(`SELECT ss.id,ss.title,ss.session_date,ss.start_time,ss.end_time,ss.room,ss.lecturer,
    c.course_code,c.course_name FROM class_schedule_sessions ss
    LEFT JOIN courses c ON c.id=ss.course_id WHERE ss.class_name=? AND (? IS NULL OR ss.semester_id=(SELECT id FROM semesters WHERE sequence_no=?))
    ORDER BY ss.session_date,ss.start_time`).all(req.student.class_name,selectedSemester,selectedSemester);
  const graded=courses.filter(x=>x.score!==null && x.score!==undefined);
  const average=graded.length ? Math.round(graded.reduce((n,x)=>n+Number(x.score),0)/graded.length*100)/100 : null;
  // Các trạng thái graded/completed cũng là bài đã hoàn thành, không chỉ submitted.
  const isAssignmentCompleted = item => ['submitted','graded','completed'].includes(String(item.submission_status || '').toLowerCase());
  const completedAssignments = assignments.filter(isAssignmentCompleted).length;
  const pending = assignments.length - completedAssignments;
  // Tiến độ học tập được tính theo tỷ lệ bài tập đã hoàn thành trong học kỳ.
  const progress = assignments.length
    ? Math.round(completedAssignments / assignments.length * 100)
    : 0;
  const distribution={excellent:0,good:0,average:0,weak:0};
  graded.forEach(x=>{const v=Number(x.score); if(v>=8.5)distribution.excellent++;else if(v>=7)distribution.good++;else if(v>=5)distribution.average++;else distribution.weak++;});
  res.json({student:safeStudent(req.student),summary:{courseCount:courses.length,assignmentPending:pending,averageScore:average,progress,completedAssignments,totalAssignments:assignments.length},courses,assignments,schedule,grades:graded.map(x=>({course:x.course_name,code:x.course_code,score:Number(x.score),semester:x.sequence_no})),distribution,gradeDataSource:'enrollments.score'});
});
app.get('/api/semesters',(req,res)=>res.json({semesters:db.prepare('SELECT id,sequence_no,term_no,school_year,label,semester_type,status,source_from_excel FROM semesters ORDER BY sequence_no').all()}));
app.get('/api/curriculum',(req,res)=>{
  const rows=db.prepare(`SELECT s.id AS semester_id,s.sequence_no,s.term_no,s.school_year,s.label,s.semester_type,s.status,s.source_from_excel,c.id AS course_id,c.course_code,c.course_name,c.lecturer,c.credits,c.tuition_credits,c.department,c.is_core,c.is_required,c.total_periods,c.theory_periods,c.practice_periods
  FROM semesters s LEFT JOIN semester_courses sc ON sc.semester_id=s.id LEFT JOIN courses c ON c.id=sc.course_id ORDER BY s.sequence_no,sc.display_order`).all();
  const map=new Map(); for(const r of rows){if(!map.has(r.semester_id)) map.set(r.semester_id,{id:r.semester_id,sequence_no:r.sequence_no,term_no:r.term_no,school_year:r.school_year,label:r.label,semester_type:r.semester_type,status:r.status,source_from_excel:Boolean(r.source_from_excel),courses:[]}); if(r.course_id) map.get(r.semester_id).courses.push({id:r.course_id,course_code:r.course_code,course_name:r.course_name,lecturer:r.lecturer||'',credits:r.credits,tuition_credits:r.tuition_credits,department:r.department,is_core:r.is_core,is_required:r.is_required,total_periods:r.total_periods,theory_periods:r.theory_periods,practice_periods:r.practice_periods});}
  res.json({curriculum:[...map.values()],source:'ChuongTrinhDaoTao.xlsx; tên giảng viên không có trong nguồn nên trường lecturer để trống, không tự gán tên.'});
});
app.get('/api/admin/students',auth,(req,res)=>res.json({students:db.prepare('SELECT id,student_number,full_name,email,class_name,major,year_of_study,status FROM students ORDER BY student_number').all()}));
app.use((req,res)=>res.status(404).json({message:'Không tìm thấy API.',path:req.path}));
app.use((err,req,res,next)=>{console.error(err);res.status(500).json({message:'Lỗi máy chủ. Vui lòng kiểm tra terminal backend.'});});
app.listen(PORT, '0.0.0.0', () => {
  console.log(`StudyHub API đang chạy tại cổng ${PORT}`);
});
