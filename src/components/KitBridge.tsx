"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function KitBridge() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("m-js", "m-enter", "mo-js", "m-safe", "m-enter-done", "mo-safe");

    // Close mobile sheet gracefully on Next.js client navigation
    const nav = document.querySelector(".nav");
    if (nav?.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-locked");
      const toggle = nav.querySelector(".nav__toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    }

    const cleanups: Array<() => void> = [];

    // Re-run moments & interactive bindings if user navigates client-side between routes
    const runMount = async () => {
      try {
        if (document.querySelector("[data-moment]")) {
          const momentsUrl = "/assets/kit/moments/moments.js";
          const mod = await import(/* webpackIgnore: true */ momentsUrl);
          if (typeof mod?.mount === "function") await mod.mount(document);
        }
        if (document.querySelector("[data-peek]")) {
          const roots = document.querySelectorAll("[data-peek]");
          roots.forEach((root) => {
            const rows = [...root.querySelectorAll<HTMLElement>("[data-peek-to]")];
            const pics = [...root.querySelectorAll<HTMLElement>("[data-peek-for]")];
            if (!rows.length || !pics.length) return;
            const show = (row: HTMLElement) => {
              const target = row.dataset.peekTo;
              const wide = window.matchMedia("(min-width: 1024px)").matches;
              rows.forEach((r) => r.classList.toggle("is-on", wide && r === row));
              pics.forEach((p) => {
                p.hidden = p.dataset.peekFor !== target;
              });
            };
            rows.forEach((row) => {
              if (row.dataset.kitPeekBound === "1") return;
              row.dataset.kitPeekBound = "1";
              const onSelect = () => show(row);
              const onKey = (ev: KeyboardEvent) => {
                if (ev.key === "Enter" || ev.key === " ") {
                  ev.preventDefault();
                  show(row);
                }
              };
              row.addEventListener("mouseenter", onSelect);
              row.addEventListener("click", onSelect);
              row.addEventListener("keydown", onKey);
              cleanups.push(() => {
                row.removeEventListener("mouseenter", onSelect);
                row.removeEventListener("click", onSelect);
                row.removeEventListener("keydown", onKey);
              });
            });
            show(rows[0]);
          });
        }
      } catch {
        // Initial load handles system.js directly; soft navigation recovers gracefully
      }
    };
    runMount();

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
