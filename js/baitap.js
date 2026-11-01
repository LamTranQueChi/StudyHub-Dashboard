/* StudyHub - Bài tập được lấy theo học kỳ và tài khoản đang đăng nhập. */
(() => {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
  function getSemester() {
    try {
      const saved = JSON.parse(localStorage.getItem('studyHubSemesterSettings') || 'null');
      if (Number.isInteger(saved?.semesterNumber) && saved.semesterNumber >= 1 && saved.semesterNumber <= 8) return saved.semesterNumber;
      const years = ['2024-2025','2025-2026','2026-2027','2027-2028'];
      const yearIndex = years.indexOf(saved?.year || '2026-2027');
      return (yearIndex < 0 ? 2 : yearIndex) * 2 + (saved?.semester === 'II' ? 2 : 1);
    } catch { return 5; }
  }
  const formatDate = value => value ? new Date(value).toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit',year:'numeric'}) : 'Chưa có hạn nộp';
  document.addEventListener('DOMContentLoaded', async () => {
    if (!(await window.StudyHubAuth?.requireLogin?.())) return;
    const container = document.getElementById('assignmentsContainer');
    const search = document.getElementById('assignmentSearchInput');
    const tabs = [...document.querySelectorAll('.filter-tab')];
    const noResults = document.getElementById('noResults');
    if (!container) return;
    const semester = getSemester();
    const roman = ['I','II','III','IV','V','VI','VII','VIII'];
    const pageHeading = document.querySelector('.assignment-heading h1, .page-heading h1, h1');
    if (pageHeading) pageHeading.textContent = `Danh sách bài tập · Học kỳ ${roman[semester-1]}`;
    const pageDescription = document.querySelector('.page-description');
    if (pageDescription) pageDescription.textContent = `Theo dõi bài tập, hạn nộp và kết quả của Học kỳ ${roman[semester-1]}.`;
    if (semester > 5) {
      container.innerHTML = '<div class="schedule-empty"><h2>Khóa học chưa mở</h2><p>Chưa có bài tập cho học kỳ này.</p></div>';
      tabs.forEach(t => t.disabled = true);
      return;
    }
    let assignments = [];
    let filter = 'all';
    try {
      const response = await window.StudyHubAuth.apiFetch(`/student/assignments?semester=${semester}`);
      if (!response.ok) throw new Error('Không tải được danh sách bài tập.');
      const data = await response.json();
      assignments = data.assignments || [];
    } catch (error) {
      container.innerHTML = `<div class="no-results"><h3>${esc(error.message)}</h3><p>Vui lòng kiểm tra Backend và thử tải lại trang.</p></div>`;
      return;
    }
    const isCompleted = item => ['graded','submitted','completed'].includes(String(item.submission_status || '').toLowerCase());
    function render() {
      const keyword = (search?.value || '').trim().toLocaleLowerCase('vi');
      const filtered = assignments.filter(item => {
        const completed = isCompleted(item);
        const statusOk = filter === 'all' || (filter === 'completed' ? completed : !completed);
        const text = `${item.title} ${item.course_name || ''} ${item.course_code || ''}`.toLocaleLowerCase('vi');
        return statusOk && (!keyword || text.includes(keyword));
      });
      container.innerHTML = filtered.length ? filtered.map(item => {
        const completed = isCompleted(item);
        const due = formatDate(item.due_at);
        const icon = /dữ liệu|sql/i.test(item.course_name || '') ? 'database' : /mạng/i.test(item.course_name || '') ? 'hub' : /linux|hệ điều hành/i.test(item.course_name || '') ? 'terminal' : 'code';
        const meta = completed
          ? `<span class="meta-success"><span class="material-symbols-outlined">check_circle</span> Đã nộp${item.submitted_at ? `: ${formatDate(item.submitted_at)}` : ''}${item.score !== null && item.score !== undefined ? ` • Điểm: <strong>${esc(Number(item.score).toFixed(1))}/10</strong>` : ''}</span>`
          : `<span class="meta-deadline"><span class="material-symbols-outlined">schedule</span> Hạn nộp: <strong>${esc(due)}</strong></span>`;
        return `<article class="task-card" data-status="${completed ? 'completed' : 'pending'}" data-title="${esc(item.title)}" data-subject="${esc(item.course_name || '')}">
          <div class="task-icon ${completed ? 'icon-green' : 'icon-blue'}"><span class="material-symbols-outlined">${icon}</span></div>
          <div class="task-content">
            <div class="task-subject subject-blue">${esc((item.course_name || 'Môn học').toLocaleUpperCase('vi'))} <span>• ${esc(item.course_code || '—')}</span></div>
            <h2>${esc(item.title)}</h2>
            <div class="task-meta">${meta}</div>
          </div>
          <div class="task-actions">
            <span class="task-status ${completed ? 'status-success' : 'status-danger'}">${completed ? '✓ Đã hoàn thành' : 'Chưa hoàn thành'}</span>
            <button class="${completed ? 'btn-review' : 'btn-detail'}" type="button" data-task-id="${item.id}">${completed ? 'Xem lại' : 'Xem chi tiết'} <span class="material-symbols-outlined">chevron_right</span></button>
          </div>
        </article>`;
      }).join('') : '<div class="no-results"><h3>Không có bài tập phù hợp</h3><p>Học kỳ này chưa có bài tập hoặc không khớp bộ lọc.</p></div>';
      const completedCount = assignments.filter(isCompleted).length;
      const pendingCount = assignments.length - completedCount;
      document.getElementById('allTaskCount')?.replaceChildren(document.createTextNode(assignments.length));
      document.getElementById('pendingTaskCount')?.replaceChildren(document.createTextNode(pendingCount));
      document.getElementById('completedTaskCount')?.replaceChildren(document.createTextNode(completedCount));
      document.getElementById('totalTaskStat')?.replaceChildren(document.createTextNode(assignments.length));
      document.getElementById('pendingTaskStat')?.replaceChildren(document.createTextNode(pendingCount));
      document.getElementById('completedTaskStat')?.replaceChildren(document.createTextNode(completedCount));
      document.getElementById('completionRateStat')?.replaceChildren(document.createTextNode(`${assignments.length ? Math.round(completedCount / assignments.length * 100) : 0}%`));
      if (noResults) noResults.hidden = true;
    }
    tabs.forEach(tab => tab.addEventListener('click', () => {
      filter = tab.dataset.filter || 'all';
      tabs.forEach(x => x.classList.toggle('active', x === tab));
      render();
    }));
    search?.addEventListener('input', render);
    container.addEventListener('click', event => {
      const button = event.target.closest('button[data-task-id]');
      if (!button) return;
      const item = assignments.find(x => String(x.id) === button.dataset.taskId);
      if (item) alert(`${item.title}\nMôn học: ${item.course_name}\nTrạng thái: ${isCompleted(item) ? 'Đã hoàn thành' : 'Chưa hoàn thành'}${item.score != null ? `\nĐiểm: ${item.score}/10` : ''}`);
    });
    document.getElementById('sortButton')?.addEventListener('click', () => {
      assignments.sort((a,b) => String(a.due_at || '').localeCompare(String(b.due_at || '')));
      render();
    });
    const addNoteButton = [...document.querySelectorAll('button')].find(button => button.textContent.includes('Thêm ghi chú'));
    addNoteButton?.addEventListener('click', () => {
      const note = prompt('Nhập ghi chú học tập của bạn:');
      if (note?.trim()) {
        const saved = JSON.parse(localStorage.getItem('studyHubNotes') || '[]');
        saved.push({text:note.trim(),createdAt:new Date().toISOString()});
        localStorage.setItem('studyHubNotes',JSON.stringify(saved));
        alert('Đã lưu ghi chú học tập!');
      }
    });
    render();
  });
})();
