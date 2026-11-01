require("dotenv").config();
const bcrypt = require("bcryptjs");
const db = require("./db");

const students = [
  ["Lâm Trần Quế Chi", "2006-09-15", "110124012", "DA24TTA", "Công nghệ thông tin", 3],
  ["Huỳnh Ngọc Như", "2006-04-30", "110124139", "DA24TTA", "Công nghệ thông tin", 3],
  ["Lê Thúy Diễm", "2006-01-15", "110124032", "DA24TTA", "Công nghệ thông tin", 3],
  ["Vũ Thị Nhựt Đang", "2006-09-26", "110124020", "DA24TTA", "Công nghệ thông tin", 3],
  ["Nguyễn Thị Trúc Lam", "2006-04-25", "110124003", "DA24TTA", "Công nghệ thông tin", 3],
  ["Dương Hữu Minh", "2006-07-20", "110124022", "DA24TTA", "Công nghệ thông tin", 3],
  ["Ngô Hoài Linh", "2006-02-14", "110124006", "DA24TTA", "Công nghệ thông tin", 3],
  ["Nguyễn Minh Duy", "2006-01-14", "110124048", "DA24TTA", "Công nghệ thông tin", 3],
  ["Trần Quốc Đỉnh", "2006-02-14", "110124033", "DA24TTA", "Công nghệ thông tin", 3],
  ["Võ Bá Thành", "2006-06-30", "110124070", "DA24TTA", "Công nghệ thông tin", 3]
];

// Tên/mã môn và giảng viên dưới đây là dữ liệu demo để bạn có thể tự sửa.
// Mỗi học kỳ có nhiều môn; chương trình tạo đủ 8 học kỳ.
const courseData = [
  { semester: 1, code: "IT101", name: "Tin học đại cương", instructor: "Giảng viên 1", room: "A101", credits: 3 },
  { semester: 1, code: "MA101", name: "Toán cao cấp", instructor: "Giảng viên 2", room: "A102", credits: 3 },
  { semester: 1, code: "EN101", name: "Anh văn 1", instructor: "Giảng viên 3", room: "B101", credits: 2 },
  { semester: 1, code: "IT102", name: "Nhập môn Công nghệ thông tin", instructor: "Giảng viên 4", room: "A103", credits: 3 },

  { semester: 2, code: "PR101", name: "Lập trình căn bản", instructor: "Giảng viên 5", room: "Lab 1", credits: 3 },
  { semester: 2, code: "MA102", name: "Toán rời rạc", instructor: "Giảng viên 6", room: "A201", credits: 3 },
  { semester: 2, code: "EN102", name: "Anh văn 2", instructor: "Giảng viên 7", room: "B102", credits: 2 },
  { semester: 2, code: "GE101", name: "Pháp luật đại cương", instructor: "Giảng viên 8", room: "C101", credits: 2 },

  { semester: 3, code: "DS201", name: "Cấu trúc dữ liệu và giải thuật", instructor: "Giảng viên 9", room: "Lab 2", credits: 4 },
  { semester: 3, code: "DB201", name: "Cơ sở dữ liệu", instructor: "Giảng viên 10", room: "A202", credits: 3 },
  { semester: 3, code: "WEB201", name: "Lập trình Web", instructor: "Giảng viên 11", room: "Lab 3", credits: 3 },
  { semester: 3, code: "NET201", name: "Mạng máy tính", instructor: "Giảng viên 12", room: "C201", credits: 3 },

  { semester: 4, code: "OOP202", name: "Lập trình hướng đối tượng Java", instructor: "Giảng viên 13", room: "Lab 1", credits: 4 },
  { semester: 4, code: "OS202", name: "Hệ điều hành", instructor: "Giảng viên 14", room: "C202", credits: 3 },
  { semester: 4, code: "SE202", name: "Nhập môn Công nghệ phần mềm", instructor: "Giảng viên 15", room: "A301", credits: 3 },
  { semester: 4, code: "STAT202", name: "Xác suất thống kê", instructor: "Giảng viên 16", room: "A302", credits: 3 },

  { semester: 5, code: "JS301", name: "JavaScript DOM và ES6+", instructor: "Giảng viên 17", room: "Lab 2", credits: 3 },
  { semester: 5, code: "DB301", name: "Cơ sở dữ liệu nâng cao và SQL", instructor: "Giảng viên 18", room: "Lab 3", credits: 4 },
  { semester: 5, code: "UI301", name: "Thiết kế giao diện người dùng", instructor: "Giảng viên 19", room: "A401", credits: 3 },
  { semester: 5, code: "NW301", name: "Mạng máy tính nâng cao", instructor: "Giảng viên 20", room: "C301", credits: 3 },

  { semester: 6, code: "REACT302", name: "Phát triển ứng dụng với React", instructor: "Giảng viên 21", room: "Lab 1", credits: 3 },
  { semester: 6, code: "API302", name: "Phát triển API và dịch vụ Web", instructor: "Giảng viên 22", room: "Lab 2", credits: 3 },
  { semester: 6, code: "SEC302", name: "An toàn và bảo mật hệ thống", instructor: "Giảng viên 23", room: "C302", credits: 3 },
  { semester: 6, code: "PM302", name: "Quản lý dự án phần mềm", instructor: "Giảng viên 24", room: "A402", credits: 3 },

  { semester: 7, code: "AI401", name: "Nhập môn trí tuệ nhân tạo", instructor: "Giảng viên 25", room: "Lab 3", credits: 3 },
  { semester: 7, code: "CLOUD401", name: "Điện toán đám mây", instructor: "Giảng viên 26", room: "C401", credits: 3 },
  { semester: 7, code: "TEST401", name: "Kiểm thử phần mềm", instructor: "Giảng viên 27", room: "A501", credits: 3 },
  { semester: 7, code: "PROJECT401", name: "Đồ án chuyên ngành", instructor: "Giảng viên 28", room: "Lab 4", credits: 4 },

  { semester: 8, code: "INTERNSHIP402", name: "Thực tập tốt nghiệp", instructor: "Chưa phân công", room: "Doanh nghiệp", credits: 5 },
  { semester: 8, code: "THESIS402", name: "Đồ án tốt nghiệp", instructor: "Chưa phân công", room: "Theo phân công", credits: 8 }
];

const semesterData = [
  { number: 1, name: "Học kỳ I", year: "2024-2025", start: "2024-09-01", end: "2025-01-31" },
  { number: 2, name: "Học kỳ II", year: "2024-2025", start: "2025-02-01", end: "2025-06-30" },
  { number: 3, name: "Học kỳ III", year: "2025-2026", start: "2025-09-01", end: "2026-01-31" },
  { number: 4, name: "Học kỳ IV", year: "2025-2026", start: "2026-02-01", end: "2026-06-30" },
  { number: 5, name: "Học kỳ V", year: "2026-2027", start: "2026-09-01", end: "2027-01-31" },
  { number: 6, name: "Học kỳ VI", year: "2026-2027", start: "2027-02-01", end: "2027-06-30" },
  { number: 7, name: "Học kỳ VII", year: "2027-2028", start: "2027-09-01", end: "2028-01-31" },
  { number: 8, name: "Học kỳ VIII", year: "2027-2028", start: "2028-02-01", end: "2028-06-30" }
];

const seed = db.transaction(() => {
  // CẢNH BÁO: seed xóa dữ liệu hiện có trong các bảng bên dưới trước khi tạo demo.
  db.exec(`
    DELETE FROM attendance;
    DELETE FROM schedule_sessions;
    DELETE FROM submissions;
    DELETE FROM assignments;
    DELETE FROM enrollments;
    DELETE FROM certificates;
    DELETE FROM student_settings;
    DELETE FROM courses;
    DELETE FROM semesters;
    DELETE FROM students;
  `);

  const pass = bcrypt.hashSync("StudyHub@123", 12);
  const addStudent = db.prepare(`
    INSERT INTO students
    (id,email,password_hash,full_name,date_of_birth,student_number,class_name,major,year_level,phone,bio,personal_note)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
  `);
  const addSetting = db.prepare("INSERT INTO student_settings(student_id) VALUES (?)");

  students.forEach((s, i) => {
    const id = `SV${String(i + 1).padStart(3, "0")}`;
    const email = `${s[2]}@st.tvu.edu.vn`;
    addStudent.run(
      id, email, pass, s[0], s[1], s[2], s[3], s[4], s[5],
      `09${String(12345670 + i)}`,
      `Sinh viên ngành ${s[4]}, quan tâm đến phát triển phần mềm.`,
      "Tiếp tục hoàn thành các mục tiêu học tập."
    );
    addSetting.run(id);
  });

  const addSemester = db.prepare(
    "INSERT INTO semesters(semester_number,name,academic_year,start_date,end_date) VALUES(?,?,?,?,?)"
  );
  const semesterIds = semesterData.map(s =>
    addSemester.run(s.number, s.name, s.year, s.start, s.end).lastInsertRowid
  );

  const addCourse = db.prepare(
    "INSERT INTO courses(course_code,course_name,instructor,room,credits) VALUES(?,?,?,?,?)"
  );
  const courseIds = courseData.map(c =>
    addCourse.run(c.code, c.name, c.instructor, c.room, c.credits).lastInsertRowid
  );

  const addEnrollment = db.prepare(`
    INSERT INTO enrollments(student_id,course_id,semester_id,progress,grade,letter_grade,status)
    VALUES(?,?,?,?,?,?,?)
  `);
  const addAssignment = db.prepare(`
    INSERT INTO assignments(course_id,semester_id,title,description,due_at,max_score,resource_name)
    VALUES(?,?,?,?,?,?,?)
  `);
  const addSubmission = db.prepare(`
    INSERT INTO submissions(assignment_id,student_id,submitted_at,status,score,feedback)
    VALUES(?,?,?,?,?,?)
  `);
  const addSession = db.prepare(`
    INSERT INTO schedule_sessions(course_id,semester_id,session_date,start_time,end_time,lesson_number,room,session_type)
    VALUES(?,?,?,?,?,?,?,?)
  `);
  const addAttendance = db.prepare(
    "INSERT INTO attendance(session_id,student_id,status,checked_in_at) VALUES(?,?,?,?)"
  );
  const addCert = db.prepare(
    "INSERT INTO certificates(student_id,title,issuer,issued_date,credential_code) VALUES(?,?,?,?,?)"
  );

  const assignmentIdsByCourse = new Map();

  courseData.forEach((c, j) => {
    const courseId = courseIds[j];
    const semesterId = semesterIds[c.semester - 1];

    students.forEach((s, i) => {
      const studentId = `SV${String(i + 1).padStart(3, "0")}`;
      const progress = Math.min(100, 42 + ((i * 11 + j * 17) % 59));
      const grade = Number((7 + ((i * 3 + j * 7) % 30) / 10).toFixed(1));
      const status = progress === 100 ? "completed" : "studying";

      addEnrollment.run(
        studentId, courseId, semesterId, progress, grade,
        grade >= 9 ? "A+" : grade >= 8 ? "A" : grade >= 7 ? "B" : "C",
        status
      );
    });

    const ids = [];
    const titles = [
      `Bài thực hành: ${c.name}`,
      `Bài tập giữa kỳ: ${c.name}`,
      `Bài tập tổng hợp: ${c.name}`
    ];

    for (let k = 0; k < titles.length; k++) {
      const dueDate = semesterData[c.semester - 1].end;
      const id = addAssignment.run(
        courseId, semesterId, titles[k],
        `Bài tập demo của học phần ${c.name}. Tên môn/giảng viên có thể chỉnh trong seed.js.`,
        `${dueDate}T23:59:00`, 10, k === 1 ? "Tai-lieu-tham-khao.pdf" : ""
      ).lastInsertRowid;
      ids.push(id);

      students.forEach((s, i) => {
        const studentId = `SV${String(i + 1).padStart(3, "0")}`;
        const completed = (i + j + k) % 4 !== 0;
        addSubmission.run(
          id, studentId,
          completed ? `${dueDate}T10:00:00` : null,
          completed ? "graded" : "pending",
          completed ? Number((6 + ((i + j + k) % 40) / 10).toFixed(1)) : null,
          completed ? "Đã ghi nhận kết quả demo." : "Chưa nộp bài."
        );
      });
    }
    assignmentIdsByCourse.set(courseId, ids);

    // Tạo 4 buổi lịch demo trong khoảng thời gian học kỳ.
    const semesterInfo = semesterData[c.semester - 1];
    const sessionDates = [
      semesterInfo.start,
      semesterInfo.start.slice(0, 8) + "08",
      semesterInfo.start.slice(0, 8) + "15",
      semesterInfo.start.slice(0, 8) + "22"
    ];
    sessionDates.forEach((date, d) => {
      const sessionId = addSession.run(
        courseId, semesterId, date,
        d % 2 === 0 ? "07:00" : "09:30",
        d % 2 === 0 ? "09:00" : "11:45",
        `Tiết ${d * 3 + 1}-${d * 3 + 3}`, c.room,
        d % 2 === 0 ? "Thực hành" : "Lý thuyết"
      ).lastInsertRowid;

      students.forEach((s, i) => {
        const studentId = `SV${String(i + 1).padStart(3, "0")}`;
        const status = (i + j + d) % 17 === 0 ? "absent" : ((i + j + d) % 9 === 0 ? "late" : "present");
        addAttendance.run(
          sessionId, studentId, status,
          status === "absent" ? null : `${date}T07:00:00`
        );
      });
    });
  });

  students.forEach((s, i) => {
    if (i % 2 === 0) {
      const studentId = `SV${String(i + 1).padStart(3, "0")}`;
      addCert.run(
        studentId, "Hoàn thành nền tảng kỹ năng số", "StudyHub Academy",
        `2026-09-${String(10 + i).padStart(2, "0")}`,
        `SH-2026-${String(i + 1).padStart(4, "0")}`
      );
    }
  });
});

seed();
console.log("Đã tạo dữ liệu demo cho 10 sinh viên, 8 học kỳ và nhiều môn mỗi học kỳ.");
console.log("Email Quế Chi: 110124012@st.tvu.edu.vn");
console.log("Mật khẩu demo chung: StudyHub@123");
