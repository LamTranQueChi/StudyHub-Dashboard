/* StudyHub - thời khóa biểu lấy theo học kỳ đã chọn từ API. */
(() => {
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function selectedSemester() {
    try {
      const s=JSON.parse(localStorage.getItem('studyHubSemesterSettings')||'null');
      if(Number.isInteger(s?.semesterNumber)&&s.semesterNumber>=1&&s.semesterNumber<=8)return s.semesterNumber;
      const years=['2024-2025','2025-2026','2026-2027','2027-2028']; const i=years.indexOf(s?.year||'2026-2027');
      return (i<0?2:i)*2+(s?.semester==='II'?2:1);
    } catch { return 5; }
  }
  const dayNames=['Chủ nhật','Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7'];
  const dayKeys=['sun','mon','tue','wed','thu','fri','sat'];
  document.addEventListener('DOMContentLoaded', async () => {
    if(!(await window.StudyHubAuth?.requireLogin?.())) return;
    const container=document.getElementById('schedule-container');
    if(!container) return;
    const n=selectedSemester();
    const roman=['I','II','III','IV','V','VI','VII','VIII'];
    const semLabel=document.querySelector('.semester-label');
    if(semLabel) semLabel.textContent=`Học kỳ ${roman[n-1]} · Thời khóa biểu`;
    const featured=document.querySelector('.featured-class');
    const filters=document.querySelector('.day-filter-list');
    const search=document.getElementById('scheduleSearch');
    let rows=[];
    if(n>5) {
      container.innerHTML='<div class="schedule-empty"><span class="material-symbols-outlined">lock</span><h2>Khóa học chưa mở</h2><p>Học kỳ này hiện chưa được mở. Vui lòng quay lại khi nhà trường cập nhật chương trình học.</p></div>';
      if(featured) featured.innerHTML='<div class="schedule-empty"><span class="material-symbols-outlined">lock</span><h2>Khóa học chưa mở</h2><p>Chưa có môn học hoặc thời khóa biểu cho học kỳ này.</p></div>';
      if(filters) filters.innerHTML='';
      return;
    }
    try {
      const response=await window.StudyHubAuth.apiFetch(`/student/schedule?semester=${n}`);
      if(!response.ok) throw new Error('Không tải được thời khóa biểu. Vui lòng kiểm tra kết nối backend.');
      const data=await response.json();
      rows=data.schedule||[];
      if(!rows.length) {
        container.innerHTML='<div class="schedule-empty"><span class="material-symbols-outlined">event_busy</span><h2>Chưa có thời khóa biểu</h2><p>Hiện chưa có lịch học được cập nhật cho học kỳ này.</p></div>';
        if(featured) featured.innerHTML='<div class="schedule-empty"><h2>Chưa có buổi học được cập nhật</h2><p>Thời khóa biểu sẽ hiển thị tại đây khi có dữ liệu chính thức.</p></div>';
        if(filters) filters.innerHTML='';
      } else {
        if(filters) {
          const dates=[...new Set(rows.map(x=>x.session_date))].sort();
          filters.innerHTML='<button type="button" class="day-filter-pill active" data-day="all">Tất cả</button>'+dates.map(date=>{
            const dt=new Date(date+'T00:00:00'); return `<button type="button" class="day-filter-pill" data-day="${date}">${dayNames[dt.getDay()]} (${dt.toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit'})})</button>`;
          }).join('');
        }
        function render() {
          const selected=filters?.querySelector('.day-filter-pill.active')?.dataset.day||'all';
          const keyword=(search?.value||'').trim().toLocaleLowerCase('vi');
          const shown=rows.filter(x=>(selected==='all'||x.session_date===selected)&&`${x.title} ${x.course_code||''} ${x.lecturer||''} ${x.room||''}`.toLocaleLowerCase('vi').includes(keyword));
          container.innerHTML=shown.length?shown.map(x=>{
            const dt=new Date(x.session_date+'T00:00:00');
            return `<article class="schedule-item" data-day="${dayKeys[dt.getDay()]}">
              <div class="date-box"><span>${esc(dayNames[dt.getDay()].toUpperCase())}</span><strong>${dt.toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit'})}</strong></div>
              <div class="time-box"><strong><span class="material-symbols-outlined">schedule</span> ${esc(x.start_time)} - ${esc(x.end_time)}</strong><span>${x.start_time<'12:00'?'Ca sáng':'Ca chiều'}</span></div>
              <div class="lesson-info"><div class="lesson-title-row"><h3>${esc(x.course_name||x.title)}</h3><span class="lesson-type type-theory">Theo lịch lớp</span></div>
              <p><span class="material-symbols-outlined">person</span> ${esc(x.lecturer||'Chưa cập nhật')} <span class="meta-separator">•</span> Mã HP: ${esc(x.course_code||'—')}</p></div>
              <div class="lesson-actions"><span class="room-badge"><span class="material-symbols-outlined">meeting_room</span> ${esc(x.room||'Chưa cập nhật')}</span></div>
            </article>`;
          }).join(''):'<p class="schedule-empty">Không có buổi học phù hợp.</p>';
        }
        filters?.querySelectorAll('.day-filter-pill').forEach(b=>b.addEventListener('click',()=>{
          filters.querySelectorAll('.day-filter-pill').forEach(x=>x.classList.remove('active')); b.classList.add('active'); render();
        }));
        search?.addEventListener('input',render);
        render();
        const first=rows[0], dt=new Date(first.session_date+'T00:00:00');
        if(featured) featured.innerHTML=`<div class="featured-main"><div><div class="class-status"><span class="status-dot"></span>Buổi học trong học kỳ</div><div class="class-time"><span class="material-symbols-outlined">schedule</span>${esc(first.start_time)} - ${esc(first.end_time)} · ${dt.toLocaleDateString('vi-VN')}</div><h2>${esc(first.course_name||first.title)}</h2><div class="class-details"><div class="detail-item"><div class="detail-icon"><span class="material-symbols-outlined">person</span></div><div><span class="detail-label">Giảng viên</span><strong>${esc(first.lecturer||'Chưa cập nhật')}</strong></div></div><div class="detail-item"><div class="detail-icon"><span class="material-symbols-outlined">meeting_room</span></div><div><span class="detail-label">Phòng học</span><strong>${esc(first.room||'Chưa cập nhật')}</strong></div></div><div class="detail-item"><div class="detail-icon"><span class="material-symbols-outlined">groups</span></div><div><span class="detail-label">Lớp</span><strong>${esc(data.class_name||'DA24TTA')}</strong></div></div></div></div></div>`;
      }
    } catch(e) {
      container.innerHTML=`<p class="api-error">${esc(e.message)}</p>`;
    }
    document.getElementById('exportScheduleButton')?.addEventListener('click',()=>window.print());
    document.getElementById('syncCalendarButton')?.addEventListener('click',()=>alert('Chức năng đồng bộ Google Calendar cần được kết nối với tài khoản Google.'));
    document.getElementById('attendanceButton')?.addEventListener('click',()=>alert('Chức năng điểm danh sẽ hoạt động khi backend được bổ sung phiên điểm danh.'));
    document.getElementById('attendanceHistoryButton')?.addEventListener('click',()=>alert('Chưa có dữ liệu điểm danh để hiển thị.'));
    document.getElementById('reportRoomButton')?.addEventListener('click',()=>alert('Vui lòng liên hệ cán bộ quản lý giảng đường để báo sự cố.'));
  });
})();
