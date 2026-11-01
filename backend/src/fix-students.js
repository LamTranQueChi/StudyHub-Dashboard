const db = require("./db");
const students = [
  { id: 11, oldNumber: "110124012", number: "110124012", name: "Lâm Trần Quế Chi", dob: "2006-09-15" },
  { id: 12, oldNumber: "110124139", number: "110124139", name: "Huỳnh Ngọc Như", dob: "2006-04-30" },
  { id: 3, oldNumber: "110124003", number: "110124032", name: "Lê Thúy Diễm", dob: "2006-01-15" },
  { id: 4, oldNumber: "110124004", number: "110124020", name: "Vũ Thị Nhựt Đang", dob: "2006-09-26" },
  { id: 5, oldNumber: "110124005", number: "110124003", name: "Nguyễn Thị Trúc Lam", dob: "2006-04-25" },
  { id: 6, oldNumber: "110124006", number: "110124022", name: "Dương Hữu Minh", dob: "2006-07-20" },
  { id: 7, oldNumber: "110124007", number: "110124006", name: "Ngô Hoài Linh", dob: "2006-02-14" },
  { id: 8, oldNumber: "110124008", number: "110124048", name: "Nguyễn Minh Duy", dob: "2006-01-14" },
  { id: 9, oldNumber: "110124009", number: "110124033", name: "Trần Quốc Đỉnh", dob: "2006-02-14" },
  { id: 10, oldNumber: "110124010", number: "110124070", name: "Võ Bá Thành", dob: "2006-06-30" }
];

const apply = process.argv.includes("--apply");

try {
  const current = db.prepare(
    "SELECT id, student_number, full_name FROM students ORDER BY id"
  ).all();

  if (current.length !== 12) {
    throw new Error(`Database hiện có ${current.length} sinh viên, không phải 12. Đã dừng.`);
  }

  for (const s of students) {
    const row = current.find(r => r.id === s.id);
    if (!row || row.student_number !== s.oldNumber) {
      throw new Error(
        `ID ${s.id} không khớp dữ liệu dự kiến. Đã dừng để tránh cập nhật nhầm.`
      );
    }
  }

  console.table(students.map(s => ({
    ID: s.id,
    MSSV_mới: s.number,
    Họ_tên_mới: s.name,
    Ngày_sinh: s.dob
  })));

  if (!apply) {
    console.log("\nChế độ kiểm tra: chưa có dữ liệu nào bị thay đổi.");
    console.log("Nếu danh sách chính xác, chạy: node .\\src\\fix-students.js --apply");
  } else {
    const update = db.transaction(() => {
      // Tạm đổi MSSV và email để tránh trùng khóa UNIQUE khi đổi MSSV.
      const temporary = db.prepare(`
        UPDATE students
        SET student_number = ?, email = ?
        WHERE id = ?
      `);

      for (const s of students) {
        temporary.run(
          `TEMP-${s.id}-${s.oldNumber}`,
          `temp-${s.id}@studyhub.invalid`,
          s.id
        );
      }

      // Xóa hai tài khoản thừa trong cùng transaction.
      // Nếu ràng buộc khóa ngoại không cho phép, toàn bộ transaction sẽ rollback.
      const deleteExtra = db.prepare(
        "DELETE FROM students WHERE id IN (1, 2)"
      );
      deleteExtra.run();

      const updateStudent = db.prepare(`
        UPDATE students
        SET student_number = ?,
            full_name = ?,
            email = ?,
            class_name = ?,
            major = ?,
            year_of_study = ?,
            date_of_birth = ?
        WHERE id = ?
      `);

      for (const s of students) {
        updateStudent.run(
          s.number,
          s.name,
          `${s.number}@student.tvu.edu.vn`,
          "DA24TTA",
          "Công nghệ thông tin",
          3,
          s.dob,
          s.id
        );
      }

      const count = db.prepare(
        "SELECT COUNT(*) AS total FROM students"
      ).get().total;

      if (count !== 10) {
        throw new Error(`Sau cập nhật có ${count} sinh viên, dự kiến là 10.`);
      }
    });

    update();

    console.log("\nCập nhật thành công. Danh sách sinh viên sau cập nhật:");
    console.table(db.prepare(`
      SELECT id, student_number, full_name, date_of_birth
      FROM students ORDER BY id
    `).all());
  }
} catch (error) {
  console.error("\nĐã dừng:", error.message);
  process.exitCode = 1;
} finally {
  db.close();
}
