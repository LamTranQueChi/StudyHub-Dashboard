/* StudyHub charts: render dữ liệu điểm thực tế trả về từ API. */
(() => {
  'use strict';
  let trendChart = null;
  let distributionChart = null;
  let lastData = null;
  function render(data) {
    lastData = data;
    const area = document.getElementById('gradeCharts');
    if (!area) return;
    const trendCanvas = document.getElementById('gradeTrendChart');
    const distributionCanvas = document.getElementById('gradeDistributionChart');
    if (!window.Chart || !trendCanvas || !distributionCanvas) {
      area.innerHTML = `<p class="api-error">${window.StudyHubI18n?.t('Không tải được thư viện biểu đồ. Vui lòng kiểm tra kết nối Internet.') || 'Không tải được thư viện biểu đồ. Vui lòng kiểm tra kết nối Internet.'}</p>`;
      return;
    }
    const isEnglish = window.StudyHubI18n?.get?.() === 'en';
    const rootStyles = getComputedStyle(document.documentElement);
    const textColor = rootStyles.getPropertyValue('--theme-text').trim() || '#0b1c30';
    const mutedColor = rootStyles.getPropertyValue('--theme-text-muted').trim() || '#536171';
    const gridColor = rootStyles.getPropertyValue('--theme-border').trim() || 'rgba(148, 163, 184, .25)';
    const grades = Array.isArray(data?.grades) ? data.grades : [];
    const dist = data?.distribution || { excellent: 0, good: 0, average: 0, weak: 0 };
    if (trendChart) trendChart.destroy();
    if (distributionChart) distributionChart.destroy();
    if (!grades.length) {
      trendCanvas.parentElement.innerHTML += `<p class="chart-empty">${window.StudyHubI18n?.t('Chưa có điểm số để thống kê.') || 'Chưa có điểm số để thống kê.'}</p>`;
      return;
    }
    trendChart = new Chart(trendCanvas, {
      type: 'bar',
      data: {
        labels: grades.map(g => g.code || g.course),
        datasets: [{
          label: isEnglish ? 'Course score' : 'Điểm môn học',
          data: grades.map(g => Number(g.score)),
          backgroundColor: '#7c9df5',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
            ticks: { color: mutedColor },
            grid: { color: gridColor }
          },
          y: {
            beginAtZero: true,
            max: 10,
            ticks: { stepSize: 2, color: mutedColor },
            grid: { color: gridColor }
          }
        },
        plugins: { legend: { display: false }, tooltip: { callbacks: {
          label: context => ` ${context.dataset.label}: ${Number(context.raw).toFixed(1)}/10`
        }}}
      }
    });
    distributionChart = new Chart(distributionCanvas, {
      type: 'doughnut',
      data: {
        labels: isEnglish ? ['Excellent (≥ 8.5)', 'Good (7–8.4)', 'Average (5–6.9)', 'Weak (< 5)'] : ['Giỏi (≥ 8.5)', 'Khá (7–8.4)', 'Trung bình (5–6.9)', 'Yếu (< 5)'],
        datasets: [{
          data: [dist.excellent || 0, dist.good || 0, dist.average || 0, dist.weak || 0],
          backgroundColor: ['#3ba77a', '#6b91df', '#e8b44d', '#df7777'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: textColor, usePointStyle: false, padding: 12 }
          },
          tooltip: {
            titleColor: '#f8fafc',
            bodyColor: '#f8fafc',
            backgroundColor: 'rgba(15, 23, 42, .94)',
            borderColor: gridColor,
            borderWidth: 1
          }
        }
      }
    });
  }
  window.StudyHubCharts = { render };
  window.addEventListener('studyhub:language-changed', () => { if (lastData) render(lastData); });
  window.addEventListener('studyhub:theme-changed', () => { if (lastData) render(lastData); });
})();
