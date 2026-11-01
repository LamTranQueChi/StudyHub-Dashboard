
const Database = require("better-sqlite3");

const db = new Database("./data/studyhub.sqlite", {
    readonly: true
});

const tables = [
    "students",
    "semesters",
    "courses",
    "enrollments",
    "assignments",
    "schedule_sessions"
];

for (const table of tables) {
    console.log(`\n--- ${table} ---`);

    const columns = db
        .prepare(`PRAGMA table_info("${table}")`)
        .all();

    console.log(
        "Các cột:",
        columns.map(column => column.name).join(", ")
    );

    const result = db
        .prepare(`SELECT COUNT(*) AS total FROM "${table}"`)
        .get();

    console.log("Số bản ghi:", result.total);
}

db.close();
