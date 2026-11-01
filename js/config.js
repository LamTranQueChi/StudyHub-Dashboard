/*
 * Cấu hình API cho StudyHub.
 * Local: tự dùng backend tại localhost:3000.
 * Online: thay URL bên dưới bằng URL Web Service Render thật, giữ phần /api.
 */
(function () {
  const hostname = window.location.hostname;
  const isLocal = hostname === "localhost" || hostname === "127.0.0.1";
  const productionApi = "https://YOUR-STUDYHUB-BACKEND.onrender.com/api";

  window.STUDYHUB_CONFIG = {
    API_BASE: isLocal ? "http://localhost:3000/api" : productionApi
  };
})();
