
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");
    const message = document.getElementById("loginMessage");

    if (!form || !window.StudyHubAuth) {
        console.error("Không tìm thấy form hoặc StudyHubAuth.");
        return;
    }

    const submitButton = form.querySelector('[type="submit"]');

    // Không tự động chuyển trang khi còn phiên đăng nhập cũ.
    // Luôn hiển thị form để người dùng chủ động đăng nhập.

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        message.textContent = "";

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        if (!email || !password) {
            message.textContent = "Vui lòng nhập email và mật khẩu.";
            return;
        }

        if (submitButton) {
            submitButton.disabled = true;
        }

        try {
            const result = await window.StudyHubAuth.login(
                email,
                password
            );

            if (!result.ok) {
                message.textContent = result.message;
                return;
            }

            message.textContent = "Đăng nhập thành công!";

            window.location.replace("dashboard.html");

        } catch (error) {
            console.error("Lỗi đăng nhập:", error);
            message.textContent =
                "Không thể kết nối máy chủ. Hãy kiểm tra Backend.";

        } finally {
            if (submitButton) {
                submitButton.disabled = false;
            }
        }
    });
});
