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
const courseData = [
  // Học kỳ 1
  {
    semester: 1,
    code: "MH0001",
    name: "Anh văn không chuyên 1",
    instructor: "Nguyễn Thị Huỳnh Như",
    room: "A21.103",
    credits: 3
  },
  {
    semester: 1,
    code: "MH0003",
    name: "Pháp luật đại cương",
    instructor: "Lương Hoàng Sang",
    room: "B71.207",
    credits: 2
  },
  {
    semester: 1,
    code: "MH0004",
    name: "Nhập môn công nghệ thông tin",
    instructor: "Nguyễn Khắc Quốc",
    room: "B31.105",
    credits: 2
  },
  {
    semester: 1,
    code: "MH0005",
    name: "Vi tích phân A1",
    instructor: "Phạm Minh Triển",
    room: "B31.307",
    credits: 3
  },
  {
    semester: 1,
    code: "MH0006",
    name: "Đại số tuyến tính",
    instructor: "Trần Quang Hà",
    room: "B31.205",
    credits: 2
  },

  // Học kỳ 2
  {
    semester: 2,
    code: "MH0007",
    name: "Anh văn không chuyên 2",
    instructor: "Nguyễn Thị Huỳnh Nhu",
    room: "B21.103",
    credits: 4
  },
  {
    semester: 2,
    code: "MH0008",
    name: "Triết học Mác – Lênin",
    instructor: "Trang Hiếu Hùng",
    room: "B91.401",
    credits: 3
  },
  {
    semester: 2,
    code: "MH0009",
    name: "Phương pháp nghiên cứu khoa học",
    instructor: "Nguyễn Thái Sơn",
    room: "B21.105",
    credits: 2
  },
  {
    semester: 2,
    code: "MH0010",
    name: "Tiếng Việt thực hành",
    instructor: "Nguyễn Thị Kiều Tiên",
    room: "B31.302",
    credits: 2
  },
  {
    semester: 2,
    code: "MH0011",
    name: "Toán rời rạc",
    instructor: "Trầm Hoàng Nam",
    room: "A42.307",
    credits: 2
  },
  {
    semester: 2,
    code: "MH0012",
    name: "Đại số đại cương",
    instructor: "Dương Kim Ngọc",
    room: "B31.304",
    credits: 2
  },
  {
    semester: 2,
    code: "MH0013",
    name: "Cấu trúc dữ liệu và giải thuật",
    instructor: "Lê Minh Tự",
    room: "A42.313",
    credits: 4
  },

  // Học kỳ 3
  {
    semester: 3,
    code: "MH0014",
    name: "Kinh tế chính trị Mác - Lênin",
    instructor: "Lê Thúy Hằng",
    room: "B71.101",
    credits: 2
  },
  {
    semester: 3,
    code: "MH0015",
    name: "Anh văn không chuyên 3",
    instructor: "Nguyễn Thị Huỳnh Như",
    room: "A42.202",
    credits: 3
  },
  {
    semester: 3,
    code: "MH0016",
    name: "Cơ sở dữ liệu",
    instructor: "Nguyễn Thừa Phát Tài",
    room: "B31.205",
    credits: 3
  },
  {
    semester: 3,
    code: "MH0017",
    name: "Vi tích phân A2",
    instructor: "Cao Hữu Hòa",
    room: "A42.317",
    credits: 2
  },
  {
    semester: 3,
    code: "MH0018",
    name: "Lý thuyết đồ thị",
    instructor: "Trầm Hoàng Nam",
    room: "B71.601",
    credits: 4
  },
  {
    semester: 3,
    code: "MH0019",
    name: "Kiến trúc máy tính",
    instructor: "Khấu Văn Nhựt",
    room: "B71.203",
    credits: 3
  },
  {
    semester: 3,
    code: "MH0020",
    name: "Lập trình hướng đối tượng",
    instructor: "Ngô Thanh Huy",
    room: "A42.218",
    credits: 3
  },
  // Học kỳ 4
  {
    semester: 4,
    code: "MH0021",
    name: "Anh văn không chuyên 4",
    instructor: "Nguyễn Thị Bích Ngân",
    room: "D61.203",
    credits: 3
  },
  {
    semester: 4,
    code: "MH0022",
    name: "Chủ nghĩa xã hội khoa học",
    instructor: "Cao Dương Phương Lan",
    room: "E21.206",
    credits: 2
  },
  {
    semester: 4,
    code: "MH0023",
    name: "Hệ điều hành",
    instructor: "Huỳnh Văn Thanh",
    room: "B21.303",
    credits: 3
  },
  {
    semester: 4,
    code: "MH0024",
    name: "Thiết kế web",
    instructor: "Nguyễn Ngọc Đan Thanh",
    room: "A42.218",
    credits: 3
  },
  {
    semester: 4,
    code: "MH0025",
    name: "Mạng máy tính",
    instructor: "Tạ Thanh Hải",
    room: "A42.317",
    credits: 3
  },
  {
    semester: 4,
    code: "MH0026",
    name: "Quy hoạch tuyến tính",
    instructor: "Dương Kim Ngọc",
    room: "B31.201",
    credits: 2
  },
  {
    semester: 4,
    code: "MH0027",
    name: "Lý thuyết xếp hàng",
    instructor: "Nguyễn Mộng Hiền",
    room: "A42.317",
    credits: 2
  },
  
  // Học kỳ 5
  {
    semester: 5,
    code: "MH0028",
    name: "Tư tưởng Hồ Chí Minh",
    instructor: "Phan Hữu Tài",
    room: "E21.206",
    credits: 2
  },
  {
    semester: 5,
    code: "MH0029",
    name: "Thống kê và phân tích dữ liệu",
    instructor: "Phạm Thi Trúc Mai",
    room: "A42.218",
    credits: 3
  },
  {
    semester: 5,
    code: "MH0030",
    name: "Thực tập đồ án cơ sở ngành",
    instructor: "Đoàn Phước Miền",
    room: "Thư viện",
    credits: 3
  },
  {
    semester: 5,
    code: "MH0031",
    name: "Điện toán đám mây",
    instructor: "Nguyễn Hoàng Duy Thiện",
    room: "A42.307",
    credits: 3
  },
  {
    semester: 5,
    code: "MH0032",
    name: "Phân tích và thiết kế hệ thống thông tin",
    instructor: "Phạm Minh Đương",
    room: "A42.213",
    credits: 3
  },
  {
    semester: 5,
    code: "MH0033",
    name: "Lập trình ứng dụng trên Windows",
    instructor: "Nguyễn Trần Diễm Hạnh",
    room: "B21.207",
    credits: 3
  },
  {
    semester: 5,
    code: "MH0034",
    name: "Chuyên đề Linux",
    instructor: "Nguyễn Hoàng Duy Thiện",
    room: "A42.307",
    credits: 3
  },
];

// WARNING: File này tạo lại TOÀN BỘ dữ liệu demo trong database.
// Chỉ chạy sau khi đã sao lưu backend/data/studyhub.sqlite.
// Cần đặt RESET_STUDYHUB_DB=YES để xác nhận trước khi xóa dữ liệu.
if (process.env.RESET_STUDYHUB_DB !== "YES") {
  console.error("Đã dừng để bảo vệ dữ liệu hiện có.");
  console.error("Sao lưu database trước, sau đó đặt RESET_STUDYHUB_DB=YES nếu thật sự muốn tạo lại dữ liệu demo.");
  process.exit(1);
}

const timeSlots = [
  { start: "07:00", end: "10:30", period: "Sáng" },
  { start: "13:00", end: "16:30", period: "Chiều" }
];
const weekdays = [1, 2, 3, 4, 5]; // Thứ 2 đến thứ 6
const semesterDates = {
  1: ["2024-09-09", "2024-12-22"],
  2: ["2025-01-06", "2025-04-27"],
  3: ["2025-09-08", "2025-12-21"],
  4: ["2026-01-05", "2026-04-26"],
  5: ["2026-09-07", "2027-04-25"]
};
const semesterMondays = {
  1: new Date(2024, 9, 7),
  2: new Date(2025, 1, 10),
  3: new Date(2025, 9, 6),
  4: new Date(2026, 1, 9),
  5: new Date(2026, 9, 26)
};
const schoolYearFor = term => term <= 2 ? "2024-2025" : term <= 4 ? "2025-2026" : term <= 6 ? "2026-2027" : "2027-2028";

const seed = db.transaction(() => {
  // Xóa theo thứ tự phụ thuộc khóa ngoại.
  db.exec(`
    DELETE FROM attendance;
    DELETE FROM schedule_sessions;
    DELETE FROM submissions;
    DELETE FROM assignments;
    DELETE FROM enrollments;
    DELETE FROM semester_courses;
    DELETE FROM certificates;
    DELETE FROM student_settings;
    DELETE FROM courses;
    DELETE FROM semesters;
    DELETE FROM students;
  `);

  const insertStudent = db.prepare(`
    INSERT INTO students
      (student_number, full_name, email, class_name, major, year_of_study,
       password_hash, phone, date_of_birth, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'studying')
  `);
  const insertSettings = db.prepare(
    "INSERT INTO student_settings (student_id) VALUES (?)"
  );

  const studentIds = students.map((s, i) => {
    const studentNumber = s[2];
    const dobPassword = String(s[1]).split('-').reverse().join(''); // ddmmyyyy
    const passwordHash = bcrypt.hashSync(dobPassword, 12);
    const result = insertStudent.run(
      studentNumber,
      s[0],
      `${studentNumber}@st.tvu.edu.vn`,
      s[3],
      s[4],
      s[5],
      passwordHash,
      `09${String(12345670 + i)}`,
      s[1]
    );
    const id = Number(result.lastInsertRowid);
    insertSettings.run(id);
    return id;
  });

  const insertSemester = db.prepare(`
    INSERT INTO semesters
      (sequence_no, term_no, school_year, label, semester_type, status, start_date, end_date)
    VALUES (?, ?, ?, ?, 'regular', ?, ?, ?)
  `);
  const semesterIds = new Map();
  const semesterNumbers = Array.from({ length: 8 }, (_, index) => index + 1);
  for (const termNo of semesterNumbers) {
    const dates = semesterDates[termNo] || [null, null];
    const semesterStatus = termNo <= 4 ? "completed" : termNo === 5 ? "in_progress" : "locked";
    const result = insertSemester.run(
      termNo, termNo, schoolYearFor(termNo), `Học kỳ ${termNo}`, semesterStatus, dates[0], dates[1]
    );
    semesterIds.set(termNo, Number(result.lastInsertRowid));
  }

  const insertCourse = db.prepare(`
    INSERT INTO courses (course_code, course_name, lecturer, credits, source_data_json)
    VALUES (?, ?, ?, ?, ?)
  `);
  const insertSemesterCourse = db.prepare(`
    INSERT INTO semester_courses (semester_id, course_id, display_order)
    VALUES (?, ?, ?)
  `);
  const insertEnrollment = db.prepare(`
    INSERT INTO enrollments
      (student_id, course_id, semester_id, status, score, letter_grade, progress)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  const insertAssignment = db.prepare(`
    INSERT INTO assignments (course_id, semester_id, title, description, due_at, max_score)
    VALUES (?, ?, ?, ?, ?, 10)
  `);
  const insertSubmission = db.prepare(`
    INSERT INTO submissions (assignment_id, student_id, submitted_at, score, feedback, status)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  const insertSession = db.prepare(`
    INSERT INTO schedule_sessions
      (course_id, semester_id, student_id, title, session_date, start_time, end_time, room, lecturer)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const insertAttendance = db.prepare(`
    INSERT INTO attendance (session_id, student_id, status, note)
    VALUES (?, ?, ?, ?)
  `);
  const insertClassSession = db.prepare(`
    INSERT INTO class_schedule_sessions
      (class_name, course_id, semester_id, title, session_date, start_time, end_time, room, lecturer)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const insertCertificate = db.prepare(`
    INSERT INTO certificates (student_id, title, issuer, issued_at, certificate_code)
    VALUES (?, ?, ?, ?, ?)
  `);

  // Mỗi học kỳ dùng cùng quy tắc xếp lịch lớp: 5 môn đầu học buổi sáng,
  // các môn tiếp theo chuyển sang buổi chiều; tất cả sinh viên cùng lớp dùng chung TKB.
  const semesterCourseCounters = new Map();
  const scheduledCourses = courseData.map(course => {
    const term = Number(course.semester);
    const localIndex = semesterCourseCounters.get(term) || 0;
    semesterCourseCounters.set(term, localIndex + 1);
    const weekdayIndex = localIndex % weekdays.length;
    const timeIndex = Math.floor(localIndex / weekdays.length);
    const slot = timeSlots[Math.min(timeIndex, timeSlots.length - 1)];
    return {
      ...course,
      lecturer: String(course.instructor || "Chưa phân công").trim() || "Chưa phân công",
      room: String(course.room || "").trim(),
      weekdayIndex,
      timeIndex,
      slot
    };
  });

  const courseRecords = [];
  scheduledCourses.forEach((course, index) => {
    const semesterId = semesterIds.get(Number(course.semester));
    const courseResult = insertCourse.run(
      course.code,
      course.name,
      course.lecturer,
      Number(course.credits) || 0,
      JSON.stringify({ room: course.room, semester: course.semester })
    );
    const courseId = Number(courseResult.lastInsertRowid);
    insertSemesterCourse.run(semesterId, courseId, index + 1);
    courseRecords.push({ ...course, courseId, semesterId });
  });

  // Đăng ký môn và tạo bài tập cho từng môn trong đúng học kỳ.
  const assignmentRecords = [];
  for (const course of courseRecords) {
    for (let i = 0; i < studentIds.length; i++) {
      const isPastSemester = Number(course.semester) < 5;
      const progress = isPastSemester ? 100 : 65 + ((i * 7 + course.courseId * 3) % 30);
      const score = isPastSemester
        ? Number((6 + ((i * 3 + course.courseId * 2) % 40) / 10).toFixed(1))
        : null;
      insertEnrollment.run(
        studentIds[i], course.courseId, course.semesterId,
        isPastSemester ? "completed" : "enrolled", score,
        score === null ? null : score >= 9 ? "A+" : score >= 8 ? "A" : score >= 7 ? "B" : score >= 5 ? "C" : "F",
        progress
      );
    }

    const term = Number(course.semester);
    const dueDate = term < 5
      ? new Date(semesterDates[term][1] + "T00:00:00")
      : new Date(2026, 10, 5 + (assignmentRecords.length % 7));
    const result = insertAssignment.run(
      course.courseId,
      course.semesterId,
      `Bài thực hành tổng hợp - ${course.name}`,
      `Bài tập demo của học phần ${course.name} (${course.code}).`,
      `${dueDate.getFullYear()}-${String(dueDate.getMonth()+1).padStart(2,"0")}-${String(dueDate.getDate()).padStart(2,"0")}T23:59:00`
    );
    assignmentRecords.push({ id: Number(result.lastInsertRowid), course });
  }

  for (const assignment of assignmentRecords) {
    studentIds.forEach((studentId, i) => {
      const term = Number(assignment.course.semester);
      const courseIndex = courseRecords.filter(c => Number(c.semester) === term).findIndex(c => c.courseId === assignment.course.courseId);
      const submitted = term < 5 || (i === 0 ? courseIndex < 5 : ((i + courseIndex) % 3 !== 0));
      const submittedAt = term < 5 ? `${semesterDates[term][1]}T10:00:00` : "2026-10-20T10:00:00";
      insertSubmission.run(
        assignment.id,
        studentId,
        submitted ? submittedAt : null,
        submitted ? Number((7 + ((i + assignment.id) % 30) / 10).toFixed(1)) : null,
        submitted ? "Đã ghi nhận kết quả demo." : "Chưa nộp bài.",
        submitted ? "graded" : "not_submitted"
      );
    });
  }

  // Lịch lớp dùng chung cho tất cả sinh viên DA24TTA, 4 tuần mỗi học kỳ.
  for (const course of courseRecords) {
    const term = Number(course.semester);
    const firstMonday = semesterMondays[term] || semesterMondays[5];
    for (let week = 0; week < 4; week++) {
      const date = new Date(firstMonday);
      date.setDate(firstMonday.getDate() + week * 7 + course.weekdayIndex);
      const sessionDate = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
      insertClassSession.run(
        "DA24TTA", course.courseId, course.semesterId, course.name, sessionDate,
        course.slot.start, course.slot.end, course.room, course.lecturer
      );
    }
  }

  // Lịch cá nhân phụ trợ cho chức năng điểm danh.
  const firstMonday = new Date(2026, 9, 26);
  for (let i = 0; i < studentIds.length; i++) {
    const studentId = studentIds[i];
    for (const course of courseRecords) {
      for (let week = 0; week < 4; week++) {
        const date = new Date(semesterMondays[Number(course.semester)] || firstMonday);
        date.setDate(date.getDate() + week * 7 + course.weekdayIndex);
        const sessionDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
        const sessionResult = insertSession.run(
          course.courseId,
          course.semesterId,
          studentId,
          course.name,
          sessionDate,
          course.slot.start,
          course.slot.end,
          course.room,
          course.lecturer
        );
        insertAttendance.run(Number(sessionResult.lastInsertRowid), studentId, "not_marked", "");
      }
    }

    if (i % 2 === 0) {
      insertCertificate.run(
        studentId,
        "Hoàn thành nền tảng kỹ năng số",
        "StudyHub Academy",
        "2026-09-10",
        `SH-2026-${String(i + 1).padStart(4, "0")}`
      );
    }
  }
});

seed();
console.log("Đã tạo dữ liệu demo cho 10 sinh viên.");
console.log("Mã đăng nhập: mã số sinh viên hoặc email <MSSV>@st.tvu.edu.vn");
console.log("Mật khẩu: ngày/tháng/năm sinh theo định dạng ddmmyyyy của từng sinh viên.");
console.log("Giờ học sáng: 07:00–10:30; chiều: 13:00–16:30.");
console.log("Lưu ý: lịch giảng viên/phòng được phân bổ tự động cho dữ liệu demo, cần rà soát trước khi dùng như lịch chính thức.");
