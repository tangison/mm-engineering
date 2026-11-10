/* mmengineeringcc.com — bespoke page layer.
   Chrome behaviour, #sheet hamburger drawer, .dock & #wx-modal, surveyor crosshair,
   .rail reveal, 25-contract register filter, contact brief, profile view mode & ScrollCraft mount.
*/
(function () {
  "use strict";
  var d = document, body = d.body;

  /* ---- track record: publish contract values & durations ----------------- */
  d.querySelectorAll(".track .opt").forEach(function (c) { c.hidden = false; });

  /* ---- scrolled nav state & back-to-top button --------------------------- */
  var onScroll = function () {
    var y = window.scrollY || 0;
    body.classList.toggle("scrolled", y > 32);
    var top = d.querySelector(".dock__btn--top");
    if (top) top.classList.toggle("show", y > 640);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- mobile sheet (original #sheet hamburger menu) --------------------- */
  var burger = d.querySelector(".nav__burger");
  var sheet = d.getElementById("sheet");
  if (burger && sheet) {
    var sheetClose = sheet.querySelector(".sheet__close");
    sheet.inert = true;
    var setSheet = function (open) {
      sheet.classList.toggle("open", open);
      sheet.setAttribute("aria-hidden", open ? "false" : "true");
      sheet.inert = !open;
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      body.classList.toggle("nav-open", open);
      body.style.overflow = open ? "hidden" : "";
      if (open && sheetClose) sheetClose.focus();
      else if (!open) burger.focus();
    };
    burger.addEventListener("click", function () { setSheet(true); });
    sheet.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]") || e.target.closest("a")) {
        if (e.target.closest("a")) {
          sheet.classList.remove("open");
          sheet.setAttribute("aria-hidden", "true");
          sheet.inert = true;
          burger.setAttribute("aria-expanded", "false");
          body.classList.remove("nav-open");
          body.style.overflow = "";
        } else {
          setSheet(false);
        }
      }
    });
    d.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && sheet.classList.contains("open")) setSheet(false);
    });
  }

  /* ---- wechat modal ----------------------------------------------------- */
  var modal = d.getElementById("wx-modal");
  if (modal) {
    modal.inert = true;
    var lastWxTrigger = null;
    var setModal = function (open) {
      modal.classList.toggle("open", open);
      modal.setAttribute("aria-hidden", open ? "false" : "true");
      modal.inert = !open;
      var closeBtn = modal.querySelector("[data-close]");
      if (open && closeBtn) closeBtn.focus();
      else if (!open && lastWxTrigger) lastWxTrigger.focus();
    };
    d.querySelectorAll("[data-wx-open]").forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.preventDefault();
        lastWxTrigger = b;
        setModal(true);
      });
    });
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.closest("[data-close]")) setModal(false);
    });
    d.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) setModal(false);
    });
  }

  /* ---- scroll to top ---------------------------------------------------- */
  d.querySelectorAll("[data-top]").forEach(function (b) {
    b.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
    });
  });

  /* ---- signature: the surveyor's crosshair ------------------------------ */
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (fine && !reduce) {
    var ch = d.querySelector(".crosshair");
    if (ch) {
      var tx = window.innerWidth / 2, ty = window.innerHeight / 2, cx = tx, cy = ty;
      var raf = null;
      var step = function () {
        cx += (tx - cx) * 0.16; cy += (ty - cy) * 0.16;
        ch.style.setProperty("--sx", cx.toFixed(1) + "px");
        ch.style.setProperty("--sy", cy.toFixed(1) + "px");
        var ro = ch.querySelector(".crosshair__readout");
        if (ro) {
          var easting = (cx / Math.max(window.innerWidth, 1) * 1000).toFixed(1);
          var northing = ((1 - cy / Math.max(window.innerHeight, 1)) * 1000).toFixed(1);
          ro.textContent = "E " + easting + "\nN " + northing + "\nRL +0.00";
        }
        if (Math.abs(tx - cx) > 0.2 || Math.abs(ty - cy) > 0.2) raf = requestAnimationFrame(step);
        else raf = null;
      };
      window.addEventListener("pointermove", function (ev) {
        tx = ev.clientX; ty = ev.clientY;
        body.classList.add("cross-on");
        if (!raf) raf = requestAnimationFrame(step);
      }, { passive: true });
      d.addEventListener("pointerleave", function () { body.classList.remove("cross-on"); });
    }
  }

  /* ---- rail settle (pan cards arrive in sequence) ----------------------- */
  var rail = d.querySelector(".rail");
  if (rail) {
    var railTarget = rail.closest("[data-sc-act]") || rail;
    var io2 = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) { rail.classList.add("settled"); io2.disconnect(); }
      });
    }, { threshold: 0.08 });
    io2.observe(railTarget);
  }

  /* ---- interactive 25-project filter & sum ------------------------------ */
  var reg = d.querySelector("[data-project-register]");
  if (reg) {
    var rows = Array.prototype.slice.call(reg.querySelectorAll("tbody tr[data-sector]"));
    var btns = Array.prototype.slice.call(reg.querySelectorAll("[data-sector-btn]"));
    var search = reg.querySelector("[data-project-search]");
    var empty = reg.querySelector("[data-project-empty]");
    var countEl = reg.querySelector("[data-project-count]");
    var sumEl = reg.querySelector("[data-project-sum]");
    var footCountEl = reg.querySelector("[data-project-foot-count]");
    var footSumEl = reg.querySelector("[data-project-foot-sum]");
    var activeSector = "all";

    var formatNAD = function (num) {
      return "N$ " + num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    var applyFilter = function () {
      var q = search ? search.value.trim().toLowerCase() : "";
      var visible = 0;
      var total = 0;
      rows.forEach(function (tr) {
        var sectors = (tr.getAttribute("data-sector") || "").split(/\s+/);
        var matchSector = activeSector === "all" || sectors.indexOf(activeSector) !== -1;
        var matchQuery = !q || tr.textContent.toLowerCase().indexOf(q) !== -1;
        var show = matchSector && matchQuery;
        tr.hidden = !show;
        if (show) {
          visible += 1;
          total += parseFloat(tr.getAttribute("data-val") || "0") || 0;
        }
      });
      var label = visible === 1 ? "1 contract" : visible + " contracts";
      var formatted = formatNAD(total);
      if (countEl) countEl.textContent = label;
      if (sumEl) sumEl.textContent = formatted;
      if (footCountEl) footCountEl.textContent = "Showing " + label;
      if (footSumEl) footSumEl.textContent = formatted;
      if (empty) empty.classList.toggle("is-visible", visible === 0);
    };

    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeSector = btn.getAttribute("data-sector-btn") || "all";
        btns.forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        applyFilter();
      });
    });
    if (search) search.addEventListener("input", applyFilter);
    applyFilter();
  }

  /* ---- contact form -> mailto ------------------------------------------- */
  var form = d.getElementById("contact-form") || d.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (sel) {
        var el = form.querySelector(sel);
        return el ? el.value.trim() : "";
      };
      var nameVal = v("#name") || v("[name='name']");
      var orgVal = v("#company") || v("[name='company']");
      var emailVal = v("#email") || v("[name='email']");
      var phoneVal = v("#phone") || v("[name='phone']");
      var serviceVal = v("#service") || v("[name='service']");
      var msgVal = v("#message") || v("[name='message']");
      var err = form.querySelector(".form__error");
      var done = form.querySelector(".form__done");

      if (!nameVal || !emailVal || emailVal.indexOf("@") === -1) {
        if (err) err.classList.add("is-visible");
        if (done) done.hidden = true;
        return;
      }
      if (err) err.classList.remove("is-visible");

      var subject = "Website enquiry: " + (serviceVal || "General") + " - " + (orgVal || nameVal);
      var bodyLines = [
        "Name: " + nameVal,
        "Company / Employer: " + (orgVal || "N/A"),
        "Email: " + emailVal,
        phoneVal ? "Phone: " + phoneVal : null,
        "Service: " + serviceVal,
        "",
        msgVal
      ].filter(function (line) { return line !== null; }).join("\n");

      if (done) done.hidden = false;
      window.location.href = "mailto:info@mmengineeringcc.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(bodyLines);
    });
  }

  /* ---- profile split view mode switcher (/profile) ---------------------- */
  var split = d.getElementById("profile-split");
  var modeBtns = d.querySelectorAll("[data-profile-mode]");
  if (split && modeBtns.length) {
    modeBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-profile-mode") || "split";
        split.setAttribute("data-view", mode);
        modeBtns.forEach(function (b) { b.classList.toggle("is-active", b === btn); });
      });
    });
  }

  /* ---- footer year ------------------------------------------------------ */
  d.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });

  /* ---- mount ScrollCraft cleanly under strict CSP ----------------------- */
  if (window.ScrollCraft && typeof window.ScrollCraft.mount === "function") {
    window.ScrollCraft.mount(d.body);
  }
})();
