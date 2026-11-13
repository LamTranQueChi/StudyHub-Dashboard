/* StudyHub i18n: Vietnamese/English language switch shared across all pages. */
(() => {
  'use strict';

  const STORAGE_KEY = 'studyHubLanguage';
  const PREFERENCES_KEY = 'studyHubPreferences';
  const VI_TO_EN = {
    'StudyHub - Đăng nhập': 'StudyHub - Sign in',
    'StudyHub - Tổng quan học tập': 'StudyHub - Learning dashboard',
    'StudyHub - Cài đặt tài khoản': 'StudyHub - Account settings',
    'StudyHub - Danh sách bài tập': 'StudyHub - Assignments',
    'StudyHub - Thời khóa biểu & Lịch học': 'StudyHub - Timetable & Schedule',
    'StudyHub - Danh sách môn học': 'StudyHub - Courses',
    'StudyHub - Hồ sơ sinh viên': 'StudyHub - Student profile',
    'Tổng quan': 'Dashboard',
    'Tín chỉ': 'Credits',
    'Tổng quan học tập': 'Learning overview',
    'Lịch học': 'Schedule',
    'Cài đặt': 'Settings',
    'Đăng xuất': 'Sign out',
    'STUDENT PORTAL': 'STUDENT PORTAL',
    'Cập nhật lúc 08:30 hôm nay': 'Updated at 08:30 today',
    'Vui lòng nhập họ và tên.': 'Please enter your full name.',
    'Đã lưu thông tin thành công!': 'Information saved successfully!',
    'Không thể lưu dữ liệu. Hãy kiểm tra bộ nhớ trình duyệt.': 'Could not save data. Please check browser storage.',
    'Vui lòng chọn ảnh JPG, PNG hoặc WEBP.': 'Please choose a JPG, PNG, or WEBP image.',
    'Ảnh không được vượt quá 2 MB.': 'The image must not exceed 2 MB.',
    'Đã cập nhật ảnh đại diện!': 'Profile photo updated!',
    'Không thể lưu ảnh. Hãy chọn ảnh nhỏ hơn.': 'Could not save the image. Please choose a smaller one.',
    'Không thể đọc ảnh đã chọn.': 'Could not read the selected image.',
    'Đã khôi phục ảnh đại diện mặc định.': 'Default profile photo restored.',
    'Không thể khôi phục ảnh đại diện.': 'Could not restore the default profile photo.',
    'Đã lưu tùy chọn thành công.': 'Preferences saved successfully.',
    'Đã lưu tùy chọn thành công!': 'Preferences saved successfully!',
    'Đã hoàn tất thao tác!': 'Action completed successfully!',
    'Không thể lưu tùy chọn. Hãy kiểm tra cài đặt trình duyệt.': 'Could not save preferences. Please check your browser settings.',
    'Vui lòng nhập đầy đủ các trường mật khẩu.': 'Please complete all password fields.',
    'Mật khẩu xác nhận không khớp.': 'The confirmation password does not match.',
    'Mật khẩu mới phải có ít nhất 8 ký tự.': 'The new password must be at least 8 characters long.',
    'Đổi mật khẩu thành công!': 'Password changed successfully!',
    'Đổi mật khẩu thất bại. Vui lòng kiểm tra mật khẩu hiện tại!': 'Password change failed. Please check your current password!',
    'Đã xảy ra lỗi khi đổi mật khẩu. Vui lòng thử lại!': 'An error occurred while changing the password. Please try again!',
    'Không thể lưu. Vui lòng thử lại!': 'Could not save. Please try again!',
    'Bài tập và lịch học': 'Assignments & schedule',
    'Bài tập sắp đến hạn': 'Upcoming deadlines',
    'Bài tập JavaScript DOM': 'JavaScript DOM assignment',
    'Bài tập CSDL - Truy vấn': 'Database assignment - Queries',
    'Báo cáo thực hành': 'Practical report',
    'Nộp trước 23/10/2026': 'Due before 23/10/2026',
    'Nộp trước 26/10/2026': 'Due before 26/10/2026',
    'Nộp trước 30/10/2026': 'Due before 30/10/2026',
    'Còn 2 ngày': '2 days left',
    'Còn 5 ngày': '5 days left',
    'Lịch học hôm nay': "Today's schedule",
    'Giảng viên:': 'Lecturer:',
    'TÀI KHOẢN CỦA BẠN': 'YOUR ACCOUNT',
    'Cài đặt tài khoản': 'Account settings',
    'Thông tin cá nhân': 'Personal information',
    'Ảnh đại diện': 'Profile photo',
    'Chọn ảnh': 'Choose photo',
    'Họ và tên': 'Full name',
    'Mã sinh viên': 'Student ID',
    'Email': 'Email',
    'Số điện thoại': 'Phone number',
    'Lớp': 'Class',
    'Ngành học': 'Major',
    'Giới thiệu bản thân': 'About me',
    'Sinh viên Công nghệ thông tin, quan tâm đến Frontend Development.': 'Information Technology student interested in Frontend Development.',
    'Viết vài dòng giới thiệu về bạn...': 'Write a few lines about yourself...',
    'Ghi chú cá nhân': 'Personal note',
    'Nhập ghi chú của bạn...': 'Enter your note...',
    'Lưu thay đổi': 'Save changes',
    'Hãy đổi mật khẩu sau lần đăng nhập đầu tiên!': 'Please change your password after your first sign-in!',
    'Đăng nhập': 'Sign in',
    'Email sinh viên': 'Student email',
    'Mật khẩu': 'Password',
    'Danh sách bài tập': 'Assignment list',

    'Tất cả': 'All',
    'Hãy thử tìm theo tên môn học, mã môn hoặc tên giảng viên.': 'Try searching by course name, course code, or lecturer.',
    'tín chỉ': 'credits',
    'Điểm quá trình': 'Coursework score',
    'GV:': 'Lecturer:',
    'Phòng': 'Room',
    'Tiến độ bài tập': 'Assignment progress',
    'Lịch học tiếp theo trong tuần': 'Next classes this week',
    'Bạn có 3 buổi học trực tiếp tại phòng máy trong 48 giờ tới': 'You have 3 in-person lab sessions in the next 48 hours',
    'Giảng viên': 'Lecturer',
    'Buổi học hôm nay': "Today's class", 
    'Thực hành': 'Practical',
    'Lý thuyết': 'Theory',
    'Thực hành Lab': 'Lab practice',
    'Đại cương': 'General education',
    'Sắp tới (30 phút nữa)': 'Upcoming (in 30 minutes)',
    'Sắp tới (Ngày mai)': 'Upcoming (tomorrow)',
    'Không tìm thấy buổi học phù hợp.': 'No matching classes found.',
    'sẽ không đủ điều kiện dự thi kết thúc học phần. Hệ thống điểm danh tự động đóng sau 15 phút đầu giờ học.': 'will not be eligible to take the final exam. Attendance closes automatically 15 minutes after class begins.',
    'Tỷ lệ chuyên cần kỳ này: 96.5%': 'Attendance rate this semester: 96.5%',
    'Hồ sơ:': 'Profile:',
    'Đang tải hồ sơ...': 'Loading profile...',
    'Đang tải kết quả học tập...': 'Loading academic results...',
    'MSSV:': 'Student ID:',
    'Tiện ích ghi chú nhanh': 'Quick-note widget',
    'Biểu đồ điểm theo môn học': 'Course score chart',
    'Biểu đồ phân bố điểm': 'Score distribution chart',
    'Lớp:': 'Class:',
    'Ngành học:': 'Major:',
    'Email:': 'Email:',

    'Đang tải bảng điểm...': 'Loading transcript...',
    'Đang tải dữ liệu điểm...': 'Loading score data...',
    'Đang tải nhận xét học kỳ...': 'Loading semester feedback...',
    'Đang tải dữ liệu...': 'Loading data...',
    'Không thể kết nối máy chủ.': 'Unable to connect to the server.',
    'Vui lòng nhập email và mật khẩu.': 'Please enter your email and password.',
    'Đăng nhập thành công!': 'Signed in successfully!',
    'Bạn hiện không có thông báo mới.': 'You have no new notifications.',
    'Không tìm thấy mục phù hợp.': 'No matching items found.',
    'Đã hiểu': 'Got it',
    'Hủy': 'Cancel',
    'Bạn có chắc muốn đăng xuất khỏi StudyHub không?': 'Are you sure you want to sign out of StudyHub?',
    'Vui lòng kiểm tra Backend và thử tải lại trang.': 'Please check the backend and reload the page.',
    'Lưu lựa chọn': 'Save selection',
    'Chọn học kỳ và năm học': 'Select semester and academic year',
    'Nhấn để chọn học kỳ': 'Click to select semester',
    'Tìm tên bài, môn học...': 'Search assignment or course...',
    'Tìm bài tập': 'Search assignments',
    'Sắp xếp bài tập': 'Sort assignments',
    'Tìm kiếm môn học, giảng viên, mã môn...': 'Search courses, lecturers, or course codes...',
    'Tìm môn học, giảng viên hoặc mã học phần...': 'Search courses, lecturers, or course codes...',
    'MSSV@st.tvu.edu.vn': 'StudentID@st.tvu.edu.vn',
    'Ngày sinh ddmmyyyy (ví dụ 15092006)': 'Date of birth ddmmyyyy (e.g. 15092006)',
    'Chưa có': 'Not available',
    'Chưa cập nhật': 'Not updated',
    'Chưa có hạn': 'No deadline',
    'Chưa nộp': 'Not submitted',
    'Đã nộp': 'Submitted',
    'Xem lại': 'Review',
    'Xem chi tiết': 'View details',
    'Điểm:': 'Score:',
    'Hạn nộp:': 'Due:',
    'Mã HP:': 'Course code:',
    'Không có dữ liệu lịch học': 'No schedule data available',
    'Chưa có buổi học sắp tới': 'No upcoming classes',
    'Lịch sử học kỳ': 'Semester history',
    'Không thể tải dữ liệu': 'Unable to load data',
    'Lỗi': 'Error',
    'Điều hướng chính': 'Main navigation',
    'Cần kiểm tra ngày học': 'Please check the class date',
    'Buổi học tiếp theo': 'Next class',
    'Buổi học gần nhất': 'Nearest class',
    'Lớp của bạn': 'Your class',
    'Chức năng đồng bộ Google Calendar cần được kết nối với tài khoản Google.': 'Google Calendar sync requires a connected Google account.',
    'Chức năng điểm danh sẽ hoạt động khi backend được bổ sung phiên điểm danh.': 'Attendance will be available when an attendance session is added to the backend.',
    'Chưa có dữ liệu điểm danh để hiển thị.': 'No attendance data to display.',
    'Vui lòng liên hệ cán bộ quản lý giảng đường để báo sự cố.': 'Please contact the lecture hall administrator to report the issue.',
    'Không có bài tập phù hợp': 'No matching assignments',
    'Học kỳ này chưa có bài tập hoặc không khớp bộ lọc.': 'There are no assignments for this semester or none match the filters.',
    'Nhập ghi chú học tập của bạn:': 'Enter your study note:',
    'Đã lưu ghi chú học tập!': 'Study note saved!',
    'Lịch học sắp tới': 'Upcoming schedule',
    'Ghi chú đang mở': 'Note is open',
    'Mã số sinh viên: Chưa cập nhật': 'Student ID: Not updated',
    'Chưa cập nhật thông tin sinh viên': 'Student information has not been updated',
    'Đạt': 'Passed',
    'Chưa đạt': 'Not passed',
    'Điểm hiện tại': 'Current score',
    'Chưa có file đề cương được đính kèm cho học kỳ này.': 'No course outline file is attached for this semester.',
    'Không tải được thời khóa biểu. Vui lòng kiểm tra kết nối Backend.': 'Could not load the timetable. Please check the backend connection.',
    'Không tải được danh sách môn học. Vui lòng đăng nhập lại.': 'Could not load the course list. Please sign in again.',
    'Không tải được thư viện biểu đồ. Vui lòng kiểm tra kết nối Internet.': 'Could not load the chart library. Please check your Internet connection.',
    'Chưa có điểm số để thống kê.': 'No scores available for analysis.',
    'Học kỳ này chưa mở nên chưa có môn học, bảng điểm hoặc dữ liệu phân bố điểm.': 'This semester is not open yet, so there are no courses, transcript, or score distribution data.',
    'Học kỳ này chưa có môn học phù hợp.': 'There are no matching courses in this semester.',
    'Nhà trường chưa mở dữ liệu cho học kỳ này. Lịch học sẽ xuất hiện khi có thông báo.': 'The university has not opened data for this semester. The schedule will appear when it is announced.',
    'Học kỳ này chưa có thời khóa biểu để hiển thị.': 'There is no timetable to display for this semester.',
    'Học kỳ này chưa được nhà trường mở dữ liệu. Vui lòng quay lại sau.': 'The university has not opened data for this semester yet. Please check back later.',
    'Chưa có buổi học nào được công bố cho học kỳ này.': 'No classes have been announced for this semester.',
    'Học kỳ đã kết thúc nhưng chưa có dữ liệu lịch học được lưu.': 'The semester has ended, but no schedule data was saved.',
    'Hiện chưa có buổi học nào được cập nhật cho học kỳ này.': 'No classes have been updated for this semester yet.',
    'Không có buổi học nào được công bố cho học kỳ này.': 'No classes have been announced for this semester.',
    'Học kỳ này chưa có bài tập.': 'There are no assignments for this semester.',
    'Không tải được danh sách bài tập.': 'Could not load the assignment list.',
    'Không tải được dữ liệu dashboard. Hãy đăng nhập lại.': 'Could not load dashboard data. Please sign in again.',
    'Học kỳ này chưa có điểm tổng kết để phân bố.': 'There are no final scores to display for this semester.',
    'Không thể tải bảng điểm từ máy chủ.': 'Could not load the transcript from the server.',
    'Học kỳ này chưa có môn học.': 'There are no courses in this semester.',
    'Không thể kết nối máy chủ. Hãy kiểm tra Backend.': 'Unable to connect to the server. Please check the backend.',
    'Đang tải': 'Loading',
    'Không thể kết nối Backend. Hãy kiểm tra máy chủ và tải lại trang.': 'Could not connect to the backend. Check the server and reload the page.',
    'Không tìm thấy đầy đủ các ô mật khẩu. Vui lòng kiểm tra HTML của form đổi mật khẩu.': 'Some password fields are missing. Please check the change-password form HTML.',
    'Chức năng đổi mật khẩu chưa được khởi tạo. Vui lòng tải auth.js trước caidat.js.': 'The password-change feature is not initialized. Load auth.js before caidat.js.',
    'Không nhận được kết quả đổi mật khẩu. Vui lòng thử lại!': 'No password-change result was received. Please try again!',
    'Đây là trường thông tin đã được lưu trong hồ sơ sinh viên nên không thể thay đổi.': 'This information is saved in the student profile and cannot be changed here.',
    'Đã hoàn tất thao tác!': 'Action completed!',
    'Đóng thông báo': 'Close notification',
    'Không thể lưu hồ sơ.': 'Could not save the profile.',
    'Không đọc được hồ sơ.': 'Could not read the profile.',
    'Đã xảy ra lỗi. Vui lòng thử lại.': 'An error occurred. Please try again.',
    'Vui lòng nhập email theo dạng MSSV@st.tvu.edu.vn.': 'Please enter your email in the format StudentID@st.tvu.edu.vn.',
    'Máy chủ chưa trả đầy đủ thông tin đăng nhập.': 'The server did not return complete sign-in information.',
    'Không tìm thấy thông tin sinh viên.': 'Student information was not found.',
    'Đổi mật khẩu thành công.': 'Password changed successfully.',
    'Điểm môn học': 'Course score',
    'Giỏi (≥ 8.5)': 'Excellent (≥ 8.5)',
    'Khá (7–8.4)': 'Good (7–8.4)',
    'Trung bình (5–6.9)': 'Average (5–6.9)',
    'Yếu (< 5)': 'Weak (< 5)',

    'Tui là sinh viên năm 3': 'I am a third-year student.',


    'Buổi học nổi bật; không sử dụng mã QR': 'Featured class; no QR code required',
    'Thông báo khi không có kết quả': 'Empty-state notice',
    'Tiêu đề trang': 'Page title',
    'Nội dung chính': 'Main content',

    'Form hồ sơ': 'Profile form',
    'Môn 1': 'Course 1',
    'Môn 2': 'Course 2',
    'Môn 3': 'Course 3',
    'Môn 4': 'Course 4',
    'Môn 5': 'Course 5',
    'Môn 6': 'Course 6',
    'CS204 • 3 tín chỉ': 'CS204 • 3 credits',
    'DB102 • 4 tín chỉ': 'DB102 • 4 credits',
    'FE101 • 3 tín chỉ': 'FE101 • 3 credits',
    'NW201 • 3 tín chỉ': 'NW201 • 3 credits',
    'OOP301 • 4 tín chỉ': 'OOP301 • 4 credits',
    'OS202 • 4 tín chỉ': 'OS202 • 4 credits',
    'GV: ThS. Trần Văn Nam': 'Lecturer: M.A. Trần Văn Nam',
    'GV: TS. Nguyễn Thị Bích': 'Lecturer: Ph.D. Nguyễn Thị Bích',
    'GV: ThS. Lê Hoàng Quân': 'Lecturer: M.A. Lê Hoàng Quân',
    'GV: TS. Vũ Đức Trí': 'Lecturer: Ph.D. Vũ Đức Trí',
    'GV: ThS. Đặng Minh Châu': 'Lecturer: M.A. Đặng Minh Châu',
    'GV: PGS.TS. Phạm Tuấn Anh': 'Lecturer: Assoc. Prof. Ph.D. Phạm Tuấn Anh',
    'Phòng A.202 (Khu Công Nghệ)': 'Room A.202 (Technology Area)',
    'Phòng B.101 (Giảng đường 1)': 'Room B.101 (Lecture Hall 1)',
    'Phòng C.305 (Studio Design)': 'Room C.305 (Design Studio)',
    'Phòng C.203 (Lab Cisco)': 'Room C.203 (Cisco Lab)',
    'Phòng D.104 (Khu Thực hành)': 'Room D.104 (Practice Area)',
    'Phòng B.402 (Phòng Máy A)': 'Room B.402 (Computer Lab A)',
    'ThS. Trần Anh Tuấn': 'M.A. Trần Anh Tuấn',
    'TS. Nguyễn Thị Mai': 'Ph.D. Nguyễn Thị Mai',
    'ThS. Lê Văn Cường': 'M.A. Lê Văn Cường',
    'PGS. TS. Hoàng Minh Đạt': 'Assoc. Prof. Ph.D. Hoàng Minh Đạt',
    'TS. Phạm Quốc Hưng': 'Ph.D. Phạm Quốc Hưng',
    'Phòng A102 (Tầng 1 - Khu A)': 'Room A102 (Floor 1 - Block A)',
    'CNTT21A • 48 sinh viên': 'IT21A • 48 students',
    'Tiến độ buổi học (Đã trôi qua 65 phút / 120 phút)': 'Class progress (65 of 120 minutes elapsed)',
    '20% tổng số tiết': '20% of total class periods',
    'Công nghệ thông tin': 'Information Technology',
    '+0.3 so với HK trước': '+0.3 compared with previous semester',
    'Font Nunito Sans: đồng bộ với trang Cài đặt': 'Nunito Sans font: consistent with Settings',
    'Font và icon phổ biến': 'Common fonts and icons',
    'Font chữ và icon': 'Fonts and icons',
    'CSS dùng chung và CSS riêng của trang bài tập': 'Shared CSS and assignment-page CSS',
    'Mở ghi chú nhanh': 'Open quick note',
    'Thu nhỏ ghi chú': 'Collapse note',
    'Thu nhỏ': 'Collapse',
    'Ví dụ: Ôn tập JavaScript DOM, hoàn thành bài tập Cơ sở dữ liệu...': 'Example: Review JavaScript DOM and finish the Database assignment...',
    'Lưu ghi chú!': 'Note saved!',
    'Không thể lưu ghi chú!': 'Could not save note!',
    'Khóa học chưa mở': 'Course not available yet',
    'Học kỳ này hiện chưa được mở. Vui lòng quay lại khi nhà trường cập nhật chương trình học.': 'This semester is not open yet. Please check back when the university updates the curriculum.',
    'CSS dùng chung và CSS riêng trang lịch học': 'Shared CSS and schedule-page CSS',
    'CSS chung của dự án và CSS riêng trang hồ sơ': 'Project-wide CSS and student-profile CSS',
    'Các thành phần dùng chung được nạp từ components': 'Shared components are loaded from the components folder',
    'Sidebar được nạp từ components/sidebar.html': 'Sidebar loaded from components/sidebar.html',
    'Topbar được nạp từ components/topbar.html': 'Topbar loaded from components/topbar.html',
    'Footer được nạp từ components/footer.html': 'Footer loaded from components/footer.html',

    'Áp dụng giao diện đã lưu trước khi khởi tạo các chức năng khác': 'Apply the saved theme before initializing other features',
    'StudyHub': 'StudyHub',
    'Google Fonts': 'Google Fonts',
    'Material Symbols': 'Material Symbols',
    'JavaScript': 'JavaScript',
    'CSS': 'CSS',
    'EN': 'EN',
    'Ghi chú nhanh dạng tiện ích nổi: thu gọn thành icon, bấm để mở rộng': 'Quick note widget: collapse into an icon and click to expand.',
    'Học phần chuyên ngành': 'Major course',
    'Thực hành Frontend': 'Frontend practice',
    'Mạng & Hạ tầng': 'Networking & Infrastructure',
    'Linux & Tiến trình': 'Linux & Processes',
    'Chuyên ngành KTPM': 'Software Engineering major',
    'Học kỳ II · Tuần 09': 'Semester II · Week 09',
    'Tất cả (Tuần này)': 'All (This week)',
    'Chủ nhật': 'Sunday',
    'Thứ 2': 'Monday',
    'Thứ 3': 'Tuesday',
    'Thứ 4': 'Wednesday',
    'Thứ 5': 'Thursday',
    'Thứ 6': 'Friday',
    'Thứ 7': 'Saturday',
    'Ca sáng': 'Morning session',
    'Ca chiều': 'Afternoon session',
    'Chưa mở': 'Not open',
    'sắp tới': 'upcoming',
    'Chưa cập nhật MSSV': 'Student ID not updated',
    '✓ Đã hoàn thành': '✓ Completed',

    'Nộp trước': 'Due by',
    'Còn 1 tuần': '1 week left',
    'tổng số tiết': 'of total class periods',
    'Hotline giảng đường:': 'Campus hotline:',
    'Báo đổi phòng': 'Report a room change',
    'Tỷ lệ chuyên cần kỳ này:': 'Attendance rate this semester:',
    'Chưa có dữ liệu điểm danh': 'No attendance data yet',
    'Khá tốt': 'Good',
    'Cần cải thiện': 'Needs improvement',

    'Có mặt': 'Present',
    'Đi muộn': 'Late',
    'Vắng có phép': 'Excused absences',
    'Vắng không phép': 'Unexcused absences',
    'buổi đã điểm danh': 'marked sessions',
    'Đang tải tỷ lệ chuyên cần...': 'Loading attendance rate...',
    'Chọn ngôn ngữ': 'Choose language',
    'Nút X đóng sidebar, chỉ hiện khi màn hình <= 900px': 'Close sidebar button, shown only on screens <= 900px',
    'Thông báo nổi khi lưu học kỳ': 'Notification shown when the semester is saved',
    'Lưu thành công!': 'Saved successfully!',
    'Thông tin học kỳ đã được cập nhật.': 'Semester information has been updated.',
    'Hỗ trợ học tập và quản lý tiến độ học tập.': 'Supporting learning and tracking academic progress.',
    '© 2026 StudyHub - Student Portal': '© 2026 StudyHub - Student Portal',
    'Nội dung dashboard': 'Dashboard content',
    'Tiêu đề': 'Heading',
    'Các thẻ thống kê': 'Statistics cards',
    'Thống kê': 'Statistics',
    'Danh sách môn học': 'Course list',
    'Lối tắt lịch học': 'Schedule shortcuts',
    'Nếu phòng máy hỏng máy chiếu, điều hòa hoặc giảng viên có thông báo chuyển giảng đường đột xuất, vui lòng gửi phản hồi ngay tới Ban Quản lý Giảng đường.': 'If a classroom projector or air conditioner is not working, or a lecturer announces an unexpected room change, please report it to the Lecture Hall Management Office.',
    'Điểm danh trực tuyến': 'Online attendance',
    'Nhóm lớp': 'Class group',
    'Tiến độ buổi học': 'Class progress',
    'Tất cả buổi học': 'All classes',
    'Đang tải dữ liệu điểm danh...': 'Loading attendance data...',
    'Chưa có dữ liệu': 'No data available',
    'Đã ghi nhận': 'Recorded',
    'Số buổi': 'Sessions',
    'Tổng số buổi': 'Total sessions',
    'Đã điểm danh': 'Marked attendance',
    'Điểm danh': 'Attendance',
    'Sinh viên': 'Students',
    'Bài tập': 'Assignments',
    'Khóa học': 'Course',
    'Đang học': 'In progress',
    'Đã hoàn thành': 'Completed',
    'Chưa hoàn thành': 'Incomplete',
    'Đã kết thúc': 'Ended',
    'Chưa bắt đầu': 'Not started',
    'Đã diễn ra': 'Completed',
    'Sắp tới': 'Upcoming',
    'Đang diễn ra': 'In progress',
    'Đang mở': 'Open',
    'Học kỳ chưa mở': 'Semester not available yet',
    'Chưa có lịch học': 'No schedule available',
    'Chưa có thời khóa biểu': 'No timetable available',
    'Không tìm thấy môn học phù hợp': 'No matching courses found',
    'Không tìm thấy bài tập': 'No assignments found',
    'Địa điểm': 'Location',
    'Tải đề cương môn': 'Download course outline',
    'Xem thời khóa biểu': 'View timetable',
    'Ảnh đại diện hiện tại': 'Current profile photo',
    'Ảnh đại diện tài khoản': 'Account profile photo',
    'Ảnh đại diện sinh viên': 'Student profile photo',
    'Tìm kiếm trang: Tổng quan, Sinh viên, Môn học...': 'Search pages: Dashboard, Students, Courses...',
    'Tìm kiếm trang trong Sidebar': 'Search pages in the sidebar',
    'Mở cài đặt tài khoản': 'Open account settings',
    'Đóng menu': 'Close menu',
    'Mở menu': 'Open menu',
    'Thông báo': 'Notifications',
    'Lịch sử nộp': 'Submission history',
    'Thêm ghi chú': 'Add note',
    'Thời khóa biểu & Lịch học': 'Timetable & Schedule',
    'Hồ sơ sinh viên': 'Student profile',
    'Học kỳ': 'Semester',
    'Năm học': 'Academic year',
    'Tổng số tín chỉ': 'Total credits',
    'Tiến độ kỳ học': 'Semester progress',
    'Điểm trung bình': 'Average score',
    'Tỷ lệ tích lũy': 'Completion rate',
    'Tín chỉ hoàn thành': 'Credits completed',
    'Tỷ lệ chuyên cần': 'Attendance rate',
    'Vắng: 0 buổi có phép': 'Absences: 0 excused classes',
    'Vắng:': 'Absences:',
    'Đánh giá chung học kỳ': 'Overall semester review',
    'Bảng điểm chi tiết học kỳ': 'Detailed semester transcript',
    'Phân bố điểm số': 'Score distribution',
    'So sánh phổ điểm theo từng môn': 'Compare score distributions by course',
    'Thang điểm 10': '10-point scale',
    'Xuất PDF': 'Export PDF',
    'Mã số sinh viên:': 'Student ID:',
    'Số điện thoại:': 'Phone number:',
    'Giới thiệu:': 'About:',
    'Ghi chú cá nhân:': 'Personal note:',
    'Tình trạng hồ sơ:': 'Profile status:',
    'Đã xác thực': 'Verified',
    'Cập nhật': 'Update',
    'Giỏi': 'Excellent',
    'Điểm TB tích lũy': 'Cumulative GPA',
    'Chăm chỉ': 'Consistent',
    'Thông tin học kỳ': 'Semester information',
    'Điểm tổng kết': 'Final score',
    'Điểm chữ': 'Letter grade',
    'Trạng thái': 'Status',
    'Môn học': 'Courses',
    'Số TC': 'Credits',
    'Điểm số theo môn học': 'Scores by course',
    'Phân tích kết quả học tập': 'Learning performance analysis',
    'Dữ liệu từ tài khoản đang đăng nhập': 'Data from the signed-in account',
    'Môn học của bạn': 'Your courses',
    'Xem tất cả': 'View all',
    'Bài tập cần nộp': 'Assignments due',
    'Tiến độ học tập': 'Study progress',
    'Ghi chú nhanh': 'Quick note',
    'Ghi lại việc cần làm hoặc điều cần nhớ trong học tập': 'Write down tasks or important study reminders',
    'Đồng bộ với Cài đặt': 'Synced with Settings',
    'Lưu ghi chú': 'Save note',
    'Đã lưu ghi chú!': 'Note saved!',
    'Theo dõi hạn chót, tiến độ nộp bài và kết quả đánh giá các môn học': 'Track deadlines, submission progress, and course results',
    'Quản lý học vụ & Nhiệm vụ': 'Academic management & Tasks',
    'Tổng bài tập': 'Total assignments',
    'nhiệm vụ': 'tasks',
    'Cần nộp gấp': 'Due soon',
    'bài sắp trễ hạn': 'assignments nearing deadline',
    'Ưu tiên': 'Priority',
    'bài đã gửi': 'submitted assignments',
    'Thanh lọc và tìm kiếm': 'Filters & Search',
    'Không có kết quả': 'No results',
    'Thử thay đổi từ khóa hoặc bộ lọc của bạn.': 'Try changing your keyword or filters.',
    'Ghi chú đã lưu': 'Saved notes',
    'Ghi chú học tập': 'Study notes',
    'Tìm kiếm và bộ lọc': 'Search & Filters',
    'Tìm lịch học': 'Search schedule',
    'Xem dạng danh sách': 'View as list',
    'Dạng danh sách': 'List view',
    'Xem dạng lịch': 'View as calendar',
    'Dạng lịch': 'Calendar view',
    'Thao tác khác': 'More actions',
    'Lưu ý Quy chế Điểm danh': 'Attendance policy reminder',
    'Xem lịch sử điểm danh': 'View attendance history',
    'Hỗ trợ Đổi phòng & Báo lỗi thiết bị': 'Room change & equipment support',
    'Sinh viên vắng quá': 'Students absent for more than',
    'Tôi đã vào lớp học': 'I am in class',
    'Vui lòng xác nhận có mặt để ghi nhận điểm danh của bạn.': 'Please confirm your attendance.',
    'Đồng bộ Google Calendar': 'Sync Google Calendar',
    'Xuất TKB (PDF)': 'Export timetable (PDF)',
    'Đang diễn ra hôm nay': 'Happening today',
    'Theo dõi lịch học tập trung, phòng máy thực hành và ca học trực tuyến hằng tuần.': 'Keep track of weekly classes, computer labs, and online sessions.',
    'Tra cứu thông tin học tập, bảng điểm và tiến độ học kỳ': 'View academic information, transcripts, and semester progress',
    'Quản lý ảnh đại diện và thông tin cá nhân của bạn trên StudyHub.': 'Manage your profile photo and personal information on StudyHub.',
    'Cập nhật thông tin được hiển thị trên StudyHub.': 'Update the information displayed on StudyHub.',
    'Cá nhân hóa trải nghiệm sử dụng StudyHub.': 'Personalize your StudyHub experience.',
    'Chọn ảnh JPG, PNG hoặc WEBP, dung lượng tối đa 2 MB.': 'Choose a JPG, PNG, or WEBP image up to 2 MB.',
    'Dùng ảnh mặc định': 'Use default photo',
    'Tùy chọn giao diện': 'Display preferences',
    'Giao diện': 'Theme',
    'Sáng': 'Light',
    'Tối': 'Dark',
    'Ngôn ngữ': 'Language',
    'Tiếng Việt': 'Vietnamese',
    'Tiếng Anh': 'English',
    'Lưu tùy chọn': 'Save preferences',
    'Đổi mật khẩu': 'Change password',
    'Mật khẩu hiện tại': 'Current password',
    'Mật khẩu mới': 'New password',
    'Xác nhận mật khẩu mới': 'Confirm new password',
    'Đăng xuất tài khoản': 'Sign out of account',
    'Kết thúc phiên đăng nhập trên thiết bị này.': 'End your session on this device.',
    'Không có buổi học phù hợp.': 'No matching classes found.',
    'Chưa có môn học đang học.': 'No courses currently in progress.',
    'Bạn đã hoàn thành tất cả bài tập!': 'You have completed all assignments!',
    'Chưa có lịch học sắp tới': 'No upcoming classes',
    'Các buổi học đã kết thúc sẽ không hiển thị trong mục này.': 'Completed classes will not appear in this section.',
    'Không tải được dữ liệu. Hãy kiểm tra Backend và đăng nhập lại.': 'Could not load data. Check the backend and sign in again.',
    'Không thể tải danh sách môn học. Vui lòng đăng nhập lại.': 'Could not load the course list. Please sign in again.',
    'Chưa có bài tập cho học kỳ này.': 'There are no assignments for this semester.',
    'Không thể lưu ghi chú:': 'Could not save note:',
    'Chưa có hạn nộp': 'No deadline',
    'Chưa có dữ liệu điểm số trong học kỳ này.': 'No score data is available for this semester.',
    'Các môn học trong học kỳ này chưa có điểm tổng kết. Bảng phân bố điểm sẽ được cập nhật khi có kết quả.': 'Courses in this semester do not have final scores yet. The score distribution will be updated when results are available.',

    // Additional translations for semester dialogs, tables, alerts, and attendance.
    "Chọn học kỳ": "Choose semester",
    "Mỗi năm học gồm 2 học kỳ. Học kỳ chưa mở sẽ không hiển thị dữ liệu môn học hoặc thời khóa biểu.": "Each academic year has two semesters. A semester that has not opened yet will not display course or timetable data.",
    "Học kỳ I": "Semester I",
    "Học kỳ II": "Semester II",
    "Học kỳ III": "Semester III",
    "Học kỳ IV": "Semester IV",
    "Học kỳ V": "Semester V",
    "Học kỳ VI": "Semester VI",
    "Học kỳ VII": "Semester VII",
    "Học kỳ VIII": "Semester VIII",
    "Học kỳ này chưa được nhà trường mở dữ liệu thời khóa biểu.": "The university has not released timetable data for this semester yet.",
    "Nhà trường chưa mở dữ liệu cho học kỳ này. Lịch học sẽ xuất hiện khi có thông báo chính thức.": "The university has not released data for this semester. The timetable will appear when an official update is available.",
    "Bạn đang xem lại lịch sử học tập. Các buổi bên dưới là lịch cũ, không phải lịch học sắp tới.": "You are viewing your academic history. The sessions below are past classes, not upcoming classes.",
    "Trạng thái từng buổi học được xác định theo ngày và giờ hiện tại.": "Each class session's status is determined by the current date and time.",
    "Lịch sử học tập": "Academic history",
    "Học kỳ đã kết thúc": "Semester completed",
    "Đã kết thúc": "Completed",
    "Đây là dữ liệu để xem lại, không phải thời khóa biểu sắp tới.": "This is historical data for reference, not an upcoming timetable.",
    "Theo lịch lớp": "Scheduled class",
    "Ca sáng": "Morning session",
    "Ca chiều": "Afternoon session",
    "Tiến độ học tập": "Learning progress",
    "Điểm cao nhất:": "Highest score:",
    "Điểm trung bình học kỳ:": "Semester average:",
    "Mã MH:": "Subject code:",
    "Không tải được dữ liệu điểm danh.": "Could not load attendance data.",
    "Chưa có môn học phù hợp.": "No matching courses found.",
    "Khá": "Good",
    "Trung bình": "Average",
    "Yếu": "Weak",
    "Số học phần": "Number of courses",
    "Thời gian lưu trữ": "Archived period",
    "Phòng học": "Classroom",
    "Mã HP": "Course code",
    "Giới thiệu": "About",
    "Tải dữ liệu điểm...": "Loading score data...",
    "Room học: xem thời khóa biểu": "Classroom: View timetable",
    "Phòng học: xem thời khóa biểu": "Classroom: View timetable",
    "Lưu ghi chú học tập": "Save study note",
    "Môn học:": "Course:",
    "Còn": "Remaining",
    "Chưa có bài tập": "No assignments yet",
    "Xác nhận có mặt trực tiếp chưa được kết nối với hệ thống điểm danh của trường. Bạn có thể khai báo số buổi vắng tại trang Hồ sơ sinh viên.": "Live check-in is not connected to the university's attendance system yet. You can report absences on the Student Profile page.",
    "Chưa có dữ liệu điểm danh chính thức để hiển thị.": "No official attendance records are available to display.",
    "Chưa khai báo": "Not reported",
    "Đã khai báo": "Reported",
    "Cần cập nhật": "Update required",
    "Dữ liệu đã đồng bộ": "Records synced",
    "Khai báo buổi vắng": "Report absences",
    "Cập nhật khai báo": "Update report",
    "Thông tin về tỷ lệ chuyên cần": "Attendance rate information",
    "Cách tính tỷ lệ chuyên cần": "How the attendance rate is calculated",
    "Số buổi theo thời khóa biểu đã diễn ra": "Scheduled sessions held",
    "Tổng số buổi theo thời khóa biểu đã diễn ra": "Total scheduled sessions held",
    "Số buổi vắng": "Number of absences",
    "Nhập số buổi vắng": "Enter the number of absences",
    "Tôi xác nhận số buổi vắng đã khai báo là trung thực và chính xác.": "I confirm that the number of absences I reported is honest and accurate.",
    "Mỗi buổi vắng đều được tính như nhau, không phân biệt có phép hay không phép.": "Every missed session counts as one absence, whether excused or unexcused.",
    "Số buổi học được đếm từ thời khóa biểu đã đồng bộ vào StudyHub và chỉ tính các buổi đã kết thúc. Bạn cần khai báo trung thực số buổi đã vắng. Vắng có phép hay không phép đều tính là một buổi. Tỷ lệ này dùng để tự theo dõi, không thay thế dữ liệu điểm danh chính thức của Trường Đại học Trà Vinh.": "Sessions are counted from the timetable synced to StudyHub, and only completed sessions are included. You must report your absences honestly. Each absence counts as one session, whether excused or unexcused. This rate is for personal tracking only and does not replace the official attendance records of Tra Vinh University.",
    "Vui lòng nhập chính xác số buổi bạn đã vắng trong học kỳ đang chọn.": "Please enter the exact number of sessions you have missed in the selected semester.",
    "Chưa khai báo số buổi vắng": "Absences not reported yet",
    "Chưa có buổi học đã diễn ra": "No scheduled sessions have taken place yet",
    "buổi đã diễn ra": "sessions held",
    "buổi đã tham gia": "sessions attended",
    "buổi vắng": "absences",
    "Đã tham gia": "Attended",
    "Dữ liệu điểm danh đã được đồng bộ.": "Attendance records have been synced.",
    "Tỷ lệ được tính từ dữ liệu điểm danh đã đồng bộ.": "The rate is calculated from synced attendance records.",
    "Tỷ lệ được tính từ thời khóa biểu và số buổi vắng bạn tự khai báo.": "The rate is calculated from the timetable and the number of absences you report.",
    "Số buổi vắng đã khai báo vượt quá số buổi theo thời khóa biểu. Vui lòng cập nhật lại.": "Your reported absences exceed the number of scheduled sessions held. Please update your report.",
    "Vui lòng nhập số buổi vắng hợp lệ.": "Please enter a valid number of absences.",
    "Số buổi vắng không thể lớn hơn tổng số buổi đã diễn ra.": "The number of absences cannot exceed the total sessions already held.",
    "Vui lòng xác nhận thông tin trước khi lưu.": "Please confirm the information before saving.",
    "Đang lưu...": "Saving...",
    "Lưu khai báo": "Save report",
    "Tổng số buổi đã diễn ra": "Total sessions held",
    "Lưu": "Save",
    "Lưu thay đổi": "Save changes",
    "Chưa lưu thay đổi": "Unsaved changes",
    "Đã lưu trên thiết bị": "Saved on this device",
    "Dữ liệu đang được lưu trên trình duyệt này.": "This data is saved in this browser.",
    "Mỗi buổi vắng tính là một buổi. Bạn có thể chỉnh sửa số liệu bất cứ lúc nào.": "Each absence counts as one session. You can edit this number at any time.",
    "Tỷ lệ chuyên cần dự kiến": "Estimated attendance rate",
    "Nhập số buổi vắng để xem tỷ lệ dự kiến.": "Enter your absences to preview the estimated rate.",
    "Nhập số buổi vắng hợp lệ để xem tỷ lệ dự kiến.": "Enter a valid number of absences to preview the estimated rate.",
    "Chưa có dữ liệu tổng số buổi học để tính tỷ lệ.": "There is no total-session data available to calculate the rate.",
    "buổi dự kiến tham gia": "sessions expected to attend",
    "Đóng": "Close",
    "Không thể tải dữ liệu chuyên cần. Vui lòng thử lại.": "Could not load attendance data. Please try again.",
    "Không thể lưu khai báo chuyên cần.": "Could not save the attendance report.",
    "Không thể kết nối máy chủ. Vui lòng thử lại.": "Could not connect to the server. Please try again.",
    "Dữ liệu điểm danh chính thức đã được đồng bộ. Bạn không thể thay đổi số liệu này bằng khai báo cá nhân.": "Official attendance records have been synced. You cannot change them with a personal report.",
    "Chưa có buổi học đã diễn ra để khai báo.": "There are no completed sessions to report yet.",

    // Additional schedule, room, and table labels.
    "Theo lịch lớp": "According to class schedule",
    "Phòng B101": "Room B101",
    "Phòng C203": "Room C203",
    "Phòng D105": "Room D105",
    "Phòng A102": "Room A102",
    "Không tìm thấy dữ liệu": "No data found",
    "Cập nhật hồ sơ": "Update profile",
    "Không có điểm": "No grade",
    "Điểm": "Score",
    "Kết quả": "Result",
    "Tỷ lệ chuyên cần kỳ này: Chưa có dữ liệu điểm danh": "Attendance rate this semester: No attendance data yet",

    "Khai báo số buổi vắng": "Report absences",
    "Dữ liệu điểm danh chính thức đã được đồng bộ. Khai báo cá nhân không thể thay thế dữ liệu này.": "Official attendance records have been synced. A personal report cannot replace these records.",

    "Học kỳ này chưa có buổi học nào đã diễn ra.": "No class sessions have taken place in this semester yet.",
  };


  const EN_TO_VI = Object.fromEntries(Object.entries(VI_TO_EN).map(([vi, en]) => [en, vi]));
  let currentLanguage = 'vi';
  let observer = null;

  function readLanguage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'vi') return stored;
      const preferences = JSON.parse(localStorage.getItem(PREFERENCES_KEY) || '{}');
      return preferences.language === 'en' ? 'en' : 'vi';
    } catch (_) {
      return 'vi';
    }
  }

  function translatePattern(value, language) {
    let result = value;
    if (language === 'vi') {
      if (result === 'Classroom: View timetable' || result === 'Room học: xem thời khóa biểu') result = 'Phòng học: xem thời khóa biểu';
      result = result.replace(/^Academic history\s*[·•]\s*Semester\s+([IVX]+|\d+)\s*[-–]\s*Academic year\s+(.+)$/i, 'Lịch sử học tập · Học kỳ $1 - Năm học $2');
      result = result.replace(/^Semester\s+([IVX]+|\d+)\s*[-–]\s*Academic year\s+(.+)$/i, 'Học kỳ $1 - Năm học $2');
      result = result.replace(/^(\d+)\s+sessions?$/i, (_, count) => `${count} buổi học`);
      result = result.replace(/^(\d+)\s+courses?$/i, (_, count) => `${count} môn học`);

      result = result.replace(/^Semester\s+([IVX]+)$/i, 'Học kỳ $1');
      result = result.replace(/^Course\s+(\d+)$/i, 'Môn $1');
      result = result.replace(/^All \((This week)\)$/i, 'Tất cả (Tuần này)');
      result = result.replace(/^Sunday$/i, 'Chủ nhật');
      result = result.replace(/^Hello,\s*(.+)!$/, 'Xin chào, $1!');
      result = result.replace(/^Academic year\s+(.+)$/i, 'Năm học $1');
      result = result.replace(/^(\d+) credits$/, '$1 tín chỉ');
      result = result.replace(/^(\d+) assignments$/, '$1 bài tập');
      result = result.replace(/^\/(\d+) characters$/, '/$1 ký tự');
      result = result.replace(/^(\d+) characters$/, '$1 ký tự');
      result = result.replace(/^(\d+)\/(\d+) characters$/, '$1/$2 ký tự');
      result = result.replace(/^(\d+) assignments$/, '$1 bài tập');
      result = result.replace(/^(\d+) credits$/, '$1 tín chỉ');
      result = result.replace(/^(\d+) students$/, '$1 sinh viên');
      result = result.replace(/^Due by\s+(.+)$/i, 'Nộp trước $1');
      result = result.replace(/^All \(This week\)$/i, 'Tất cả (Tuần này)');
      result = result.replace(/^Semester\s+([IVX]+) · Week\s+(\d+)$/i, 'Học kỳ $1 · Tuần $2');
      result = result.replace(/^Class progress \(Elapsed (\d+) of (\d+) minutes\)$/i, 'Tiến độ buổi học (Đã trôi qua $1 phút / $2 phút)');
      result = result.replace(/^Room\s+(.+?)\s*•\s*Lecturer:\s*(.+)$/i, 'P. $1 • Giảng viên: $2');
      result = result.replace(/^(.+) • (\d+) students$/i, '$1 • $2 sinh viên');
      result = result.replace(/^(\d+)% of total class periods$/i, '$1% tổng số tiết');
      result = result.replace(/^Student ID:\s*(.+)$/i, 'MSSV: $1');
      result = result.replace(/^Attendance rate this semester:\s*(.+)$/i, 'Tỷ lệ chuyên cần kỳ này: $1');
      result = result.replace(/^Present:\s*(\d+)\/(\d+) marked sessions$/i, 'Có mặt: $1/$2 buổi đã điểm danh');
      result = result.replace(/^Present:\s*(\d+) · Late:\s*(\d+) · Excused absences:\s*(\d+) · Unexcused absences:\s*(\d+)$/i, 'Có mặt: $1 · Đi muộn: $2 · Vắng có phép: $3 · Vắng không phép: $4');
      result = result.replace(/^(.+) · (\d+) credits$/, '$1 · $2 tín chỉ');
      result = result.replace(/^Room\s+([^•]+)\s*•\s*Lecturer:\s*(.+)$/, 'P. $1 • Giảng viên: $2');
      result = result.replace(/^Room\s+(.+)$/, 'Phòng $1');
      result = result.replace(/^Assignment list · Semester\s+([IVX]+)$/, 'Danh sách bài tập · Học kỳ $1');
      result = result.replace(/^Track assignments, deadlines, and results for Semester\s+([IVX]+)\.$/, 'Theo dõi bài tập, hạn nộp và kết quả của Học kỳ $1.');
      result = result.replace(/^Semester\s+([IVX]+) · (\d+) courses · (\d+) graded$/, 'Học kỳ $1 · $2 môn học · $3 môn đã có điểm');
      result = result.replace(/^(\d+) of (\d+) courses have grades recorded\. The average score of graded courses is (.+)\.$/, 'Đã có $1/$2 môn được ghi nhận điểm. Điểm trung bình các môn đã có kết quả là $3.');
      result = result.replace(/^([0-9.]+)% progress$/, '$1% tiến độ');
      result = result.replace(/^Monday\s*\((.+)\)$/, 'Thứ 2 ($1)');
      result = result.replace(/^Tuesday\s*\((.+)\)$/, 'Thứ 3 ($1)');
      result = result.replace(/^Wednesday\s*\((.+)\)$/, 'Thứ 4 ($1)');
      result = result.replace(/^Thursday\s*\((.+)\)$/, 'Thứ 5 ($1)');
      result = result.replace(/^Friday\s*\((.+)\)$/, 'Thứ 6 ($1)');
      result = result.replace(/^Saturday\s*\((.+)\)$/, 'Thứ 7 ($1)');
      result = result.replace(/^Monday,\s*(.+)$/, 'Thứ 2, $1');
      result = result.replace(/^Tuesday,\s*(.+)$/, 'Thứ 3, $1');
      result = result.replace(/^Wednesday,\s*(.+)$/, 'Thứ 4, $1');
      result = result.replace(/^Thursday,\s*(.+)$/, 'Thứ 5, $1');
      result = result.replace(/^Friday,\s*(.+)$/, 'Thứ 6, $1');
      result = result.replace(/^Saturday,\s*(.+)$/, 'Thứ 7, $1');
      result = result.replace(/^SUNDAY$/i, 'CHỦ NHẬT');
      result = result.replace(/^MONDAY$/i, 'THỨ 2');
      result = result.replace(/^TUESDAY$/i, 'THỨ 3');
      result = result.replace(/^WEDNESDAY$/i, 'THỨ 4');
      result = result.replace(/^THURSDAY$/i, 'THỨ 5');
      result = result.replace(/^FRIDAY$/i, 'THỨ 6');
      result = result.replace(/^SATURDAY$/i, 'THỨ 7');
      result = result.replace(/^(\d+) days left$/, 'Còn $1 ngày');
      result = result.replace(/^Lecturer:\s*/, 'Giảng viên: ');
      result = result.replace(/^Course code:\s*/, 'Mã HP: ');
      result = result.replace(/^Due:\s*/, 'Hạn nộp: ');
      result = result.replace(/^Morning session\s*\((\d+) periods?\)$/, 'Ca sáng ($1 tiết)');
      result = result.replace(/^Morning session\s*\((.+)\)$/, 'Ca sáng ($1)');
      result = result.replace(/^Afternoon session\s*\((\d+) periods?\)$/, 'Ca chiều ($1 tiết)');
      result = result.replace(/^Afternoon session\s*\((.+)\)$/, 'Ca chiều ($1)');
      result = result.replace(/^([0-9: -]+)\s*\(Periods (.+)\)$/, '$1 (Tiết $2)');
      result = result.replace(/^Assignment progress\s*\((.+)\)$/, 'Tiến độ bài tập ($1)');
      result = result.replace(/^Student ID:\s*(.+)$/, 'Mã số sinh viên: $1');
      result = result.replace(/^Semester\s+([IVX]+) \(academic year (.+)\) is not open yet\. Please return when the university updates the curriculum\.$/i, 'Học kỳ $1 (năm học $2) hiện chưa mở. Vui lòng quay lại khi nhà trường cập nhật chương trình học.');
      result = result.replace(/^Semester\s+([IVX]+) · Not open$/, 'Học kỳ $1 · Chưa mở');
      result = result.replace(/^Semester\s+([IVX]+)$/, 'Học kỳ $1');
      result = result.replace(/^Semester (\d+) has academic data\.$/i, 'Học kỳ $1 đã có dữ liệu học tập.');
      result = result.replace(/^Semester (\d+) is not open\. When selected, StudyHub will only show a notice that the course is not open\.$/i, 'Học kỳ $1 chưa mở. Khi chọn, StudyHub chỉ hiển thị thông báo học kỳ chưa mở.');
      result = result.replace(/^Semester (.+) \(academic year (.+)\) is not open yet\. Please return when the university updates the curriculum\.$/i, 'Học kỳ $1 (năm học $2) hiện chưa mở. Vui lòng quay lại khi nhà trường cập nhật chương trình học.');
      result = result.replace(/^The number of absences cannot exceed (\d+) sessions already held\.$/i, 'Số buổi vắng không thể lớn hơn $1 buổi đã diễn ra.');
      result = result.replace(/^Semester (\d+) has academic data\.$/i, 'Học kỳ $1 đã có dữ liệu học tập.');
      result = result.replace(/^Semester (\d+) is not open\. When selected, StudyHub will only show a notice that the semester is not open\.$/i, 'Học kỳ $1 chưa mở. Khi chọn, StudyHub chỉ hiển thị thông báo học kỳ chưa mở.');

      return result;
    }

    if (result === 'Room học: xem thời khóa biểu') result = 'Classroom: View timetable';
    result = result.replace(/^Lịch sử học tập\s*[·•]\s*Học kỳ\s+([IVX]+|\d+)\s*[-–]\s*Năm học\s+(.+)$/i, 'Academic history · Semester $1 - Academic year $2');
    result = result.replace(/^Học kỳ\s+([IVX]+|\d+)\s*[-–]\s*Năm học\s+(.+)$/i, 'Semester $1 - Academic year $2');
    result = result.replace(/^(\d+)\s+buổi học$/i, (_, count) => `${count} ${Number(count) === 1 ? 'session' : 'sessions'}`);
    result = result.replace(/^(\d+)\s+môn học$/i, (_, count) => `${count} ${Number(count) === 1 ? 'course' : 'courses'}`);
    result = result.replace(/^(\d+)\s+học phần$/i, '$1 courses');
    result = result.replace(/^Học kỳ (\d+) đã có dữ liệu học tập\.$/i, 'Semester $1 has academic data.');
    result = result.replace(/^Học kỳ (\d+) chưa mở\. Khi chọn, StudyHub chỉ hiển thị thông báo học kỳ chưa mở\.$/i, 'Semester $1 is not open. When selected, StudyHub will only show a notice that the semester is not open.');
    result = result.replace(/^Số buổi vắng không thể lớn hơn (\d+) buổi đã diễn ra\.$/i, 'The number of absences cannot exceed $1 sessions already held.');
    result = result.replace(/^\/(\d+) ký tự$/, '/$1 characters');
    result = result.replace(/^Học kỳ\s+([IVX]+)$/i, 'Semester $1');
    result = result.replace(/^Môn\s+(\d+)$/i, 'Course $1');
    result = result.replace(/^tín chỉ$/i, 'credits');
    result = result.replace(/^Chủ nhật$/i, 'Sunday');
    result = result.replace(/^Xin chào,\s*(.+)!$/, 'Hello, $1!');
    result = result.replace(/^Năm học\s+(.+)$/i, 'Academic year $1');
    result = result.replace(/^(\d+) tín chỉ$/, '$1 credits');
    result = result.replace(/^(\d+) bài tập$/, '$1 assignments');
    result = result.replace(/^(\d+) ký tự$/, '$1 characters');
    result = result.replace(/^(\d+)\/(\d+) ký tự$/, '$1/$2 characters');
    result = result.replace(/^(\d+) bài tập$/, '$1 assignments');
    result = result.replace(/^(\d+) tín chỉ$/, '$1 credits');
    result = result.replace(/^(\d+) sinh viên$/, '$1 students');
    result = result.replace(/^Nộp trước\s+(.+)$/, 'Due by $1');
    result = result.replace(/^Tất cả \(Tuần này\)$/, 'All (This week)');
    result = result.replace(/^Học kỳ\s+([IVX]+) · Tuần\s+(\d+)$/, 'Semester $1 · Week $2');
    result = result.replace(/^Tiến độ buổi học \(Đã trôi qua (\d+) phút \/ (\d+) phút\)$/, 'Class progress (Elapsed $1 of $2 minutes)');
    result = result.replace(/^P\.\s*(.+?)\s*•\s*Giảng viên:\s*(.+)$/, 'Room $1 • Lecturer: $2');
    result = result.replace(/^Tiến độ bài tập\s*\((.+)\)$/, 'Assignment progress ($1)');
    result = result.replace(/^(.+) • (\d+) sinh viên$/, '$1 • $2 students');
    result = result.replace(/^(\d+)% tổng số tiết$/, '$1% of total class periods');
    result = result.replace(/^MSSV:\s*(.+)$/, 'Student ID: $1');
    result = result.replace(/^Tỷ lệ chuyên cần kỳ này:\s*(.+)$/, 'Attendance rate this semester: $1');
    result = result.replace(/^Có mặt:\s*(\d+)\/(\d+) buổi đã điểm danh$/, 'Present: $1/$2 marked sessions');
    result = result.replace(/^Có mặt:\s*(\d+) · Đi muộn:\s*(\d+) · Vắng có phép:\s*(\d+) · Vắng không phép:\s*(\d+)$/, 'Present: $1 · Late: $2 · Excused absences: $3 · Unexcused absences: $4');
    result = result.replace(/^(.+) · (\d+) tín chỉ$/, '$1 · $2 credits');
    result = result.replace(/^P\.\s*([^•]+)\s*•\s*Giảng viên:\s*(.+)$/, 'Room $1 • Lecturer: $2');
    result = result.replace(/^Phòng\s+(.+)$/, 'Room $1');
    result = result.replace(/^Danh sách bài tập · Học kỳ\s+([IVX]+)$/, 'Assignment list · Semester $1');
    result = result.replace(/^Theo dõi bài tập, hạn nộp và kết quả của Học kỳ\s+([IVX]+)\.$/, 'Track assignments, deadlines, and results for Semester $1.');
    result = result.replace(/^Học kỳ\s+([IVX]+) · (\d+) môn học · (\d+) môn đã có điểm$/, 'Semester $1 · $2 courses · $3 graded');
    result = result.replace(/^Đã có (\d+)\/(\d+) môn được ghi nhận điểm\. Điểm trung bình các môn đã có kết quả là (.+)\.$/, '$1 of $2 courses have grades recorded. The average score of graded courses is $3.');
    result = result.replace(/^([0-9.]+)% tiến độ$/, '$1% progress');
    result = result.replace(/^Thứ 2\s*\((.+)\)$/, 'Monday ($1)');
    result = result.replace(/^Thứ 3\s*\((.+)\)$/, 'Tuesday ($1)');
    result = result.replace(/^Thứ 4\s*\((.+)\)$/, 'Wednesday ($1)');
    result = result.replace(/^Thứ 5\s*\((.+)\)$/, 'Thursday ($1)');
    result = result.replace(/^Thứ 6\s*\((.+)\)$/, 'Friday ($1)');
    result = result.replace(/^Thứ 7\s*\((.+)\)$/, 'Saturday ($1)');
    result = result.replace(/^Thứ 2,\s*(.+)$/, 'Monday, $1');
    result = result.replace(/^Thứ 3,\s*(.+)$/, 'Tuesday, $1');
    result = result.replace(/^Thứ 4,\s*(.+)$/, 'Wednesday, $1');
    result = result.replace(/^Thứ 5,\s*(.+)$/, 'Thursday, $1');
    result = result.replace(/^Thứ 6,\s*(.+)$/, 'Friday, $1');
    result = result.replace(/^Thứ 7,\s*(.+)$/, 'Saturday, $1');
    result = result.replace(/^CHỦ NHẬT$/i, 'SUNDAY');
    result = result.replace(/^THỨ 2$/i, 'MONDAY');
    result = result.replace(/^THỨ 3$/i, 'TUESDAY');
    result = result.replace(/^THỨ 4$/i, 'WEDNESDAY');
    result = result.replace(/^THỨ 5$/i, 'THURSDAY');
    result = result.replace(/^THỨ 6$/i, 'FRIDAY');
    result = result.replace(/^THỨ 7$/i, 'SATURDAY');
    result = result.replace(/^Còn\s+(\d+) ngày$/, '$1 days left');
    result = result.replace(/^Giảng viên:\s*/, 'Lecturer: ');
    result = result.replace(/^GV:\s*/, 'Lecturer: ');
    result = result.replace(/^Mã HP:\s*/, 'Course code: ');
    result = result.replace(/^Hạn nộp:\s*/, 'Due: ');
    result = result.replace(/^Ca sáng\s*\((\d+) tiết\)$/, 'Morning session ($1 periods)');
    result = result.replace(/^Ca sáng\s*\((.+)\)$/, 'Morning session ($1)');
    result = result.replace(/^Ca chiều\s*\((\d+) tiết\)$/, 'Afternoon session ($1 periods)');
    result = result.replace(/^Ca chiều\s*\((.+)\)$/, 'Afternoon session ($1)');
    result = result.replace(/^([0-9: -]+)\s*\(Tiết (.+)\)$/, '$1 (Periods $2)');
    result = result.replace(/^Tiến độ bài tập\s*\((.+)\)$/, 'Assignment progress ($1)');
    result = result.replace(/^Mã số sinh viên:\s*(.+)$/, 'Student ID: $1');
    result = result.replace(/^Học kỳ\s+([IVX]+) · Chưa mở$/, 'Semester $1 · Not open');
    result = result.replace(/^Học kỳ\s+([IVX]+) · Không tải được dữ liệu$/, 'Semester $1 · Could not load data');
    result = result.replace(/^Học kỳ\s+([IVX]+) \(năm học (.+)\) hiện chưa mở\. Vui lòng quay lại khi nhà trường cập nhật chương trình học\.$/, 'Semester $1 (academic year $2) is not open yet. Please return when the university updates the curriculum.');
    result = result.replace(/^Học kỳ (\d+) đã có dữ liệu học tập\.$/i, 'Semester $1 has academic data.');
    result = result.replace(/^Học kỳ (\d+) chưa mở\. Khi chọn, StudyHub chỉ hiển thị thông báo học kỳ chưa mở\.$/i, 'Semester $1 is not open. When selected, StudyHub will only show a notice that the course is not open.');
    return result;
  }

  function preserveWhitespace(original, translated) {
    const leading = (original.match(/^\s*/) || [''])[0];
    const trailing = (original.match(/\s*$/) || [''])[0];
    return leading + translated + trailing;
  }

  function translateTextNode(node, language) {
    const original = node.nodeValue;
    if (!original || !original.trim()) return;
    const trimmed = original.trim();
    const dictionary = language === 'en' ? VI_TO_EN : EN_TO_VI;
    const translated = dictionary[trimmed] || translatePattern(trimmed, language);
    if (translated && translated !== trimmed) node.nodeValue = preserveWhitespace(original, translated);
  }

  function translateAttributes(root, language) {
    const dictionary = language === 'en' ? VI_TO_EN : EN_TO_VI;
    const attrs = ['placeholder', 'title', 'aria-label', 'alt'];
    const nodes = [root, ...(root.querySelectorAll ? root.querySelectorAll('*') : [])].filter(Boolean);
    nodes.forEach(element => {
      attrs.forEach(attribute => {
        const value = element.getAttribute && element.getAttribute(attribute);
        if (!value) return;
        const translated = dictionary[value] || translatePattern(value, language);
        if (translated && translated !== value) element.setAttribute(attribute, translated);
      });
    });
  }

  function translateContent(root, language) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest('script, style, noscript, textarea, .material-symbols-outlined, [data-i18n-ignore]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(node => translateTextNode(node, language));
    translateAttributes(root, language);
  }

  function applyLanguage(language = currentLanguage, root = document.body) {
    currentLanguage = language === 'en' ? 'en' : 'vi';
    document.documentElement.lang = currentLanguage;
    const dictionary = currentLanguage === 'en' ? VI_TO_EN : EN_TO_VI;
    if (document.title) {
      const translatedTitle = dictionary[document.title];
      if (translatedTitle) document.title = translatedTitle;
    }
    if (!root) return;

    translateContent(root, currentLanguage);

    // Các thao tác đồng bộ toàn trang chỉ chạy một lần khi áp dụng ngôn ngữ cho body.
    // Khi dịch một node mới, không quét lại toàn bộ document và không phát sự kiện render.
    if (root === document.body) {
      document.querySelectorAll('[data-language-toggle]').forEach(button => {
        const next = currentLanguage === 'vi' ? 'EN' : 'VI';
        if (button.textContent !== next) button.textContent = next;
        button.setAttribute('aria-label', currentLanguage === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt');
        button.title = button.getAttribute('aria-label');
      });
      document.querySelectorAll('[data-language-option]').forEach(button => {
        const active = button.dataset.languageOption === currentLanguage;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      const languageSelect = document.getElementById('languageSelect');
      if (languageSelect) languageSelect.value = currentLanguage;
      window.dispatchEvent(new CustomEvent('studyhub:language-changed', { detail: { language: currentLanguage } }));
    }
  }

  function setLanguage(language) {
    const selected = language === 'en' ? 'en' : 'vi';
    currentLanguage = selected;
    try {
      localStorage.setItem(STORAGE_KEY, selected);
      const preferences = JSON.parse(localStorage.getItem(PREFERENCES_KEY) || '{}');
      preferences.language = selected;
      localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
    } catch (error) {
      console.warn('StudyHub: Could not save language preference.', error);
    }
    applyLanguage(selected);
    return selected;
  }

  function init() {
    currentLanguage = readLanguage();
    applyLanguage(currentLanguage);
    if (observer) observer.disconnect();
    observer = new MutationObserver(records => {
      records.forEach(record => {
        if (record.type === 'characterData') translateTextNode(record.target, currentLanguage);
        record.addedNodes && record.addedNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) translateTextNode(node, currentLanguage);
          else if (node.nodeType === Node.ELEMENT_NODE) translateContent(node, currentLanguage);
        });
      });
    });
    if (document.body) observer.observe(document.body, { subtree: true, childList: true, characterData: true });
    document.addEventListener('click', event => {
      const option = event.target.closest('[data-language-option]');
      if (option) {
        setLanguage(option.dataset.languageOption);
        return;
      }
      const button = event.target.closest('[data-language-toggle]');
      if (button) setLanguage(currentLanguage === 'vi' ? 'en' : 'vi');
    });
    window.addEventListener('storage', event => {
      if (event.key === STORAGE_KEY || event.key === PREFERENCES_KEY) {
        currentLanguage = readLanguage();
        applyLanguage(currentLanguage);
      }
    });
  }

  window.StudyHubI18n = {
    get: () => currentLanguage,
    setLanguage,
    apply: applyLanguage,
    t(value) {
      const dictionary = currentLanguage === 'en' ? VI_TO_EN : EN_TO_VI;
      return dictionary[value] || translatePattern(value, currentLanguage) || value;
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
