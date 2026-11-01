
const Database = require("better-sqlite3");
const db = new Database("./data/studyhub.sqlite", {
    readonly: true
});

const students = db.prepare(`
    SELECT id, student_number, full_name, email, class_name
    FROM students
    ORDER BY student_number
`).all();

console.table(students);
db.close();
