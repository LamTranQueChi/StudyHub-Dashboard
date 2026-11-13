(function () {
    "use strict";

    const STORAGE_KEY = "studyHubPreferences";
    const DEFAULT_THEME = "light";
    const VALID_THEMES = ["light", "dark"];

    function normalizeTheme(theme) {
        return VALID_THEMES.includes(theme) ? theme : DEFAULT_THEME;
    }

    function readPreferences() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return {};

            const parsed = JSON.parse(raw);
            return parsed && typeof parsed === "object" ? parsed : {};
        } catch (error) {
            console.warn("StudyHub: Không thể đọc tùy chọn giao diện.", error);
            return {};
        }
    }

    function getSavedTheme() {
        return normalizeTheme(readPreferences().theme);
    }

    function applyTheme(theme) {
        const selectedTheme = normalizeTheme(theme);

        // Theme chính đặt trên html để CSS áp dụng ngay cả trước khi body tải xong.
        document.documentElement.setAttribute("data-theme", selectedTheme);

        // Hỗ trợ các CSS cũ đang dùng body.dark-theme.
        if (document.body) {
            document.body.classList.toggle("dark-theme", selectedTheme === "dark");
        }

        // Thông báo cho các thành phần cần vẽ lại theo màu theme (ví dụ Chart.js).
        window.dispatchEvent(new CustomEvent("studyhub:theme-changed", {
            detail: { theme: selectedTheme }
        }));

        return selectedTheme;
    }

    function saveTheme(theme) {
        const selectedTheme = normalizeTheme(theme);
        const preferences = readPreferences();

        try {
            // Giữ lại các cài đặt khác trong studyHubPreferences.
            preferences.theme = selectedTheme;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
        } catch (error) {
            console.warn("StudyHub: Không thể lưu tùy chọn giao diện.", error);
        }

        applyTheme(selectedTheme);
        return selectedTheme;
    }

    function loadTheme() {
        return applyTheme(getSavedTheme());
    }

    // Áp dụng sớm để hạn chế nháy giao diện sáng trước khi chuyển sang tối.
    applyTheme(getSavedTheme());

    // API tương thích với caidat.js hiện tại:
    // StudyHubTheme.apply("dark"), StudyHubTheme.get(), StudyHubTheme.load()
    window.StudyHubTheme = {
        apply: applyTheme,
        get: getSavedTheme,
        load: loadTheme,
        save: saveTheme,
        toggle: function () {
            const nextTheme = getSavedTheme() === "dark" ? "light" : "dark";
            return saveTheme(nextTheme);
        }
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () {
            applyTheme(getSavedTheme());
        }, { once: true });
    } else if (document.body) {
        applyTheme(getSavedTheme());
    }

    // Đồng bộ khi một tab khác thay đổi tùy chọn.
    window.addEventListener("storage", function (event) {
        if (event.key === STORAGE_KEY) {
            applyTheme(getSavedTheme());
        }
    });
})();
