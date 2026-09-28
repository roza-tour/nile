/* Nile Stone Café — progressive enhancement (the site works without JS; this adds the extras). */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const rtl = () => document.documentElement.dir === "rtl";

  /* header + mobile nav */
  function initNav() {
    const header = $(".site-header");
    if (header && !header.classList.contains("scrolled")) {
      const onScroll = () => header.classList.toggle("scrolled", scrollY > 30);
      addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
    const toggle = $(".menu-toggle"), links = $(".nav-links");
    if (!toggle || !links) return;
    const set = (open) => { links.classList.toggle("open", open); toggle.setAttribute("aria-expanded", String(open)); };
    toggle.addEventListener("click", () => set(!links.classList.contains("open")));
    links.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
  }

  /* booking form → WhatsApp */
  function initForm() {
    const form = $("#booking-form");
    if (!form) return;
    const S = JSON.parse($("#form-i18n").textContent);
    const date = $("#f-date"), time = $("#f-time");

    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    date.min = today.toISOString().slice(0, 10);

    // 3 PM → 2:30 AM every 30 minutes
    const opts = [];
    for (let i = 0; i < 24; i++) {
      const h = (15 + Math.floor(i / 2)) % 24, m = i % 2 ? "30" : "00";
      const h12 = h % 12 || 12;
      const part = document.documentElement.lang === "ar"
        ? (h >= 15 && h < 18 ? S.afternoon : h >= 18 ? S.night : S.dawn)
        : (h >= 12 ? S.pm : S.am);
      opts.push(`<option value="${h}:${m}"${h === 19 && m === "00" ? " selected" : ""}>${h12}:${m} ${part}</option>`);
    }
    time.innerHTML = opts.join("");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get("name") || "").trim();
      const phone = (fd.get("phone") || "").trim();
      const d = fd.get("date");
      const err = $("#form-error");
      if (!name || !phone || !d) {
        err.textContent = S.err;
        (!name ? $("#f-name") : !phone ? $("#f-phone") : date).focus();
        return;
      }
      err.textContent = "";
      const guests = Math.min(Math.max(parseInt(fd.get("guests"), 10) || 1, 1), S.max);
      const extras = fd.getAll("extras");
      const notes = (fd.get("notes") || "").trim();
      const lines = [
        S.greet, "",
        `• ${S.type}: ${fd.get("type")}`,
        `• ${S.date}: ${d}`,
        `• ${S.time}: ${time.options[time.selectedIndex].text}`,
        `• ${S.guests}: ${guests}`,
        `• ${S.color}: ${fd.get("color")}`
      ];
      if (extras.length) lines.push(`• ${S.extras}: ${extras.join("، ")}`);
      if (notes) lines.push(`• ${S.notes}: ${notes}`);
      lines.push("", `${S.name}: ${name}`, `${S.phone}: ${phone}`);
      window.open(`https://wa.me/${S.wa}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    });
  }

  /* gallery lightbox */
  function initLightbox() {
    const lb = $("#lightbox");
    const items = $$("#gallery-grid img");
    if (!lb || !items.length) return;
    const big = $("img", lb);
    let idx = 0, last = null;
    const show = (i) => { idx = (i + items.length) % items.length; big.src = items[idx].src; big.alt = items[idx].alt; };
    const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; last && last.focus(); };
    items.forEach((el, i) => el.parentElement.addEventListener("click", (e) => {
      last = e.currentTarget; show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; $(".lb-close", lb).focus();
    }));
    $(".lb-close", lb).addEventListener("click", close);
    $(".lb-next", lb).addEventListener("click", () => show(idx + 1));
    $(".lb-prev", lb).addEventListener("click", () => show(idx - 1));
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(idx + (rtl() ? -1 : 1));
      if (e.key === "ArrowLeft") show(idx + (rtl() ? 1 : -1));
    });
    let x0 = null;
    lb.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1) * (rtl() ? -1 : 1));
      x0 = null;
    });
  }

  /* menu page: search + active category */
  function initMenu() {
    const search = $("#menu-search");
    if (!search) return;
    const norm = (s) => s.toLowerCase().replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي");
    const cards = $$(".menu-card"), empty = $(".menu-empty");
    search.addEventListener("input", () => {
      const q = norm(search.value.trim());
      let any = false;
      cards.forEach((card) => {
        let shown = 0;
        $$("li", card).forEach((li) => { const ok = !q || norm(li.textContent).includes(q); li.hidden = !ok; if (ok) shown++; });
        card.hidden = !shown; if (shown) any = true;
      });
      empty.hidden = any;
    });
    const nav = $("#cat-nav");
    if (!("IntersectionObserver" in window) || !nav) return;
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      $$("a", nav).forEach((a) => {
        const on = a.getAttribute("href") === "#" + en.target.id;
        a.classList.toggle("active", on);
        if (on) nav.scrollTo({ left: a.offsetLeft - nav.clientWidth / 2 + a.clientWidth / 2, behavior: "smooth" });
      });
    }), { rootMargin: "-160px 0px -60% 0px" });
    cards.forEach((c) => io.observe(c));
  }

  /* scroll reveal */
  function initReveal() {
    const els = $$(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  }

  document.documentElement.classList.add("js");
  document.addEventListener("DOMContentLoaded", () => { initNav(); initForm(); initLightbox(); initMenu(); initReveal(); });
})();
