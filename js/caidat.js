    document.addEventListener("DOMContentLoaded", async function () {
    "use strict";
    // Kiểm tra hệ thống xác thực
    if (!window.StudyHubAuth) {
        console.error("Không tìm thấy StudyHubAuth!");
        return;
    }
    // Chờ xác thực phiên đăng nhập
    const isLoggedIn = await window.StudyHubAuth.requireLogin();
    if (!isLoggedIn) return;
    // Lấy thông tin sinh viên sau khi xác thực thành công
    const currentUser = await window.StudyHubAuth.getCurrentUser();
    if (!currentUser) return;
    
    // 1. THONG TIN HO SO
    const profileForm = document.getElementById("profileForm");
    const profileMessage = document.getElementById("profileMessage");
    const bioInput = document.getElementById("bio");
    const bioCount = document.getElementById("bioCount");
    const noteInput = document.getElementById("profileNote");
    let noteCount = document.getElementById("noteCount");
    const NOTE_MAX_LENGTH = 1000;

    // Tự tạo bộ đếm nếu caidat.html chưa có phần tử #noteCount.
    if (noteInput && !noteCount) {
        noteCount = document.createElement("small");
        noteCount.id = "noteCount";
        noteCount.className = "field-counter";
        noteInput.insertAdjacentElement("afterend", noteCount);
    }

    const PROFILE_KEY = "studyHubProfile";
    const AVATAR_KEY = "studyHubAvatar";
    const PREFERENCES_KEY = "studyHubPreferences";
    // Khai báo đường dẫn avatar trước khi syncTopbarOnce() có thể gọi loadAvatar().
    const isHtmlPage = window.location.pathname
        .toLowerCase()
        .includes("/html/");
    const defaultAvatar = isHtmlPage
        ? "../assets/images/avatar_macdinh.jpg"
        : "assets/images/avatar_macdinh.jpg";
    // Các phần tử avatar phải được khai báo trước khi đồng bộ Topbar.
    const avatarInput = document.getElementById("avatarInput");
    const avatarPreview = document.getElementById("profileAvatarImage");
    const resetAvatarButton = document.getElementById("resetAvatarButton");
    const avatarMessage = document.getElementById("avatarMessage");

    const defaultProfile = {
        fullName: "Lâm Trần Quế Chi",
        studentId: "110124012",
        email: "110124012@st.tvu",
        phone: "0123456789",
        studentClass: "DA24TTA",
        major: "Công nghệ thông tin",
        bio: "Sinh viên Công nghệ thông tin, quan tâm đến Frontend Development.",
        profileNote: ""
    };

    const profileFields = [
        "fullName",
        "studentId",
        "email",
        "phone",
        "studentClass",
        "major",
        "bio",
        "profileNote"
    ];

    // Các trường định danh cố định trong hồ sơ sinh viên.
    const lockedProfileFields = [
        "fullName",
        "studentId",
        "email",
        "studentClass",
        "major"
    ];

    const lockedFieldMessage =
        "Đây là trường thông tin đã được lưu trong hồ sơ sinh viên nên không thể thay đổi.";
    // Dùng một nguồn thông tin thống nhất cho trang Cài đặt và topbar.
    function getIdentityProfile() {
        return {
            fullName: currentUser.full_name || currentUser.fullName || defaultProfile.fullName,
            studentId: currentUser.student_number || currentUser.studentId || defaultProfile.studentId,
            email: currentUser.email || defaultProfile.email,
            studentClass: currentUser.class_name || currentUser.studentClass || defaultProfile.studentClass,
            major: currentUser.major || defaultProfile.major
        };
    }

    function lockIdentityFields() {
        lockedProfileFields.forEach(function (id) {
            const field = document.getElementById(id);
            if (!field) return;

            field.readOnly = true;
            field.setAttribute("aria-readonly", "true");
            field.title = lockedFieldMessage;
            field.classList.add("profile-field-locked");

            // Chỉ hiển thị một thông báo khi trường nhận focus.
            // Khi bấm chuột, trình duyệt cũng phát sinh focus nên không cần nghe thêm click.
            field.addEventListener("focus", function () {
                showMessage(profileMessage, lockedFieldMessage, false);
            });

        });

    }

    // Hiển thị thông báo nổi , không đẩy lệch bố cục trang.
    // Tất cả câu thông báo kết thúc bằng dấu chấm than.
    let toastContainer = document.getElementById("studyHubToastContainer");
    if (!toastContainer) {
        toastContainer = document.createElement("div");
        toastContainer.id = "studyHubToastContainer";
        toastContainer.setAttribute("aria-live", "polite");
        toastContainer.setAttribute("aria-atomic", "false");
        document.body.appendChild(toastContainer);
    }

    function formatToastMessage(message) {

        let text = String(message || "").trim();

        if (!text) return "Đã hoàn tất thao tác!";

        // Đổi dấu kết câu thành dấu chấm than theo yêu cầu.

        text = text.replace(/[.!?]+$/, "!");

        if (!/[!]$/.test(text)) text += "!";

        return text;

    }

    function showMessage(element, message, isError = false) {

        // Ẩn nội dung thông báo cũ trong form nếu phần tử vẫn tồn tại.

        if (element) {

            element.textContent = "";

            element.classList.toggle("error", isError);

            element.setAttribute("aria-hidden", "true");

        }

        const toast = document.createElement("div");
        toast.className = "studyhub-toast" + (isError ? " error" : "");
        toast.setAttribute("role", isError ? "alert" : "status");
        
        const icon = document.createElement("span");
        icon.className = "studyhub-toast-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = isError ? "!" : "✓";
        
        const messageText = document.createElement("span");
        messageText.className = "studyhub-toast-message";
        const rawMessage = String(message || "").trim();
        const translatedMessage = window.StudyHubI18n?.t?.(rawMessage) || rawMessage;
        messageText.textContent = formatToastMessage(translatedMessage);

        const closeButton = document.createElement("button");
        closeButton.className = "studyhub-toast-close";
        closeButton.type = "button";
        closeButton.setAttribute("aria-label", "Đóng thông báo");
        closeButton.textContent = "×";
        toast.append(icon, messageText, closeButton);
        toastContainer.appendChild(toast);
        let dismissed = false;

        function dismissToast() {
            if (dismissed) return;
            dismissed = true;
            toast.classList.add("studyhub-toast-out");
            window.setTimeout(function () {
                toast.remove();
            }, 220);
        }
        closeButton.addEventListener("click", dismissToast);
        window.setTimeout(dismissToast, isError ? 6000 : 4500);
    }

    // Đọc dữ liệu từ các ô nhập
    function getProfileFromForm() {
        const profile = {};
        profileFields.forEach(function (id) {
            const field = document.getElementById(id);
            if (field) {
                profile[id] = field.value.trim();
            }
        });
        return profile;
    }

    // Điền dữ liệu vào form
    function fillProfileForm(profile) {
        profileFields.forEach(function (id) {
            const field = document.getElementById(id);
            if (field && profile[id] !== undefined) {
                field.value = profile[id];
            }
        });
        updateBioCount();
        updateNoteCount();
    }

    // Đếm ký tự phần giới thiệu bản thân.
    function updateBioCount() {
        if (bioInput && bioCount) {
            bioCount.textContent = bioInput.value.length;
        }
    }

    // Giới hạn ghi chú cá nhân tối đa 1.000 ký tự và cập nhật bộ đếm.
    function updateNoteCount() {
        if (!noteInput) return;
        if (noteInput.value.length > NOTE_MAX_LENGTH) {
            noteInput.value = noteInput.value.slice(0, NOTE_MAX_LENGTH);
        }
        if (noteCount) {
            noteCount.textContent = noteInput.value.length + "/" + NOTE_MAX_LENGTH + " ký tự";
        }
    }

    function loadProfileFromStorage() {
        try { return JSON.parse(localStorage.getItem(PROFILE_KEY) || "{}") || {}; }
        catch (_) { return {}; }
    }

    // Lưu hồ sơ
    function saveProfile(profile) {
        try {
            const previous = JSON.parse(localStorage.getItem(PROFILE_KEY) || "{}");
            const merged = { ...previous, ...profile };
            if (!String(merged.phone || "").trim()) merged.phone = "0123456789";
            localStorage.setItem(PROFILE_KEY, JSON.stringify(merged));
            window.dispatchEvent(new CustomEvent("studyhub:profile-updated", { detail: merged }));
            return true;
        } catch (error) {
            console.error("Không thể lưu hồ sơ:", error);
            return false;
        }
    }

    // Đọc hồ sơ đã lưu
    function loadProfile() {
        let profile = { ...defaultProfile };
        try {
            const saved = localStorage.getItem(PROFILE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (
                    parsed &&
                    typeof parsed === "object" &&
                    !Array.isArray(parsed)
                ) {
                    profile = {
                        ...defaultProfile,
                        ...parsed
                    };
                }
            }
        } catch (error) {
            console.error("Lỗi đọc hồ sơ:", error);
        }
        Object.assign(profile, getIdentityProfile());
        if (!String(profile.phone || "").trim()) profile.phone = "0123456789";
        fillProfileForm(profile);
        lockIdentityFields();
        updateTopbarProfile(profile);
    }

    // Cập nhật thông tin trên topbar
    function updateTopbarProfile(profile) {
        const nameElement =
            document.getElementById("topbarUserName");
        const classElement =
            document.getElementById("topbarUserClass");
        const studentIdElement =
            document.getElementById("topbarStudentId");
        if (nameElement) {
            nameElement.textContent =
                "Xin chào, " + (profile.fullName || "") + "!";
        }
        if (classElement && profile.studentClass) {
            classElement.textContent = profile.studentClass;
        }
        if (studentIdElement && profile.studentId) {
            studentIdElement.textContent = profile.studentId;
        }
    }

    // Xử lý lưu hồ sơ
    if (profileForm) {
        profileForm.addEventListener("submit", function (event) {
            event.preventDefault();
            // Kiểm tra dữ liệu hợp lệ theo HTML
            if (!profileForm.checkValidity()) {
                profileForm.reportValidity();
                return;
            }
            const profile = getProfileFromForm();
            // Giữ nguyên thông tin định danh; chỉ cập nhật các trường được phép chỉnh sửa.
            const previous = loadProfileFromStorage();
            Object.assign(profile, getIdentityProfile(), {
                phone: profile.phone || previous.phone || "0123456789"
            });
            if (!profile.fullName) {
                showMessage(
                    profileMessage,
                    "Vui lòng nhập họ và tên.",
                    true
                );
                return;
            }
            const saved = saveProfile(profile);
            if (saved) {
                updateTopbarProfile(profile);
                showMessage(
                    profileMessage,
                    "Đã lưu thông tin thành công!",
                    false
                );
            } else {
                showMessage(
                    profileMessage,
                    "Không thể lưu dữ liệu. Hãy kiểm tra bộ nhớ trình duyệt.",
                    true
                );
            }
        });
    } else {
        console.warn(
            "Không tìm thấy form #profileForm trong caidat.html."
        );
    }

    // Cập nhật bộ đếm khi người dùng nhập nội dung.
    if (bioInput) {
        bioInput.addEventListener("input", updateBioCount);
    }
    if (noteInput) {
        noteInput.setAttribute("maxlength", String(NOTE_MAX_LENGTH));
        noteInput.addEventListener("input", updateNoteCount);
        updateNoteCount();
    }

    // Observer chỉ chạy một lần rồi tự ngắt để tránh vòng lặp gây lag.
    const topbarContainer = document.getElementById("topbar-container");
    function syncTopbarOnce() {
        if (!topbarContainer) return false;
        const topbarReady =
            document.getElementById("topbarUserName") ||
            document.getElementById("topbarUserClass") ||
            document.getElementById("topbarAvatar");
        if (!topbarReady) return false;
        try {
            let profile = { ...defaultProfile };
            const saved = localStorage.getItem(PROFILE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
                    profile = { ...defaultProfile, ...parsed };

                }
            }
            Object.assign(profile, getIdentityProfile());
            updateTopbarProfile(profile);
            loadAvatar();
            return true;
        } catch (error) {
            console.error("Lỗi đồng bộ thông tin topbar:", error);
            return false;
        }
    }

    if (topbarContainer && !syncTopbarOnce()) {
        const observer = new MutationObserver(function () {
            if (syncTopbarOnce()) {
                observer.disconnect();
            }
        });

        observer.observe(topbarContainer, {
            childList: true,
            subtree: true
        });
    }

    // 2. ANH DAI DIEN
    function updateAvatarImages(source) {
        // Truy vấn phần tử tại thời điểm gọi để tránh lỗi temporal dead zone
        // khi syncTopbarOnce() gọi loadAvatar() trước khi avatarPreview được khai báo.
        const currentAvatarPreview = document.getElementById("profileAvatarImage");
        const topbarAvatar = document.getElementById("topbarAvatar");
        if (currentAvatarPreview) {
            currentAvatarPreview.src = source;
        }
        if (topbarAvatar) {
            topbarAvatar.src = source;
        }
    }
    // Tải ảnh đại diện đã lưu
    function loadAvatar() {
        try {
            const savedAvatar = localStorage.getItem(AVATAR_KEY);
            updateAvatarImages(savedAvatar || defaultAvatar);
        } catch (error) {
            console.error("Lỗi tải ảnh đại diện:", error);
            updateAvatarImages(defaultAvatar);
        }
    }

    // Nén ảnh đại diện trước khi lưu để giảm dung lượng localStorage.
    // Ảnh gốc tối đa 10 MB; ảnh sau xử lý có cạnh dài tối đa 512 px.
    function compressAvatarImage(file) {
        return new Promise(function (resolve, reject) {
            const objectUrl = URL.createObjectURL(file);
            const image = new Image();

            image.onload = function () {
                try {
                    const maxDimension = 512;
                    const scale = Math.min(
                        1,
                        maxDimension / Math.max(image.naturalWidth, image.naturalHeight)
                    );
                    const width = Math.max(1, Math.round(image.naturalWidth * scale));
                    const height = Math.max(1, Math.round(image.naturalHeight * scale));
                    const canvas = document.createElement("canvas");
                    canvas.width = width;
                    canvas.height = height;

                    const context = canvas.getContext("2d");
                    if (!context) {
                        URL.revokeObjectURL(objectUrl);
                        reject(new Error("Trình duyệt không hỗ trợ xử lý ảnh."));
                        return;
                    }

                    // Nền trắng giúp ảnh PNG trong suốt hiển thị ổn định khi chuyển sang WebP/JPEG.
                    context.fillStyle = "#ffffff";
                    context.fillRect(0, 0, width, height);
                    context.drawImage(image, 0, 0, width, height);

                    canvas.toBlob(function (blob) {
                        URL.revokeObjectURL(objectUrl);

                        if (!blob) {
                            reject(new Error("Không thể nén ảnh."));
                            return;
                        }

                        resolve(blob);
                    }, "image/webp", 0.82);
                } catch (error) {
                    URL.revokeObjectURL(objectUrl);
                    reject(error);
                }
            };

            image.onerror = function () {
                URL.revokeObjectURL(objectUrl);
                reject(new Error("Không thể đọc ảnh đã chọn."));
            };

            image.src = objectUrl;
        });
    }

    function readBlobAsDataURL(blob) {
        return new Promise(function (resolve, reject) {
            const reader = new FileReader();
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function () {
                reject(new Error("Không thể đọc ảnh sau khi nén."));
            };
            reader.readAsDataURL(blob);
        });
    }

    // Chọn ảnh mới.
    if (avatarInput) {
        avatarInput.addEventListener("change", async function () {
            const file = avatarInput.files
                ? avatarInput.files[0]
                : null;
            if (!file) return;

            const allowedTypes = [
                "image/jpeg",
                "image/png",
                "image/webp"
            ];

            if (!allowedTypes.includes(file.type)) {
                showMessage(
                    avatarMessage,
                    "Vui lòng chọn ảnh JPG, PNG hoặc WEBP.",
                    true
                );
                avatarInput.value = "";
                return;
            }

            const MAX_ORIGINAL_SIZE = 10 * 1024 * 1024;
            if (file.size > MAX_ORIGINAL_SIZE) {
                showMessage(
                    avatarMessage,
                    "Ảnh gốc không được vượt quá 10 MB.",
                    true
                );
                avatarInput.value = "";
                return;
            }

            try {
                const compressedBlob = await compressAvatarImage(file);
                const imageData = await readBlobAsDataURL(compressedBlob);

                // Kiểm tra dung lượng sau nén để tránh lưu dữ liệu quá lớn.
                if (compressedBlob.size > 1024 * 1024) {
                    throw new Error("Ảnh sau khi nén vẫn còn quá lớn. Vui lòng chọn ảnh khác.");
                }

                localStorage.setItem(AVATAR_KEY, imageData);
                updateAvatarImages(imageData);

                const originalMB = (file.size / (1024 * 1024)).toFixed(2);
                const compressedKB = Math.round(compressedBlob.size / 1024);
                showMessage(
                    avatarMessage,
                    "Đã cập nhật ảnh đại diện! (" + originalMB +
                    " MB → " + compressedKB + " KB sau khi nén)",
                    false
                );
            } catch (error) {
                console.error("Lỗi xử lý ảnh đại diện:", error);
                const message = error && error.name === "QuotaExceededError"
                    ? "Bộ nhớ trình duyệt đã đầy. Hãy xóa bớt dữ liệu trang hoặc chọn ảnh khác."
                    : (error.message || "Không thể xử lý ảnh. Vui lòng thử ảnh khác.");

                showMessage(avatarMessage, message, true);
            } finally {
                avatarInput.value = "";
            }
        });
    }

    // Khôi phục ảnh đại diện mặc định
    if (resetAvatarButton) {
        resetAvatarButton.addEventListener("click", function () {
            try {
                localStorage.removeItem(AVATAR_KEY);
                updateAvatarImages(defaultAvatar);
                if (avatarInput) {
                    avatarInput.value = "";
                }
                showMessage(
                    avatarMessage,
                    "Đã khôi phục ảnh đại diện mặc định.",
                    false
                );

            } catch (error) {
                console.error("Lỗi khôi phục ảnh:", error);
                showMessage(
                    avatarMessage,
                    "Không thể khôi phục ảnh đại diện.",
                    true
                );
            }
        });
    }

    // 3. TUY CHON GIAO DIEN
    const themeSelect =
        document.getElementById("themeSelect");
    const languageSelect =
        document.getElementById("languageSelect");
    const notificationsToggle =
        document.getElementById("notificationsToggle");
    const savePreferencesButton =
        document.getElementById("savePreferencesButton");
    const preferencesMessage =
        document.getElementById("preferencesMessage");
    
        // Áp dụng giao diện qua theme.js dùng chung.
    // Có phương án dự phòng nếu theme.js chưa được nạp.
    function applyTheme(theme) {
        const normalizedTheme = theme === "dark" ? "dark" : "light";
        if (window.StudyHubTheme && typeof window.StudyHubTheme.apply === "function") {
            window.StudyHubTheme.apply(normalizedTheme);
            return;
        }
        document.documentElement.dataset.theme = normalizedTheme;
        document.body.classList.toggle(
            "dark-theme",
            normalizedTheme === "dark"
        );
        document.body.classList.remove("soft-theme");
    }

    // Tải tùy chọn đã lưu.
    function loadPreferences() {
        let saved = {};
        try {
            const raw = localStorage.getItem(PREFERENCES_KEY);
            saved = raw ? JSON.parse(raw) : {};
            if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
                saved = {};
            }
        } catch (error) {
            console.error("Lỗi tải tùy chọn:", error);
            saved = {};
        }
        const theme = saved.theme === "dark" ? "dark" : "light";
        if (themeSelect) themeSelect.value = theme;
        if (languageSelect) languageSelect.value = window.StudyHubI18n?.get?.() || (saved.language === "en" ? "en" : "vi");
        if (notificationsToggle && typeof saved.notifications === "boolean") {
            notificationsToggle.checked = saved.notifications;
        }
        applyTheme(theme);
    }

    // Lưu tùy chọn và đổi giao diện ngay khi bấm nút.
    if (savePreferencesButton) {
        savePreferencesButton.addEventListener("click", function () {
            let existing = {};
            try {
                existing = JSON.parse(localStorage.getItem(PREFERENCES_KEY) || "{}");
                if (!existing || typeof existing !== "object" || Array.isArray(existing)) {
                    existing = {};

                }
            } catch (error) {
                existing = {};
            }

            const preferences = {
                ...existing,
                theme: themeSelect && themeSelect.value === "dark" ? "dark" : "light",
                language: languageSelect && languageSelect.value === "en" ? "en" : "vi",
                notifications: notificationsToggle
                    ? notificationsToggle.checked
                    : (typeof existing.notifications === "boolean" ? existing.notifications : true)
            };
            try {
                localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
                applyTheme(preferences.theme);
                window.StudyHubI18n?.setLanguage?.(preferences.language);
                showMessage(preferencesMessage, "Đã lưu tùy chọn thành công.", false);
            } catch (error) {
                console.error("Lỗi lưu tùy chọn:", error);
                showMessage(preferencesMessage, "Không thể lưu tùy chọn. Hãy kiểm tra cài đặt trình duyệt.", true);
            }
        });
    }

    // 4. KHOI TAO TRANG
    // 4. ĐỔI MẬT KHẨU VÀ ĐĂNG XUẤT

    const changePasswordForm = document.getElementById("changePasswordForm");
    let passwordMessage = document.getElementById("passwordMessage");
    const logoutButton = document.getElementById("logoutButton");

    // Tự tạo vùng thông báo nếu HTML chưa có #passwordMessage.
    // Nhờ đó thông báo vẫn hiển thị ngay cả khi thiếu phần tử trong caidat.html.
    if (changePasswordForm && !passwordMessage) {
        passwordMessage = document.createElement("p");
        passwordMessage.id = "passwordMessage";
        passwordMessage.className = "settings-message";
        passwordMessage.setAttribute("role", "status");
        passwordMessage.setAttribute("aria-live", "polite");
        changePasswordForm.appendChild(passwordMessage);
    }
    if (changePasswordForm) {
        changePasswordForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            const currentPasswordInput = document.getElementById("currentPassword");
            const newPasswordInput = document.getElementById("newPassword");
            const confirmPasswordInput = document.getElementById("confirmPassword");
            if (!currentPasswordInput || !newPasswordInput || !confirmPasswordInput) {
                showMessage(
                    passwordMessage,
                    "Không tìm thấy đầy đủ các ô mật khẩu. Vui lòng kiểm tra HTML của form đổi mật khẩu.",
                    true
                );
                return;
            }
            const currentPassword = currentPasswordInput.value;
            const newPassword = newPasswordInput.value;
            const confirmPassword = confirmPasswordInput.value;
            if (!currentPassword || !newPassword || !confirmPassword) {
                showMessage(passwordMessage, "Vui lòng nhập đầy đủ các trường mật khẩu.", true);
                return;
            }
            if (newPassword !== confirmPassword) {
                showMessage(passwordMessage, "Mật khẩu xác nhận không khớp.", true);
                return;
            }
            if (newPassword.length < 8) {
                showMessage(passwordMessage, "Mật khẩu mới phải có ít nhất 8 ký tự.", true);
                return;
            }
            if (!window.StudyHubAuth || typeof window.StudyHubAuth.changePassword !== "function") {
                showMessage(passwordMessage, "Chức năng đổi mật khẩu chưa được khởi tạo. Vui lòng tải auth.js trước caidat.js.", true);
                return;
            }
            try {
                const result = await window.StudyHubAuth.changePassword(currentPassword, newPassword);
                if (!result || typeof result.ok !== "boolean") {
                    showMessage(passwordMessage, "Không nhận được kết quả đổi mật khẩu. Vui lòng thử lại!", true);
                    return;
                }
                showMessage(
                    passwordMessage,
                    result.message || (result.ok ? "Đổi mật khẩu thành công!" : "Đổi mật khẩu thất bại. Vui lòng kiểm tra mật khẩu hiện tại!"),
                    !result.ok
                );
                if (result.ok) {
                    changePasswordForm.reset();
                }

            } catch (error) {
                console.error("Lỗi đổi mật khẩu:", error);
                showMessage(passwordMessage, "Đã xảy ra lỗi khi đổi mật khẩu. Vui lòng thử lại!", true);
            }
        });
    } else {
        console.warn("Không tìm thấy form #changePasswordForm trong caidat.html.");
    }

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            if (confirm(window.StudyHubI18n?.t?.("Bạn có chắc muốn đăng xuất khỏi StudyHub không?") || "Bạn có chắc muốn đăng xuất khỏi StudyHub không?")) {
                window.StudyHubAuth.logout();
            }
        });
    }

    // Khởi tạo trang
    loadProfile();
    loadAvatar();
    loadPreferences();
    updateBioCount();
    updateNoteCount();
});
