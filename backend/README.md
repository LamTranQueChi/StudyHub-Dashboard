# StudyHub – bản đã kết nối Backend và SQLite

## 1. Công nghệ
- Frontend: HTML, CSS, JavaScript.
- Backend: Node.js 22, Express.
- Database: SQLite (`backend/data/studyhub.sqlite`).
- Xác thực: JWT trong HttpOnly cookie, mật khẩu bcrypt.
- Biểu đồ: Chart.js 4.

## 2. Cài đặt và chạy
1. Cài Node.js 22.
2. Mở Terminal tại thư mục `backend`.
3. Chạy `npm install`.
4. Sao chép `.env.example` thành `.env`, đổi `JWT_SECRET` thành chuỗi bí mật ngẫu nhiên.
5. Chạy `npm start`. API chạy tại `http://localhost:3000`.
6. Mở thư mục dự án bằng VS Code, chạy Live Server trên cổng 5500. Truy cập `html/login.html`.
   - Có thể dùng `localhost:5500` hoặc `127.0.0.1:5500`; `auth.js` tự dùng hostname hiện tại để gọi API.

## 3. Tài khoản
Email đăng nhập là `MSSV@st.tvu.edu.vn`. Mật khẩu mặc định là ngày sinh theo định dạng `ddmmyyyy`.

| MSSV | Họ tên | Email | Mật khẩu |
|---|---|---|---|
| 110124012 | Lâm Trần Quế Chi | 110124012@st.tvu.edu.vn | 15092006 |
| 110124139 | Huỳnh Ngọc Như | 110124139@st.tvu.edu.vn | 30042006 |
| 110124032 | Lê Thúy Diễm | 110124032@st.tvu.edu.vn | 15012006 |
| 110124020 | Vũ Thị Nhựt Đang | 110124020@st.tvu.edu.vn | 26092006 |
| 110124003 | Nguyễn Thị Trúc Lam | 110124003@st.tvu.edu.vn | 25042006 |
| 110124022 | Dương Hữu Minh | 110124022@st.tvu.edu.vn | 20072006 |
| 110124006 | Ngô Hoài Linh | 110124006@st.tvu.edu.vn | 14022006 |
| 110124048 | Nguyễn Minh Duy | 110124048@st.tvu.edu.vn | 14012006 |
| 110124033 | Trần Quốc Đỉnh | 110124033@st.tvu.edu.vn | 14022006 |
| 110124070 | Võ Bá Thành | 110124070@st.tvu.edu.vn | 30062006 |

## 4. Dữ liệu và API
- `backend/data/studyhub.sqlite` là CSDL đang được Backend sử dụng.
- `backend/data/studyhub.sql` là bản SQL có thể import để dựng lại cùng cấu trúc và dữ liệu.
- `GET /api/health`: kiểm tra Backend.
- `POST /api/auth/login`, `GET /api/auth/me`, `POST /api/auth/logout`: đăng nhập/phiên.
- `GET /api/student/dashboard`: dữ liệu tổng quan riêng của sinh viên đang đăng nhập, gồm môn học, điểm, bài tập, tiến độ, lịch lớp và phân bố điểm.
- `GET /api/student/courses`, `/assignments`, `/schedule`: dữ liệu các trang theo sinh viên và lớp.

## 5. Dữ liệu mẫu cần lưu ý
Danh sách sinh viên, ngày sinh, email, lớp, ngành, năm học và 33 môn học/giảng viên/phòng học/tín chỉ được nhập theo dữ liệu bạn cung cấp. Bảng điểm, tiến độ và trạng thái bài tập hiện là **dữ liệu mẫu riêng từng tài khoản** để kiểm thử dashboard và biểu đồ Chart.js vì bạn chưa cung cấp bảng điểm/bài tập thực tế. Lịch lớp mẫu dùng chung cho DA24TTA; cần thay bằng lịch chính thức của lớp khi có dữ liệu.

## 6. Sao lưu
Trước khi thay đổi dữ liệu, sao lưu `backend/data/studyhub.sqlite`. Các bản database cũ được chuyển vào `backend/backups/` để tránh nhầm với database đang chạy.
