
(function () {
    "use strict";

    // Backend API
    const API_BASE = "https://studyhub-api-4ecd.onrender.com/api";

    const PROFILE_KEY = "studyHubProfile";
    const TOKEN_KEY = "studyHubAuthToken";

    const DEFAULT_PHONE = "0123456789";

    // Đọc hồ sơ đã lưu
    function getSavedProfile() {
        try {
            return JSON.parse(localStorage.getItem(PROFILE_KEY) || "{}") || {};
        } catch (error) {
            console.error("Không đọc được hồ sơ:", error);
            return {};
        }
    }

    // Lưu hồ sơ
    function saveProfile(profile) {
        localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));

        window.dispatchEvent(
            new CustomEvent("studyhub:profile-updated", {
                detail: profile
            })
        );

        return profile;
    }

    // Kiểm tra hồ sơ có thuộc đúng tài khoản không
    function isSameStudent(previous, user) {
        const oldId = String(previous.studentId || "").trim();
        const newId = String(user.student_number || "").trim();

        const oldEmail = String(previous.email || "").trim().toLowerCase();
        const newEmail = String(user.email || "").trim().toLowerCase();

        if (oldId && newId) {
            return oldId === newId;
        }

        return Boolean(oldEmail && newEmail && oldEmail === newEmail);
    }

    // Thêm Bearer token
    function authHeaders(options = {}) {
        const headers = {
            "Content-Type": "application/json",
            ...(options.headers || {})
        };

        const token = localStorage.getItem(TOKEN_KEY);

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        return headers;
    }

    // Gọi API
    async function apiFetch(endpoint, options = {}) {
        return fetch(`${API_BASE}${endpoint}`, {
            ...options,
            credentials: "omit",
            headers: authHeaders(options)
        });
    }

    // Xử lý phản hồi API
    async function request(endpoint, options = {}) {
        const response = await apiFetch(endpoint, options);
        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            // Chỉ xóa phiên đăng nhập, không xóa hồ sơ cá nhân
            if (response.status === 401) {
                localStorage.removeItem(TOKEN_KEY);
            }

            const error = new Error(
                data.message || "Đã xảy ra lỗi. Vui lòng thử lại."
            );

            error.status = response.status;
            throw error;
        }

        return data;
    }

    // Đồng bộ hồ sơ từ Backend
    function syncProfile(user) {
        if (!user) return null;

        const previous = getSavedProfile();
        const sameStudent = isSameStudent(previous, user);

        // Giữ số điện thoại người dùng đã chỉnh sửa
        const savedPhone = sameStudent
            ? String(previous.phone || "").trim()
            : "";

        const profile = {
            ...(sameStudent ? previous : {}),

            id: user.id ?? (sameStudent ? previous.id : "") ?? "",

            studentId:
                user.student_number ??
                (sameStudent ? previous.studentId : "") ??
                "",

            fullName:
                user.full_name ??
                (sameStudent ? previous.fullName : "") ??
                "",

            email:
                user.email ??
                (sameStudent ? previous.email : "") ??
                "",

            studentClass:
                user.class_name ??
                (sameStudent ? previous.studentClass : "") ??
                "",

            major:
                user.major ??
                (sameStudent ? previous.major : "") ??
                "",

            yearOfStudy:
                user.year_of_study ??
                (sameStudent ? previous.yearOfStudy : "") ??
                "",

            // Không lấy số điện thoại cũ từ Backend ghi đè số local
            phone: savedPhone || DEFAULT_PHONE,

            dateOfBirth:
                user.date_of_birth ??
                (sameStudent ? previous.dateOfBirth : "") ??
                "",

            gender:
                user.gender ??
                (sameStudent ? previous.gender : "") ??
                "",

            address:
                user.address ??
                (sameStudent ? previous.address : "") ??
                "",

            avatarUrl:
                user.avatar_url ??
                (sameStudent ? previous.avatarUrl : "") ??
                "",

            bio: sameStudent ? (previous.bio ?? "") : "",

            profileNote: sameStudent
                ? (previous.profileNote ?? "")
                : ""
        };

        return saveProfile(profile);
    }

    // Đăng nhập
    async function login(email, password) {
        try {
            const normalizedEmail = String(email || "")
                .trim()
                .toLowerCase();

            // Email sinh viên TVU: 9 chữ số MSSV
            const emailPattern = /^\d{9}@st\.tvu\.edu\.vn$/;

            if (!emailPattern.test(normalizedEmail)) {
                throw new Error(
                    "Vui lòng nhập email theo dạng MSSV@st.tvu.edu.vn."
                );
            }

            const data = await request("/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    email: normalizedEmail,
                    password
                })
            });

            if (!data.token || !data.student) {
                throw new Error(
                    "Máy chủ chưa trả đầy đủ thông tin đăng nhập."
                );
            }

            localStorage.setItem(TOKEN_KEY, data.token);

            syncProfile(data.student);

            return {
                ok: true,
                user: data.student
            };

        } catch (error) {
            return {
                ok: false,
                message: error.message
            };
        }
    }

    // Lấy thông tin sinh viên hiện tại
    async function getCurrentUser() {
        if (!localStorage.getItem(TOKEN_KEY)) {
            return null;
        }

        try {
            const data = await request("/auth/me");

            if (!data.student) {
                throw new Error("Không tìm thấy thông tin sinh viên.");
            }

            syncProfile(data.student);

            return data.student;

        } catch (error) {
            console.error("Lỗi lấy hồ sơ:", error);
            return null;
        }
    }

    // Đồng bộ tài khoản
    async function syncCurrentUser() {
        return await getCurrentUser();
    }

    // Lưu thông tin hồ sơ trên trình duyệt
    function updateLocalProfile(changes = {}) {
        const previous = getSavedProfile();

        const profile = {
            ...previous,
            ...changes
        };

        return saveProfile(profile);
    }

    // Đổi mật khẩu
    async function changePassword(currentPassword, newPassword) {
        try {
            const data = await request("/auth/change-password", {
                method: "PATCH",
                body: JSON.stringify({
                    currentPassword,
                    newPassword
                })
            });

            return {
                ok: true,
                message: data.message || "Đổi mật khẩu thành công."
            };

        } catch (error) {
            return {
                ok: false,
                message: error.message
            };
        }
    }

    // Đăng xuất: giữ nguyên hồ sơ cá nhân
    async function logout() {
        try {
            await request("/auth/logout", {
                method: "POST",
                body: JSON.stringify({})
            });
        } catch (error) {
            console.warn("Không thể kết nối API đăng xuất:", error);
        }

        // Chỉ xóa token
        localStorage.removeItem(TOKEN_KEY);

        // Không xóa studyHubProfile
        window.location.replace("login.html");
    }

    // Kiểm tra đăng nhập
    async function requireLogin() {
        const user = await getCurrentUser();

        if (!user) {
            const currentPath = window.location.pathname;

            const isInHtmlFolder = /\/html\//i.test(currentPath);

            window.location.replace(
                isInHtmlFolder ? "login.html" : "html/login.html"
            );

            return false;
        }

        return true;
    }

    // Xuất hàm dùng chung
    window.StudyHubAuth = {
        login,
        apiFetch,
        request,
        getCurrentUser,
        syncCurrentUser,
        syncProfile,
        updateLocalProfile,
        changePassword,
        logout,
        requireLogin
    };

})();
