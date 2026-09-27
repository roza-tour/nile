/* Nile Stone Café — home page behaviour */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- menu teaser ---------- */
  function renderMenuTeaser() {
    const lang = NILE.lang;
    const vip = NILE_MENU.find((c) => c.id === "vip");
    const cur = NILE.t("menu.cur");
    $("#vip-list").innerHTML = vip.items.map(([ar, en, p]) =>
      `<li><span>${lang === "ar" ? ar : en}</span><span class="dots"></span><span class="price">${p} ${cur}</span></li>`
    ).join("");
    $("#menu-cats").innerHTML = NILE_MENU.filter((c) => c.id !== "vip").map((c) =>
      `<a class="chip" href="menu.html#${c.id}">${c.icon} ${lang === "ar" ? c.ar : c.en}</a>`
    ).join("");
  }

  /* ---------- booking form ---------- */
  function fillTimes() {
    const sel = $("#f-time");
    const prev = sel.value;
    const opts = [];
    // 3 PM → 2:30 AM, every 30 minutes
    for (let i = 0; i < 24; i++) {
      const h = (15 + Math.floor(i / 2)) % 24;
      const m = i % 2 ? "30" : "00";
      const value = `${String(h).padStart(2, "0")}:${m}`;
      opts.push(`<option value="${value}">${formatTime(h, m)}</option>`);
    }
    sel.innerHTML = opts.join("");
    sel.value = prev || "19:00";
  }

  function formatTime(h, m) {
    const h12 = h % 12 || 12;
    if (NILE.lang === "ar") {
      const part = h >= 15 && h < 18 ? "العصر" : h >= 18 ? "بالليل" : "الفجر";
      return `${h12}:${m} ${part}`;
    }
    return `${h12}:${m} ${h >= 12 ? "PM" : "AM"}`;
  }

  function initForm() {
    const form = $("#booking-form");
    const date = $("#f-date");
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    date.min = today.toISOString().slice(0, 10);

    fillTimes();

    $$("[data-book]").forEach((a) => a.addEventListener("click", () => {
      const r = form.querySelector(`input[name="type"][value="${a.dataset.book}"]`);
      if (r) r.checked = true;
    }));

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const err = $("#form-error");
      const fd = new FormData(form);
      const name = (fd.get("name") || "").trim();
      const phone = (fd.get("phone") || "").trim();
      const d = fd.get("date");
      if (!name || !phone || !d) {
        err.textContent = NILE.t("form.err");
        (!name ? $("#f-name") : !phone ? $("#f-phone") : date).focus();
        return;
      }
      err.textContent = "";

      const t = NILE.t;
      let guests = parseInt(fd.get("guests"), 10) || 1;
      guests = Math.min(Math.max(guests, 1), NILE.maxGuests);
      const extras = fd.getAll("extras").map((x) => t("x." + x));
      const timeSel = $("#f-time");
      const lines = [
        NILE.lang === "ar" ? "مرحبًا نايل ستون 👋 عايز أحجز:" : "Hi Nile Stone 👋 I'd like to book:",
        "",
        `• ${t("form.type")}: ${t("t." + fd.get("type"))}`,
        `• ${t("form.date")}: ${d}`,
        `• ${t("form.time")}: ${timeSel.options[timeSel.selectedIndex].text}`,
        `• ${t("form.guests")}: ${guests}`,
        `• ${t("form.color")}: ${t("color." + fd.get("color"))}`
      ];
      if (extras.length) lines.push(`• ${t("form.extras")}: ${extras.join("، ")}`);
      const notes = (fd.get("notes") || "").trim();
      if (notes) lines.push(`• ${t("form.notes")}: ${notes}`);
      lines.push("", `${t("form.name")}: ${name}`, `${t("form.phone")}: ${phone}`);

      const url = `https://wa.me/${NILE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
      window.open(url, "_blank", "noopener");
    });
  }

  /* ---------- gallery lightbox ---------- */
  function initLightbox() {
    const lb = $("#lightbox");
    const img = $("img", lb);
    const items = $$("#gallery-grid img");
    let idx = 0;
    let lastFocus = null;
    const show = (i) => {
      idx = (i + items.length) % items.length;
      img.src = items[idx].src;
      img.alt = items[idx].alt;
    };
    const close = () => {
      lb.classList.remove("open");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    };
    items.forEach((el, i) => el.parentElement.addEventListener("click", (e) => {
      lastFocus = e.currentTarget;
      show(i);
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
      $(".lb-close", lb).focus();
    }));
    const rtl = () => document.documentElement.dir === "rtl";
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

  /* ---------- scroll reveal ---------- */
  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderMenuTeaser();
    initForm();
    initLightbox();
    initReveal();
  });
  document.addEventListener("nile:lang", () => {
    if ($("#vip-list")) renderMenuTeaser();
    if ($("#f-time")) fillTimes();
  });
})();
