const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const dataDir = path.join(__dirname, '..', 'data');
fs.mkdirSync(dataDir, { recursive: true });
const databasePath = process.env.DATABASE_PATH || path.join(dataDir, 'studyhub.sqlite');
fs.mkdirSync(path.dirname(databasePath), { recursive: true });
const sqlSeedPath = path.join(dataDir, 'studyhub.sql');

function isDatabaseHealthy(file) {
  if (!fs.existsSync(file) || fs.statSync(file).size === 0) return false;
  let probe;
  try {
    probe = new Database(file, { readonly: true, fileMustExist: true });
    return probe.pragma('integrity_check').every(row => row.integrity_check === 'ok');
  } catch (_) {
    return false;
  } finally {
    if (probe) probe.close();
  }
}

// Keep a damaged database and its SQLite sidecars as backups; never overwrite them.
if (fs.existsSync(databasePath) && !isDatabaseHealthy(databasePath)) {
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  for (const suffix of ['', '-wal', '-shm', '-journal']) {
    const source = databasePath + suffix;
    if (fs.existsSync(source)) {
      const backup = databasePath + `.corrupt-${stamp}` + suffix;
      fs.renameSync(source, backup);
    }
  }
  console.error('Database SQLite bị lỗi. Đã giữ bản hỏng dưới tên .corrupt-* và tạo lại từ studyhub.sql.');
}

const isNewDatabase = !fs.existsSync(databasePath) || fs.statSync(databasePath).size === 0;
const db = new Database(databasePath);
if (isNewDatabase && fs.existsSync(sqlSeedPath)) {
  db.exec(fs.readFileSync(sqlSeedPath, 'utf8'));
}
db.pragma('foreign_keys = ON');
db.pragma('journal_mode = WAL');

db.exec(`
CREATE TABLE IF NOT EXISTS students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_number TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  class_name TEXT NOT NULL,
  major TEXT NOT NULL,
  year_of_study INTEGER NOT NULL CHECK(year_of_study BETWEEN 1 AND 5),
  password_hash TEXT NOT NULL,
  phone TEXT DEFAULT '',
  date_of_birth TEXT DEFAULT '',
  gender TEXT DEFAULT '',
  address TEXT DEFAULT '',
  avatar_url TEXT DEFAULT '',
  status TEXT NOT NULL DEFAULT 'studying',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS semesters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sequence_no INTEGER NOT NULL UNIQUE,
  term_no INTEGER NOT NULL,
  school_year TEXT NOT NULL,
  label TEXT NOT NULL,
  semester_type TEXT NOT NULL DEFAULT 'regular',
  status TEXT NOT NULL DEFAULT 'planned',
  start_date TEXT,
  end_date TEXT,
  source_from_excel INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  course_code TEXT NOT NULL,
  course_name TEXT NOT NULL,
  lecturer TEXT NOT NULL DEFAULT '',
  credits REAL NOT NULL DEFAULT 0,
  tuition_credits REAL NOT NULL DEFAULT 0,
  department TEXT DEFAULT '',
  is_core TEXT DEFAULT '',
  is_required TEXT DEFAULT '',
  total_periods REAL,
  theory_periods REAL,
  practice_periods REAL,
  source_data_json TEXT DEFAULT '{}',
  UNIQUE(course_code, course_name)
);
CREATE TABLE IF NOT EXISTS semester_courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  semester_id INTEGER NOT NULL REFERENCES semesters(id) ON DELETE CASCADE,
  course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  display_order INTEGER NOT NULL DEFAULT 0,
  UNIQUE(semester_id, course_id)
);
CREATE TABLE IF NOT EXISTS enrollments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  semester_id INTEGER NOT NULL REFERENCES semesters(id),
  status TEXT NOT NULL DEFAULT 'enrolled',
  score REAL,
  letter_grade TEXT,
  progress INTEGER NOT NULL DEFAULT 0 CHECK(progress BETWEEN 0 AND 100),
  is_retake INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(student_id, course_id, semester_id)
);
CREATE TABLE IF NOT EXISTS assignments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  course_id INTEGER REFERENCES courses(id) ON DELETE SET NULL,
  semester_id INTEGER REFERENCES semesters(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  due_at TEXT,
  max_score REAL NOT NULL DEFAULT 10,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  assignment_id INTEGER NOT NULL REFERENCES assignments(id) ON DELETE CASCADE,
  student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  submitted_at TEXT,
  file_url TEXT DEFAULT '',
  score REAL,
  feedback TEXT DEFAULT '',
  status TEXT NOT NULL DEFAULT 'not_submitted',
  UNIQUE(assignment_id, student_id)
);
CREATE TABLE IF NOT EXISTS schedule_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  course_id INTEGER REFERENCES courses(id) ON DELETE SET NULL,
  semester_id INTEGER REFERENCES semesters(id) ON DELETE SET NULL,
  student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  session_date TEXT NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  room TEXT DEFAULT '',
  lecturer TEXT DEFAULT '',
  meeting_url TEXT DEFAULT ''
);
CREATE TABLE IF NOT EXISTS attendance (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id INTEGER NOT NULL REFERENCES schedule_sessions(id) ON DELETE CASCADE,
  student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'not_marked',
  note TEXT DEFAULT '',
  UNIQUE(session_id, student_id)
);
CREATE TABLE IF NOT EXISTS certificates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  issuer TEXT DEFAULT '',
  issued_at TEXT,
  certificate_code TEXT DEFAULT '',
  file_url TEXT DEFAULT ''
);
CREATE TABLE IF NOT EXISTS student_settings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL UNIQUE REFERENCES students(id) ON DELETE CASCADE,
  language TEXT NOT NULL DEFAULT 'vi',
  theme TEXT NOT NULL DEFAULT 'light',
  email_notifications INTEGER NOT NULL DEFAULT 1,
  assignment_reminders INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Migrate databases created by an earlier StudyHub backend version.

CREATE INDEX IF NOT EXISTS idx_semester_courses_semester ON semester_courses(semester_id);
CREATE INDEX IF NOT EXISTS idx_assignments_due ON assignments(due_at);
CREATE INDEX IF NOT EXISTS idx_schedule_student_date ON schedule_sessions(student_id, session_date);
`);
// Safe schema migration for existing local databases.
const courseColumns = db.prepare('PRAGMA table_info(courses)').all().map(c => c.name);
if (!courseColumns.includes('lecturer')) db.exec("ALTER TABLE courses ADD COLUMN lecturer TEXT NOT NULL DEFAULT ''");
db.exec(`CREATE INDEX IF NOT EXISTS idx_enrollments_student ON enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_semester_courses_semester ON semester_courses(semester_id);
CREATE INDEX IF NOT EXISTS idx_assignments_due ON assignments(due_at);
CREATE INDEX IF NOT EXISTS idx_schedule_student_date ON schedule_sessions(student_id, session_date);`);

db.exec(`
CREATE TABLE IF NOT EXISTS class_schedule_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  class_name TEXT NOT NULL DEFAULT 'DA24TTA',
  course_id INTEGER REFERENCES courses(id) ON DELETE SET NULL,
  semester_id INTEGER REFERENCES semesters(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  session_date TEXT NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  room TEXT DEFAULT '',
  lecturer TEXT DEFAULT ''
);
CREATE INDEX IF NOT EXISTS idx_class_schedule_class_date
ON class_schedule_sessions(class_name, session_date, start_time);
`);

module.exports = db;
