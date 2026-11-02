if (!window.__studyHubMainInitialized) {
    window.__studyHubMainInitialized = true;
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initStudyHub, { once: true });
    } else {
        initStudyHub();
    }
}

async function initStudyHub() {
    if (window.StudyHubAuth && !(await window.StudyHubAuth.requireLogin())) return;
    if (window.StudyHubTheme && typeof window.StudyHubTheme.load === "function") window.StudyHubTheme.load();
    renderComponents();
    if (window.StudyHubTheme && typeof window.StudyHubTheme.load === "function") window.StudyHubTheme.load();
    initSidebarNavigation();
    initSidebarToggle();
    initTopbarActions();
    initUserProfile();
    initSearch();
    initSemesterSettings();
}

function renderComponents() {
    const sidebarContainer = document.getElementById("sidebar-container");
    const topbarContainer = document.getElementById("topbar-container");
    const footerContainer = document.getElementById("footer-container");

    if (sidebarContainer) {
        sidebarContainer.innerHTML = "";
        const sidebar = document.createElement("aside");
        sidebar.className = "sidebar";
        sidebar.id = "sidebar";

        const sidebarTop = document.createElement("div");
        sidebarTop.className = "sidebar-top";
        const brand = document.createElement("div");
        brand.className = "brand";
        brand.innerHTML =
            '<div class="brand-icon"><span class="material-symbols-outlined">school</span></div>' +
            '<div class="brand-text"><h2>StudyHub</h2><span>STUDENT PORTAL</span></div>' +
            '<button class="sidebar-close" id="sidebarClose" type="button" aria-label="Đóng menu">' +
            '<span class="material-symbols-outlined" aria-hidden="true">close</span></button>';

        const nav = document.createElement("nav");
        nav.className = "sidebar-nav";
        nav.setAttribute("aria-label", "Điều hướng chính");
        const menuItems = [
            ["dashboard.html", "tong-quan", "dashboard", "Tổng quan"],
            ["sinhvien.html", "sinh-vien", "group", "Sinh viên"],
            ["monhoc.html", "mon-hoc", "menu_book", "Môn học"],
            ["baitap.html", "bai-tap", "assignment", "Bài tập"],
            ["lichhoc.html", "lich-hoc", "calendar_month", "Lịch học"],
            ["caidat.html", "cai-dat", "settings", "Cài đặt"]
        ];

        menuItems.forEach(item => {
            const link = document.createElement("a");
            link.href = item[0];
            link.className = "nav-link";
            link.dataset.page = item[1];
            const icon = document.createElement("span");
            icon.className = "material-symbols-outlined";
            icon.textContent = item[2];
            const label = document.createElement("span");
            label.textContent = item[3];
            link.append(icon, label);
            nav.appendChild(link);
        });

        sidebarTop.append(brand, nav);
        const semesterCard = document.createElement("button");
        semesterCard.type = "button";
        semesterCard.className = "semester-card";
        semesterCard.id = "semesterCard";
        semesterCard.setAttribute("aria-label", "Chọn học kỳ và năm học");
        semesterCard.title = "Nhấn để chọn học kỳ";
        semesterCard.innerHTML =
            '<span class="semester-icon"><span class="material-symbols-outlined">school</span></span>' +
            '<span class="semester-info"><strong id="sidebarSemester">Học kỳ V</strong>' +
            '<span id="sidebarSchoolYear">Năm học 2026-2027</span></span>' +
            '<span class="material-symbols-outlined semester-edit-icon" aria-hidden="true">edit</span>';

        sidebar.append(sidebarTop, semesterCard);
        sidebarContainer.appendChild(sidebar);
    }

    if (topbarContainer) {
        topbarContainer.innerHTML = "";
        const header = document.createElement("header");
        header.className = "topbar";
        header.innerHTML =
            '<button class="sidebar-toggle" id="sidebarToggle" type="button" aria-label="Mở menu" aria-controls="sidebar" aria-expanded="false">' +
            '<span class="material-symbols-outlined" aria-hidden="true">menu</span></button>' +
            '<div class="search-box"><span class="material-symbols-outlined" aria-hidden="true">search</span>' +
            '<input type="text" id="searchInput" placeholder="Tìm kiếm trang: Tổng quan, Sinh viên, Môn học..." aria-label="Tìm kiếm trang trong Sidebar"></div>' +
            '<div class="topbar-right"><button class="notification-btn" type="button" aria-label="Thông báo" title="Thông báo">' +
            '<span class="material-symbols-outlined" aria-hidden="true">notifications</span><span class="notification-dot" aria-hidden="true"></span></button>' +
            '<div class="user-profile"><div class="user-info"><strong id="topbarUserName">Xin chào, Lâm Trần Quế Chi!</strong>' +
            '<span id="topbarUserClass">DA24TTA</span></div><button class="user-avatar" id="topbarAvatarButton" type="button" aria-label="Mở cài đặt tài khoản" title="Cài đặt tài khoản">' +
            '<img id="topbarAvatar" src="../assets/images/avatar_macdinh.jpg" alt="Ảnh đại diện tài khoản"></button></div></div>';
        topbarContainer.appendChild(header);
    }

    if (footerContainer) {
        footerContainer.innerHTML = '<footer class="footer"><p>© 2026 StudyHub - Student Portal</p><p>Hỗ trợ học tập và quản lý tiến độ học tập.</p></footer>';
    }
}

function getPagePath(fileName) {
    return window.location.pathname.toLowerCase().includes("/html/") ? fileName : "html/" + fileName;
}
function navigateToPage(fileName) { window.location.href = getPagePath(fileName); }

function initSidebarNavigation() {
    const pageFiles = {
        "tong-quan": "dashboard.html", "sinh-vien": "sinhvien.html", "mon-hoc": "monhoc.html",
        "bai-tap": "baitap.html", "lich-hoc": "lichhoc.html", "cai-dat": "caidat.html"
    };
    const currentFile = window.location.pathname.split("/").pop().toLowerCase();
    document.querySelectorAll(".sidebar .nav-link[data-page]").forEach(link => {
        const target = pageFiles[link.dataset.page];
        const active = target && target.toLowerCase() === currentFile;
        link.classList.toggle("active", Boolean(active));
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
        link.addEventListener("click", event => {
            if (!target) return;
            event.preventDefault();
            navigateToPage(target);
        });
    });
    document.querySelectorAll(".view-all[data-page]").forEach(link => {
        link.addEventListener("click", event => {
            const target = pageFiles[link.dataset.page];
            if (!target) return;
            event.preventDefault();
            navigateToPage(target);
        });
    });
}

function initSidebarToggle() {
    const MOBILE_MAX = 900;
    const sidebar = document.getElementById("sidebar");
    const toggle = document.getElementById("sidebarToggle");
    const closeButton = document.getElementById("sidebarClose");
    if (!sidebar || !toggle) return;

    let overlay = document.getElementById("sidebarOverlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "sidebarOverlay";
        overlay.className = "sidebar-overlay";
        document.body.appendChild(overlay);
    }
    const isOpen = () => sidebar.classList.contains("sidebar-open");
    function setOpen(open) {
        sidebar.classList.toggle("sidebar-open", open);
        overlay.classList.toggle("overlay-visible", open);
        document.body.classList.toggle("sidebar-menu-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
        if (open && closeButton) closeButton.focus();
    }
    toggle.addEventListener("click", () => setOpen(!isOpen()));
    overlay.addEventListener("click", () => setOpen(false));
    if (closeButton) closeButton.addEventListener("click", () => { setOpen(false); toggle.focus(); });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && isOpen()) { setOpen(false); toggle.focus(); }
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > MOBILE_MAX && isOpen()) setOpen(false);
    });
}

function initTopbarActions() {
    const button = document.querySelector(".notification-btn");
    if (button) button.addEventListener("click", () => alert("Bạn hiện không có thông báo mới."));
}

function initUserProfile() {
    const avatarButton = document.getElementById("topbarAvatarButton");
    const avatarImage = document.getElementById("topbarAvatar");
    const nameElement = document.getElementById("topbarUserName");
    const classElement = document.getElementById("topbarUserClass");
    const isHtmlPage = window.location.pathname.toLowerCase().includes("/html/");
    const defaultAvatar = isHtmlPage ? "../assets/images/avatar_macdinh.jpg" : "assets/images/avatar_macdinh.jpg";
    let profile = {
        fullName: "Lâm Trần Quế Chi", studentId: "110124012",
        email: "110124012@st.tvu.edu.vn", studentClass: "DA24TTA", major: "Công nghệ thông tin"
    };
    try {
        const savedProfile = localStorage.getItem("studyHubProfile");
        if (savedProfile) {
            const parsed = JSON.parse(savedProfile);
            if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) profile = { ...profile, ...parsed };
        }
    } catch (error) { console.error("Không thể đọc hồ sơ:", error); }
    if (nameElement) nameElement.textContent = `Xin chào, ${profile.fullName || "Sinh viên"}!`;
    if (classElement) classElement.textContent = profile.studentClass || "DA24TTA";
    if (avatarImage) {
        try { avatarImage.src = localStorage.getItem("studyHubAvatar") || defaultAvatar; }
        catch (error) { avatarImage.src = defaultAvatar; }
        avatarImage.onerror = function () { avatarImage.onerror = null; avatarImage.src = defaultAvatar; };
    }
    if (avatarButton) avatarButton.addEventListener("click", () => navigateToPage("caidat.html"));
}
function initSearch() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput || searchInput.dataset.searchReady === "true") return;
    searchInput.dataset.searchReady = "true";

    let resultBox = document.getElementById("topbarSearchResults");
    if (!resultBox) {
        resultBox = document.createElement("div");
        resultBox.id = "topbarSearchResults";
        resultBox.className = "topbar-search-results";
        resultBox.setAttribute("role", "listbox");
        searchInput.closest(".search-box")?.appendChild(resultBox);
    }

    const pages = [
        ["Tổng quan", "dashboard.html", ["dashboard", "tổng quan", "thống kê"]],
        ["Sinh viên", "sinhvien.html", ["sinh viên", "hồ sơ", "bảng điểm", "mã số sinh viên"]],
        ["Môn học", "monhoc.html", ["môn học", "khóa học", "tín chỉ"]],
        ["Bài tập", "baitap.html", ["bài tập", "nộp bài", "hạn nộp"]],
        ["Lịch học", "lichhoc.html", ["lịch học", "thời khóa biểu", "lịch"]],
        ["Cài đặt", "caidat.html", ["cài đặt", "tài khoản", "điện thoại", "ghi chú"]]
    ];
    function renderResults() {
        const keyword = searchInput.value.trim().toLocaleLowerCase("vi");
        resultBox.innerHTML = "";
        if (!keyword) { resultBox.hidden = true; return; }
        const matches = pages.filter(page =>
            page[0].toLocaleLowerCase("vi").includes(keyword) ||
            page[2].some(term => term.toLocaleLowerCase("vi").includes(keyword))
        );
        matches.forEach(page => {
            const link = document.createElement("a");
            link.href = page[1];
            link.textContent = page[0];
            link.setAttribute("role", "option");
            resultBox.appendChild(link);
        });
        if (!matches.length) {
            const empty = document.createElement("p");
            empty.textContent = "Không tìm thấy mục phù hợp.";
            resultBox.appendChild(empty);
        }
        resultBox.hidden = false;
    }
    searchInput.addEventListener("input", renderResults);
    searchInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            const first = resultBox.querySelector("a");
            if (first) window.location.href = first.href;
            else renderResults();
        }
        if (event.key === "Escape") { resultBox.hidden = true; searchInput.blur(); }
    });
    document.addEventListener("click", event => {
        if (!event.target.closest(".search-box")) resultBox.hidden = true;
    });
}
    /* Thông báo nổi khi lưu học kỳ thành công */
    function showSaveToast() {
        let toast = document.getElementById("saveToast");
        if (!toast) {
            toast = document.createElement("div");
            toast.id = "saveToast";
            toast.className = "save-toast";
            toast.setAttribute("role", "status");
            toast.setAttribute("aria-live", "polite");
            toast.innerHTML = `
                <span class="toast-icon material-symbols-outlined">check_circle</span>
                <div class="toast-content">
                    <span class="toast-title">Lưu thành công!</span>
                    <span class="toast-message">Thông tin học kỳ đã được cập nhật.</span>
                </div>
            `;
            document.body.appendChild(toast);
        }
        toast.classList.add("show");

        clearTimeout(window.saveToastTimer);
        window.saveToastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

   function showNoSemesterData(semester) {
    const existing = document.getElementById("semesterNotice");
    if (existing) existing.remove();

    const overlay = document.createElement("div");
    overlay.id = "semesterNotice";
    overlay.className = "semester-modal-overlay";
    const dialog = document.createElement("section");
    dialog.className = "semester-modal semester-notice";
    dialog.setAttribute("role", "alertdialog");
    dialog.setAttribute("aria-modal", "true");
    const icon = document.createElement("div");
    icon.className = "semester-notice-icon";
    icon.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">info</span>';
    const title = document.createElement("h2");
    title.textContent = "Khóa học chưa mở";
    const message = document.createElement("p");
    message.className = "semester-modal-description";
    message.textContent = `Học kỳ ${semester.label} (năm học ${semester.yearStart}-${semester.yearEnd}) hiện chưa mở. Vui lòng quay lại khi nhà trường cập nhật chương trình học.`;
    const actions = document.createElement("div");
    actions.className = "semester-modal-actions";
    const close = document.createElement("button");
    close.type = "button";
    close.className = "semester-save";
    close.textContent = "Đã hiểu";
    actions.appendChild(close);
    dialog.append(icon, title, message, actions);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
    function dismiss() { overlay.remove(); }
    close.addEventListener("click", dismiss);
    overlay.addEventListener("click", event => { if (event.target === overlay) dismiss(); });
    overlay.addEventListener("keydown", event => { if (event.key === "Escape") dismiss(); });
    close.focus();
}

function initSemesterSettings() {
    const card = document.getElementById("semesterCard");
    const semesterLabel = document.getElementById("sidebarSemester");
    const yearLabel = document.getElementById("sidebarSchoolYear");
    if (!card || !semesterLabel || !yearLabel) return;

    const STORAGE_KEY = "studyHubSemesterSettings";
    const schoolYears = [
        { value: "2024-2025", start: 2024, end: 2025 },
        { value: "2025-2026", start: 2025, end: 2026 },
        { value: "2026-2027", start: 2026, end: 2027 },
        { value: "2027-2028", start: 2027, end: 2028 }
    ];
    let selectedYear = "2026-2027";
    let selectedTerm = "I";

    function semesterNumber(year, term) {
        return schoolYears.findIndex(x => x.value === year) * 2 + (term === "II" ? 2 : 1);
    }
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        if (saved?.year && schoolYears.some(x => x.value === saved.year)) selectedYear = saved.year;
        if (saved?.semester && ["I", "II"].includes(saved.semester)) selectedTerm = saved.semester;
        if (Number.isInteger(saved?.semesterNumber) && saved.semesterNumber >= 1 && saved.semesterNumber <= 8) {
            const n = saved.semesterNumber;
            selectedYear = schoolYears[Math.floor((n - 1) / 2)].value;
            selectedTerm = n % 2 ? "I" : "II";
        }
    } catch (error) {
        console.warn("Không đọc được học kỳ đã lưu:", error);
    }

    function renderSemester() {
        const n = semesterNumber(selectedYear, selectedTerm);
        semesterLabel.textContent = `Học kỳ ${["I","II","III","IV","V","VI","VII","VIII"][n-1]}`;
        yearLabel.textContent = `Năm học ${selectedYear}`;
    }
    function openSemesterModal() {
        if (document.getElementById("semesterModal")) return;
        const overlay = document.createElement("div");
        overlay.id = "semesterModal";
        overlay.className = "semester-modal-overlay";
        const modal = document.createElement("section");
        modal.className = "semester-modal";
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-modal", "true");
        modal.innerHTML = `
          <h2 id="semesterModalTitle">Chọn học kỳ</h2>
          <p class="semester-modal-description">Mỗi năm học gồm 2 học kỳ. Học kỳ chưa mở sẽ không hiển thị dữ liệu môn học hoặc thời khóa biểu.</p>
          <label for="semesterYearChoice">Năm học</label>
          <select id="semesterYearChoice">${schoolYears.map(y => `<option value="${y.value}">${y.value}</option>`).join("")}</select>
          <label for="semesterChoice">Học kỳ</label>
          <select id="semesterChoice"><option value="I">Học kỳ I</option><option value="II">Học kỳ II</option></select>
          <p class="semester-modal-hint" id="semesterHint" aria-live="polite"></p>
          <div class="semester-modal-actions"><button type="button" class="semester-cancel">Hủy</button><button type="button" class="semester-save">Lưu lựa chọn</button></div>`;
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        const yearSelect = modal.querySelector("#semesterYearChoice");
        const termSelect = modal.querySelector("#semesterChoice");
        const hint = modal.querySelector("#semesterHint");
        yearSelect.value = selectedYear;
        termSelect.value = selectedTerm;
        function updateHint() {
            const n = semesterNumber(yearSelect.value, termSelect.value);
            hint.textContent = n <= 5
              ? `Học kỳ ${n} đã có dữ liệu học tập.`
              : `Học kỳ ${n} chưa mở. Khi chọn, StudyHub chỉ hiển thị thông báo khóa học chưa mở.`;
        }
        yearSelect.addEventListener("change", updateHint);
        termSelect.addEventListener("change", updateHint);
        updateHint();
        const close = () => overlay.remove();
        modal.querySelector(".semester-cancel").addEventListener("click", close);
        overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
        modal.querySelector(".semester-save").addEventListener("click", () => {
            selectedYear = yearSelect.value;
            selectedTerm = termSelect.value;
            const n = semesterNumber(selectedYear, selectedTerm);
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                semesterNumber: n, semester: selectedTerm, year: selectedYear, schoolYear: selectedYear
            }));
            close();
            window.location.reload();
        });
        modal.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
    }
    card.addEventListener("click", openSemesterModal);
    renderSemester();
}

window.StudyHubSemester = window.StudyHubSemester || {
  getNumber() {
    try {
      const saved=JSON.parse(localStorage.getItem('studyHubSemesterSettings')||'null');
      if(Number.isInteger(saved?.semesterNumber)&&saved.semesterNumber>=1&&saved.semesterNumber<=8) return saved.semesterNumber;
      const years=['2024-2025','2025-2026','2026-2027','2027-2028'];
      const index=years.indexOf(saved?.year||'2026-2027');
      return (index<0?2:index)*2+(saved?.semester==='II'?2:1);
    } catch { return 5; }
  }
};
