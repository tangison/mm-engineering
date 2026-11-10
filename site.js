/* M&M Engineering & Consultancy — site.js
   Page chrome (nav scrolled state, mobile drawer), interactive filters,
   contact form handler, profile viewer switch, and ScrollCraft mount.
*/
(function () {
  'use strict';

  var onScroll = function () {
    document.body.classList.toggle('scrolled', window.scrollY > 36);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var burger = document.querySelector('[data-nav-open]');
  var drawer = document.getElementById('nav-drawer');
  var closeBtn = document.querySelector('[data-nav-close]');
  if (burger && drawer) {
    drawer.inert = true;
    var setOpen = function (open) {
      drawer.classList.toggle('is-open', open);
      drawer.setAttribute('aria-hidden', String(!open));
      drawer.inert = !open;
      burger.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('nav-open', open);
      if (!open) burger.focus();
    };
    burger.addEventListener('click', function () { setOpen(true); if (closeBtn) closeBtn.focus(); });
    if (closeBtn) closeBtn.addEventListener('click', function () { setOpen(false); });
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        drawer.inert = true;
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      });
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) setOpen(false);
    });
  }

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // Projects ledger filter (/projects)
  var table = document.getElementById('projects-ledger');
  if (table) {
    var chips = document.querySelectorAll('[data-filter-cat]');
    var search = document.getElementById('projects-search');
    var empty = document.getElementById('projects-empty');
    var totalEl = document.getElementById('projects-visible-total');
    var countEl = document.getElementById('projects-visible-count');
    var activeCat = 'all';

    var apply = function () {
      var q = search ? search.value.trim().toLowerCase() : '';
      var rows = table.querySelectorAll('tbody tr');
      var shown = 0;
      var sum = 0;
      rows.forEach(function (tr) {
        var cat = tr.getAttribute('data-cat') || '';
        var text = tr.textContent.toLowerCase();
        var ok = (activeCat === 'all' || cat === activeCat) && (!q || text.indexOf(q) !== -1);
        tr.hidden = !ok;
        if (ok) {
          shown++;
          sum += parseFloat(tr.getAttribute('data-val') || '0') || 0;
        }
      });
      if (totalEl) {
        totalEl.textContent = 'N$ ' + sum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
      if (countEl) countEl.textContent = String(shown);
      if (empty) empty.classList.toggle('is-visible', shown === 0);
    };

    chips.forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeCat = btn.getAttribute('data-filter-cat') || 'all';
        chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c === btn)); });
        apply();
      });
    });
    if (search) search.addEventListener('input', apply);
  }

  // Contact form: validation feedback + mailto handoff
  var form = document.getElementById('contact-form');
  if (form) {
    var done = document.getElementById('form-done');
    var err = document.getElementById('form-error');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var name = String(d.get('name') || '').trim();
      var org = String(d.get('org') || '').trim();
      var email = String(d.get('email') || '').trim();
      var service = String(d.get('service') || '').trim();
      var message = String(d.get('message') || '').trim();

      if (!name || !email || email.indexOf('@') === -1 || !message) {
        if (err) {
          err.textContent = 'Please enter your name, a valid email address, and project details before opening the brief.';
          err.classList.add('is-visible');
        }
        if (done) done.classList.remove('is-visible');
        return;
      }
      if (err) err.classList.remove('is-visible');

      var subject = 'Project enquiry from ' + (org || name) + ' (' + (service || 'General') + ')';
      var body = [
        'Name: ' + name,
        'Organisation: ' + (org || 'N/A'),
        'Email: ' + email,
        'Scope: ' + (service || 'General'),
        '',
        message
      ].join('\n');
      if (done) done.classList.add('is-visible');
      window.location.href = 'mailto:info@mmengineeringcc.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  // Profile split view mode switcher (/profile)
  var split = document.getElementById('profile-split');
  var modeBtns = document.querySelectorAll('[data-profile-mode]');
  if (split && modeBtns.length) {
    modeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var mode = btn.getAttribute('data-profile-mode') || 'split';
        split.setAttribute('data-view', mode);
        modeBtns.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
      });
    });
  }

  // Mount ScrollCraft after DOM parse
  if (window.ScrollCraft && typeof window.ScrollCraft.mount === 'function') {
    window.ScrollCraft.mount(document.body);
  }
})();
