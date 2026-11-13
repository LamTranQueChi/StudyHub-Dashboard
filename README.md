# STUDYHUB – DASHBOARD HỌC TẬP

TÌM HIỂU VỀ JAVASCRIPT DOM VÀ XÂY DỰNG TRANG DASHBOARD HỌC TẬP

Website hỗ trợ sinh viên theo dõi và quản lý các hoạt động học tập.

------------------------------------------------------------------------

## Mục lục

- [1. Giới thiệu đề tài](#1-giới-thiệu-đề-tài)
- [2. Mục tiêu](#2-mục-tiêu)
- [3. Công nghệ sử dụng](#3-công-nghệ-sử-dụng)
- [4. Các chức năng chính](#4-các-chức-năng-chính)
- [5. Tiến độ thực hiện](#5-tiến-độ-thực-hiện)
- [6. Cấu trúc thư mục](#6-cấu-trúc-thư-mục)
- [7. Cài đặt và chạy dự án](#7-cài-đặt-và-chạy-dự-án)
- [8. Triển khai Frontend](#8-triển-khai-frontend-lên-github-pages)
- [9. Triển khai Backend](#9-triển-khai-backend-lên-render)
- [10. Kết nối Frontend với Backend](#10-kết-nối-frontend-với-backend)
- [11. Khó khăn và cách khắc phục](#11-khó-khăn-và-cách-khắc-phục)
- [12. Kết quả thực hiện](#12-kết-quả-thực-hiện)
- [13. Hướng phát triển](#13-hướng-phát-triển)
- [14. Lưu ý khi sử dụng](#14-lưu-ý-khi-sử-dụng)
- [15. Thông tin đề tài](#15-thông-tin-đề-tài)
- [16. Các cập nhật gần đây](#16-các-cập-nhật-gần-đây)

## 1. Giới thiệu đề tài

**Tên đề tài:** Tìm hiểu về JavaScript DOM và xây dựng trang Dashboard học tập.

StudyHub là website mình xây dựng nhằm hỗ trợ sinh viên theo dõi và quản lý quá trình học tập. Trong đề tài này, mình sử dụng HTML, CSS và JavaScript DOM để xây dựng giao diện, xử lý sự kiện và tạo các chức năng tương tác trên website.

Ngoài phần giao diện, mình còn tìm hiểu cách xây dựng Backend bằng Node.js, Express.js, kết nối API và sử dụng SQLite để lưu trữ dữ liệu.

## 2. Mục tiêu

Trong quá trình thực hiện đề tài, mình đặt ra các mục tiêu sau:

- Tìm hiểu cấu trúc và cách hoạt động của JavaScript DOM.
- Biết cách truy xuất, thay đổi nội dung và thuộc tính của các phần tử HTML.
- Sử dụng JavaScript để xử lý sự kiện và tạo tương tác trên giao diện.
- Xây dựng Dashboard hỗ trợ theo dõi và quản lý việc học tập.
- Tìm hiểu cách kết nối Frontend với Backend thông qua API.
- Làm quen với Node.js, Express.js và cơ sở dữ liệu SQLite.
- Tìm hiểu cách đưa website lên môi trường trực tuyến.

## 3. Công nghệ sử dụng

| Công nghệ    | Mục đích sử dụng                         |
|--------------|------------------------------------------|
| HTML5        | Xây dựng cấu trúc các trang              |
| CSS3         | Thiết kế và định dạng giao diện          |
| JavaScript   | Xử lý chức năng và thao tác DOM          |
| Bootstrap    | Hỗ trợ xây dựng bố cục giao diện         |
| Tailwind CSS | Hỗ trợ thiết kế các thành phần giao diện |
| Node.js      | Xây dựng môi trường Backend              |
| Express.js   | Xây dựng và xử lý API                    |
| SQLite       | Lưu trữ dữ liệu                          |
| Git          | Quản lý phiên bản mã nguồn               |
| GitHub       | Lưu trữ và quản lý dự án                 |
| GitHub Pages | Triển khai Frontend                      |
| Render       | Triển khai Backend                       |

## 4. Các chức năng chính

StudyHub hiện có 7 trang giao diện chính. Mỗi trang được xây dựng để phục vụ một nhóm thao tác khác nhau.

### 4.1. Đăng nhập

- Cho phép người dùng đăng nhập vào hệ thống.
- Kiểm tra thông tin tài khoản.
- Gửi yêu cầu xác thực đến Backend.

### 4.2. Dashboard – Tổng quan

- Hiển thị các thông tin tổng quan về tình hình học tập.
- Sử dụng thẻ thống kê và biểu đồ để trình bày dữ liệu.
- Cải thiện cách hiển thị màu sắc, nội dung và biểu đồ ở giao diện sáng/tối.

### 4.3. Sinh viên

- Hiển thị thông tin sinh viên.
- Hỗ trợ theo dõi thông tin cá nhân.
- Có khu vực theo dõi tỷ lệ chuyên cần.
- Cho phép sinh viên tự nhập và cập nhật số buổi vắng để hệ thống tính tỷ lệ chuyên cần tham khảo.

### 4.4. Môn học

- Hiển thị danh sách môn học.
- Theo dõi thông tin liên quan đến từng môn học.

### 4.5. Bài tập

- Hiển thị danh sách bài tập.
- Theo dõi thời hạn và tình trạng hoàn thành bài tập.

### 4.6. Lịch học

- Hiển thị lịch học theo thời gian.
- Hỗ trợ sinh viên theo dõi và sắp xếp thời gian học tập.

### 4.7. Cài đặt

- Cập nhật thông tin cá nhân.
- Thay đổi ảnh đại diện.
- Cập nhật mật khẩu.
- Chuyển đổi giữa giao diện sáng và tối.
- Chuyển đổi ngôn ngữ hiển thị tiếng Việt và tiếng Anh.

### 4.8. Backend

- Tiếp nhận và xử lý yêu cầu từ Frontend.
- Hỗ trợ chức năng đăng nhập và xác thực người dùng.
- Kết nối và thao tác với cơ sở dữ liệu SQLite.
- Cung cấp API để Frontend gửi và nhận dữ liệu.

## 5. Tiến độ thực hiện

Quá trình thực hiện đề tài được chia thành 4 giai đoạn theo kế hoạch đồ án cơ sở ngành.

### Tuần 1: Tìm hiểu đề tài và nghiên cứu JavaScript DOM

**Thời gian:** 12/10/2026 – 18/10/2026

**Công việc thực hiện:**

- Tìm hiểu tổng quan về đề tài.
- Thu thập tài liệu về HTML, CSS và JavaScript.
- Tìm hiểu cấu trúc và cách hoạt động của JavaScript DOM.
- Thực hành truy xuất và thay đổi nội dung HTML bằng JavaScript.
- Tìm hiểu cách xử lý sự kiện trong DOM.

**Kết quả:**

- Tổng hợp được tài liệu phục vụ đề tài.
- Nắm được những kiến thức cơ bản về JavaScript DOM.
- Thực hành được một số thao tác DOM thông qua ví dụ.

### Tuần 2: Phân tích yêu cầu và thiết kế giao diện

**Thời gian:** 02/11/2026 – 08/11/2026

**Công việc thực hiện:**

- Xác định các chức năng cần có của hệ thống.
- Xây dựng bố cục tổng thể cho Dashboard.
- Thiết kế Sidebar, Topbar và khu vực hiển thị nội dung.
- Xây dựng giao diện các trang Tổng quan, Sinh viên, Môn học, Bài tập, Lịch học và Cài đặt.
- Điều chỉnh giao diện để phù hợp với nhiều kích thước màn hình.

**Kết quả:**

- Hoàn thành bố cục giao diện chính.
- Xây dựng được các trang giao diện cơ bản.
- Sắp xếp mã nguồn theo các thư mục chức năng.

### Tuần 3: Lập trình chức năng và xử lý tương tác

**Thời gian:** 23/11/2026 – 29/11/2026

**Công việc thực hiện:**

- Sử dụng JavaScript DOM để xây dựng các chức năng tương tác.
- Xử lý sự kiện nhấn nút, nhập liệu và cập nhật nội dung.
- Xây dựng chức năng đăng nhập và quản lý thông tin người dùng.
- Xây dựng Backend bằng Node.js và Express.js.
- Kết nối Frontend với Backend thông qua API.
- Sử dụng SQLite để lưu trữ dữ liệu.

**Kết quả dự kiến:**

- Hoàn thiện các chức năng chính của Dashboard.
- Các thành phần giao diện có thể tương tác.
- Hoàn thành kết nối cơ bản giữa Frontend và Backend.

### Tuần 4: Kiểm thử, hoàn thiện và triển khai

**Thời gian:** 14/12/2026 – 20/12/2026

**Công việc thực hiện:**

- Kiểm tra hoạt động của các chức năng.
- Phát hiện và sửa lỗi trong quá trình sử dụng.
- Kiểm tra giao diện trên nhiều kích thước màn hình.
- Hoàn thiện giao diện và tối ưu mã nguồn.
- Triển khai Frontend lên GitHub Pages.
- Triển khai Backend lên Render.
- Hoàn thiện báo cáo và hướng dẫn sử dụng.

**Kết quả dự kiến:**

- Hoàn thiện website StudyHub.
- Kiểm tra lại các chức năng chính.
- Hoàn thiện mã nguồn và báo cáo đề tài.

## 6. Cấu trúc thư mục

Cấu trúc thư mục chính của dự án:

``` text
dashboard-hoc-tap/
│
├── assets/                 # Hình ảnh và tài nguyên
│
├── backend/                # Mã nguồn Backend
│   ├── data/               # Dữ liệu khởi tạo SQLite
│   ├── src/                # Mã nguồn Backend
│   └── ...
│
├── components/             # Các thành phần giao diện
│
├── css/                    # Các tệp CSS
│
├── html/                   # Các trang HTML
│
├── js/                     # Các tệp JavaScript
│
├── index.html              # Trang điều hướng chính
├── .gitignore              # Các tệp không đưa lên Git
├── .nojekyll               # Cấu hình GitHub Pages
├── README.md               # Tài liệu giới thiệu dự án
└── package-lock.json       # Khóa phiên bản package
```

## 7. Hướng dẫn cài đặt và chạy dự án

### 7.1. Môi trường cần có

- Node.js phiên bản 22.
- Visual Studio Code.
- Google Chrome hoặc Microsoft Edge.
- Git.

### 7.2. Chạy Backend

Mở Terminal tại thư mục gốc của dự án và chạy các lệnh:

``` bash
cd backend
npm install
npm start
```

Backend mặc định chạy tại:

``` text
http://localhost:3000
```

Có thể kiểm tra trạng thái API tại:

``` text
http://localhost:3000/api/health
```

### 7.3. Chạy Frontend

Mở Terminal thứ hai tại thư mục gốc dự án:

``` bash
npx http-server . -p 5500
```

Sau đó truy cập:

``` text
http://127.0.0.1:5500/html/login.html
```

**Lưu ý:** Khi chạy thử các chức năng cần Backend, cần giữ cả hai Terminal hoạt động.

## 8. Triển khai Frontend lên GitHub Pages

Frontend của StudyHub có thể được triển khai bằng GitHub Pages.

Các bước thực hiện:

1.  Đưa mã nguồn dự án lên repository GitHub.
2.  Mở repository trên GitHub.
3.  Chọn **Settings**.
4.  Chọn **Pages**.
5.  Trong phần **Build and deployment**, chọn **Deploy from a branch**.
6.  Chọn branch `main`.
7.  Chọn thư mục `/(root)`.
8.  Nhấn **Save**.

Sau khi triển khai thành công, GitHub Pages sẽ cung cấp đường dẫn để truy cập website.

**Repository:**  
https://github.com/LamTranQueChi/StudyHub-Dashboard

**Website Demo:**  
Chưa cập nhật đường dẫn.

## 9. Triển khai Backend lên Render

Backend sử dụng Node.js, Express.js và SQLite. Theo cấu hình trong dự án, Backend được triển khai bằng Render Web Service.

### 9.1. Tạo Web Service

1.  Truy cập Render.
2.  Chọn **New → Web Service**.
3.  Kết nối tài khoản GitHub.
4.  Chọn repository `StudyHub-Dashboard`.

Cấu hình cơ bản:

| Thuộc tính     | Giá trị       |
|----------------|---------------|
| Root Directory | `backend`     |
| Runtime        | Node          |
| Build Command  | `npm install` |
| Start Command  | `npm start`   |

### 9.2. Cấu hình biến môi trường

| Tên biến           | Giá trị                      |
|--------------------|------------------------------|
| `NODE_ENV`         | `production`                 |
| `JWT_SECRET`       | Chuỗi bí mật tự tạo          |
| `FRONTEND_ORIGINS` | Địa chỉ website GitHub Pages |
| `DATABASE_PATH`    | `/var/data/studyhub.sqlite`  |

Không đưa giá trị thật của `JWT_SECRET` lên GitHub hoặc chia sẻ công khai.

### 9.3. Cấu hình Persistent Disk

Nếu sử dụng SQLite trên Render, cần cấu hình Persistent Disk để lưu dữ liệu khi dịch vụ được triển khai lại.

**Mount Path:**

``` text
/var/data
```

**Đường dẫn database:**

``` text
/var/data/studyhub.sqlite
```

### 9.4. Kiểm tra Backend

Sau khi Deploy thành công, truy cập đường dẫn:

``` text
https://TEN-SERVICE.onrender.com/api/health
```

Nếu API trả về dữ liệu JSON có trạng thái `"ok": true`, Backend đã phản hồi.

**Backend URL:**  
Chưa cập nhật đường dẫn thực tế.

## 10. Kết nối Frontend với Backend

Sau khi có địa chỉ Backend trên Render, cần kiểm tra và cập nhật URL API trong file cấu hình của Frontend.

File cấu hình được ghi trong dự án:

``` text
js/config.js
```

Tìm dòng:

``` javascript
const productionApi = "https://YOUR-STUDYHUB-BACKEND.onrender.com/api";
```

Thay bằng địa chỉ Backend thực tế, ví dụ:

``` javascript
const productionApi = "https://studyhub-api.onrender.com/api";
```

Sau khi cập nhật:

1.  Lưu file `config.js`.
2.  Thực hiện Git Add, Commit và Push.
3.  Chờ GitHub Pages cập nhật.
4.  Mở website và kiểm tra kết nối API.
5.  Kiểm tra đăng nhập và các chức năng có sử dụng dữ liệu từ Backend.

**Lưu ý về CORS:** Biến `FRONTEND_ORIGINS` trên Render cần chứa đúng origin của website GitHub Pages. Ví dụ:

``` text
https://LamTranQueChi.github.io
```

Không thêm đường dẫn repository vào phần origin.

## 11. Khó khăn và cách khắc phục

Trong quá trình làm đề tài, mình gặp và tìm hiểu cách xử lý một số vấn đề như:

| Khó khăn                                            | Cách khắc phục                                      |
|-----------------------------------------------------|-----------------------------------------------------|
| Chưa quen với cách thao tác JavaScript DOM          | Đọc tài liệu và thực hành từng phương thức DOM      |
| Giao diện bị lệch trên màn hình nhỏ                 | Điều chỉnh CSS và sử dụng Media Queries             |
| Sự kiện trên giao diện chưa hoạt động như mong muốn | Kiểm tra Event Listener và cách truy xuất phần tử   |
| Frontend chưa kết nối được Backend                  | Kiểm tra URL API, trạng thái máy chủ và CORS        |
| Lưu trữ và truy xuất dữ liệu                        | Kiểm tra cấu trúc SQLite và câu lệnh truy vấn       |
| Triển khai website                                  | Tách phần Frontend và Backend để triển khai phù hợp |

## 12. Kết quả thực hiện

Sau quá trình tìm hiểu và xây dựng, mình đã thực hiện được các nội dung chính sau:

- Tìm hiểu và vận dụng HTML, CSS, JavaScript DOM vào xây dựng website.
- Xây dựng các trang giao diện chính của StudyHub.
- Sử dụng JavaScript để xử lý sự kiện và cập nhật nội dung giao diện.
- Xây dựng Backend bằng Node.js và Express.js.
- Sử dụng SQLite để lưu trữ dữ liệu.
- Tìm hiểu cách kết nối Frontend và Backend thông qua API.
- Bổ sung chuyển đổi giao diện sáng/tối và ngôn ngữ tiếng Việt/tiếng Anh.
- Bổ sung các tùy chọn cập nhật thông tin cá nhân, ảnh đại diện và mật khẩu.
- Xây dựng khu vực theo dõi chuyên cần, cho phép sinh viên tự khai báo số buổi vắng.

## 13. Hướng phát triển

Trong thời gian tới, mình mong muốn tiếp tục hoàn thiện StudyHub theo các hướng sau:

- Bổ sung thêm chức năng hỗ trợ quản lý học tập.
- Cải thiện các biểu đồ thống kê và cách trình bày dữ liệu.
- Tiếp tục kiểm tra giao diện trên nhiều thiết bị.
- Cải thiện trải nghiệm khi sử dụng hệ thống.
- Hoàn thiện khả năng bảo mật và quản lý dữ liệu.
- Bổ sung thêm các chức năng phù hợp với nhu cầu học tập của sinh viên.

## 14. Lưu ý khi sử dụng

- GitHub Pages chỉ triển khai phần Frontend, không chạy trực tiếp Node.js hoặc SQLite.
- Backend cần hoạt động để các chức năng sử dụng API có thể xử lý dữ liệu.
- Không đưa file `.env`, `JWT_SECRET`, thư mục `node_modules` hoặc database đang sử dụng lên GitHub.
- File `backend/data/studyhub.sql` được dùng làm dữ liệu nguồn để khởi tạo database theo cấu hình của dự án.
- Nếu sử dụng Persistent Disk, cần kiểm tra đường dẫn lưu database để tránh mất dữ liệu.
- Lịch học trong dự án có thể bao gồm dữ liệu minh họa phục vụ việc kiểm tra giao diện, không nên xem đó là thời khóa biểu chính thức của trường.
- Tỷ lệ chuyên cần do sinh viên tự khai báo số buổi vắng chỉ có mục đích tự theo dõi, không thay thế dữ liệu điểm danh chính thức của Trường Đại học Trà Vinh.

## 15. Thông tin đề tài

| Thông tin            | Nội dung                                                       |
|----------------------|----------------------------------------------------------------|
| Sinh viên thực hiện  | Lâm Trần Quế Chi                                               |
| Lớp                  | DA24TTA                                                        |
| Khoa                 | Công nghệ Thông tin                                            |
| Trường               | Đại học Trà Vinh                                               |
| Giảng viên hướng dẫn | Đoàn Phước Miền                                                |
| Tên đề tài           | Tìm hiểu về JavaScript DOM và xây dựng trang Dashboard học tập |

## 16. Các cập nhật gần đây

### 16.1. Chuyển đổi ngôn ngữ Việt/Anh

- Bổ sung và hoàn thiện nội dung tiếng Việt, tiếng Anh cho các khu vực giao diện.
- Cập nhật bản dịch cho thông báo, hộp thoại xác nhận, trạng thái và nội dung bảng.
- Giữ nguyên tên sinh viên, giảng viên và tên môn học.
- Cập nhật nhãn biểu đồ khi người dùng chuyển đổi ngôn ngữ.

### 16.2. Giao diện sáng và tối

- Bổ sung khả năng chuyển đổi giữa Light Mode và Dark Mode.
- Điều chỉnh màu nền, màu chữ và độ tương phản để nội dung dễ quan sát.
- Kiểm tra cách hiển thị của các thành phần và biểu đồ ở cả hai chế độ.

### 16.3. Cài đặt tài khoản

- Cho phép cập nhật thông tin cá nhân.
- Hỗ trợ thay đổi ảnh đại diện.
- Bổ sung chức năng đổi mật khẩu.
- Lưu các thiết lập giao diện và ngôn ngữ theo cách hệ thống đang triển khai.

### 16.4. Theo dõi tỷ lệ chuyên cần

- Chức năng được đặt ngay trong thẻ **Tỷ lệ chuyên cần** ở trang Sinh viên.
- Tổng số buổi học được thống kê dựa trên thời khóa biểu có trong StudyHub và chỉ tính các buổi đã kết thúc.
- Sinh viên tự nhập và cập nhật số buổi vắng trực tiếp trong thẻ chuyên cần.
- Sau khi nhập số buổi vắng, hệ thống tính lại tỷ lệ chuyên cần.
- Sinh viên có thể chỉnh sửa số buổi vắng đã khai báo.
- Mỗi buổi vắng, dù có phép hay không phép, đều được tính là một buổi.
- Sinh viên cần khai báo chính xác và trung thực để kết quả tự theo dõi phản ánh đúng tình hình của mình.
- Tỷ lệ này chỉ có mục đích tham khảo, không thay thế dữ liệu điểm danh chính thức của Trường Đại học Trà Vinh.

Công thức tính:

Tỷ lệ chuyên cần = (Tổng số buổi đã kết thúc - Số buổi vắng) / Tổng số buổi đã kết thúc × 100%.

### 16.5. Các file liên quan đến chức năng chuyên cần và ngôn ngữ

| File                    | Nội dung                                                             |
|-------------------------|----------------------------------------------------------------------|
| `backend/src/db.js`     | Khởi tạo cấu trúc lưu dữ liệu khai báo chuyên cần                    |
| `backend/src/server.js` | Xử lý dữ liệu thời khóa biểu và các yêu cầu liên quan đến chuyên cần |
| `html/sinhvien.html`    | Khu vực hiển thị thẻ chuyên cần và phần nhập số buổi vắng            |
| `css/sinhvien.css`      | Định dạng thẻ chuyên cần, khu vực nhập liệu và responsive            |
| `js/sinhvien.js`        | Xử lý nhập, tính toán, hiển thị và cập nhật số buổi vắng             |
| `js/lichhoc.js`         | Xử lý các nội dung liên quan đến lịch học                            |
| `js/ngonngu.js`         | Nội dung dịch tiếng Việt và tiếng Anh                                |
| `js/main.js`            | Xử lý một số nội dung và thông báo dùng chung                        |
| `js/monhoc.js`          | Xử lý nội dung trang môn học                                         |
| `js/baitap.js`          | Xử lý nội dung trang bài tập                                         |
| `js/dashboard.js`       | Cập nhật nội dung trên Dashboard                                     |
| `js/char.js`            | Cập nhật nội dung nhãn biểu đồ                                       |

### 16.6. Kiểm tra chức năng chuyên cần

1.  Khởi động Backend theo hướng dẫn trong thư mục `backend`.
2.  Đăng nhập bằng tài khoản sinh viên.
3.  Chọn học kỳ có dữ liệu thời khóa biểu.
4.  Mở trang **Sinh viên** và tìm thẻ **Tỷ lệ chuyên cần**.
5.  Nhập số buổi vắng trực tiếp trong thẻ.
6.  Kiểm tra tỷ lệ được tính lại, sau đó lưu thông tin.
7.  Thử chỉnh sửa số buổi vắng và kiểm tra kết quả.
8.  Thử chuyển đổi giao diện sáng/tối và ngôn ngữ Việt/Anh.

------------------------------------------------------------------------

STUDYHUB – DASHBOARD HỌC TẬP

Đề tài thực tập đồ án cơ sở ngành

Trường Đại học Trà Vinh
