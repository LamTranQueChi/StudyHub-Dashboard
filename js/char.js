/* StudyHub charts: render dữ liệu điểm thực tế trả về từ API. */
(() => {
  'use strict';
  let trendChart = null;
  let distributionChart = null;
  function render(data) {
    const area = document.getElementById('gradeCharts');
    if (!area) return;
    const trendCanvas = document.getElementById('gradeTrendChart');
    const distributionCanvas = document.getElementById('gradeDistributionChart');
    if (!window.Chart || !trendCanvas || !distributionCanvas) {
      area.innerHTML = '<p class="api-error">Không tải được thư viện biểu đồ. Vui lòng kiểm tra kết nối Internet.</p>';
      return;
    }
    const grades = Array.isArray(data?.grades) ? data.grades : [];
    const dist = data?.distribution || { excellent: 0, good: 0, average: 0, weak: 0 };
    if (trendChart) trendChart.destroy();
    if (distributionChart) distributionChart.destroy();
    if (!grades.length) {
      trendCanvas.parentElement.innerHTML += '<p class="chart-empty">Chưa có điểm số để thống kê.</p>';
      return;
    }
    trendChart = new Chart(trendCanvas, {
      type: 'bar',
      data: {
        labels: grades.map(g => g.code || g.course),
        datasets: [{
          label: 'Điểm môn học',
          data: grades.map(g => Number(g.score)),
          backgroundColor: '#7c9df5',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: { y: { beginAtZero: true, max: 10, ticks: { stepSize: 2 } } },
        plugins: { legend: { display: false }, tooltip: { callbacks: {
          label: context => ` ${context.dataset.label}: ${Number(context.raw).toFixed(1)}/10`
        }}}
      }
    });
    distributionChart = new Chart(distributionCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Giỏi (≥ 8.5)', 'Khá (7–8.4)', 'Trung bình (5–6.9)', 'Yếu (< 5)'],
        datasets: [{
          data: [dist.excellent || 0, dist.good || 0, dist.average || 0, dist.weak || 0],
          backgroundColor: ['#3ba77a', '#6b91df', '#e8b44d', '#df7777'],
          borderWidth: 0
        }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
  }
  window.StudyHubCharts = { render };
})();
