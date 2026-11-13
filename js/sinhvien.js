
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


  // Chuyên cần: ưu tiên dữ liệu điểm danh chính thức; nếu chưa có,
  // sinh viên tự khai báo số buổi vắng dựa trên thời khóa biểu đã đồng bộ.
  let latestAttendanceSummary = null;

  function attendanceText(value) {
    return window.StudyHubI18n?.t(value) || value;
  }

  function renderAttendanceSummary(summary) {
    latestAttendanceSummary = summary || null;

    const rateElement = $("attendanceRate");
    const noteElement = $("attendanceSummary");
    const statusElement = $("attendanceStatusTag");
    const reportButton = $("attendanceReportButton");
    if (!rateElement || !noteElement) return;

    const total = Number(summary?.totalScheduledSessions ?? summary?.total ?? 0);
    const hasData = Boolean(summary?.hasData);
    const source = summary?.source || "none";
    const official = source === "official";
    const invalidReport = Boolean(summary?.invalidReport);

    if (total <= 0) {
      rateElement.textContent = "—";
      noteElement.textContent = attendanceText("Chưa có buổi học đã diễn ra");
      if (statusElement) statusElement.textContent = attendanceText("Chưa có dữ liệu");
      if (reportButton) reportButton.hidden = true;
      return;
    }

    if (invalidReport) {
      rateElement.textContent = "—";
      noteElement.textContent = attendanceText("Số buổi vắng đã khai báo vượt quá số buổi theo thời khóa biểu. Vui lòng cập nhật lại.");
      if (statusElement) statusElement.textContent = attendanceText("Cần cập nhật");
      if (reportButton) {
        reportButton.hidden = false;
        reportButton.textContent = attendanceText("Cập nhật khai báo");
      }
      return;
    }

    if (!hasData) {
      rateElement.textContent = "—";
      noteElement.textContent = `${total} ${attendanceText("buổi đã diễn ra")} · ${attendanceText("Chưa khai báo số buổi vắng")}`;
      if (statusElement) statusElement.textContent = attendanceText("Chưa khai báo");
      if (reportButton) {
        reportButton.hidden = false;
        reportButton.textContent = attendanceText("Khai báo buổi vắng");
      }
      return;
    }

    const participated = Number(summary.participated ?? summary.present ?? 0);
    const absent = Number(summary.absent || 0);
    const denominator = Number(summary.total || total);

    rateElement.textContent = `${Number(summary.rate)}%`;
    noteElement.textContent = `${participated}/${denominator} ${attendanceText("buổi đã tham gia")} · ${absent} ${attendanceText("buổi vắng")}`;

    if (statusElement) {
      statusElement.textContent = official
        ? attendanceText("Dữ liệu đã đồng bộ")
        : attendanceText("Đã khai báo");
    }

    if (reportButton) {
      reportButton.hidden = official;
      reportButton.textContent = attendanceText("Cập nhật khai báo");
    }

    noteElement.title = official
      ? attendanceText("Tỷ lệ được tính từ dữ liệu điểm danh đã đồng bộ.")
      : attendanceText("Tỷ lệ được tính từ thời khóa biểu và số buổi vắng bạn tự khai báo.");
  }

  async function loadAttendanceSummary() {
    const rateElement = $("attendanceRate");
    const noteElement = $("attendanceSummary");
    if (!rateElement || !noteElement) return;

    rateElement.textContent = "—";
    noteElement.textContent = attendanceText("Đang tải tỷ lệ chuyên cần...");

    const auth = window.StudyHubAuth;
    if (!auth) {
      noteElement.textContent = attendanceText("Không thể tải dữ liệu chuyên cần. Vui lòng thử lại.");
      return;
    }

    try {
      const isLoggedIn = await auth.requireLogin();
      if (!isLoggedIn) return;

      const semester = selectedSemester();
      const response = await auth.apiFetch(`/student/attendance?semester=${semester}`);
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || "Không thể tải dữ liệu chuyên cần. Vui lòng thử lại.");

      renderAttendanceSummary(data.summary || {});
    } catch (error) {
      console.error("Không tải được tỷ lệ chuyên cần:", error);
      rateElement.textContent = "—";
      noteElement.textContent = attendanceText("Không thể tải dữ liệu chuyên cần. Vui lòng thử lại.");
      noteElement.title = error.message || "";
      const statusElement = $("attendanceStatusTag");
      if (statusElement) statusElement.textContent = attendanceText("Chưa có dữ liệu");
    }
  }

  function initAttendanceReport() {
    const dialog = $("attendanceReportDialog");
    const reportButton = $("attendanceReportButton");
    const form = $("attendanceReportForm");
    const input = $("attendanceAbsentInput");
    const totalLabel = $("attendanceTotalSessions");
    const confirm = $("attendanceHonestConfirm");
    const errorBox = $("attendanceFormError");
    const saveButton = $("attendanceDialogSave");
    const infoButton = $("attendanceInfoButton");
    const infoPopover = $("attendanceInfoPopover");

    if (infoButton && infoPopover) {
      infoButton.addEventListener("click", event => {
        event.stopPropagation();
        const willOpen = infoPopover.hidden;
        infoPopover.hidden = !willOpen;
        infoButton.setAttribute("aria-expanded", String(willOpen));
      });

      document.addEventListener("click", event => {
        if (!infoPopover.hidden && !infoPopover.contains(event.target) && !infoButton.contains(event.target)) {
          infoPopover.hidden = true;
          infoButton.setAttribute("aria-expanded", "false");
        }
      });
    }

    const closeDialog = () => {
      if (dialog?.open) dialog.close();
      if (errorBox) {
        errorBox.hidden = true;
        errorBox.textContent = "";
      }
    };

    $("attendanceDialogClose")?.addEventListener("click", closeDialog);
    $("attendanceDialogCancel")?.addEventListener("click", closeDialog);

    reportButton?.addEventListener("click", async () => {
      if (!latestAttendanceSummary) await loadAttendanceSummary();
      const summary = latestAttendanceSummary || {};
      const total = Number(summary.totalScheduledSessions ?? summary.total ?? 0);

      if (summary.source === "official") {
        window.alert(attendanceText("Dữ liệu điểm danh chính thức đã được đồng bộ. Bạn không thể thay đổi số liệu này bằng khai báo cá nhân."));
        return;
      }
      if (total <= 0) {
        window.alert(attendanceText("Chưa có buổi học đã diễn ra để khai báo."));
        return;
      }

      if (totalLabel) totalLabel.textContent = String(total);
      if (input) {
        input.max = String(total);
        input.value = summary.declaredAbsences == null ? "" : String(summary.declaredAbsences);
      }
      if (confirm) confirm.checked = false;
      if (errorBox) {
        errorBox.hidden = true;
        errorBox.textContent = "";
      }
      if (dialog?.showModal) dialog.showModal();
      else if (dialog) dialog.setAttribute("open", "");
      input?.focus();
    });

    dialog?.addEventListener("click", event => {
      if (event.target === dialog) closeDialog();
    });

    form?.addEventListener("submit", async event => {
      event.preventDefault();
      if (!input || !confirm || !saveButton) return;

      const raw = input.value.trim();
      const absentSessions = Number(raw);
      const total = Number(latestAttendanceSummary?.totalScheduledSessions ?? latestAttendanceSummary?.total ?? 0);

      const showError = message => {
        if (!errorBox) return;
        errorBox.textContent = attendanceText(message);
        errorBox.hidden = false;
      };

      if (!raw || !Number.isInteger(absentSessions) || absentSessions < 0) {
        showError("Vui lòng nhập số buổi vắng hợp lệ.");
        input.focus();
        return;
      }
      if (absentSessions > total) {
        showError("Số buổi vắng không thể lớn hơn tổng số buổi đã diễn ra.");
        input.focus();
        return;
      }
      if (!confirm.checked) {
        showError("Vui lòng xác nhận thông tin trước khi lưu.");
        confirm.focus();
        return;
      }

      const auth = window.StudyHubAuth;
      if (!auth) {
        showError("Không thể kết nối máy chủ. Vui lòng thử lại.");
        return;
      }

      const originalLabel = attendanceText("Lưu khai báo");
      saveButton.disabled = true;
      saveButton.textContent = attendanceText("Đang lưu...");

      try {
        const response = await auth.apiFetch("/student/attendance/self-report", {
          method: "PUT",
          body: JSON.stringify({
            semester: selectedSemester(),
            absentSessions,
            confirmed: true
          })
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.message || "Không thể lưu khai báo chuyên cần.");

        renderAttendanceSummary(data.summary || {});
        closeDialog();
      } catch (error) {
        showError(error.message || "Không thể lưu khai báo chuyên cần.");
      } finally {
        saveButton.disabled = false;
        saveButton.textContent = originalLabel;
      }
    });

    window.addEventListener("studyhub:language-changed", () => {
      if (latestAttendanceSummary) renderAttendanceSummary(latestAttendanceSummary);
    });
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
  initAttendanceReport();
  loadStudentProfile();
  loadSemesterGrades();
  loadAttendanceSummary();

  // Cập nhật khi dữ liệu localStorage thay đổi từ tab khác.
  window.addEventListener("storage", event => {
    if ([PROFILE_KEY, AVATAR_KEY].includes(event.key)) {
      loadStudentProfile();
    }

    if (event.key === "studyHubSemesterSettings") {
      loadSemesterGrades();
      loadAttendanceSummary();
    }
  });

  // Cập nhật khi auth.js đồng bộ hồ sơ mới.
  window.addEventListener("studyhub:profile-updated", () => {
    loadStudentProfile();
  });

  // Cập nhật khi quay lại trang.
  window.addEventListener("pageshow", loadStudentProfile);
});
