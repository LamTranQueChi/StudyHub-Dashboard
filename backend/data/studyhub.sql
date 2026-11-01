BEGIN TRANSACTION;
CREATE TABLE assignments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  course_id INTEGER REFERENCES courses(id) ON DELETE SET NULL,
  semester_id INTEGER REFERENCES semesters(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  due_at TEXT,
  max_score REAL NOT NULL DEFAULT 10,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "assignments" VALUES(14,87,1,'Bài thực hành tổng hợp - Anh văn không chuyên 1','Bài tập minh họa của học phần Anh văn không chuyên 1 (MH0001).','2024-11-03T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(15,88,1,'Bài thực hành tổng hợp - Pháp luật đại cương','Bài tập minh họa của học phần Pháp luật đại cương (MH0003).','2024-11-03T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(16,89,1,'Bài thực hành tổng hợp - Nhập môn công nghệ thông tin','Bài tập minh họa của học phần Nhập môn công nghệ thông tin (MH0004).','2024-11-03T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(17,90,1,'Bài thực hành tổng hợp - Vi tích phân A1','Bài tập minh họa của học phần Vi tích phân A1 (MH0005).','2024-11-03T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(18,91,1,'Bài thực hành tổng hợp - Đại số tuyến tính','Bài tập minh họa của học phần Đại số tuyến tính (MH0006).','2024-11-03T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(19,92,2,'Bài thực hành tổng hợp - Anh văn không chuyên 2','Bài tập minh họa của học phần Anh văn không chuyên 2 (MH0007).','2025-03-09T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(20,93,2,'Bài thực hành tổng hợp - Triết học Mác – Lênin','Bài tập minh họa của học phần Triết học Mác – Lênin (MH0008).','2025-03-09T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(21,94,2,'Bài thực hành tổng hợp - Phương pháp nghiên cứu khoa học','Bài tập minh họa của học phần Phương pháp nghiên cứu khoa học (MH0009).','2025-03-09T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(22,95,2,'Bài thực hành tổng hợp - Tiếng Việt thực hành','Bài tập minh họa của học phần Tiếng Việt thực hành (MH0010).','2025-03-09T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(23,96,2,'Bài thực hành tổng hợp - Toán rời rạc','Bài tập minh họa của học phần Toán rời rạc (MH0011).','2025-03-09T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(24,97,2,'Bài thực hành tổng hợp - Đại số đại cương','Bài tập minh họa của học phần Đại số đại cương (MH0012).','2025-03-09T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(25,98,2,'Bài thực hành tổng hợp - Cấu trúc dữ liệu và giải thuật','Bài tập minh họa của học phần Cấu trúc dữ liệu và giải thuật (MH0013).','2025-03-09T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(26,99,3,'Bài thực hành tổng hợp - Kinh tế chính trị Mác - Lênin','Bài tập minh họa của học phần Kinh tế chính trị Mác - Lênin (MH0014).','2025-11-02T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(27,100,3,'Bài thực hành tổng hợp - Anh văn không chuyên 3','Bài tập minh họa của học phần Anh văn không chuyên 3 (MH0015).','2025-11-02T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(28,101,3,'Bài thực hành tổng hợp - Cơ sở dữ liệu','Bài tập minh họa của học phần Cơ sở dữ liệu (MH0016).','2025-11-02T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(29,102,3,'Bài thực hành tổng hợp - Vi tích phân A2','Bài tập minh họa của học phần Vi tích phân A2 (MH0017).','2025-11-02T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(30,103,3,'Bài thực hành tổng hợp - Lý thuyết đồ thị','Bài tập minh họa của học phần Lý thuyết đồ thị (MH0018).','2025-11-02T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(31,104,3,'Bài thực hành tổng hợp - Kiến trúc máy tính','Bài tập minh họa của học phần Kiến trúc máy tính (MH0019).','2025-11-02T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(32,105,3,'Bài thực hành tổng hợp - Lập trình hướng đối tượng','Bài tập minh họa của học phần Lập trình hướng đối tượng (MH0020).','2025-11-02T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(33,106,4,'Bài thực hành tổng hợp - Anh văn không chuyên 4','Bài tập minh họa của học phần Anh văn không chuyên 4 (MH0021).','2026-03-08T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(34,107,4,'Bài thực hành tổng hợp - Chủ nghĩa xã hội khoa học','Bài tập minh họa của học phần Chủ nghĩa xã hội khoa học (MH0022).','2026-03-08T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(35,108,4,'Bài thực hành tổng hợp - Hệ điều hành','Bài tập minh họa của học phần Hệ điều hành (MH0023).','2026-03-08T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(36,109,4,'Bài thực hành tổng hợp - Thiết kế web','Bài tập minh họa của học phần Thiết kế web (MH0024).','2026-03-08T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(37,110,4,'Bài thực hành tổng hợp - Mạng máy tính','Bài tập minh họa của học phần Mạng máy tính (MH0025).','2026-03-08T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(38,111,4,'Bài thực hành tổng hợp - Quy hoạch tuyến tính','Bài tập minh họa của học phần Quy hoạch tuyến tính (MH0026).','2026-03-08T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(39,112,4,'Bài thực hành tổng hợp - Lý thuyết xếp hàng','Bài tập minh họa của học phần Lý thuyết xếp hàng (MH0027).','2026-03-08T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(40,113,5,'Bài tập học kỳ - Tư tưởng Hồ Chí Minh','Bài tập minh họa của học phần Tư tưởng Hồ Chí Minh (MH0028).','2026-11-05T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(41,114,5,'Bài tập học kỳ - Thống kê và phân tích dữ liệu','Bài tập minh họa của học phần Thống kê và phân tích dữ liệu (MH0029).','2026-11-06T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(42,115,5,'Bài tập học kỳ - Thực tập đồ án cơ sở ngành','Bài tập minh họa của học phần Thực tập đồ án cơ sở ngành (MH0030).','2026-11-07T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(43,116,5,'Bài tập học kỳ - Điện toán đám mây','Bài tập minh họa của học phần Điện toán đám mây (MH0031).','2026-11-08T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(44,117,5,'Bài tập học kỳ - Phân tích và thiết kế hệ thống thông tin','Bài tập minh họa của học phần Phân tích và thiết kế hệ thống thông tin (MH0032).','2026-11-09T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(45,118,5,'Bài tập học kỳ - Lập trình ứng dụng trên Windows','Bài tập minh họa của học phần Lập trình ứng dụng trên Windows (MH0033).','2026-11-10T23:59:00',10.0,'2026-10-31 18:20:18');
INSERT INTO "assignments" VALUES(46,119,5,'Bài tập học kỳ - Chuyên đề Linux','Bài tập minh họa của học phần Chuyên đề Linux (MH0034).','2026-11-11T23:59:00',10.0,'2026-10-31 18:20:18');
CREATE TABLE attendance (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id INTEGER NOT NULL REFERENCES schedule_sessions(id) ON DELETE CASCADE,
  student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'not_marked',
  note TEXT DEFAULT '',
  UNIQUE(session_id, student_id)
);
CREATE TABLE certificates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  issuer TEXT DEFAULT '',
  issued_at TEXT,
  certificate_code TEXT DEFAULT '',
  file_url TEXT DEFAULT ''
);
INSERT INTO "certificates" VALUES(13,3,'Chứng nhận kỹ năng học tập','StudyHub','2027-06-15','SH-110124003','');
INSERT INTO "certificates" VALUES(14,4,'Chứng nhận kỹ năng học tập','StudyHub','2027-06-15','SH-110124004','');
INSERT INTO "certificates" VALUES(15,5,'Chứng nhận kỹ năng học tập','StudyHub','2027-06-15','SH-110124005','');
INSERT INTO "certificates" VALUES(16,6,'Chứng nhận kỹ năng học tập','StudyHub','2027-06-15','SH-110124006','');
INSERT INTO "certificates" VALUES(17,7,'Chứng nhận kỹ năng học tập','StudyHub','2027-06-15','SH-110124007','');
INSERT INTO "certificates" VALUES(18,8,'Chứng nhận kỹ năng học tập','StudyHub','2027-06-15','SH-110124008','');
INSERT INTO "certificates" VALUES(19,9,'Chứng nhận kỹ năng học tập','StudyHub','2027-06-15','SH-110124009','');
INSERT INTO "certificates" VALUES(20,10,'Chứng nhận kỹ năng học tập','StudyHub','2027-06-15','SH-110124010','');
INSERT INTO "certificates" VALUES(21,11,'Chứng nhận kỹ năng học tập','StudyHub','2027-06-15','SH-110124012','');
INSERT INTO "certificates" VALUES(22,12,'Chứng nhận kỹ năng học tập','StudyHub','2027-06-15','SH-110124139','');
CREATE TABLE class_schedule_sessions(id INTEGER PRIMARY KEY AUTOINCREMENT,class_name TEXT NOT NULL DEFAULT 'DA24TTA',course_id INTEGER REFERENCES courses(id) ON DELETE SET NULL,semester_id INTEGER REFERENCES semesters(id) ON DELETE SET NULL,title TEXT NOT NULL,session_date TEXT NOT NULL,start_time TEXT NOT NULL,end_time TEXT NOT NULL,room TEXT DEFAULT '',lecturer TEXT DEFAULT '');
INSERT INTO "class_schedule_sessions" VALUES(5,'DA24TTA',87,1,'Anh văn không chuyên 1','2024-10-07','07:00','10:30','','Nguyễn Thị Huỳnh Như');
INSERT INTO "class_schedule_sessions" VALUES(6,'DA24TTA',87,1,'Anh văn không chuyên 1','2024-10-14','07:00','10:30','','Nguyễn Thị Huỳnh Như');
INSERT INTO "class_schedule_sessions" VALUES(7,'DA24TTA',87,1,'Anh văn không chuyên 1','2024-10-21','07:00','10:30','','Nguyễn Thị Huỳnh Như');
INSERT INTO "class_schedule_sessions" VALUES(8,'DA24TTA',87,1,'Anh văn không chuyên 1','2024-10-28','07:00','10:30','','Nguyễn Thị Huỳnh Như');
INSERT INTO "class_schedule_sessions" VALUES(9,'DA24TTA',88,1,'Pháp luật đại cương','2024-10-08','07:00','10:30','','Lương Hoàng Sang');
INSERT INTO "class_schedule_sessions" VALUES(10,'DA24TTA',88,1,'Pháp luật đại cương','2024-10-15','07:00','10:30','','Lương Hoàng Sang');
INSERT INTO "class_schedule_sessions" VALUES(11,'DA24TTA',88,1,'Pháp luật đại cương','2024-10-22','07:00','10:30','','Lương Hoàng Sang');
INSERT INTO "class_schedule_sessions" VALUES(12,'DA24TTA',88,1,'Pháp luật đại cương','2024-10-29','07:00','10:30','','Lương Hoàng Sang');
INSERT INTO "class_schedule_sessions" VALUES(13,'DA24TTA',89,1,'Nhập môn công nghệ thông tin','2024-10-09','07:00','10:30','','Nguyễn Khắc Quốc');
INSERT INTO "class_schedule_sessions" VALUES(14,'DA24TTA',89,1,'Nhập môn công nghệ thông tin','2024-10-16','07:00','10:30','','Nguyễn Khắc Quốc');
INSERT INTO "class_schedule_sessions" VALUES(15,'DA24TTA',89,1,'Nhập môn công nghệ thông tin','2024-10-23','07:00','10:30','','Nguyễn Khắc Quốc');
INSERT INTO "class_schedule_sessions" VALUES(16,'DA24TTA',89,1,'Nhập môn công nghệ thông tin','2024-10-30','07:00','10:30','','Nguyễn Khắc Quốc');
INSERT INTO "class_schedule_sessions" VALUES(17,'DA24TTA',90,1,'Vi tích phân A1','2024-10-10','07:00','10:30','','Phạm Minh Triển');
INSERT INTO "class_schedule_sessions" VALUES(18,'DA24TTA',90,1,'Vi tích phân A1','2024-10-17','07:00','10:30','','Phạm Minh Triển');
INSERT INTO "class_schedule_sessions" VALUES(19,'DA24TTA',90,1,'Vi tích phân A1','2024-10-24','07:00','10:30','','Phạm Minh Triển');
INSERT INTO "class_schedule_sessions" VALUES(20,'DA24TTA',90,1,'Vi tích phân A1','2024-10-31','07:00','10:30','','Phạm Minh Triển');
INSERT INTO "class_schedule_sessions" VALUES(21,'DA24TTA',91,1,'Đại số tuyến tính','2024-10-11','07:00','10:30','','Trần Quang Hà');
INSERT INTO "class_schedule_sessions" VALUES(22,'DA24TTA',91,1,'Đại số tuyến tính','2024-10-18','07:00','10:30','','Trần Quang Hà');
INSERT INTO "class_schedule_sessions" VALUES(23,'DA24TTA',91,1,'Đại số tuyến tính','2024-10-25','07:00','10:30','','Trần Quang Hà');
INSERT INTO "class_schedule_sessions" VALUES(24,'DA24TTA',91,1,'Đại số tuyến tính','2024-11-01','07:00','10:30','','Trần Quang Hà');
INSERT INTO "class_schedule_sessions" VALUES(25,'DA24TTA',92,2,'Anh văn không chuyên 2','2025-02-10','07:00','10:30','','Nguyễn Thị Huỳnh Nhu');
INSERT INTO "class_schedule_sessions" VALUES(26,'DA24TTA',92,2,'Anh văn không chuyên 2','2025-02-17','07:00','10:30','','Nguyễn Thị Huỳnh Nhu');
INSERT INTO "class_schedule_sessions" VALUES(27,'DA24TTA',92,2,'Anh văn không chuyên 2','2025-02-24','07:00','10:30','','Nguyễn Thị Huỳnh Nhu');
INSERT INTO "class_schedule_sessions" VALUES(28,'DA24TTA',92,2,'Anh văn không chuyên 2','2025-03-03','07:00','10:30','','Nguyễn Thị Huỳnh Nhu');
INSERT INTO "class_schedule_sessions" VALUES(29,'DA24TTA',93,2,'Triết học Mác – Lênin','2025-02-11','07:00','10:30','','Trang Hiếu Hùng');
INSERT INTO "class_schedule_sessions" VALUES(30,'DA24TTA',93,2,'Triết học Mác – Lênin','2025-02-18','07:00','10:30','','Trang Hiếu Hùng');
INSERT INTO "class_schedule_sessions" VALUES(31,'DA24TTA',93,2,'Triết học Mác – Lênin','2025-02-25','07:00','10:30','','Trang Hiếu Hùng');
INSERT INTO "class_schedule_sessions" VALUES(32,'DA24TTA',93,2,'Triết học Mác – Lênin','2025-03-04','07:00','10:30','','Trang Hiếu Hùng');
INSERT INTO "class_schedule_sessions" VALUES(33,'DA24TTA',94,2,'Phương pháp nghiên cứu khoa học','2025-02-12','07:00','10:30','','Nguyễn Thái Sơn');
INSERT INTO "class_schedule_sessions" VALUES(34,'DA24TTA',94,2,'Phương pháp nghiên cứu khoa học','2025-02-19','07:00','10:30','','Nguyễn Thái Sơn');
INSERT INTO "class_schedule_sessions" VALUES(35,'DA24TTA',94,2,'Phương pháp nghiên cứu khoa học','2025-02-26','07:00','10:30','','Nguyễn Thái Sơn');
INSERT INTO "class_schedule_sessions" VALUES(36,'DA24TTA',94,2,'Phương pháp nghiên cứu khoa học','2025-03-05','07:00','10:30','','Nguyễn Thái Sơn');
INSERT INTO "class_schedule_sessions" VALUES(37,'DA24TTA',95,2,'Tiếng Việt thực hành','2025-02-13','07:00','10:30','','Nguyễn Thị Kiều Tiên');
INSERT INTO "class_schedule_sessions" VALUES(38,'DA24TTA',95,2,'Tiếng Việt thực hành','2025-02-20','07:00','10:30','','Nguyễn Thị Kiều Tiên');
INSERT INTO "class_schedule_sessions" VALUES(39,'DA24TTA',95,2,'Tiếng Việt thực hành','2025-02-27','07:00','10:30','','Nguyễn Thị Kiều Tiên');
INSERT INTO "class_schedule_sessions" VALUES(40,'DA24TTA',95,2,'Tiếng Việt thực hành','2025-03-06','07:00','10:30','','Nguyễn Thị Kiều Tiên');
INSERT INTO "class_schedule_sessions" VALUES(41,'DA24TTA',96,2,'Toán rời rạc','2025-02-14','07:00','10:30','','Trầm Hoàng Nam');
INSERT INTO "class_schedule_sessions" VALUES(42,'DA24TTA',96,2,'Toán rời rạc','2025-02-21','07:00','10:30','','Trầm Hoàng Nam');
INSERT INTO "class_schedule_sessions" VALUES(43,'DA24TTA',96,2,'Toán rời rạc','2025-02-28','07:00','10:30','','Trầm Hoàng Nam');
INSERT INTO "class_schedule_sessions" VALUES(44,'DA24TTA',96,2,'Toán rời rạc','2025-03-07','07:00','10:30','','Trầm Hoàng Nam');
INSERT INTO "class_schedule_sessions" VALUES(45,'DA24TTA',97,2,'Đại số đại cương','2025-02-10','13:00','16:30','','Dương Kim Ngọc');
INSERT INTO "class_schedule_sessions" VALUES(46,'DA24TTA',97,2,'Đại số đại cương','2025-02-17','13:00','16:30','','Dương Kim Ngọc');
INSERT INTO "class_schedule_sessions" VALUES(47,'DA24TTA',97,2,'Đại số đại cương','2025-02-24','13:00','16:30','','Dương Kim Ngọc');
INSERT INTO "class_schedule_sessions" VALUES(48,'DA24TTA',97,2,'Đại số đại cương','2025-03-03','13:00','16:30','','Dương Kim Ngọc');
INSERT INTO "class_schedule_sessions" VALUES(49,'DA24TTA',98,2,'Cấu trúc dữ liệu và giải thuật','2025-02-11','13:00','16:30','','Lê Minh Tự');
INSERT INTO "class_schedule_sessions" VALUES(50,'DA24TTA',98,2,'Cấu trúc dữ liệu và giải thuật','2025-02-18','13:00','16:30','','Lê Minh Tự');
INSERT INTO "class_schedule_sessions" VALUES(51,'DA24TTA',98,2,'Cấu trúc dữ liệu và giải thuật','2025-02-25','13:00','16:30','','Lê Minh Tự');
INSERT INTO "class_schedule_sessions" VALUES(52,'DA24TTA',98,2,'Cấu trúc dữ liệu và giải thuật','2025-03-04','13:00','16:30','','Lê Minh Tự');
INSERT INTO "class_schedule_sessions" VALUES(53,'DA24TTA',99,3,'Kinh tế chính trị Mác - Lênin','2025-10-06','07:00','10:30','','Lê Thúy Hằng');
INSERT INTO "class_schedule_sessions" VALUES(54,'DA24TTA',99,3,'Kinh tế chính trị Mác - Lênin','2025-10-13','07:00','10:30','','Lê Thúy Hằng');
INSERT INTO "class_schedule_sessions" VALUES(55,'DA24TTA',99,3,'Kinh tế chính trị Mác - Lênin','2025-10-20','07:00','10:30','','Lê Thúy Hằng');
INSERT INTO "class_schedule_sessions" VALUES(56,'DA24TTA',99,3,'Kinh tế chính trị Mác - Lênin','2025-10-27','07:00','10:30','','Lê Thúy Hằng');
INSERT INTO "class_schedule_sessions" VALUES(57,'DA24TTA',100,3,'Anh văn không chuyên 3','2025-10-07','07:00','10:30','','Nguyễn Thị Huỳnh Như');
INSERT INTO "class_schedule_sessions" VALUES(58,'DA24TTA',100,3,'Anh văn không chuyên 3','2025-10-14','07:00','10:30','','Nguyễn Thị Huỳnh Như');
INSERT INTO "class_schedule_sessions" VALUES(59,'DA24TTA',100,3,'Anh văn không chuyên 3','2025-10-21','07:00','10:30','','Nguyễn Thị Huỳnh Như');
INSERT INTO "class_schedule_sessions" VALUES(60,'DA24TTA',100,3,'Anh văn không chuyên 3','2025-10-28','07:00','10:30','','Nguyễn Thị Huỳnh Như');
INSERT INTO "class_schedule_sessions" VALUES(61,'DA24TTA',101,3,'Cơ sở dữ liệu','2025-10-08','07:00','10:30','','Nguyễn Thừa Phát Tài');
INSERT INTO "class_schedule_sessions" VALUES(62,'DA24TTA',101,3,'Cơ sở dữ liệu','2025-10-15','07:00','10:30','','Nguyễn Thừa Phát Tài');
INSERT INTO "class_schedule_sessions" VALUES(63,'DA24TTA',101,3,'Cơ sở dữ liệu','2025-10-22','07:00','10:30','','Nguyễn Thừa Phát Tài');
INSERT INTO "class_schedule_sessions" VALUES(64,'DA24TTA',101,3,'Cơ sở dữ liệu','2025-10-29','07:00','10:30','','Nguyễn Thừa Phát Tài');
INSERT INTO "class_schedule_sessions" VALUES(65,'DA24TTA',102,3,'Vi tích phân A2','2025-10-09','07:00','10:30','','Cao Hữu Hòa');
INSERT INTO "class_schedule_sessions" VALUES(66,'DA24TTA',102,3,'Vi tích phân A2','2025-10-16','07:00','10:30','','Cao Hữu Hòa');
INSERT INTO "class_schedule_sessions" VALUES(67,'DA24TTA',102,3,'Vi tích phân A2','2025-10-23','07:00','10:30','','Cao Hữu Hòa');
INSERT INTO "class_schedule_sessions" VALUES(68,'DA24TTA',102,3,'Vi tích phân A2','2025-10-30','07:00','10:30','','Cao Hữu Hòa');
INSERT INTO "class_schedule_sessions" VALUES(69,'DA24TTA',103,3,'Lý thuyết đồ thị','2025-10-10','07:00','10:30','','Trầm Hoàng Nam');
INSERT INTO "class_schedule_sessions" VALUES(70,'DA24TTA',103,3,'Lý thuyết đồ thị','2025-10-17','07:00','10:30','','Trầm Hoàng Nam');
INSERT INTO "class_schedule_sessions" VALUES(71,'DA24TTA',103,3,'Lý thuyết đồ thị','2025-10-24','07:00','10:30','','Trầm Hoàng Nam');
INSERT INTO "class_schedule_sessions" VALUES(72,'DA24TTA',103,3,'Lý thuyết đồ thị','2025-10-31','07:00','10:30','','Trầm Hoàng Nam');
INSERT INTO "class_schedule_sessions" VALUES(73,'DA24TTA',104,3,'Kiến trúc máy tính','2025-10-06','13:00','16:30','','Khấu Văn Nhựt');
INSERT INTO "class_schedule_sessions" VALUES(74,'DA24TTA',104,3,'Kiến trúc máy tính','2025-10-13','13:00','16:30','','Khấu Văn Nhựt');
INSERT INTO "class_schedule_sessions" VALUES(75,'DA24TTA',104,3,'Kiến trúc máy tính','2025-10-20','13:00','16:30','','Khấu Văn Nhựt');
INSERT INTO "class_schedule_sessions" VALUES(76,'DA24TTA',104,3,'Kiến trúc máy tính','2025-10-27','13:00','16:30','','Khấu Văn Nhựt');
INSERT INTO "class_schedule_sessions" VALUES(77,'DA24TTA',105,3,'Lập trình hướng đối tượng','2025-10-07','13:00','16:30','','Ngô Thanh Huy');
INSERT INTO "class_schedule_sessions" VALUES(78,'DA24TTA',105,3,'Lập trình hướng đối tượng','2025-10-14','13:00','16:30','','Ngô Thanh Huy');
INSERT INTO "class_schedule_sessions" VALUES(79,'DA24TTA',105,3,'Lập trình hướng đối tượng','2025-10-21','13:00','16:30','','Ngô Thanh Huy');
INSERT INTO "class_schedule_sessions" VALUES(80,'DA24TTA',105,3,'Lập trình hướng đối tượng','2025-10-28','13:00','16:30','','Ngô Thanh Huy');
INSERT INTO "class_schedule_sessions" VALUES(81,'DA24TTA',106,4,'Anh văn không chuyên 4','2026-02-09','07:00','10:30','','Nguyễn Thị Bích Ngân');
INSERT INTO "class_schedule_sessions" VALUES(82,'DA24TTA',106,4,'Anh văn không chuyên 4','2026-02-16','07:00','10:30','','Nguyễn Thị Bích Ngân');
INSERT INTO "class_schedule_sessions" VALUES(83,'DA24TTA',106,4,'Anh văn không chuyên 4','2026-02-23','07:00','10:30','','Nguyễn Thị Bích Ngân');
INSERT INTO "class_schedule_sessions" VALUES(84,'DA24TTA',106,4,'Anh văn không chuyên 4','2026-03-02','07:00','10:30','','Nguyễn Thị Bích Ngân');
INSERT INTO "class_schedule_sessions" VALUES(85,'DA24TTA',107,4,'Chủ nghĩa xã hội khoa học','2026-02-10','07:00','10:30','','Cao Dương Phương Lan');
INSERT INTO "class_schedule_sessions" VALUES(86,'DA24TTA',107,4,'Chủ nghĩa xã hội khoa học','2026-02-17','07:00','10:30','','Cao Dương Phương Lan');
INSERT INTO "class_schedule_sessions" VALUES(87,'DA24TTA',107,4,'Chủ nghĩa xã hội khoa học','2026-02-24','07:00','10:30','','Cao Dương Phương Lan');
INSERT INTO "class_schedule_sessions" VALUES(88,'DA24TTA',107,4,'Chủ nghĩa xã hội khoa học','2026-03-03','07:00','10:30','','Cao Dương Phương Lan');
INSERT INTO "class_schedule_sessions" VALUES(89,'DA24TTA',108,4,'Hệ điều hành','2026-02-11','07:00','10:30','','Huỳnh Văn Thanh');
INSERT INTO "class_schedule_sessions" VALUES(90,'DA24TTA',108,4,'Hệ điều hành','2026-02-18','07:00','10:30','','Huỳnh Văn Thanh');
INSERT INTO "class_schedule_sessions" VALUES(91,'DA24TTA',108,4,'Hệ điều hành','2026-02-25','07:00','10:30','','Huỳnh Văn Thanh');
INSERT INTO "class_schedule_sessions" VALUES(92,'DA24TTA',108,4,'Hệ điều hành','2026-03-04','07:00','10:30','','Huỳnh Văn Thanh');
INSERT INTO "class_schedule_sessions" VALUES(93,'DA24TTA',109,4,'Thiết kế web','2026-02-12','07:00','10:30','','Nguyễn Ngọc Đan Thanh');
INSERT INTO "class_schedule_sessions" VALUES(94,'DA24TTA',109,4,'Thiết kế web','2026-02-19','07:00','10:30','','Nguyễn Ngọc Đan Thanh');
INSERT INTO "class_schedule_sessions" VALUES(95,'DA24TTA',109,4,'Thiết kế web','2026-02-26','07:00','10:30','','Nguyễn Ngọc Đan Thanh');
INSERT INTO "class_schedule_sessions" VALUES(96,'DA24TTA',109,4,'Thiết kế web','2026-03-05','07:00','10:30','','Nguyễn Ngọc Đan Thanh');
INSERT INTO "class_schedule_sessions" VALUES(97,'DA24TTA',110,4,'Mạng máy tính','2026-02-13','07:00','10:30','','Tạ Thanh Hải');
INSERT INTO "class_schedule_sessions" VALUES(98,'DA24TTA',110,4,'Mạng máy tính','2026-02-20','07:00','10:30','','Tạ Thanh Hải');
INSERT INTO "class_schedule_sessions" VALUES(99,'DA24TTA',110,4,'Mạng máy tính','2026-02-27','07:00','10:30','','Tạ Thanh Hải');
INSERT INTO "class_schedule_sessions" VALUES(100,'DA24TTA',110,4,'Mạng máy tính','2026-03-06','07:00','10:30','','Tạ Thanh Hải');
INSERT INTO "class_schedule_sessions" VALUES(101,'DA24TTA',111,4,'Quy hoạch tuyến tính','2026-02-09','13:00','16:30','','Dương Kim Ngọc');
INSERT INTO "class_schedule_sessions" VALUES(102,'DA24TTA',111,4,'Quy hoạch tuyến tính','2026-02-16','13:00','16:30','','Dương Kim Ngọc');
INSERT INTO "class_schedule_sessions" VALUES(103,'DA24TTA',111,4,'Quy hoạch tuyến tính','2026-02-23','13:00','16:30','','Dương Kim Ngọc');
INSERT INTO "class_schedule_sessions" VALUES(104,'DA24TTA',111,4,'Quy hoạch tuyến tính','2026-03-02','13:00','16:30','','Dương Kim Ngọc');
INSERT INTO "class_schedule_sessions" VALUES(105,'DA24TTA',112,4,'Lý thuyết xếp hàng','2026-02-10','13:00','16:30','','Nguyễn Mộng Hiền');
INSERT INTO "class_schedule_sessions" VALUES(106,'DA24TTA',112,4,'Lý thuyết xếp hàng','2026-02-17','13:00','16:30','','Nguyễn Mộng Hiền');
INSERT INTO "class_schedule_sessions" VALUES(107,'DA24TTA',112,4,'Lý thuyết xếp hàng','2026-02-24','13:00','16:30','','Nguyễn Mộng Hiền');
INSERT INTO "class_schedule_sessions" VALUES(108,'DA24TTA',112,4,'Lý thuyết xếp hàng','2026-03-03','13:00','16:30','','Nguyễn Mộng Hiền');
INSERT INTO "class_schedule_sessions" VALUES(109,'DA24TTA',113,5,'Tư tưởng Hồ Chí Minh','2026-10-26','07:00','10:30','','Phan Hữu Tài');
INSERT INTO "class_schedule_sessions" VALUES(110,'DA24TTA',113,5,'Tư tưởng Hồ Chí Minh','2026-11-02','07:00','10:30','','Phan Hữu Tài');
INSERT INTO "class_schedule_sessions" VALUES(111,'DA24TTA',113,5,'Tư tưởng Hồ Chí Minh','2026-11-09','07:00','10:30','','Phan Hữu Tài');
INSERT INTO "class_schedule_sessions" VALUES(112,'DA24TTA',113,5,'Tư tưởng Hồ Chí Minh','2026-11-16','07:00','10:30','','Phan Hữu Tài');
INSERT INTO "class_schedule_sessions" VALUES(113,'DA24TTA',114,5,'Thống kê và phân tích dữ liệu','2026-10-27','07:00','10:30','','Phạm Thi Trúc Mai');
INSERT INTO "class_schedule_sessions" VALUES(114,'DA24TTA',114,5,'Thống kê và phân tích dữ liệu','2026-11-03','07:00','10:30','','Phạm Thi Trúc Mai');
INSERT INTO "class_schedule_sessions" VALUES(115,'DA24TTA',114,5,'Thống kê và phân tích dữ liệu','2026-11-10','07:00','10:30','','Phạm Thi Trúc Mai');
INSERT INTO "class_schedule_sessions" VALUES(116,'DA24TTA',114,5,'Thống kê và phân tích dữ liệu','2026-11-17','07:00','10:30','','Phạm Thi Trúc Mai');
INSERT INTO "class_schedule_sessions" VALUES(117,'DA24TTA',115,5,'Thực tập đồ án cơ sở ngành','2026-10-28','07:00','10:30','','Đoàn Phước Miền');
INSERT INTO "class_schedule_sessions" VALUES(118,'DA24TTA',115,5,'Thực tập đồ án cơ sở ngành','2026-11-04','07:00','10:30','','Đoàn Phước Miền');
INSERT INTO "class_schedule_sessions" VALUES(119,'DA24TTA',115,5,'Thực tập đồ án cơ sở ngành','2026-11-11','07:00','10:30','','Đoàn Phước Miền');
INSERT INTO "class_schedule_sessions" VALUES(120,'DA24TTA',115,5,'Thực tập đồ án cơ sở ngành','2026-11-18','07:00','10:30','','Đoàn Phước Miền');
INSERT INTO "class_schedule_sessions" VALUES(121,'DA24TTA',116,5,'Điện toán đám mây','2026-10-29','07:00','10:30','','Nguyễn Hoàng Duy Thiện');
INSERT INTO "class_schedule_sessions" VALUES(122,'DA24TTA',116,5,'Điện toán đám mây','2026-11-05','07:00','10:30','','Nguyễn Hoàng Duy Thiện');
INSERT INTO "class_schedule_sessions" VALUES(123,'DA24TTA',116,5,'Điện toán đám mây','2026-11-12','07:00','10:30','','Nguyễn Hoàng Duy Thiện');
INSERT INTO "class_schedule_sessions" VALUES(124,'DA24TTA',116,5,'Điện toán đám mây','2026-11-19','07:00','10:30','','Nguyễn Hoàng Duy Thiện');
INSERT INTO "class_schedule_sessions" VALUES(125,'DA24TTA',117,5,'Phân tích và thiết kế hệ thống thông tin','2026-10-30','07:00','10:30','','Phạm Minh Đương');
INSERT INTO "class_schedule_sessions" VALUES(126,'DA24TTA',117,5,'Phân tích và thiết kế hệ thống thông tin','2026-11-06','07:00','10:30','','Phạm Minh Đương');
INSERT INTO "class_schedule_sessions" VALUES(127,'DA24TTA',117,5,'Phân tích và thiết kế hệ thống thông tin','2026-11-13','07:00','10:30','','Phạm Minh Đương');
INSERT INTO "class_schedule_sessions" VALUES(128,'DA24TTA',117,5,'Phân tích và thiết kế hệ thống thông tin','2026-11-20','07:00','10:30','','Phạm Minh Đương');
INSERT INTO "class_schedule_sessions" VALUES(129,'DA24TTA',118,5,'Lập trình ứng dụng trên Windows','2026-10-26','13:00','16:30','','Nguyễn Trần Diễm Hạnh');
INSERT INTO "class_schedule_sessions" VALUES(130,'DA24TTA',118,5,'Lập trình ứng dụng trên Windows','2026-11-02','13:00','16:30','','Nguyễn Trần Diễm Hạnh');
INSERT INTO "class_schedule_sessions" VALUES(131,'DA24TTA',118,5,'Lập trình ứng dụng trên Windows','2026-11-09','13:00','16:30','','Nguyễn Trần Diễm Hạnh');
INSERT INTO "class_schedule_sessions" VALUES(132,'DA24TTA',118,5,'Lập trình ứng dụng trên Windows','2026-11-16','13:00','16:30','','Nguyễn Trần Diễm Hạnh');
INSERT INTO "class_schedule_sessions" VALUES(133,'DA24TTA',119,5,'Chuyên đề Linux','2026-10-27','13:00','16:30','','Nguyễn Hoàng Duy Thiện');
INSERT INTO "class_schedule_sessions" VALUES(134,'DA24TTA',119,5,'Chuyên đề Linux','2026-11-03','13:00','16:30','','Nguyễn Hoàng Duy Thiện');
INSERT INTO "class_schedule_sessions" VALUES(135,'DA24TTA',119,5,'Chuyên đề Linux','2026-11-10','13:00','16:30','','Nguyễn Hoàng Duy Thiện');
INSERT INTO "class_schedule_sessions" VALUES(136,'DA24TTA',119,5,'Chuyên đề Linux','2026-11-17','13:00','16:30','','Nguyễn Hoàng Duy Thiện');
CREATE TABLE courses (
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
INSERT INTO "courses" VALUES(87,'MH0001','Anh văn không chuyên 1','Nguyễn Thị Huỳnh Như',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(88,'MH0003','Pháp luật đại cương','Lương Hoàng Sang',2.0,2.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(89,'MH0004','Nhập môn công nghệ thông tin','Nguyễn Khắc Quốc',2.0,2.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(90,'MH0005','Vi tích phân A1','Phạm Minh Triển',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(91,'MH0006','Đại số tuyến tính','Trần Quang Hà',2.0,2.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(92,'MH0007','Anh văn không chuyên 2','Nguyễn Thị Huỳnh Nhu',4.0,4.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(93,'MH0008','Triết học Mác – Lênin','Trang Hiếu Hùng',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(94,'MH0009','Phương pháp nghiên cứu khoa học','Nguyễn Thái Sơn',2.0,2.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(95,'MH0010','Tiếng Việt thực hành','Nguyễn Thị Kiều Tiên',2.0,2.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(96,'MH0011','Toán rời rạc','Trầm Hoàng Nam',2.0,2.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(97,'MH0012','Đại số đại cương','Dương Kim Ngọc',2.0,2.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(98,'MH0013','Cấu trúc dữ liệu và giải thuật','Lê Minh Tự',4.0,4.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(99,'MH0014','Kinh tế chính trị Mác - Lênin','Lê Thúy Hằng',2.0,2.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(100,'MH0015','Anh văn không chuyên 3','Nguyễn Thị Huỳnh Như',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(101,'MH0016','Cơ sở dữ liệu','Nguyễn Thừa Phát Tài',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(102,'MH0017','Vi tích phân A2','Cao Hữu Hòa',2.0,2.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(103,'MH0018','Lý thuyết đồ thị','Trầm Hoàng Nam',4.0,4.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(104,'MH0019','Kiến trúc máy tính','Khấu Văn Nhựt',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(105,'MH0020','Lập trình hướng đối tượng','Ngô Thanh Huy',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(106,'MH0021','Anh văn không chuyên 4','Nguyễn Thị Bích Ngân',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(107,'MH0022','Chủ nghĩa xã hội khoa học','Cao Dương Phương Lan',2.0,2.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(108,'MH0023','Hệ điều hành','Huỳnh Văn Thanh',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(109,'MH0024','Thiết kế web','Nguyễn Ngọc Đan Thanh',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(110,'MH0025','Mạng máy tính','Tạ Thanh Hải',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(111,'MH0026','Quy hoạch tuyến tính','Dương Kim Ngọc',2.0,2.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(112,'MH0027','Lý thuyết xếp hàng','Nguyễn Mộng Hiền',2.0,2.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(113,'MH0028','Tư tưởng Hồ Chí Minh','Phan Hữu Tài',2.0,2.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(114,'MH0029','Thống kê và phân tích dữ liệu','Phạm Thi Trúc Mai',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(115,'MH0030','Thực tập đồ án cơ sở ngành','Đoàn Phước Miền',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(116,'MH0031','Điện toán đám mây','Nguyễn Hoàng Duy Thiện',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(117,'MH0032','Phân tích và thiết kế hệ thống thông tin','Phạm Minh Đương',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(118,'MH0033','Lập trình ứng dụng trên Windows','Nguyễn Trần Diễm Hạnh',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
INSERT INTO "courses" VALUES(119,'MH0034','Chuyên đề Linux','Nguyễn Hoàng Duy Thiện',3.0,3.0,'Công nghệ thông tin','','',NULL,NULL,NULL,'{}');
CREATE TABLE enrollments (
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
INSERT INTO "enrollments" VALUES(661,11,87,1,'completed',6.2,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(662,11,88,1,'completed',6.5,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(663,11,89,1,'completed',6.8,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(664,11,90,1,'completed',7.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(665,11,91,1,'completed',7.4,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(666,11,92,2,'completed',7.7,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(667,11,93,2,'completed',8.0,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(668,11,94,2,'completed',8.3,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(669,11,95,2,'completed',8.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(670,11,96,2,'completed',8.9,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(671,11,97,2,'completed',9.2,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(672,11,98,2,'completed',9.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(673,11,99,3,'completed',6.3,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(674,11,100,3,'completed',6.6,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(675,11,101,3,'completed',6.9,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(676,11,102,3,'completed',7.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(677,11,103,3,'completed',7.5,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(678,11,104,3,'completed',7.8,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(679,11,105,3,'completed',8.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(680,11,106,4,'completed',8.4,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(681,11,107,4,'completed',8.7,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(682,11,108,4,'completed',9.0,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(683,11,109,4,'completed',9.3,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(684,11,110,4,'completed',9.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(685,11,111,4,'completed',6.4,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(686,11,112,4,'completed',6.7,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(687,11,113,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(688,11,114,5,'enrolled',NULL,NULL,50,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(689,11,115,5,'enrolled',NULL,NULL,55,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(690,11,116,5,'enrolled',NULL,NULL,60,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(691,11,117,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(692,11,118,5,'enrolled',NULL,NULL,70,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(693,11,119,5,'enrolled',NULL,NULL,75,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(694,12,87,1,'completed',6.9,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(695,12,88,1,'completed',7.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(696,12,89,1,'completed',7.5,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(697,12,90,1,'completed',7.8,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(698,12,91,1,'completed',8.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(699,12,92,2,'completed',8.4,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(700,12,93,2,'completed',8.7,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(701,12,94,2,'completed',9.0,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(702,12,95,2,'completed',9.3,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(703,12,96,2,'completed',9.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(704,12,97,2,'completed',6.4,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(705,12,98,2,'completed',6.7,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(706,12,99,3,'completed',7.0,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(707,12,100,3,'completed',7.3,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(708,12,101,3,'completed',7.6,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(709,12,102,3,'completed',7.9,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(710,12,103,3,'completed',8.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(711,12,104,3,'completed',8.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(712,12,105,3,'completed',8.8,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(713,12,106,4,'completed',9.1,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(714,12,107,4,'completed',9.4,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(715,12,108,4,'completed',6.2,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(716,12,109,4,'completed',6.5,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(717,12,110,4,'completed',6.8,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(718,12,111,4,'completed',7.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(719,12,112,4,'completed',7.4,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(720,12,113,5,'enrolled',NULL,NULL,54,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(721,12,114,5,'enrolled',NULL,NULL,59,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(722,12,115,5,'enrolled',NULL,NULL,64,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(723,12,116,5,'enrolled',NULL,NULL,69,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(724,12,117,5,'enrolled',NULL,NULL,74,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(725,12,118,5,'enrolled',NULL,NULL,79,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(726,12,119,5,'enrolled',NULL,NULL,84,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(727,3,87,1,'completed',7.6,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(728,3,88,1,'completed',7.9,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(729,3,89,1,'completed',8.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(730,3,90,1,'completed',8.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(731,3,91,1,'completed',8.8,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(732,3,92,2,'completed',9.1,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(733,3,93,2,'completed',9.4,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(734,3,94,2,'completed',6.2,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(735,3,95,2,'completed',6.5,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(736,3,96,2,'completed',6.8,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(737,3,97,2,'completed',7.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(738,3,98,2,'completed',7.4,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(739,3,99,3,'completed',7.7,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(740,3,100,3,'completed',8.0,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(741,3,101,3,'completed',8.3,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(742,3,102,3,'completed',8.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(743,3,103,3,'completed',8.9,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(744,3,104,3,'completed',9.2,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(745,3,105,3,'completed',9.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(746,3,106,4,'completed',6.3,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(747,3,107,4,'completed',6.6,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(748,3,108,4,'completed',6.9,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(749,3,109,4,'completed',7.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(750,3,110,4,'completed',7.5,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(751,3,111,4,'completed',7.8,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(752,3,112,4,'completed',8.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(753,3,113,5,'enrolled',NULL,NULL,63,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(754,3,114,5,'enrolled',NULL,NULL,68,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(755,3,115,5,'enrolled',NULL,NULL,73,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(756,3,116,5,'enrolled',NULL,NULL,78,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(757,3,117,5,'enrolled',NULL,NULL,83,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(758,3,118,5,'enrolled',NULL,NULL,88,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(759,3,119,5,'enrolled',NULL,NULL,93,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(760,4,87,1,'completed',8.3,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(761,4,88,1,'completed',8.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(762,4,89,1,'completed',8.9,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(763,4,90,1,'completed',9.2,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(764,4,91,1,'completed',9.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(765,4,92,2,'completed',6.3,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(766,4,93,2,'completed',6.6,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(767,4,94,2,'completed',6.9,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(768,4,95,2,'completed',7.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(769,4,96,2,'completed',7.5,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(770,4,97,2,'completed',7.8,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(771,4,98,2,'completed',8.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(772,4,99,3,'completed',8.4,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(773,4,100,3,'completed',8.7,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(774,4,101,3,'completed',9.0,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(775,4,102,3,'completed',9.3,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(776,4,103,3,'completed',9.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(777,4,104,3,'completed',6.4,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(778,4,105,3,'completed',6.7,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(779,4,106,4,'completed',7.0,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(780,4,107,4,'completed',7.3,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(781,4,108,4,'completed',7.6,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(782,4,109,4,'completed',7.9,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(783,4,110,4,'completed',8.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(784,4,111,4,'completed',8.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(785,4,112,4,'completed',8.8,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(786,4,113,5,'enrolled',NULL,NULL,72,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(787,4,114,5,'enrolled',NULL,NULL,77,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(788,4,115,5,'enrolled',NULL,NULL,82,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(789,4,116,5,'enrolled',NULL,NULL,87,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(790,4,117,5,'enrolled',NULL,NULL,92,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(791,4,118,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(792,4,119,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(793,5,87,1,'completed',9.0,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(794,5,88,1,'completed',9.3,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(795,5,89,1,'completed',9.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(796,5,90,1,'completed',6.4,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(797,5,91,1,'completed',6.7,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(798,5,92,2,'completed',7.0,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(799,5,93,2,'completed',7.3,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(800,5,94,2,'completed',7.6,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(801,5,95,2,'completed',7.9,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(802,5,96,2,'completed',8.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(803,5,97,2,'completed',8.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(804,5,98,2,'completed',8.8,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(805,5,99,3,'completed',9.1,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(806,5,100,3,'completed',9.4,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(807,5,101,3,'completed',6.2,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(808,5,102,3,'completed',6.5,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(809,5,103,3,'completed',6.8,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(810,5,104,3,'completed',7.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(811,5,105,3,'completed',7.4,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(812,5,106,4,'completed',7.7,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(813,5,107,4,'completed',8.0,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(814,5,108,4,'completed',8.3,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(815,5,109,4,'completed',8.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(816,5,110,4,'completed',8.9,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(817,5,111,4,'completed',9.2,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(818,5,112,4,'completed',9.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(819,5,113,5,'enrolled',NULL,NULL,81,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(820,5,114,5,'enrolled',NULL,NULL,86,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(821,5,115,5,'enrolled',NULL,NULL,91,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(822,5,116,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(823,5,117,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(824,5,118,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(825,5,119,5,'enrolled',NULL,NULL,51,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(826,6,87,1,'completed',6.2,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(827,6,88,1,'completed',6.5,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(828,6,89,1,'completed',6.8,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(829,6,90,1,'completed',7.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(830,6,91,1,'completed',7.4,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(831,6,92,2,'completed',7.7,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(832,6,93,2,'completed',8.0,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(833,6,94,2,'completed',8.3,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(834,6,95,2,'completed',8.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(835,6,96,2,'completed',8.9,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(836,6,97,2,'completed',9.2,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(837,6,98,2,'completed',9.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(838,6,99,3,'completed',6.3,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(839,6,100,3,'completed',6.6,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(840,6,101,3,'completed',6.9,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(841,6,102,3,'completed',7.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(842,6,103,3,'completed',7.5,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(843,6,104,3,'completed',7.8,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(844,6,105,3,'completed',8.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(845,6,106,4,'completed',8.4,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(846,6,107,4,'completed',8.7,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(847,6,108,4,'completed',9.0,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(848,6,109,4,'completed',9.3,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(849,6,110,4,'completed',9.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(850,6,111,4,'completed',6.4,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(851,6,112,4,'completed',6.7,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(852,6,113,5,'enrolled',NULL,NULL,90,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(853,6,114,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(854,6,115,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(855,6,116,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(856,6,117,5,'enrolled',NULL,NULL,50,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(857,6,118,5,'enrolled',NULL,NULL,55,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(858,6,119,5,'enrolled',NULL,NULL,60,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(859,7,87,1,'completed',6.9,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(860,7,88,1,'completed',7.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(861,7,89,1,'completed',7.5,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(862,7,90,1,'completed',7.8,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(863,7,91,1,'completed',8.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(864,7,92,2,'completed',8.4,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(865,7,93,2,'completed',8.7,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(866,7,94,2,'completed',9.0,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(867,7,95,2,'completed',9.3,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(868,7,96,2,'completed',9.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(869,7,97,2,'completed',6.4,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(870,7,98,2,'completed',6.7,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(871,7,99,3,'completed',7.0,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(872,7,100,3,'completed',7.3,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(873,7,101,3,'completed',7.6,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(874,7,102,3,'completed',7.9,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(875,7,103,3,'completed',8.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(876,7,104,3,'completed',8.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(877,7,105,3,'completed',8.8,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(878,7,106,4,'completed',9.1,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(879,7,107,4,'completed',9.4,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(880,7,108,4,'completed',6.2,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(881,7,109,4,'completed',6.5,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(882,7,110,4,'completed',6.8,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(883,7,111,4,'completed',7.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(884,7,112,4,'completed',7.4,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(885,7,113,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(886,7,114,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(887,7,115,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(888,7,116,5,'enrolled',NULL,NULL,54,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(889,7,117,5,'enrolled',NULL,NULL,59,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(890,7,118,5,'enrolled',NULL,NULL,64,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(891,7,119,5,'enrolled',NULL,NULL,69,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(892,8,87,1,'completed',7.6,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(893,8,88,1,'completed',7.9,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(894,8,89,1,'completed',8.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(895,8,90,1,'completed',8.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(896,8,91,1,'completed',8.8,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(897,8,92,2,'completed',9.1,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(898,8,93,2,'completed',9.4,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(899,8,94,2,'completed',6.2,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(900,8,95,2,'completed',6.5,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(901,8,96,2,'completed',6.8,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(902,8,97,2,'completed',7.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(903,8,98,2,'completed',7.4,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(904,8,99,3,'completed',7.7,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(905,8,100,3,'completed',8.0,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(906,8,101,3,'completed',8.3,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(907,8,102,3,'completed',8.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(908,8,103,3,'completed',8.9,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(909,8,104,3,'completed',9.2,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(910,8,105,3,'completed',9.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(911,8,106,4,'completed',6.3,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(912,8,107,4,'completed',6.6,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(913,8,108,4,'completed',6.9,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(914,8,109,4,'completed',7.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(915,8,110,4,'completed',7.5,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(916,8,111,4,'completed',7.8,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(917,8,112,4,'completed',8.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(918,8,113,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(919,8,114,5,'enrolled',NULL,NULL,53,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(920,8,115,5,'enrolled',NULL,NULL,58,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(921,8,116,5,'enrolled',NULL,NULL,63,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(922,8,117,5,'enrolled',NULL,NULL,68,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(923,8,118,5,'enrolled',NULL,NULL,73,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(924,8,119,5,'enrolled',NULL,NULL,78,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(925,9,87,1,'completed',8.3,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(926,9,88,1,'completed',8.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(927,9,89,1,'completed',8.9,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(928,9,90,1,'completed',9.2,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(929,9,91,1,'completed',9.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(930,9,92,2,'completed',6.3,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(931,9,93,2,'completed',6.6,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(932,9,94,2,'completed',6.9,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(933,9,95,2,'completed',7.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(934,9,96,2,'completed',7.5,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(935,9,97,2,'completed',7.8,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(936,9,98,2,'completed',8.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(937,9,99,3,'completed',8.4,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(938,9,100,3,'completed',8.7,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(939,9,101,3,'completed',9.0,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(940,9,102,3,'completed',9.3,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(941,9,103,3,'completed',9.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(942,9,104,3,'completed',6.4,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(943,9,105,3,'completed',6.7,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(944,9,106,4,'completed',7.0,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(945,9,107,4,'completed',7.3,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(946,9,108,4,'completed',7.6,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(947,9,109,4,'completed',7.9,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(948,9,110,4,'completed',8.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(949,9,111,4,'completed',8.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(950,9,112,4,'completed',8.8,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(951,9,113,5,'enrolled',NULL,NULL,57,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(952,9,114,5,'enrolled',NULL,NULL,62,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(953,9,115,5,'enrolled',NULL,NULL,67,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(954,9,116,5,'enrolled',NULL,NULL,72,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(955,9,117,5,'enrolled',NULL,NULL,77,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(956,9,118,5,'enrolled',NULL,NULL,82,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(957,9,119,5,'enrolled',NULL,NULL,87,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(958,10,87,1,'completed',9.0,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(959,10,88,1,'completed',9.3,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(960,10,89,1,'completed',9.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(961,10,90,1,'completed',6.4,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(962,10,91,1,'completed',6.7,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(963,10,92,2,'completed',7.0,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(964,10,93,2,'completed',7.3,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(965,10,94,2,'completed',7.6,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(966,10,95,2,'completed',7.9,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(967,10,96,2,'completed',8.2,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(968,10,97,2,'completed',8.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(969,10,98,2,'completed',8.8,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(970,10,99,3,'completed',9.1,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(971,10,100,3,'completed',9.4,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(972,10,101,3,'completed',6.2,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(973,10,102,3,'completed',6.5,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(974,10,103,3,'completed',6.8,'C',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(975,10,104,3,'completed',7.1,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(976,10,105,3,'completed',7.4,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(977,10,106,4,'completed',7.7,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(978,10,107,4,'completed',8.0,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(979,10,108,4,'completed',8.3,'B',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(980,10,109,4,'completed',8.6,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(981,10,110,4,'completed',8.9,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(982,10,111,4,'completed',9.2,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(983,10,112,4,'completed',9.5,'A',100,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(984,10,113,5,'enrolled',NULL,NULL,66,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(985,10,114,5,'enrolled',NULL,NULL,71,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(986,10,115,5,'enrolled',NULL,NULL,76,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(987,10,116,5,'enrolled',NULL,NULL,81,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(988,10,117,5,'enrolled',NULL,NULL,86,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(989,10,118,5,'enrolled',NULL,NULL,91,0,'2026-10-31 12:45:17');
INSERT INTO "enrollments" VALUES(990,10,119,5,'enrolled',NULL,NULL,65,0,'2026-10-31 12:45:17');
CREATE TABLE schedule_sessions (
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
CREATE TABLE semester_courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  semester_id INTEGER NOT NULL REFERENCES semesters(id) ON DELETE CASCADE,
  course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  display_order INTEGER NOT NULL DEFAULT 0,
  UNIQUE(semester_id, course_id)
);
INSERT INTO "semester_courses" VALUES(87,1,87,1);
INSERT INTO "semester_courses" VALUES(88,1,88,2);
INSERT INTO "semester_courses" VALUES(89,1,89,3);
INSERT INTO "semester_courses" VALUES(90,1,90,4);
INSERT INTO "semester_courses" VALUES(91,1,91,5);
INSERT INTO "semester_courses" VALUES(92,2,92,6);
INSERT INTO "semester_courses" VALUES(93,2,93,7);
INSERT INTO "semester_courses" VALUES(94,2,94,8);
INSERT INTO "semester_courses" VALUES(95,2,95,9);
INSERT INTO "semester_courses" VALUES(96,2,96,10);
INSERT INTO "semester_courses" VALUES(97,2,97,11);
INSERT INTO "semester_courses" VALUES(98,2,98,12);
INSERT INTO "semester_courses" VALUES(99,3,99,13);
INSERT INTO "semester_courses" VALUES(100,3,100,14);
INSERT INTO "semester_courses" VALUES(101,3,101,15);
INSERT INTO "semester_courses" VALUES(102,3,102,16);
INSERT INTO "semester_courses" VALUES(103,3,103,17);
INSERT INTO "semester_courses" VALUES(104,3,104,18);
INSERT INTO "semester_courses" VALUES(105,3,105,19);
INSERT INTO "semester_courses" VALUES(106,4,106,20);
INSERT INTO "semester_courses" VALUES(107,4,107,21);
INSERT INTO "semester_courses" VALUES(108,4,108,22);
INSERT INTO "semester_courses" VALUES(109,4,109,23);
INSERT INTO "semester_courses" VALUES(110,4,110,24);
INSERT INTO "semester_courses" VALUES(111,4,111,25);
INSERT INTO "semester_courses" VALUES(112,4,112,26);
INSERT INTO "semester_courses" VALUES(113,5,113,27);
INSERT INTO "semester_courses" VALUES(114,5,114,28);
INSERT INTO "semester_courses" VALUES(115,5,115,29);
INSERT INTO "semester_courses" VALUES(116,5,116,30);
INSERT INTO "semester_courses" VALUES(117,5,117,31);
INSERT INTO "semester_courses" VALUES(118,5,118,32);
INSERT INTO "semester_courses" VALUES(119,5,119,33);
CREATE TABLE semesters (
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
INSERT INTO "semesters" VALUES(1,1,1,'2024-2025','Học kỳ 1 - Năm học 2024-2025','regular','configured','2024-09-09','2024-12-22',0);
INSERT INTO "semesters" VALUES(2,2,2,'2024-2025','Học kỳ 2 - Năm học 2024-2025','regular','configured','2025-01-06','2025-04-27',0);
INSERT INTO "semesters" VALUES(3,3,1,'2025-2026','Học kỳ 1 - Năm học 2025-2026','regular','configured','2025-09-08','2025-12-21',0);
INSERT INTO "semesters" VALUES(4,4,2,'2025-2026','Học kỳ 2 - Năm học 2025-2026','regular','configured','2026-01-05','2026-04-26',0);
INSERT INTO "semesters" VALUES(5,5,1,'2026-2027','Học kỳ 1 - Năm học 2026-2027','regular','configured','2026-09-07','2027-04-25',0);
INSERT INTO "semesters" VALUES(26,6,2,'2026-2027','Học kỳ 6 - Năm học 2026-2027','regular','locked',NULL,NULL,0);
INSERT INTO "semesters" VALUES(27,7,1,'2027-2028','Học kỳ 7 - Năm học 2027-2028','regular','locked',NULL,NULL,0);
INSERT INTO "semesters" VALUES(28,8,2,'2027-2028','Học kỳ 8 - Năm học 2027-2028','regular','locked',NULL,NULL,0);
CREATE TABLE student_settings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL UNIQUE REFERENCES students(id) ON DELETE CASCADE,
  language TEXT NOT NULL DEFAULT 'vi',
  theme TEXT NOT NULL DEFAULT 'light',
  email_notifications INTEGER NOT NULL DEFAULT 1,
  assignment_reminders INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "student_settings" VALUES(3,3,'vi','light',1,1,'2026-10-23 01:10:56');
INSERT INTO "student_settings" VALUES(4,4,'vi','light',1,1,'2026-10-23 01:10:56');
INSERT INTO "student_settings" VALUES(5,5,'vi','light',1,1,'2026-10-23 01:10:56');
INSERT INTO "student_settings" VALUES(6,6,'vi','light',1,1,'2026-10-23 01:10:56');
INSERT INTO "student_settings" VALUES(7,7,'vi','light',1,1,'2026-10-23 01:10:56');
INSERT INTO "student_settings" VALUES(8,8,'vi','light',1,1,'2026-10-23 01:10:56');
INSERT INTO "student_settings" VALUES(9,9,'vi','light',1,1,'2026-10-23 01:10:56');
INSERT INTO "student_settings" VALUES(10,10,'vi','light',1,1,'2026-10-23 01:10:56');
INSERT INTO "student_settings" VALUES(21,11,'vi','light',1,1,'2026-10-23 01:24:29');
INSERT INTO "student_settings" VALUES(22,12,'vi','light',1,1,'2026-10-23 01:24:29');
CREATE TABLE students (
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
INSERT INTO "students" VALUES(3,'110124032','Lê Thúy Diễm','110124032@st.tvu.edu.vn','DA24TTA','Công nghệ thông tin',3,'$2a$12$W7WWisEsOZvdBaFNw689aOiRneZu4f6wsu.UP5.GclCRZPHCPzn0y','','2006-01-15','','','','studying','2026-10-23 01:10:56','2026-10-31 12:45:17');
INSERT INTO "students" VALUES(4,'110124020','Vũ Thị Nhựt Đang','110124020@st.tvu.edu.vn','DA24TTA','Công nghệ thông tin',3,'$2a$12$eAHQ44S02K8kjg5mR2VFKuBqeB9KqHh/fOPcz5mYeCIP5ziGk6Vo2','','2006-09-26','','','','studying','2026-10-23 01:10:56','2026-10-31 12:45:17');
INSERT INTO "students" VALUES(5,'110124003','Nguyễn Thị Trúc Lam','110124003@st.tvu.edu.vn','DA24TTA','Công nghệ thông tin',3,'$2a$12$Rl5pKYuV7hQmd7HaZDTtyuaqAJ6Q2Z8vP3A.TR5/Oh/zZLWk4uyee','','2006-04-25','','','','studying','2026-10-23 01:10:56','2026-10-31 12:45:17');
INSERT INTO "students" VALUES(6,'110124022','Dương Hữu Minh','110124022@st.tvu.edu.vn','DA24TTA','Công nghệ thông tin',3,'$2a$12$py6nsahRoXzVFxFz6N4vV.9Cgwg1kTTUAr7EVJLFAFKQvvsYt86TC','','2006-07-20','','','','studying','2026-10-23 01:10:56','2026-10-31 12:45:17');
INSERT INTO "students" VALUES(7,'110124006','Ngô Hoài Linh','110124006@st.tvu.edu.vn','DA24TTA','Công nghệ thông tin',3,'$2a$12$aPswC8i0XFNpS8v.rwv1S.YxGqLwJ5u35avMuDBcdk/8SYnOJzNwy','','2006-02-14','','','','studying','2026-10-23 01:10:56','2026-10-31 12:45:17');
INSERT INTO "students" VALUES(8,'110124048','Nguyễn Minh Duy','110124048@st.tvu.edu.vn','DA24TTA','Công nghệ thông tin',3,'$2a$12$xP9k4s30CW9gLaD97KdyFevYAJgV6CScfyezlKxzkzehun8VfojRa','','2006-01-14','','','','studying','2026-10-23 01:10:56','2026-10-31 12:45:17');
INSERT INTO "students" VALUES(9,'110124033','Trần Quốc Đỉnh','110124033@st.tvu.edu.vn','DA24TTA','Công nghệ thông tin',3,'$2a$12$kmP22jfXfozD.J1HxNP2gefdtYTrcTaTSgMKQbT/47JnOcXpdr9yi','','2006-02-14','','','','studying','2026-10-23 01:10:56','2026-10-31 12:45:17');
INSERT INTO "students" VALUES(10,'110124070','Võ Bá Thành','110124070@st.tvu.edu.vn','DA24TTA','Công nghệ thông tin',3,'$2a$12$WsKa6Dn80PR/qzu1vhg5fuw7QnHZPntv3kJKpqEXJzU86nI9cDptK','','2006-06-30','','','','studying','2026-10-23 01:10:56','2026-10-31 12:45:17');
INSERT INTO "students" VALUES(11,'110124012','Lâm Trần Quế Chi','110124012@st.tvu.edu.vn','DA24TTA','Công nghệ thông tin',3,'$2a$12$qjdQB0XYV.YgGOgP2HivIOUf5msJJZjEbgWVk1H0UWs/A11GSDaN.','0900000001','2006-09-15','','','','studying','2026-10-23 01:24:29','2026-10-31 12:45:17');
INSERT INTO "students" VALUES(12,'110124139','Huỳnh Ngọc Như','110124139@st.tvu.edu.vn','DA24TTA','Công nghệ thông tin',3,'$2a$12$sds0QdX7lfhCM9SzsOALVevBHr4gLJhY5nWFr4uDz327oAN50RnrW','','2006-04-30','','','','studying','2026-10-23 01:24:29','2026-10-31 12:45:17');
CREATE TABLE submissions (
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
INSERT INTO "submissions" VALUES(139,14,5,'2024-11-01T10:00:00','',7.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(140,14,7,'2024-11-01T10:00:00','',7.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(141,14,11,'2024-11-01T10:00:00','',7.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(142,14,4,'2024-11-01T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(143,14,6,'2024-11-01T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(144,14,3,'2024-11-01T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(145,14,9,'2024-11-01T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(146,14,8,'2024-11-01T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(147,14,10,'2024-11-01T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(148,14,12,'2024-11-01T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(149,15,5,'2024-11-01T10:00:00','',7.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(150,15,7,'2024-11-01T10:00:00','',7.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(151,15,11,'2024-11-01T10:00:00','',7.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(152,15,4,'2024-11-01T10:00:00','',7.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(153,15,6,'2024-11-01T10:00:00','',7.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(154,15,3,'2024-11-01T10:00:00','',8.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(155,15,9,'2024-11-01T10:00:00','',8.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(156,15,8,'2024-11-01T10:00:00','',8.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(157,15,10,'2024-11-01T10:00:00','',8.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(158,15,12,'2024-11-01T10:00:00','',8.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(159,16,5,'2024-11-01T10:00:00','',7.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(160,16,7,'2024-11-01T10:00:00','',7.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(161,16,11,'2024-11-01T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(162,16,4,'2024-11-01T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(163,16,6,'2024-11-01T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(164,16,3,'2024-11-01T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(165,16,9,'2024-11-01T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(166,16,8,'2024-11-01T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(167,16,10,'2024-11-01T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(168,16,12,'2024-11-01T10:00:00','',9.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(169,17,5,'2024-11-01T10:00:00','',7.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(170,17,7,'2024-11-01T10:00:00','',7.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(171,17,11,'2024-11-01T10:00:00','',7.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(172,17,4,'2024-11-01T10:00:00','',7.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(173,17,6,'2024-11-01T10:00:00','',8.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(174,17,3,'2024-11-01T10:00:00','',8.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(175,17,9,'2024-11-01T10:00:00','',8.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(176,17,8,'2024-11-01T10:00:00','',8.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(177,17,10,'2024-11-01T10:00:00','',8.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(178,17,12,'2024-11-01T10:00:00','',9.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(179,18,5,'2024-11-01T10:00:00','',7.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(180,18,7,'2024-11-01T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(181,18,11,'2024-11-01T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(182,18,4,'2024-11-01T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(183,18,6,'2024-11-01T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(184,18,3,'2024-11-01T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(185,18,9,'2024-11-01T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(186,18,8,'2024-11-01T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(187,18,10,'2024-11-01T10:00:00','',9.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(188,18,12,'2024-11-01T10:00:00','',9.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(189,19,5,'2025-03-07T10:00:00','',7.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(190,19,7,'2025-03-07T10:00:00','',7.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(191,19,11,'2025-03-07T10:00:00','',7.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(192,19,4,'2025-03-07T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(193,19,6,'2025-03-07T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(194,19,3,'2025-03-07T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(195,19,9,'2025-03-07T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(196,19,8,'2025-03-07T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(197,19,10,'2025-03-07T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(198,19,12,'2025-03-07T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(199,20,5,'2025-03-07T10:00:00','',7.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(200,20,7,'2025-03-07T10:00:00','',7.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(201,20,11,'2025-03-07T10:00:00','',7.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(202,20,4,'2025-03-07T10:00:00','',7.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(203,20,6,'2025-03-07T10:00:00','',7.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(204,20,3,'2025-03-07T10:00:00','',8.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(205,20,9,'2025-03-07T10:00:00','',8.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(206,20,8,'2025-03-07T10:00:00','',8.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(207,20,10,'2025-03-07T10:00:00','',8.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(208,20,12,'2025-03-07T10:00:00','',8.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(209,21,5,'2025-03-07T10:00:00','',7.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(210,21,7,'2025-03-07T10:00:00','',7.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(211,21,11,'2025-03-07T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(212,21,4,'2025-03-07T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(213,21,6,'2025-03-07T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(214,21,3,'2025-03-07T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(215,21,9,'2025-03-07T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(216,21,8,'2025-03-07T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(217,21,10,'2025-03-07T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(218,21,12,'2025-03-07T10:00:00','',9.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(219,22,5,'2025-03-07T10:00:00','',7.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(220,22,7,'2025-03-07T10:00:00','',7.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(221,22,11,'2025-03-07T10:00:00','',7.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(222,22,4,'2025-03-07T10:00:00','',7.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(223,22,6,'2025-03-07T10:00:00','',8.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(224,22,3,'2025-03-07T10:00:00','',8.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(225,22,9,'2025-03-07T10:00:00','',8.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(226,22,8,'2025-03-07T10:00:00','',8.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(227,22,10,'2025-03-07T10:00:00','',8.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(228,22,12,'2025-03-07T10:00:00','',9.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(229,23,5,'2025-03-07T10:00:00','',7.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(230,23,7,'2025-03-07T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(231,23,11,'2025-03-07T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(232,23,4,'2025-03-07T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(233,23,6,'2025-03-07T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(234,23,3,'2025-03-07T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(235,23,9,'2025-03-07T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(236,23,8,'2025-03-07T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(237,23,10,'2025-03-07T10:00:00','',9.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(238,23,12,'2025-03-07T10:00:00','',9.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(239,24,5,'2025-03-07T10:00:00','',7.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(240,24,7,'2025-03-07T10:00:00','',7.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(241,24,11,'2025-03-07T10:00:00','',7.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(242,24,4,'2025-03-07T10:00:00','',8.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(243,24,6,'2025-03-07T10:00:00','',8.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(244,24,3,'2025-03-07T10:00:00','',8.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(245,24,9,'2025-03-07T10:00:00','',8.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(246,24,8,'2025-03-07T10:00:00','',8.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(247,24,10,'2025-03-07T10:00:00','',9.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(248,24,12,'2025-03-07T10:00:00','',9.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(249,25,5,'2025-03-07T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(250,25,7,'2025-03-07T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(251,25,11,'2025-03-07T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(252,25,4,'2025-03-07T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(253,25,6,'2025-03-07T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(254,25,3,'2025-03-07T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(255,25,9,'2025-03-07T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(256,25,8,'2025-03-07T10:00:00','',9.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(257,25,10,'2025-03-07T10:00:00','',9.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(258,25,12,'2025-03-07T10:00:00','',9.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(259,26,5,'2025-10-31T10:00:00','',7.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(260,26,7,'2025-10-31T10:00:00','',7.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(261,26,11,'2025-10-31T10:00:00','',7.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(262,26,4,'2025-10-31T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(263,26,6,'2025-10-31T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(264,26,3,'2025-10-31T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(265,26,9,'2025-10-31T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(266,26,8,'2025-10-31T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(267,26,10,'2025-10-31T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(268,26,12,'2025-10-31T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(269,27,5,'2025-10-31T10:00:00','',7.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(270,27,7,'2025-10-31T10:00:00','',7.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(271,27,11,'2025-10-31T10:00:00','',7.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(272,27,4,'2025-10-31T10:00:00','',7.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(273,27,6,'2025-10-31T10:00:00','',7.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(274,27,3,'2025-10-31T10:00:00','',8.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(275,27,9,'2025-10-31T10:00:00','',8.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(276,27,8,'2025-10-31T10:00:00','',8.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(277,27,10,'2025-10-31T10:00:00','',8.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(278,27,12,'2025-10-31T10:00:00','',8.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(279,28,5,'2025-10-31T10:00:00','',7.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(280,28,7,'2025-10-31T10:00:00','',7.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(281,28,11,'2025-10-31T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(282,28,4,'2025-10-31T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(283,28,6,'2025-10-31T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(284,28,3,'2025-10-31T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(285,28,9,'2025-10-31T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(286,28,8,'2025-10-31T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(287,28,10,'2025-10-31T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(288,28,12,'2025-10-31T10:00:00','',9.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(289,29,5,'2025-10-31T10:00:00','',7.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(290,29,7,'2025-10-31T10:00:00','',7.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(291,29,11,'2025-10-31T10:00:00','',7.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(292,29,4,'2025-10-31T10:00:00','',7.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(293,29,6,'2025-10-31T10:00:00','',8.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(294,29,3,'2025-10-31T10:00:00','',8.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(295,29,9,'2025-10-31T10:00:00','',8.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(296,29,8,'2025-10-31T10:00:00','',8.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(297,29,10,'2025-10-31T10:00:00','',8.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(298,29,12,'2025-10-31T10:00:00','',9.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(299,30,5,'2025-10-31T10:00:00','',7.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(300,30,7,'2025-10-31T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(301,30,11,'2025-10-31T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(302,30,4,'2025-10-31T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(303,30,6,'2025-10-31T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(304,30,3,'2025-10-31T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(305,30,9,'2025-10-31T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(306,30,8,'2025-10-31T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(307,30,10,'2025-10-31T10:00:00','',9.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(308,30,12,'2025-10-31T10:00:00','',9.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(309,31,5,'2025-10-31T10:00:00','',7.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(310,31,7,'2025-10-31T10:00:00','',7.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(311,31,11,'2025-10-31T10:00:00','',7.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(312,31,4,'2025-10-31T10:00:00','',8.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(313,31,6,'2025-10-31T10:00:00','',8.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(314,31,3,'2025-10-31T10:00:00','',8.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(315,31,9,'2025-10-31T10:00:00','',8.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(316,31,8,'2025-10-31T10:00:00','',8.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(317,31,10,'2025-10-31T10:00:00','',9.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(318,31,12,'2025-10-31T10:00:00','',9.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(319,32,5,'2025-10-31T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(320,32,7,'2025-10-31T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(321,32,11,'2025-10-31T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(322,32,4,'2025-10-31T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(323,32,6,'2025-10-31T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(324,32,3,'2025-10-31T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(325,32,9,'2025-10-31T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(326,32,8,'2025-10-31T10:00:00','',9.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(327,32,10,'2025-10-31T10:00:00','',9.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(328,32,12,'2025-10-31T10:00:00','',9.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(329,33,5,'2026-03-06T10:00:00','',7.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(330,33,7,'2026-03-06T10:00:00','',7.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(331,33,11,'2026-03-06T10:00:00','',7.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(332,33,4,'2026-03-06T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(333,33,6,'2026-03-06T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(334,33,3,'2026-03-06T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(335,33,9,'2026-03-06T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(336,33,8,'2026-03-06T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(337,33,10,'2026-03-06T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(338,33,12,'2026-03-06T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(339,34,5,'2026-03-06T10:00:00','',7.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(340,34,7,'2026-03-06T10:00:00','',7.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(341,34,11,'2026-03-06T10:00:00','',7.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(342,34,4,'2026-03-06T10:00:00','',7.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(343,34,6,'2026-03-06T10:00:00','',7.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(344,34,3,'2026-03-06T10:00:00','',8.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(345,34,9,'2026-03-06T10:00:00','',8.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(346,34,8,'2026-03-06T10:00:00','',8.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(347,34,10,'2026-03-06T10:00:00','',8.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(348,34,12,'2026-03-06T10:00:00','',8.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(349,35,5,'2026-03-06T10:00:00','',7.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(350,35,7,'2026-03-06T10:00:00','',7.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(351,35,11,'2026-03-06T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(352,35,4,'2026-03-06T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(353,35,6,'2026-03-06T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(354,35,3,'2026-03-06T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(355,35,9,'2026-03-06T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(356,35,8,'2026-03-06T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(357,35,10,'2026-03-06T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(358,35,12,'2026-03-06T10:00:00','',9.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(359,36,5,'2026-03-06T10:00:00','',7.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(360,36,7,'2026-03-06T10:00:00','',7.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(361,36,11,'2026-03-06T10:00:00','',7.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(362,36,4,'2026-03-06T10:00:00','',7.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(363,36,6,'2026-03-06T10:00:00','',8.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(364,36,3,'2026-03-06T10:00:00','',8.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(365,36,9,'2026-03-06T10:00:00','',8.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(366,36,8,'2026-03-06T10:00:00','',8.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(367,36,10,'2026-03-06T10:00:00','',8.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(368,36,12,'2026-03-06T10:00:00','',9.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(369,37,5,'2026-03-06T10:00:00','',7.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(370,37,7,'2026-03-06T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(371,37,11,'2026-03-06T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(372,37,4,'2026-03-06T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(373,37,6,'2026-03-06T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(374,37,3,'2026-03-06T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(375,37,9,'2026-03-06T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(376,37,8,'2026-03-06T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(377,37,10,'2026-03-06T10:00:00','',9.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(378,37,12,'2026-03-06T10:00:00','',9.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(379,38,5,'2026-03-06T10:00:00','',7.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(380,38,7,'2026-03-06T10:00:00','',7.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(381,38,11,'2026-03-06T10:00:00','',7.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(382,38,4,'2026-03-06T10:00:00','',8.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(383,38,6,'2026-03-06T10:00:00','',8.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(384,38,3,'2026-03-06T10:00:00','',8.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(385,38,9,'2026-03-06T10:00:00','',8.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(386,38,8,'2026-03-06T10:00:00','',8.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(387,38,10,'2026-03-06T10:00:00','',9.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(388,38,12,'2026-03-06T10:00:00','',9.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(389,39,5,'2026-03-06T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(390,39,7,'2026-03-06T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(391,39,11,'2026-03-06T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(392,39,4,'2026-03-06T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(393,39,6,'2026-03-06T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(394,39,3,'2026-03-06T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(395,39,9,'2026-03-06T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(396,39,8,'2026-03-06T10:00:00','',9.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(397,39,10,'2026-03-06T10:00:00','',9.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(398,39,12,'2026-03-06T10:00:00','',9.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(399,40,5,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(400,40,7,'2026-11-03T10:00:00','',7.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(401,40,11,'2026-11-03T10:00:00','',7.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(402,40,4,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(403,40,6,'2026-11-03T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(404,40,3,'2026-11-03T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(405,40,9,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(406,40,8,'2026-11-03T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(407,40,10,'2026-11-03T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(408,40,12,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(409,41,5,'2026-11-04T10:00:00','',7.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(410,41,7,'2026-11-04T10:00:00','',7.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(411,41,11,'2026-11-04T10:00:00','',7.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(412,41,4,'2026-11-04T10:00:00','',7.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(413,41,6,'2026-11-04T10:00:00','',7.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(414,41,3,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(415,41,9,'2026-11-04T10:00:00','',8.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(416,41,8,'2026-11-04T10:00:00','',8.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(417,41,10,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(418,41,12,'2026-11-04T10:00:00','',8.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(419,42,5,'2026-11-05T10:00:00','',7.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(420,42,7,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(421,42,11,'2026-11-05T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(422,42,4,'2026-11-05T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(423,42,6,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(424,42,3,'2026-11-05T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(425,42,9,'2026-11-05T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(426,42,8,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(427,42,10,'2026-11-05T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(428,42,12,'2026-11-05T10:00:00','',9.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(429,43,5,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(430,43,7,'2026-11-06T10:00:00','',7.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(431,43,11,'2026-11-06T10:00:00','',7.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(432,43,4,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(433,43,6,'2026-11-06T10:00:00','',8.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(434,43,3,'2026-11-06T10:00:00','',8.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(435,43,9,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(436,43,8,'2026-11-06T10:00:00','',8.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(437,43,10,'2026-11-06T10:00:00','',8.9,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(438,43,12,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(439,44,5,'2026-11-07T10:00:00','',7.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(440,44,7,'2026-11-07T10:00:00','',7.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(441,44,11,'2026-11-07T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(442,44,4,'2026-11-07T10:00:00','',8.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(443,44,6,'2026-11-07T10:00:00','',8.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(444,44,3,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(445,44,9,'2026-11-07T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(446,44,8,'2026-11-07T10:00:00','',8.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(447,44,10,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(448,44,12,'2026-11-07T10:00:00','',9.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(449,45,5,'2026-11-08T10:00:00','',7.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(450,45,7,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(451,45,11,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(452,45,4,'2026-11-08T10:00:00','',8.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(453,45,6,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(454,45,3,'2026-11-08T10:00:00','',8.5,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(455,45,9,'2026-11-08T10:00:00','',8.7,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(456,45,8,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(457,45,10,'2026-11-08T10:00:00','',9.1,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(458,45,12,'2026-11-08T10:00:00','',9.3,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(459,46,5,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(460,46,7,'2026-11-09T10:00:00','',7.8,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(461,46,11,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(462,46,4,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(463,46,6,'2026-11-09T10:00:00','',8.4,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(464,46,3,'2026-11-09T10:00:00','',8.6,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(465,46,9,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
INSERT INTO "submissions" VALUES(466,46,8,'2026-11-09T10:00:00','',9.0,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(467,46,10,'2026-11-09T10:00:00','',9.2,'Đã ghi nhận kết quả bài tập demo.','graded');
INSERT INTO "submissions" VALUES(468,46,12,NULL,'',NULL,'Chưa nộp bài.','not_submitted');
CREATE INDEX idx_semester_courses_semester ON semester_courses(semester_id);
CREATE INDEX idx_assignments_due ON assignments(due_at);
CREATE INDEX idx_schedule_student_date ON schedule_sessions(student_id, session_date);
CREATE INDEX idx_enrollments_student ON enrollments(student_id);
CREATE INDEX idx_class_schedule_class_date
ON class_schedule_sessions(class_name, session_date, start_time);
DELETE FROM "sqlite_sequence";
INSERT INTO "sqlite_sequence" VALUES('students',20);
INSERT INTO "sqlite_sequence" VALUES('semesters',28);
INSERT INTO "sqlite_sequence" VALUES('courses',119);
INSERT INTO "sqlite_sequence" VALUES('semester_courses',119);
INSERT INTO "sqlite_sequence" VALUES('enrollments',990);
INSERT INTO "sqlite_sequence" VALUES('student_settings',22);
INSERT INTO "sqlite_sequence" VALUES('assignments',46);
INSERT INTO "sqlite_sequence" VALUES('submissions',468);
INSERT INTO "sqlite_sequence" VALUES('certificates',22);
INSERT INTO "sqlite_sequence" VALUES('schedule_sessions',66);
INSERT INTO "sqlite_sequence" VALUES('attendance',66);
INSERT INTO "sqlite_sequence" VALUES('class_schedule_sessions',136);
COMMIT;
