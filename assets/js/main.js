/* ============================================================================
   Fan-Chi Yeh — ncuhangzi.github.io
   No dependencies. Everything degrades to a readable page without JS.
   ========================================================================= */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Theme ─────────────────────────────────────────────────────────────
     The inline head script already applied the stored/system theme; here we
     only wire the control and keep it in sync with the OS while unset. */
  var toggle = document.getElementById('theme-toggle');
  var label = toggle && toggle.querySelector('.toggle__label');
  var media = matchMedia('(prefers-color-scheme: dark)');

  function paint(theme) {
    root.dataset.theme = theme;
    if (label) label.textContent = theme === 'dark' ? 'Dark' : 'Light';
    if (toggle) toggle.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  paint(root.dataset.theme === 'dark' ? 'dark' : 'light');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      paint(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  media.addEventListener('change', function (e) {
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (err) {}
    if (!stored) paint(e.matches ? 'dark' : 'light');
  });

  /* ── Scroll progress ─────────────────────────────────────────────────── */
  var bar = document.querySelector('.progress');
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      if (bar) {
        var max = document.documentElement.scrollHeight - innerHeight;
        bar.style.setProperty('--p', max > 0 ? Math.min(scrollY / max, 1) : 0);
      }
      ticking = false;
    });
  }

  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Reveal on scroll, staggered within each group ───────────────────── */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var seen = new WeakMap();
    var io = new IntersectionObserver(function (entries) {
      // Stagger siblings that enter together, capped so nothing lags.
      var batch = entries.filter(function (e) { return e.isIntersecting; });
      batch.forEach(function (entry, i) {
        var el = entry.target;
        if (seen.has(el)) return;
        seen.set(el, true);
        el.style.setProperty('--rd', Math.min(i, 5) * 70 + 'ms');
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ── Count-up on the spec band ───────────────────────────────────────── */
  var nums = Array.prototype.slice.call(document.querySelectorAll('.num[data-count]'));

  function countUp(el) {
    var target = parseInt(el.dataset.count, 10);
    if (isNaN(target)) return;
    var dur = 1100;
    var t0 = performance.now();
    (function step(now) {
      var p = Math.min((now - t0) / dur, 1);
      // easeOutExpo
      var e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = Math.round(target * e);
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  if (nums.length && !reduced && 'IntersectionObserver' in window) {
    var numIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        countUp(entry.target);
        numIo.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    nums.forEach(function (el) { numIo.observe(el); });
  }

  /* ── Current section in the masthead ─────────────────────────────────── */
  var links = Array.prototype.slice.call(document.querySelectorAll('.masthead__nav a'));
  var targets = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (targets.length && 'IntersectionObserver' in window) {
    var current = null;
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        if (current === entry.target) return;
        current = entry.target;
        links.forEach(function (a) {
          a.classList.toggle('is-current', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    targets.forEach(function (el) { spy.observe(el); });
  }

  /* ── Footer year ─────────────────────────────────────────────────────── */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
