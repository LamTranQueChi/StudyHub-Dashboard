/* StudyHub - thời khóa biểu hiển thị theo trạng thái thật của học kỳ. */
(() => {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[char]));

  function selectedSemester() {
    if (window.StudyHubSemester?.getNumber) return window.StudyHubSemester.getNumber();
    try {
      const saved = JSON.parse(localStorage.getItem('studyHubSemesterSettings') || 'null');
      if (Number.isInteger(saved?.semesterNumber) && saved.semesterNumber >= 1 && saved.semesterNumber <= 8) return saved.semesterNumber;
      const years = ['2024-2025','2025-2026','2026-2027','2027-2028'];
      const index = years.indexOf(saved?.year || '2026-2027');
      return (index < 0 ? 2 : index) * 2 + (saved?.semester === 'II' ? 2 : 1);
    } catch {
      return 5;
    }
  }

  const roman = ['I','II','III','IV','V','VI','VII','VIII'];
  const dayNames = ['Chủ nhật','Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7'];
  const dayKeys = ['sun','mon','tue','wed','thu','fri','sat'];

  function localDateTime(date, time) {
    const [year, month, day] = String(date).split('-').map(Number);
    const [hour, minute] = String(time || '00:00').split(':').map(Number);
    return new Date(year, month - 1, day, hour || 0, minute || 0, 0);
  }

  function formatDate(value) {
    if (!value) return 'Chưa cập nhật';
    return new Date(`${value}T00:00:00`).toLocaleDateString('vi-VN', {
      day: '2-digit', month: '2-digit', year: 'numeric'
    });
  }

  function getSessionState(row, semesterStatus, now) {
    const start = localDateTime(row.session_date, row.start_time);
    const end = localDateTime(row.session_date, row.end_time);

    if (semesterStatus === 'completed') {
      return start <= now
        ? { text: 'Đã diễn ra', className: 'status-finished' }
        : { text: 'Cần kiểm tra ngày học', className: 'status-review' };
    }
    if (end < now) return { text: 'Đã diễn ra', className: 'status-finished' };
    if (start <= now && end >= now) return { text: 'Đang diễn ra', className: 'status-live' };
    return { text: 'Sắp tới', className: 'status-soon' };
  }

  function addSemesterNotice(header, status, label, year) {
    if (!header) return;
    document.getElementById('semesterStateNotice')?.remove();

    const notice = document.createElement('div');
    notice.id = 'semesterStateNotice';
    notice.className = `semester-state-banner ${status === 'completed' ? 'is-completed' : 'is-upcoming'}`;

    if (status === 'completed') {
      notice.innerHTML = `
        <span class="material-symbols-outlined" aria-hidden="true">history</span>
        <div><strong>${esc(label)} · ${esc(year)} đã kết thúc</strong>
        <p>Bạn đang xem lại lịch sử học tập. Các buổi bên dưới là lịch cũ, không phải lịch học sắp tới.</p></div>`;
    } else if (status === 'locked' || status === 'planned') {
      notice.innerHTML = `
        <span class="material-symbols-outlined" aria-hidden="true">lock</span>
        <div><strong>${esc(label)} · Chưa mở</strong>
        <p>Học kỳ này chưa được nhà trường mở dữ liệu thời khóa biểu.</p></div>`;
    } else {
      notice.innerHTML = `
        <span class="material-symbols-outlined" aria-hidden="true">event_available</span>
        <div><strong>${esc(label)} · ${esc(year)} đang diễn ra</strong>
        <p>Trạng thái từng buổi học được xác định theo ngày và giờ hiện tại.</p></div>`;
    }
    header.insertAdjacentElement('afterend', notice);
  }

  document.addEventListener('DOMContentLoaded', async () => {
    if (!(await window.StudyHubAuth?.requireLogin?.())) return;

    const container = document.getElementById('schedule-container');
    if (!container) return;

    const number = selectedSemester();
    const header = document.querySelector('.schedule-page-header');
    const featured = document.querySelector('.featured-class');
    const filters = document.querySelector('.day-filter-list');
    const search = document.getElementById('scheduleSearch');
    const semesterLabel = document.querySelector('.semester-label');
    const romanLabel = roman[number - 1] || String(number);

    let semesterStatus = number <= 4 ? 'completed' : number === 5 ? 'in_progress' : 'locked';

    if (number > 5) {
      if (semesterLabel) semesterLabel.textContent = `Học kỳ ${romanLabel} · Chưa mở`;
      addSemesterNotice(header, 'locked', `Học kỳ ${romanLabel}`, '');
      container.innerHTML = '<div class="schedule-empty"><span class="material-symbols-outlined">lock</span><h2>Học kỳ chưa mở</h2><p>Nhà trường chưa mở dữ liệu cho học kỳ này. Lịch học sẽ xuất hiện khi có thông báo chính thức.</p></div>';
      if (featured) featured.innerHTML = '<div class="schedule-empty"><span class="material-symbols-outlined">lock</span><h2>Chưa có lịch học</h2><p>Học kỳ này chưa có thời khóa biểu để hiển thị.</p></div>';
      if (filters) filters.replaceChildren();
      return;
    }

    try {
      const response = await window.StudyHubAuth.apiFetch(`/student/schedule?semester=${number}`);
      if (!response.ok) throw new Error('Không tải được thời khóa biểu. Vui lòng kiểm tra kết nối Backend.');

      const data = await response.json();
      const rows = Array.isArray(data.schedule) ? data.schedule : [];
      const semester = data.semester || {};
      semesterStatus = semester.display_status || semester.status || semesterStatus;

      const semesterName = semester.label || `Học kỳ ${romanLabel}`;
      const schoolYear = semester.school_year || '';
      if (semesterLabel) {
        const stateText = semesterStatus === 'completed' ? 'Đã kết thúc'
          : semesterStatus === 'locked' || semesterStatus === 'planned' ? 'Chưa mở'
          : 'Đang học';
        semesterLabel.textContent = `${semesterName} · ${schoolYear} · ${stateText}`;
      }

      if (semesterStatus === 'locked' || semesterStatus === 'planned') {
        addSemesterNotice(header, 'locked', semesterName, schoolYear);
        container.innerHTML = '<div class="schedule-empty"><span class="material-symbols-outlined">lock</span><h2>Học kỳ chưa mở</h2><p>Học kỳ này chưa được nhà trường mở dữ liệu. Vui lòng quay lại sau.</p></div>';
        if (featured) featured.innerHTML = '<div class="schedule-empty"><h2>Chưa có thời khóa biểu</h2><p>Chưa có buổi học nào được công bố cho học kỳ này.</p></div>';
        if (filters) filters.replaceChildren();
        return;
      }

      const isCompleted = semesterStatus === 'completed';
      addSemesterNotice(header, semesterStatus, semesterName, schoolYear);

      // Học kỳ đã kết thúc chỉ là dữ liệu lưu trữ, không hiển thị nhãn "sắp tới".
      if (isCompleted) {
        const syncButton = document.getElementById('syncCalendarButton');
        if (syncButton) syncButton.hidden = true;
      }

      if (!rows.length) {
        const emptyText = isCompleted
          ? 'Học kỳ đã kết thúc nhưng chưa có dữ liệu lịch học được lưu.'
          : 'Hiện chưa có buổi học nào được cập nhật cho học kỳ này.';
        container.innerHTML = `<div class="schedule-empty"><span class="material-symbols-outlined">event_busy</span><h2>Chưa có dữ liệu lịch học</h2><p>${emptyText}</p></div>`;
        if (featured) featured.innerHTML = `<div class="schedule-empty"><h2>${isCompleted ? 'Lịch sử học kỳ' : 'Chưa có buổi học sắp tới'}</h2><p>${emptyText}</p></div>`;
        if (filters) filters.replaceChildren();
        return;
      }

      if (filters) {
        const dates = [...new Set(rows.map(row => row.session_date))].sort();
        filters.innerHTML = '<button type="button" class="day-filter-pill active" data-day="all">Tất cả buổi học</button>' +
          dates.map(date => {
            const dateObject = new Date(`${date}T00:00:00`);
            return `<button type="button" class="day-filter-pill" data-day="${esc(date)}">${dayNames[dateObject.getDay()]} (${dateObject.toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit'})})</button>`;
          }).join('');
      }

      function render() {
        const selectedDay = filters?.querySelector('.day-filter-pill.active')?.dataset.day || 'all';
        const keyword = (search?.value || '').trim().toLocaleLowerCase('vi');
        const now = new Date();

        const shown = rows.filter(row =>
          (selectedDay === 'all' || row.session_date === selectedDay) &&
          `${row.title || ''} ${row.course_name || ''} ${row.course_code || ''} ${row.lecturer || ''} ${row.room || ''}`
            .toLocaleLowerCase('vi').includes(keyword)
        );

        container.innerHTML = shown.length ? shown.map(row => {
          const date = new Date(`${row.session_date}T00:00:00`);
          const state = getSessionState(row, semesterStatus, now);
          return `<article class="schedule-item ${state.className === 'status-finished' ? 'schedule-finished' : ''}" data-day="${dayKeys[date.getDay()]}">
            <div class="date-box"><span>${esc(dayNames[date.getDay()].toUpperCase())}</span><strong>${date.toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit'})}</strong></div>
            <div class="time-box"><strong><span class="material-symbols-outlined">schedule</span> ${esc(row.start_time)} - ${esc(row.end_time)}</strong><span>${row.start_time < '12:00' ? 'Ca sáng' : 'Ca chiều'}</span></div>
            <div class="lesson-info"><div class="lesson-title-row"><h3>${esc(row.course_name || row.title)}</h3><span class="lesson-type type-theory">Theo lịch lớp</span></div>
            <p><span class="material-symbols-outlined">person</span> ${esc(row.lecturer || 'Chưa cập nhật')} <span class="meta-separator">•</span> Mã HP: ${esc(row.course_code || '—')}</p></div>
            <div class="lesson-actions"><span class="room-badge"><span class="material-symbols-outlined">meeting_room</span> ${esc(row.room || 'Chưa cập nhật')}</span>
            <span class="lesson-status ${state.className}">${state.text}</span></div>
          </article>`;
        }).join('') : '<p class="schedule-empty">Không có buổi học phù hợp.</p>';
      }

      filters?.querySelectorAll('.day-filter-pill').forEach(button => button.addEventListener('click', () => {
        filters.querySelectorAll('.day-filter-pill').forEach(item => item.classList.remove('active'));
        button.classList.add('active');
        render();
      }));
      search?.addEventListener('input', render);
      render();

      if (featured) {
        if (isCompleted) {
          const dates = rows.map(row => row.session_date).sort();
          const firstDate = dates[0] ? formatDate(dates[0]) : 'Chưa cập nhật';
          const lastDate = dates[dates.length - 1] ? formatDate(dates[dates.length - 1]) : 'Chưa cập nhật';
          const courseCount = new Set(rows.map(row => row.course_code || row.course_name || row.title)).size;
          featured.innerHTML = `<div class="featured-main archive-featured">
            <div>
              <div class="class-status class-status-archived"><span class="material-symbols-outlined">history</span> Học kỳ đã kết thúc</div>
              <h2>Lịch sử học tập · ${esc(semesterName)}</h2>
              <p class="archive-description">Đây là dữ liệu để xem lại, không phải thời khóa biểu sắp tới.</p>
              <div class="class-details">
                <div class="detail-item"><div class="detail-icon"><span class="material-symbols-outlined">event_note</span></div><div><span class="detail-label">Tổng số buổi</span><strong>${rows.length} buổi học</strong></div></div>
                <div class="detail-item"><div class="detail-icon"><span class="material-symbols-outlined">menu_book</span></div><div><span class="detail-label">Số học phần</span><strong>${courseCount} môn học</strong></div></div>
                <div class="detail-item"><div class="detail-icon"><span class="material-symbols-outlined">date_range</span></div><div><span class="detail-label">Thời gian lưu trữ</span><strong>${firstDate} – ${lastDate}</strong></div></div>
              </div>
            </div>
          </div>`;
        } else {
          const now = new Date();
          const upcoming = rows.find(row => getSessionState(row, semesterStatus, now).className !== 'status-finished') || rows[rows.length - 1];
          const state = getSessionState(upcoming, semesterStatus, now);
          const date = new Date(`${upcoming.session_date}T00:00:00`);
          const heading = state.className === 'status-live' ? 'Đang diễn ra'
            : state.className === 'status-soon' ? 'Buổi học tiếp theo'
            : 'Buổi học gần nhất';
          featured.innerHTML = `<div class="featured-main">
            <div>
              <div class="class-status"><span class="status-dot"></span>${heading}</div>
              <div class="class-time"><span class="material-symbols-outlined">schedule</span>${esc(upcoming.start_time)} - ${esc(upcoming.end_time)} · ${date.toLocaleDateString('vi-VN')}</div>
              <h2>${esc(upcoming.course_name || upcoming.title)}</h2>
              <div class="class-details">
                <div class="detail-item"><div class="detail-icon"><span class="material-symbols-outlined">person</span></div><div><span class="detail-label">Giảng viên</span><strong>${esc(upcoming.lecturer || 'Chưa cập nhật')}</strong></div></div>
                <div class="detail-item"><div class="detail-icon"><span class="material-symbols-outlined">meeting_room</span></div><div><span class="detail-label">Phòng học</span><strong>${esc(upcoming.room || 'Chưa cập nhật')}</strong></div></div>
                <div class="detail-item"><div class="detail-icon"><span class="material-symbols-outlined">groups</span></div><div><span class="detail-label">Lớp</span><strong>${esc(data.class_name || 'Lớp của bạn')}</strong></div></div>
              </div>
            </div>
          </div>`;
        }
      }
    } catch (error) {
      container.innerHTML = `<p class="api-error">${esc(error.message)}</p>`;
    }

    document.getElementById('exportScheduleButton')?.addEventListener('click', () => window.print());
    document.getElementById('syncCalendarButton')?.addEventListener('click', () => alert('Chức năng đồng bộ Google Calendar cần được kết nối với tài khoản Google.'));
    document.getElementById('attendanceButton')?.addEventListener('click', () => alert('Chức năng điểm danh sẽ hoạt động khi backend được bổ sung phiên điểm danh.'));
    document.getElementById('attendanceHistoryButton')?.addEventListener('click', () => alert('Chưa có dữ liệu điểm danh để hiển thị.'));
    document.getElementById('reportRoomButton')?.addEventListener('click', () => alert('Vui lòng liên hệ cán bộ quản lý giảng đường để báo sự cố.'));
  });
})();
