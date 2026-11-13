/* StudyHub motion layer: subtle page entrance, reveal-on-scroll, card lift and count-up. */
(() => {
  'use strict';
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const observed = new WeakSet();
  const counted = new WeakSet();
  let observer = null;

  function countUp(element) {
    if (reducedMotion || counted.has(element)) return;
    const raw = (element.textContent || '').trim();
    const match = raw.match(/^(-?\d+(?:\.\d+)?)(%?)$/);
    if (!match) return;
    const target = Number(match[1]);
    if (!Number.isFinite(target) || target === 0) return;
    counted.add(element);
    const decimals = (match[1].split('.')[1] || '').length;
    const suffix = match[2];
    const start = performance.now();
    const duration = 850;
    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${(target * eased).toFixed(decimals)}${suffix}`;
      if (progress < 1) requestAnimationFrame(frame);
      else element.textContent = `${target.toFixed(decimals)}${suffix}`;
    }
    requestAnimationFrame(frame);
  }

  function reveal(element, index = 0) {
    if (observed.has(element)) return;
    observed.add(element);
    element.dataset.motionReveal = 'true';
    element.style.setProperty('--motion-delay', `${Math.min(index % 6, 5) * 65}ms`);
    if (!observer) {
      element.classList.add('motion-visible');
      return;
    }
    observer.observe(element);
  }

  function scan(root = document) {
    if (!root.querySelectorAll) return;
    const selector = '.page-heading, .page-heading-card, .page-top, .section-heading, .assignment-header, .stat-card, .course-card, .panel, .settings-panel, .profile-card, .student-card, .assignment-item, .schedule-item, .attendance-card, .guidance-card, .weekly-schedule, .search-filter-panel, .schedule-banner, .notes-section, .chart-panel, .grades-panel, .login-card';
    const items = [];
    if (root.matches?.(selector)) items.push(root);
    items.push(...root.querySelectorAll(selector));
    items.forEach((element, index) => reveal(element, index));
    root.querySelectorAll?.('.stat-info strong, .course-score strong, .stat-value, .stat-number').forEach(countUp);
  }

  function init() {
    if (!document.body) return;
    document.body.classList.add('motion-enabled', 'motion-page-enter');
    if (!reducedMotion && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('motion-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    }
    scan();
    const mutationObserver = new MutationObserver(records => {
      records.forEach(record => record.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) scan(node);
      }));
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    window.StudyHubMotion = { refresh: scan };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
