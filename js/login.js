
document.addEventListener("DOMContentLoaded", async function () {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");
    const message = document.getElementById("loginMessage");

    if (!form || !window.StudyHubAuth) return;

    const submitButton = form.querySelector('[type="submit"]');

    // Kiểm tra phiên đăng nhập hiện tại
    const currentUser = await window.StudyHubAuth.getCurrentUser();

    if (currentUser) {
        window.location.replace("dashboard.html");
        return;
    }
    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        message.textContent = "";
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        if (!email || !password) {
            message.textContent = "Vui lòng nhập MSSV/email và mật khẩu.";
            return;
        }

        if (submitButton) submitButton.disabled = true;

        try {
            const result = await window.StudyHubAuth.login(email, password);
            if (!result.ok) {
                message.textContent = result.message;
                return;
            }
            window.location.replace("dashboard.html");
        } catch (error) {
            message.textContent = "Không thể kết nối máy chủ. Hãy kiểm tra backend.";
            console.error(error);
        } finally {
            if (submitButton) submitButton.disabled = false;
        }
    });
});
