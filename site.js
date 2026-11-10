/* mmengineeringcc.com — bespoke page layer.
   Chrome behaviour, surveyor crosshair, interactive project register & contact form.
   The scroll engine (scrollcraft.js) stays untouched. */
(function () {
  "use strict";
  var d = document, body = d.body;

  /* ---- track record: publish contract values & durations ----------------- */
  d.querySelectorAll(".track .opt").forEach(function (c) { c.hidden = false; });

  /* ---- scrolled nav state ----------------------------------------------- */
  var onScroll = function () {
    body.classList.toggle("scrolled", (window.scrollY || 0) > 32);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- mobile sheet ----------------------------------------------------- */
  var burger = d.querySelector(".nav__burger");
  var sheet = d.getElementById("sheet");
  if (burger && sheet) {
    var setSheet = function (open) {
      sheet.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      body.style.overflow = open ? "hidden" : "";
    };
    burger.addEventListener("click", function () { setSheet(true); });
    sheet.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]") || e.target.closest("a")) setSheet(false);
    });
    d.addEventListener("keydown", function (e) { if (e.key === "Escape") setSheet(false); });
  }

  /* ---- wechat modal ----------------------------------------------------- */
  var modal = d.getElementById("wx-modal");
  d.querySelectorAll("[data-wx-open]").forEach(function (b) {
    b.addEventListener("click", function (e) { e.preventDefault(); if (modal) modal.classList.add("open"); });
  });
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.closest("[data-close]")) modal.classList.remove("open");
    });
    d.addEventListener("keydown", function (e) { if (e.key === "Escape") modal.classList.remove("open"); });
  }

  /* ---- scroll to top ---------------------------------------------------- */
  d.querySelectorAll("[data-top]").forEach(function (b) {
    b.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
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
          var e = (cx / window.innerWidth * 1000).toFixed(1);
          var n = ((1 - cy / window.innerHeight) * 1000).toFixed(1);
          ro.textContent = "E " + e + "\nN " + n + "\nRL +0.00";
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
      es.forEach(function (en) { if (en.isIntersecting) { rail.classList.add("settled"); io2.disconnect(); } });
    }, { threshold: 0.08 });
    io2.observe(railTarget);
  }

  /* ---- interactive 25-project filter & sum ------------------------------ */
  var reg = d.querySelector("[data-project-register]");
  if (reg) {
    var rows = Array.prototype.slice.call(reg.querySelectorAll("tbody tr[data-sector]"));
    var btns = Array.prototype.slice.call(reg.querySelectorAll("[data-sector-btn]"));
    var search = reg.querySelector("[data-project-search]");
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
    };

    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeSector = btn.getAttribute("data-sector-btn") || "all";
        btns.forEach(function (b) { b.classList.toggle("is-active", b === btn); });
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
      var nameVal = v("#name") || v("#f-name") || v("[name='name']");
      var orgVal = v("#company") || v("#f-org") || v("[name='company']");
      var emailVal = v("#email") || v("#f-email") || v("[name='email']");
      var phoneVal = v("#phone") || v("[name='phone']");
      var serviceVal = v("#service") || v("#f-service") || v("[name='service']");
      var msgVal = v("#message") || v("#f-msg") || v("[name='message']");

      var subject = "Website enquiry: " + (serviceVal || "General") + (nameVal ? " - " + nameVal : "");
      var bodyLines = [
        "Name: " + nameVal,
        "Company / Employer: " + orgVal,
        "Email: " + emailVal,
        phoneVal ? "Phone: " + phoneVal : null,
        "Service: " + serviceVal,
        "",
        msgVal
      ].filter(function (line) { return line !== null; }).join("\n");

      window.location.href = "mailto:info@mmengineeringcc.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(bodyLines);
      var done = form.querySelector(".form__done");
      if (done) done.hidden = false;
    });
  }

  /* ---- footer year ------------------------------------------------------ */
  d.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
})();
