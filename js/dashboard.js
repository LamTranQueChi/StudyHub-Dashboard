/* StudyHub dashboard: dữ liệu lấy trực tiếp từ API đã xác thực. */
(() => {
  const money = v => v == null ? 'Chưa có' : Number(v).toFixed(1);
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
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
    const s=d.summary;
    const stats=document.querySelector('.stats-grid');
    if(stats) stats.innerHTML=[
      ['Môn học',s.courseCount,'calendar_today','mint'],
      ['Bài tập cần nộp',s.assignmentPending,'assignment_late','pink'],
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
      const pending=d.assignments.filter(a=>a.submission_status!=='submitted');
      list.innerHTML=pending.length?pending.slice(0,5).map(a=>`<div class="assignment-item"><div class="assignment-main"><div class="assignment-icon pink"><span class="material-symbols-outlined">description</span></div><div class="assignment-info"><h3>${esc(a.title)}</h3><p>${esc(a.course_name||'Môn học')} · Hạn: ${a.due_at?new Date(a.due_at).toLocaleDateString('vi-VN'):'Chưa có hạn'}</p></div></div><span class="deadline warning">Chưa nộp</span></div>`).join(''):'<p>Bạn đã hoàn thành tất cả bài tập!</p>';
      const badge=document.querySelector('.assignments-panel .panel-badge'); if(badge) badge.textContent=pending.length;
    }
    const sched=document.querySelector('.schedule-list');
    if(sched) {
      const now=new Date(); const today=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
      const todays=d.schedule.filter(x=>x.session_date===today);
      const rows=todays.length?todays:d.schedule;
      sched.innerHTML=rows.length?rows.slice(0,5).map(x=>`<div class="schedule-item"><span class="schedule-line blue-line"></span><time class="schedule-time">${esc(x.start_time)} - ${esc(x.end_time)}</time><div class="schedule-info"><h3>${esc(x.course_name||x.title)}</h3><p>${esc(x.room)} · Giảng viên: ${esc(x.lecturer||'Chưa cập nhật')}</p><small>${new Date(x.session_date+'T00:00:00').toLocaleDateString('vi-VN')}</small></div></div>`).join(''):'<p>Chưa có lịch học được cập nhật.</p>';
      const date=document.querySelector('.schedule-date span:last-child'); if(date) date.textContent=new Date().toLocaleDateString('vi-VN',{weekday:'long',day:'2-digit',month:'2-digit',year:'numeric'});
      const heading=document.querySelector('.schedule-panel h2'); if(heading) heading.textContent=todays.length?'Lịch học hôm nay':'Lịch học sắp tới';
    }
    window.StudyHubCharts?.render(d);
    const name=document.getElementById('topbarUserName'); if(name) name.textContent=`Xin chào, ${d.student.full_name}!`;
    const cls=document.getElementById('topbarUserClass'); if(cls) cls.textContent=d.student.class_name;
  }
  document.addEventListener('DOMContentLoaded',loadDashboard);
})();
