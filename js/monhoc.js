/* StudyHub - môn học: dữ liệu cá nhân lấy từ backend, không dùng card mẫu. */
(() => {
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const roman = ['I','II','III','IV','V','VI','VII','VIII'];
  function selectedSemester() {
    try {
      const saved = JSON.parse(localStorage.getItem('studyHubSemesterSettings') || 'null');
      if (Number.isInteger(saved?.semesterNumber) && saved.semesterNumber >= 1 && saved.semesterNumber <= 8) return saved.semesterNumber;
      const years = ['2024-2025','2025-2026','2026-2027','2027-2028'];
      const yi = years.indexOf(saved?.year || '2026-2027');
      return (yi < 0 ? 2 : yi) * 2 + (saved?.semester === 'II' ? 2 : 1);
    } catch { return 5; }
  }
  document.addEventListener('DOMContentLoaded', async () => {
    if (!(await window.StudyHubAuth?.requireLogin?.())) return;
    const grid = document.getElementById('courseGrid');
    if (!grid) return;
    const n = selectedSemester();
    const search = document.getElementById('courseSearchInput');
    const filters = [...document.querySelectorAll('.filter-pill')];
    const stats = document.querySelectorAll('.quick-stat strong');
    const notice = document.createElement('div');
    notice.id = 'courseStatusNotice';
    notice.className = 'course-status-notice';
    grid.replaceChildren();
    if (n > 5) {
      notice.innerHTML = '<div class="locked-course"><span class="material-symbols-outlined">lock</span><h2>Khóa học chưa mở</h2><p>Học kỳ này hiện chưa được mở. Vui lòng quay lại khi nhà trường cập nhật chương trình học.</p></div>';
      grid.before(notice);
      filters.forEach(b => b.disabled = true);
      if (stats[0]) stats[0].textContent = '0';
      return;
    }
    try {
      const res = await window.StudyHubAuth.apiFetch(`/student/courses?semester=${n}`);
      if (!res.ok) throw new Error('Không thể tải danh sách môn học. Vui lòng đăng nhập lại.');
      const data = await res.json();
      const courses = data.courses || [];
      const yearLabel = document.querySelector('.breadcrumb span:nth-child(1)');
      const yearText = document.querySelector('.breadcrumb span:nth-child(3)');
      if (yearLabel) yearLabel.textContent = `Học kỳ ${roman[n-1]}`;
      if (yearText) yearText.textContent = `Năm học ${['2024-2025','2024-2025','2025-2026','2025-2026','2026-2027'][n-1]}`;
      const totalCredits = courses.reduce((sum,c) => sum + Number(c.credits || 0),0);
      const completed = courses.filter(c => c.status === 'completed').length;
      if (stats[0]) stats[0].textContent = String(totalCredits);
      if (stats[1]) stats[1].textContent = courses.length ? `${Math.round(courses.reduce((s,c)=>s+Number(c.progress||0),0)/courses.length)}%` : '0%';
      function render() {
        const term = (search?.value || '').trim().toLocaleLowerCase('vi');
        const activeFilter = document.querySelector('.filter-pill.active')?.dataset.filter || 'all';
        const filtered = courses.filter(c => {
          const status = c.status === 'completed' ? 'completed' : 'active';
          return (activeFilter === 'all' || activeFilter === status) &&
            `${c.course_code} ${c.course_name} ${c.lecturer}`.toLocaleLowerCase('vi').includes(term);
        });
        grid.innerHTML = filtered.length ? filtered.map(c => {
          const done = c.status === 'completed';
          return `<article class="course-card" data-status="${done?'completed':'active'}">
            <div><div class="course-card-top"><div class="course-meta">
              <div class="course-icon icon-web"><span class="material-symbols-outlined">menu_book</span></div>
              <div><span class="course-code">${esc(c.course_code)} · ${esc(c.credits)} tín chỉ</span>
              <span class="status ${done?'completed-status':'active-status'}">${done?'Đã hoàn thành':'Đang học'}</span></div>
            </div><div class="grade-box ${done?'completed-grade':''}"><small>${done?'Điểm tổng kết':'Điểm hiện tại'}</small><strong>${c.score == null?'—':Number(c.score).toFixed(1)}<small>/10</small></strong></div></div>
            <h2>${esc(c.course_name)}</h2><div class="course-details">
              <p><span class="material-symbols-outlined">person</span> GV: ${esc(c.lecturer || 'Chưa cập nhật')}</p>
              <p><span class="material-symbols-outlined">meeting_room</span> Phòng học: xem thời khóa biểu</p>
            </div></div>
            <div class="course-progress"><div><span>Tiến độ học tập</span><strong>${Number(c.progress||0)}%</strong></div>
            <div class="progress-track"><span style="width:${Math.max(0,Math.min(100,Number(c.progress||0)))}%"></span></div></div>
          </article>`;
        }).join('') : '<p class="empty-state">Học kỳ này chưa có môn học phù hợp.</p>';
        const all = courses.length, act = courses.filter(c=>c.status!=='completed').length;
        const counts = {all,active:act,completed:all-act};
        filters.forEach(b => { const span=b.querySelector('span'); if(span) span.textContent=counts[b.dataset.filter] ?? 0; });
        const empty = document.getElementById('noResultsNotice'); if(empty) empty.hidden = filtered.length > 0;
      }
      filters.forEach(b => b.addEventListener('click', () => {
        filters.forEach(x=>x.classList.remove('active')); b.classList.add('active'); render();
      }));
      search?.addEventListener('input',render);
      render();
    } catch (e) {
      grid.innerHTML = `<p class="api-error">${esc(e.message)}</p>`;
    }
    document.getElementById('syllabusButton')?.addEventListener('click', () => alert(window.StudyHubI18n?.t('Chưa có file đề cương được đính kèm cho học kỳ này.') || 'Chưa có file đề cương được đính kèm cho học kỳ này.'));
  });
})();
