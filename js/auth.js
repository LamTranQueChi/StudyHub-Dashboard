/* StudyHub - API authentication using Bearer token (works on localhost and GitHub Pages). */
(function () {
  "use strict";

  const API_BASE = "https://studyhub-api-4ecd.onrender.com/api";
  const PROFILE_KEY = "studyHubProfile";
  const TOKEN_KEY = "studyHubAuthToken";

  function authHeaders(options = {}) {
    const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) headers.Authorization = `Bearer ${token}`;
    return headers;
  }

  async function apiFetch(endpoint, options = {}) {
    return fetch(`${API_BASE}${endpoint}`, {
      ...options,
      // Do not depend on third-party cookies; GitHub Pages and Render are different origins.
      credentials: "omit",
      headers: authHeaders(options)
    });
  }

  async function request(endpoint, options = {}) {
    const response = await apiFetch(endpoint, options);
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(PROFILE_KEY);
      }
      const error = new Error(data.message || "Đã xảy ra lỗi. Vui lòng thử lại.");
      error.status = response.status;
      throw error;
    }
    return data;
  }

  async function login(email, password) {
    try {
      const normalizedEmail = String(email || "").trim().toLowerCase();
      if (!/^\d{9}@st\.tvu\.edu\.vn$/.test(normalizedEmail)) {
        throw new Error("Vui lòng nhập email theo dạng MSSV@st.tvu.edu.vn.");
      }
      const data = await request("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: normalizedEmail, password })
      });
      if (!data.token) throw new Error("Máy chủ chưa trả mã phiên đăng nhập. Hãy kiểm tra backend.");
      localStorage.setItem(TOKEN_KEY, data.token);
      syncProfile(data.student);
      return { ok: true, user: data.student };
    } catch (error) {
      return { ok: false, message: error.message };
    }
  }

  async function changePassword(currentPassword, newPassword) {
    try {
      const data = await request("/auth/change-password", {
        method: "PATCH",
        body: JSON.stringify({ currentPassword, newPassword })
      });
      return { ok: true, message: data.message || "Đổi mật khẩu thành công." };
    } catch (error) {
      return { ok: false, message: error.message };
    }
  }

  async function getCurrentUser() {
    if (!localStorage.getItem(TOKEN_KEY)) return null;
    try {
      const data = await request("/auth/me");
      syncProfile(data.student);
      return data.student;
    } catch (_) {
      return null;
    }
  }

  async function syncCurrentUser() {
    const user = await getCurrentUser();
    if (user) syncProfile(user);
    return user;
  }

  function syncProfile(user) {
    if (!user) return;
    localStorage.setItem(PROFILE_KEY, JSON.stringify({
      id: user.id,
      studentId: user.student_number,
      fullName: user.full_name,
      email: user.email,
      studentClass: user.class_name,
      major: user.major,
      yearOfStudy: user.year_of_study,
      phone: user.phone,
      dateOfBirth: user.date_of_birth,
      gender: user.gender,
      address: user.address,
      avatarUrl: user.avatar_url
    }));
  }

  async function logout() {
    try { await request("/auth/logout", { method: "POST", body: JSON.stringify({}) }); }
    catch (_) { /* Token is removed locally even if the API is temporarily unavailable. */ }
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(PROFILE_KEY);
    window.location.replace("login.html");
  }

  async function requireLogin() {
    const user = await getCurrentUser();
    if (!user) {
      const currentPath = window.location.pathname;
      const isInHtmlFolder = /\/html\//i.test(currentPath);
      window.location.replace(isInHtmlFolder ? "login.html" : "html/login.html");
      return false;
    }
    return true;
  }

  window.StudyHubAuth = { login, apiFetch, getCurrentUser, syncCurrentUser, syncProfile, changePassword, logout, requireLogin };
})();
