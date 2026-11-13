/* StudyHub dashboard: dữ liệu lấy trực tiếp từ API đã xác thực. */
(() => {
  const money = v => v == null ? 'Chưa có' : Number(v).toFixed(1);
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  // Tạo thời điểm theo giờ địa phương, tránh lệch ngày do phân tích chuỗi ISO UTC.
  let lastDashboardData = null;
  const localDateTime = (date, time = '00:00') => {
    const [year, month, day] = String(date || '').split('-').map(Number);
    const [hour, minute] = String(time || '00:00').split(':').map(Number);
    if (![year, month, day].every(Number.isFinite)) return null;
    const value = new Date(year, month - 1, day, hour || 0, minute || 0, 0);
    return Number.isNaN(value.getTime()) ? null : value;
  };
  async function loadDashboard() {
    const ok = await window.StudyHubAuth?.requireLogin?.();
    if (!ok) return;
    ['.stats-grid','.courses-grid','.assignment-list','.schedule-list'].forEach(selector => {
      const node=document.querySelector(selector); if(node) node.innerHTML='<p>Đang tải dữ liệu...</p>';
    });
    try {
      const semester = window.StudyHubSemester?.getNumber?.() || (() => {
        try { const x=JSON.parse(localStorage.getItem('studyHubSemesterSettings')||'null'); if(Number.isInteger(x?.semesterNumber)) return x.semesterNumber; const years=['2024-2025','2025-2026','2026-2027','2027-2028']; return Math.max(1,years.indexOf(x?.year||'2026-2027')*2+(x?.semester==='II'?2:1)); } catch { return 5; }
      })();
      if (semester > 5) {
        const main=document.querySelector('main.dashboard');
        if(main) main.innerHTML='<section class="locked-course dashboard-locked"><span class="material-symbols-outlined">lock</span><h2>Khóa học chưa mở</h2><p>Học kỳ này hiện chưa được mở. Vui lòng quay lại khi nhà trường cập nhật chương trình học.</p></section>';
        return;
      }
      const response = await window.StudyHubAuth.apiFetch(`/student/dashboard?semester=${semester}`);
      if (!response.ok) throw new Error('Không tải được dữ liệu dashboard. Hãy đăng nhập lại.');
      const data = await response.json();
      render(data);
    } catch (e) {
      console.error(e);
      ['.stats-grid','.courses-grid','.assignment-list','.schedule-list'].forEach(selector => {
        const node=document.querySelector(selector); if(node) node.innerHTML='<p class="api-error">Không tải được dữ liệu. Hãy kiểm tra Backend và đăng nhập lại.</p>';
      });
      document.querySelector('.page-heading')?.insertAdjacentHTML('beforeend',
        `<p class="api-error" role="alert">${esc(e.message || 'Không thể kết nối máy chủ.')}</p>`);
    }
  }
  function render(d) {
    lastDashboardData = d;
    const s=d.summary;
    // Tính số bài chưa hoàn thành ngay từ danh sách bài tập thực tế,
    // tránh hiển thị số liệu cũ/sai nếu Backend trả summary chưa đồng bộ.
    const isCompleted = a => ['submitted','graded','completed'].includes(String(a.submission_status || '').trim().toLowerCase());
    const pendingAssignments=(d.assignments || []).filter(a=>!isCompleted(a));
    const pendingCount=pendingAssignments.length;
    const stats=document.querySelector('.stats-grid');
    if(stats) stats.innerHTML=[
      ['Môn học',s.courseCount,'calendar_today','mint'],
      ['Bài tập cần nộp',pendingCount,'assignment_late','pink'],
      ['Điểm trung bình',money(s.averageScore),'verified_user','blue'],
      ['Tiến độ học tập',`${s.progress}%`,'military_tech','orange']
    ].map(x=>`<article class="stat-card"><div class="stat-icon ${x[3]}"><span class="material-symbols-outlined">${x[2]}</span></div><div class="stat-info"><span class="stat-label">${x[0]}</span><strong>${x[1]}</strong></div></article>`).join('');
    const grid=document.querySelector('.courses-grid');
    if(grid) {
      const current=d.courses;
      grid.innerHTML=current.length?current.map(c=>`<article class="course-card"><div class="course-header"><div class="course-icon mint"><span class="material-symbols-outlined">menu_book</span></div><div class="course-info"><h3>${esc(c.course_name)}</h3><p>${esc(c.course_code)} · ${esc(c.credits)} tín chỉ</p></div></div><div class="course-footer"><div class="course-score"><strong>${money(c.score)}</strong><span>/ 10</span></div><span class="assignment-count">${c.progress}% tiến độ</span></div></article>`).join(''):'<p>Chưa có môn học đang học.</p>';
    }
    const list=document.querySelector('.assignment-list');
    if(list) {
      const pending=pendingAssignments;
      list.innerHTML=pending.length?pending.slice(0,5).map(a=>`<div class="assignment-item"><div class="assignment-main"><div class="assignment-icon pink"><span class="material-symbols-outlined">description</span></div><div class="assignment-info"><h3>${esc(a.title)}</h3><p>${esc(a.course_name||'Môn học')} · Hạn: ${a.due_at?new Date(a.due_at).toLocaleDateString(window.StudyHubI18n?.get?.() === 'en' ? 'en-US' : 'vi-VN'):'Chưa có hạn'}</p></div></div><span class="deadline warning">Chưa nộp</span></div>`).join(''):'<p>Bạn đã hoàn thành tất cả bài tập!</p>';
      const badge=document.querySelector('.assignments-panel .panel-badge'); if(badge) badge.textContent=pending.length;
    }
    const sched=document.querySelector('.schedule-list');
    if(sched) {
      const now = new Date();
      const today = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
      // Dashboard chỉ hiển thị buổi đang diễn ra hoặc chưa diễn ra.
      // Buổi đã kết thúc (kể cả các ngày trong quá khứ) được giữ ở trang Lịch học,
      // không đưa vào danh sách "Lịch học sắp tới".
      const schedules = Array.isArray(d.schedule) ? d.schedule : [];
      const upcoming = schedules
        .filter(item => {
          const endAt = localDateTime(item.session_date, item.end_time);
          return endAt && endAt.getTime() > now.getTime();
        })
        .sort((a, b) => {
          const aStart = localDateTime(a.session_date, a.start_time);
          const bStart = localDateTime(b.session_date, b.start_time);
          return (aStart?.getTime() ?? 0) - (bStart?.getTime() ?? 0);
        });

      sched.innerHTML = upcoming.length
        ? upcoming.slice(0, 5).map(item => {
            const date = localDateTime(item.session_date);
            const dateLabel = date ? date.toLocaleDateString(window.StudyHubI18n?.get?.() === 'en' ? 'en-US' : 'vi-VN') : 'Chưa cập nhật';
            return `<div class="schedule-item"><span class="schedule-line blue-line"></span><time class="schedule-time">${esc(item.start_time)} - ${esc(item.end_time)}</time><div class="schedule-info"><h3>${esc(item.course_name || item.title)}</h3><p>${esc(item.room || 'Chưa cập nhật')} · Giảng viên: ${esc(item.lecturer || 'Chưa cập nhật')}</p><small>${dateLabel}</small></div></div>`;
          }).join('')
        : `<div class="schedule-empty-state"><span class="material-symbols-outlined" aria-hidden="true">event_available</span><div><strong>Chưa có lịch học sắp tới</strong><p>Các buổi học đã kết thúc sẽ không hiển thị trong mục này.</p></div></div>`;

      const date = document.querySelector('.schedule-date span:last-child');
      if(date) date.textContent = now.toLocaleDateString(window.StudyHubI18n?.get?.() === 'en' ? 'en-US' : 'vi-VN',{weekday:'long',day:'2-digit',month:'2-digit',year:'numeric'});
      const heading = document.querySelector('.schedule-panel h2');
      if(heading) heading.textContent = upcoming.some(item => item.session_date === today)
        ? 'Lịch học hôm nay'
        : 'Lịch học sắp tới';
    }
    window.StudyHubCharts?.render(d);
    const name=document.getElementById('topbarUserName'); if(name) name.textContent=`Xin chào, ${d.student.full_name}!`;
    const cls=document.getElementById('topbarUserClass'); if(cls) cls.textContent=d.student.class_name;
  }
  function initQuickNote() {
    const input = document.getElementById('dashboardQuickNote');
    const saveButton = document.getElementById('saveQuickNote');
    const count = document.getElementById('quickNoteCount');
    const status = document.getElementById('quickNoteStatus');
    const widget = document.getElementById('quickNoteWidget');
    const toggleButton = document.getElementById('quickNoteToggle');
    const panel = document.getElementById('quickNotePanel');
    const collapseButton = document.getElementById('collapseQuickNote');
    if (!input || !saveButton || !widget || !toggleButton || !panel) return;

    const setExpanded = expanded => {
      widget.classList.toggle('is-open', expanded);
      panel.hidden = !expanded;
      toggleButton.hidden = expanded;
      toggleButton.setAttribute('aria-expanded', String(expanded));
      toggleButton.setAttribute('aria-label', expanded ? 'Ghi chú đang mở' : 'Mở ghi chú nhanh');
      if (expanded) input.focus();
      else toggleButton.focus();
    };

    toggleButton.addEventListener('click', () => setExpanded(true));
    collapseButton?.addEventListener('click', () => setExpanded(false));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !panel.hidden) setExpanded(false);
    });

    const PROFILE_KEY = 'studyHubProfile';
    const readProfile = () => {
      try { return JSON.parse(localStorage.getItem(PROFILE_KEY) || '{}') || {}; }
      catch { return {}; }
    };
    const profile = readProfile();
    input.value = String(profile.profileNote || '').slice(0, 1000);
    const updateCount = () => { if (count) count.textContent = `${input.value.length}/1000 ký tự`; };
    input.addEventListener('input', updateCount);
    updateCount();
    saveButton.addEventListener('click', () => {
      try {
        const latest = readProfile();
        latest.profileNote = input.value.trim();
        localStorage.setItem(PROFILE_KEY, JSON.stringify(latest));
        window.dispatchEvent(new CustomEvent('studyhub:profile-updated', { detail: latest }));
        if (status) status.textContent = 'Đã lưu ghi chú!';
      } catch (error) {
        console.error('Không thể lưu ghi chú:', error);
        if (status) status.textContent = 'Không thể lưu. Vui lòng thử lại!';
      }
    });
  }
  window.addEventListener('studyhub:language-changed', () => { if (lastDashboardData) render(lastDashboardData); });
  document.addEventListener('DOMContentLoaded', () => { initQuickNote(); loadDashboard(); });
})();
