
/* StudyHub - Hồ sơ sinh viên và bảng điểm theo học kỳ đang chọn. */
document.addEventListener("DOMContentLoaded", async function () {
  "use strict";

  const PROFILE_KEY = "studyHubProfile";
  const AVATAR_KEY = "studyHubAvatar";

  const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  const $ = id => document.getElementById(id);

  const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[ch]);

  // Không tự tạo thông tin cá nhân mặc định.
  const defaultProfile = {
    fullName: "",
    studentId: "",
    email: "",
    phone: "0123456789",
    studentClass: "",
    major: "",
    bio: "",
    profileNote: "",
    avatarUrl: ""
  };

  function readProfile() {
    try {
      const saved = localStorage.getItem(PROFILE_KEY);
      const parsed = saved ? JSON.parse(saved) : {};

      return parsed && typeof parsed === "object" && !Array.isArray(parsed)
        ? { ...defaultProfile, ...parsed }
        : { ...defaultProfile };

    } catch (error) {
      console.error("Không đọc được hồ sơ sinh viên:", error);
      return { ...defaultProfile };
    }
  }

  function setText(id, value) {
    const element = $(id);
    if (!element) return;

    const text = String(value ?? "").trim();

    element.textContent = text || "Chưa cập nhật";
  }

  // Hiển thị hồ sơ sinh viên.
  function loadStudentProfile() {
    const profile = readProfile();

    setText("studentName", profile.fullName);

    setText(
      "studentCode",
      profile.studentId
        ? `Mã số sinh viên: ${profile.studentId}`
        : "Mã số sinh viên: Chưa cập nhật"
    );

    setText("studentClass", profile.studentClass);
    setText("studentMajor", profile.major);
    setText("studentEmail", profile.email);
    setText("studentPhone", profile.phone || "0123456789");
    setText("studentBio", profile.bio);
    setText("studentProfileNote", profile.profileNote);

    // Hiển thị đúng tên và MSSV của tài khoản đang đăng nhập.
    // Không cho chọn hồ sơ sinh viên khác trên tài khoản sinh viên.
    const currentStudent = $("studentSelectName");

    if (currentStudent) {
      const fullName = String(profile.fullName || "").trim();
      const studentId = String(profile.studentId || "").trim();

      currentStudent.textContent = fullName
        ? `${fullName} (${studentId || "Chưa cập nhật MSSV"})`
        : "Chưa cập nhật thông tin sinh viên";
    }

    // Đồng bộ ảnh đại diện.
    const avatar = $("studentAvatar");

    if (avatar) {
      avatar.src =
        localStorage.getItem(AVATAR_KEY) ||
        profile.avatarUrl ||
        "../assets/images/avatar_macdinh.jpg";
    }
  }

  // Xác định học kỳ đang được chọn.
  function selectedSemester() {
    try {
      const saved = JSON.parse(
        localStorage.getItem("studyHubSemesterSettings") || "null"
      );

      if (
        Number.isInteger(saved?.semesterNumber) &&
        saved.semesterNumber >= 1 &&
        saved.semesterNumber <= 8
      ) {
        return saved.semesterNumber;
      }

      const years = [
        "2024-2025",
        "2025-2026",
        "2026-2027",
        "2027-2028"
      ];

      const yearIndex = years.indexOf(saved?.year || "2026-2027");

      return (yearIndex < 0 ? 2 : yearIndex) * 2 +
        (saved?.semester === "II" ? 2 : 1);

    } catch {
      return 5;
    }
  }

  // Quy đổi điểm chữ.
  function letterGrade(score) {
    if (score >= 8.5) return "A";
    if (score >= 8) return "B+";
    if (score >= 7) return "B";
    if (score >= 6.5) return "C+";
    if (score >= 5.5) return "C";
    if (score >= 5) return "D";
    return "F";
  }

  function gradeStatus(course) {
    if (
      course.score === null ||
      course.score === undefined ||
      course.score === ""
    ) {
      return '<span class="grade-status studying">Đang học</span>';
    }

    return Number(course.score) >= 5
      ? '<span class="pass-tag"><span class="material-symbols-outlined">check_circle</span> Đạt</span>'
      : '<span class="grade-status failed">Chưa đạt</span>';
  }

  function subjectIcon(code, index) {
    const labels = ["DB", "WEB", "IT", "MATH", "CS", "OS"];

    const classes = [
      "subject-db",
      "subject-html",
      "subject-css",
      "subject-java",
      "subject-os",
      "subject-network"
    ];

    return `<span class="subject-icon ${classes[index % classes.length]}">${esc(
      String(code || labels[index % labels.length]).slice(0, 5)
    )}</span>`;
  }

  // Hiển thị khi chưa có dữ liệu.
  function renderEmpty(semester, title, message) {
    const body = $("semesterGradesBody");

    if (body) {
      body.innerHTML =
        `<tr><td colspan="5" class="grade-empty">${esc(message)}</td></tr>`;
    }

    const bars = $("semesterGradeBars");

    if (bars) {
      bars.innerHTML = `<p class="chart-empty">${esc(message)}</p>`;
    }

    if ($("semesterGradeLegend")) {
      $("semesterGradeLegend").textContent = "";
    }

    setText("gradeSemesterCaption", title);
    setText("semesterGradeEvaluation", message);

    const notice = $("semesterGradeNotice");

    if (notice) {
      notice.hidden = false;
      setText("semesterGradeNoticeTitle", title);
      setText("semesterGradeNoticeText", message);
    }
  }

  // Hiển thị bảng điểm.
  function renderGrades(courses, semester) {
    const body = $("semesterGradesBody");
    const caption = $("gradeSemesterCaption");

    const scored = courses.filter(course =>
      course.score !== null &&
      course.score !== undefined &&
      course.score !== ""
    );

    const average = scored.length
      ? scored.reduce((sum, course) => sum + Number(course.score), 0) /
        scored.length
      : null;

    if (caption) {
      caption.textContent =
        `Học kỳ ${roman[semester - 1]} · ${courses.length} môn học · ${scored.length} môn đã có điểm`;
    }

    const notice = $("semesterGradeNotice");

    if (notice) notice.hidden = true;

    if (body) {
      body.innerHTML = courses.length
        ? courses.map((course, index) => {
            const hasScore =
              course.score !== null &&
              course.score !== undefined &&
              course.score !== "";

            const score = hasScore ? Number(course.score) : null;

            return `<tr>
              <td>
                <div class="subject-cell">
                  ${subjectIcon(course.course_code, index)}
                  <div>
                    <strong>${esc(course.course_name)}</strong>
                    <small>Mã MH: ${esc(course.course_code)}</small>
                  </div>
                </div>
              </td>
              <td>${Number(course.credits) || 0}</td>
              <td class="score ${hasScore && score >= 8.5 ? "score-green" : "score-blue"}">
                ${hasScore ? score.toFixed(1) : "Chưa có"}
              </td>
              <td>${hasScore ? letterGrade(score) : "—"}</td>
              <td>${gradeStatus(course)}</td>
            </tr>`;
          }).join("")
        : '<tr><td colspan="5" class="grade-empty">Học kỳ này chưa có môn học.</td></tr>';
    }

    const bars = $("semesterGradeBars");

    if (bars) {
      bars.innerHTML = scored.length
        ? scored.map((course, index) => {
            const score = Math.max(
              0,
              Math.min(10, Number(course.score))
            );

            const name = String(course.course_name || course.course_code);

            const shortName = name.length > 13
              ? `${name.slice(0, 12)}…`
              : name;

            return `<div class="bar-item" title="${esc(name)}: ${score.toFixed(1)}">
              <strong>${score.toFixed(1)}</strong>
              <div class="bar-track">
                <span class="bar-fill ${[
                  "bar-html",
                  "bar-web",
                  "bar-db",
                  "bar-network",
                  "bar-java",
                  "bar-os"
                ][index % 6]}" style="height:${score * 10}%"></span>
              </div>
              <small>${esc(shortName)}</small>
            </div>`;
          }).join("")
        : '<p class="chart-empty">Học kỳ này chưa có điểm tổng kết để phân bố.</p>';
    }

    const legend = $("semesterGradeLegend");

    if (legend) {
      if (scored.length) {
        const best = scored.reduce((a, b) =>
          Number(a.score) >= Number(b.score) ? a : b
        );

        legend.innerHTML = `
          <span>
            <i class="legend-dot dot-blue"></i>
            Điểm cao nhất:
            <strong>${Number(best.score).toFixed(1)}</strong>
            (${esc(best.course_name)})
          </span>
          <span>
            <i class="legend-dot dot-light"></i>
            Điểm trung bình học kỳ:
            <strong>${average.toFixed(2)}</strong>
          </span>
        `;
      } else {
        legend.textContent = "Chưa có dữ liệu điểm số trong học kỳ này.";
      }
    }

    setText(
      "semesterGradeEvaluation",
      scored.length
        ? `Đã có ${scored.length}/${courses.length} môn được ghi nhận điểm. Điểm trung bình các môn đã có kết quả là ${average.toFixed(2)}/10.`
        : "Các môn học trong học kỳ này chưa có điểm tổng kết. Bảng phân bố điểm sẽ được cập nhật khi có kết quả."
    );
  }

  // Lấy bảng điểm từ Backend.
  async function loadSemesterGrades() {
    const semester = selectedSemester();
    const title = `Học kỳ ${roman[semester - 1]}`;

    if (semester > 5) {
      renderEmpty(
        semester,
        `${title} · Chưa mở`,
        "Học kỳ này chưa mở nên chưa có môn học, bảng điểm hoặc dữ liệu phân bố điểm."
      );
      return;
    }

    const auth = window.StudyHubAuth;

    if (!auth) {
      console.error("Không tìm thấy StudyHubAuth. Kiểm tra thứ tự tải auth.js.");
      return;
    }

    const ok = await auth.requireLogin();

    if (!ok) return;

    try {
      const response = await auth.apiFetch(
        `/student/courses?semester=${semester}`
      );

      if (!response.ok) {
        throw new Error("Không thể tải bảng điểm từ máy chủ.");
      }

      const data = await response.json();

      renderGrades(
        Array.isArray(data.courses) ? data.courses : [],
        semester
      );

    } catch (error) {
      console.error("Lỗi tải bảng điểm theo học kỳ:", error);

      renderEmpty(
        semester,
        `${title} · Không tải được dữ liệu`,
        "Không thể kết nối Backend. Hãy kiểm tra máy chủ và tải lại trang."
      );
    }
  }

  // Nút cập nhật hồ sơ.
  $("editProfileButton")?.addEventListener("click", () => {
    window.location.href = "caidat.html";
  });

  // Xuất bảng điểm.
  $("exportGradesButton")?.addEventListener("click", () => {
    window.print();
  });

  // Tải hồ sơ và bảng điểm ban đầu.
  loadStudentProfile();
  loadSemesterGrades();

  // Cập nhật khi dữ liệu localStorage thay đổi từ tab khác.
  window.addEventListener("storage", event => {
    if ([PROFILE_KEY, AVATAR_KEY].includes(event.key)) {
      loadStudentProfile();
    }

    if (event.key === "studyHubSemesterSettings") {
      loadSemesterGrades();
    }
  });

  // Cập nhật khi auth.js đồng bộ hồ sơ mới.
  window.addEventListener("studyhub:profile-updated", () => {
    loadStudentProfile();
  });

  // Cập nhật khi quay lại trang.
  window.addEventListener("pageshow", loadStudentProfile);
});
