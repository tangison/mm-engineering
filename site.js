/* mmengineeringcc.com — bespoke page layer.
   Chrome behaviour + the surveyor crosshair (signature move).
   The scroll engine (scrollcraft.js) stays untouched. */
(function () {
  "use strict";
  var d = document, body = d.body;

  /* ---- scrolled nav state --------------------------------------------- */
  var onScroll = function () {
    body.classList.toggle("scrolled", (window.scrollY || 0) > 32);
    var top = d.querySelector(".dock__btn--top");
    if (top) top.classList.toggle("show", (window.scrollY || 0) > 640);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- mobile sheet ---------------------------------------------------- */
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

  /* ---- signature: the surveyor's crosshair -------------------------------
     A setting-out crosshair with a live coordinate readout follows the pointer.
     Gated to fine pointers, off under reduced motion. Purely an interface
     element: the grid is the page's own, no data leaves the browser. */
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

  /* ---- rail settle (pan cards arrive in sequence) ------------------------ */
  var rail = d.querySelector(".rail");
  if (rail) {
    var railTarget = rail.closest("[data-sc-act]") || rail;
    var io2 = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { rail.classList.add("settled"); io2.disconnect(); } });
    }, { threshold: 0.08 });
    io2.observe(railTarget);
  }

  /* ---- contact form -> mailto ------------------------------------------- */
  var form = d.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (id) { var el = form.querySelector("#" + id); return el ? el.value.trim() : ""; };
      var subject = "Website enquiry: " + (v("service") || "General") + " - " + (v("name") || "");
      var bodyLines = [
        "Name: " + v("name"),
        "Company: " + v("company"),
        "Email: " + v("email"),
        "Phone: " + v("phone"),
        "Service: " + v("service"),
        "",
        v("message")
      ].join("\n");
      window.location.href = "mailto:info@mmengineeringcc.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(bodyLines);
      var done = form.querySelector(".form__done");
      if (done) done.hidden = false;
    });
  }

  /* ---- footer year ------------------------------------------------------- */
  d.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });

  /* ---- project register filter & search ---------------------------------- */
  var filterWrap = d.querySelector("[data-project-register]");
  if (filterWrap) {
    var activeSector = "all";
    var searchTerm = "";
    var rows = Array.prototype.slice.call(filterWrap.querySelectorAll("tbody tr"));
    var totalEl = d.querySelector("[data-project-count]");
    var sumEl = d.querySelector("[data-project-sum]");

    var applyProjectFilter = function () {
      var count = 0;
      var total = 0;
      rows.forEach(function (tr) {
        var sec = tr.getAttribute("data-sector") || "";
        var txt = (tr.textContent || "").toLowerCase();
        var matchSector = activeSector === "all" || sec.indexOf(activeSector) !== -1;
        var matchQuery = !searchTerm || txt.indexOf(searchTerm) !== -1;
        var show = matchSector && matchQuery;
        tr.classList.toggle("is-hidden", !show);
        if (show) {
          count++;
          total += parseFloat(tr.getAttribute("data-val") || "0");
        }
      });
      if (totalEl) totalEl.textContent = count + (count === 1 ? " contract" : " contracts");
      if (sumEl) {
        sumEl.textContent = "N$ " + total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
    };

    filterWrap.querySelectorAll("[data-sector-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeSector = btn.getAttribute("data-sector-btn") || "all";
        filterWrap.querySelectorAll("[data-sector-btn]").forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });
        applyProjectFilter();
      });
    });

    var qInput = filterWrap.querySelector("[data-project-search]");
    if (qInput) {
      qInput.addEventListener("input", function () {
        searchTerm = (qInput.value || "").trim().toLowerCase();
        applyProjectFilter();
      });
    }
    applyProjectFilter();
  }
})();
