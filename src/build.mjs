/* Nile Stone Café — static site generator (no dependencies).
   Usage:  node src/build.mjs
   Writes HTML pages, sitemap.xml, robots.txt and llms.txt to the repo root. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE, MENU, SIGNATURES, FAQ, EVENTS, GALLERY } from "./data.mjs";
import { UI, PAGES } from "./content.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IMG_DIR = path.join(ROOT, "assets/img");
const LANGS = ["ar", "en"];

/* ---------------- helpers ---------------- */
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const other = (lang) => (lang === "ar" ? "en" : "ar");
const pagePath = (lang, slug) => (lang === "en" ? "en/" : "") + (slug ? slug + "/" : "");
const absUrl = (lang, slug) => `${SITE.url}/${pagePath(lang, slug)}`;
const num = (n, lang) => (lang === "en" ? n.toLocaleString("en-US") : String(n));
const waLink = (text) => `https://wa.me/${SITE.whatsapp}` + (text ? `?text=${encodeURIComponent(text)}` : "");
const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`;
const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&z=16&output=embed`;

/* image dimensions (webp / png / jpeg) so the browser can reserve space → no layout shift */
const dimCache = {};
function imgSize(file) {
  if (dimCache[file]) return dimCache[file];
  const b = fs.readFileSync(path.join(IMG_DIR, file));
  let w = 0, h = 0;
  if (b.toString("ascii", 0, 4) === "RIFF") {
    const kind = b.toString("ascii", 12, 16);
    if (kind === "VP8X") { w = 1 + b.readUIntLE(24, 3); h = 1 + b.readUIntLE(27, 3); }
    else if (kind === "VP8 ") { w = b.readUInt16LE(26) & 0x3fff; h = b.readUInt16LE(28) & 0x3fff; }
    else if (kind === "VP8L") { const v = b.readUInt32LE(21); w = (v & 0x3fff) + 1; h = ((v >> 14) & 0x3fff) + 1; }
  } else if (b[0] === 0x89) { w = b.readUInt32BE(16); h = b.readUInt32BE(20); }
  else if (b[0] === 0xff) {
    let i = 2;
    while (i < b.length) {
      const marker = b[i + 1], len = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xc3) { h = b.readUInt16BE(i + 5); w = b.readUInt16BE(i + 7); break; }
      i += 2 + len;
    }
  }
  return (dimCache[file] = { w, h });
}

function img(ctx, file, alt, { lazy = true, cls = "", priority = false } = {}) {
  const { w, h } = imgSize(file);
  return `<img src="${ctx.root}assets/img/${file}" alt="${esc(alt)}" width="${w}" height="${h}"${lazy ? ' loading="lazy" decoding="async"' : ""}${priority ? ' fetchpriority="high"' : ""}${cls ? ` class="${cls}"` : ""}>`;
}

const ICON = {
  wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a8.2 8.2 0 0 1-4.1-3.6c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.4 13.4 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.2-.3-.3-.6-.4zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.8L.1 24l6.4-1.7A11.8 11.8 0 0 0 23.8 12a11.7 11.7 0 0 0-3.4-8.4z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM21.9 7.1a5.8 5.8 0 0 0-1.6-4.1A5.8 5.8 0 0 0 16.2 1.4C14.6 1.3 9.4 1.3 7.8 1.4A5.8 5.8 0 0 0 3.7 3 5.8 5.8 0 0 0 2.1 7.1C2 8.7 2 13.9 2.1 15.5A5.8 5.8 0 0 0 3.7 19.6a5.8 5.8 0 0 0 4.1 1.6c1.6.1 6.8.1 8.4 0a5.8 5.8 0 0 0 4.1-1.6 5.8 5.8 0 0 0 1.6-4.1c.1-1.6.1-6.8 0-8.4zm-2 10.5a3.3 3.3 0 0 1-1.9 1.9c-1.3.5-4.4.4-5.9.4s-4.6.1-5.9-.4a3.3 3.3 0 0 1-1.9-1.9c-.5-1.3-.4-4.4-.4-5.9s-.1-4.6.4-5.9A3.3 3.3 0 0 1 6.2 4c1.3-.5 4.4-.4 5.9-.4s4.6-.1 5.9.4a3.3 3.3 0 0 1 1.9 1.9c.5 1.3.4 4.4.4 5.9s.1 4.6-.4 5.9z"/></svg>',
  tt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.5a2.9 2.9 0 1 1-2-2.7V9.3a6.3 6.3 0 1 0 5.4 6.2V8.7a8.2 8.2 0 0 0 4.8 1.5V6.8a4.9 4.9 0 0 1-1-.1z"/></svg>'
};

/* ---------------- structured data ---------------- */
function businessNode(lang) {
  const node = {
    "@type": ["CafeOrCoffeeShop", "EventVenue"],
    "@id": `${SITE.url}/#cafe`,
    name: SITE.name.en,
    alternateName: SITE.name.ar,
    url: `${SITE.url}/`,
    logo: `${SITE.url}/assets/img/logo.webp`,
    image: [`${SITE.url}/assets/img/og.jpg`, `${SITE.url}/assets/img/date-setup.webp`, `${SITE.url}/assets/img/overview.webp`],
    description: UI[lang].bizDesc,
    slogan: "Good Times Flow",
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: SITE.hours.opens, closes: SITE.hours.closes
    }],
    priceRange: "EGP 15–140",
    currenciesAccepted: "EGP",
    servesCuisine: ["Coffee", "Fresh juices", "Mojitos", "Smoothies", "Milkshakes"],
    acceptsReservations: true,
    hasMenu: absUrl(lang, "menu"),
    maximumAttendeeCapacity: SITE.maxGuests,
    knowsLanguage: ["ar", "en"],
    areaServed: { "@type": "City", name: "Cairo" },
    amenityFeature: UI.en.amenities.map((n) => ({ "@type": "LocationFeatureSpecification", name: n, value: true })),
    sameAs: [SITE.instagram, SITE.tiktok]
  };
  if (SITE.geo) node.geo = { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng };
  node.hasMap = SITE.mapsUrl || mapsSearch;
  return node;
}

function faqNode(lang, keys) {
  return {
    "@type": "FAQPage",
    mainEntity: keys.map((k) => ({
      "@type": "Question", name: FAQ[k][lang][0],
      acceptedAnswer: { "@type": "Answer", text: FAQ[k][lang][1] }
    }))
  };
}

function breadcrumbNode(lang, page) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE.name[lang], item: absUrl(lang, "") },
      { "@type": "ListItem", position: 2, name: page.crumb[lang], item: absUrl(lang, page.slug) }
    ]
  };
}

function serviceNode(lang, ev, page) {
  const priceMin = ev.price === "date" ? SITE.dateFrom : ev.price === "girls" ? SITE.girlsTicket : SITE.eventsFrom;
  return {
    "@type": "Service",
    name: page.h1[lang],
    serviceType: ev[lang].name,
    description: page.desc[lang],
    provider: { "@id": `${SITE.url}/#cafe` },
    areaServed: { "@type": "City", name: "Cairo" },
    url: absUrl(lang, page.slug),
    offers: {
      "@type": "Offer",
      priceCurrency: "EGP",
      price: priceMin,
      priceSpecification: { "@type": "PriceSpecification", minPrice: priceMin, priceCurrency: "EGP" },
      availability: "https://schema.org/InStock",
      url: absUrl(lang, page.slug)
    }
  };
}

function menuNode(lang) {
  return {
    "@type": "Menu",
    "@id": absUrl(lang, "menu") + "#menu",
    name: `${SITE.name[lang]} – ${UI[lang].menu}`,
    inLanguage: lang,
    hasMenuSection: MENU.map((c) => ({
      "@type": "MenuSection",
      name: c[lang],
      hasMenuItem: c.items.map(([ar, en, p]) => ({
        "@type": "MenuItem", name: lang === "ar" ? ar : en,
        offers: { "@type": "Offer", price: p, priceCurrency: "EGP" }
      }))
    }))
  };
}

function girlsEventNode(lang) {
  if (!SITE.girlsNextDate) return null;
  return {
    "@type": "Event",
    name: lang === "ar" ? "حفلة بنات في نايل ستون – زومبا وكاريوكي ونوستالجيا" : "Girls' Night at Nile Stone – Zumba, Karaoke & Nostalgia",
    startDate: SITE.girlsNextDate + ":00+03:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: { "@id": `${SITE.url}/#cafe` },
    image: [`${SITE.url}/assets/img/nile-night.webp`],
    description: FAQ.girls[lang][1],
    organizer: { "@id": `${SITE.url}/#cafe` },
    offers: { "@type": "Offer", price: SITE.girlsTicket, priceCurrency: "EGP", availability: "https://schema.org/InStock", url: absUrl(lang, "girls-night") }
  };
}

/* ---------------- shared components ---------------- */
function header(ctx) {
  const { lang, t } = ctx;
  const nav = [["", t.nav.home], ["menu", t.nav.menu], ["romantic-date", t.nav.date], ["girls-night", t.nav.girls], ["faq", t.nav.faq]];
  return `<header class="site-header${ctx.solidHeader ? " scrolled" : ""}">
  <nav class="container nav" aria-label="${t.navLabel}">
    <a href="${ctx.link("")}" class="brand" aria-label="${esc(SITE.name[lang])}">${img(ctx, "logo.webp", SITE.name[lang], { lazy: false })}</a>
    <ul class="nav-links">
      ${nav.map(([s, n]) => `<li><a href="${ctx.link(s)}"${ctx.page.slug === s ? ' aria-current="page"' : ""}>${n}</a></li>`).join("\n      ")}
      <li><a href="${ctx.link("")}#events">${t.nav.events}</a></li>
    </ul>
    <div class="nav-actions">
      <a class="lang-btn" href="${ctx.langSwitch}" hreflang="${other(lang)}" lang="${other(lang)}">${t.langName}</a>
      <a href="#book" class="btn btn-pink nav-cta">${t.bookCta}</a>
      <button class="menu-toggle" type="button" aria-label="${t.menuBtn}" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </nav>
</header>`;
}

function footer(ctx) {
  const { t, lang } = ctx;
  const links = [["", t.nav.home], ["menu", t.nav.menu], ...EVENTS.map((e) => [e.slug, e[lang].name]), ["faq", t.nav.faq]];
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      ${img(ctx, "logo.webp", SITE.name[lang], { cls: "logo" })}
      <p class="script neon-cyan footer-tag">Good Times Flow</p>
      <div class="socials">
        <a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICON.ig}</a>
        <a href="${SITE.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${ICON.tt}</a>
        <a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON.wa}</a>
      </div>
    </div>
    <div>
      <h2 class="footer-h">${t.footerLinks}</h2>
      <ul class="footer-links">${links.map(([s, n]) => `<li><a href="${ctx.link(s)}">${n}</a></li>`).join("")}</ul>
    </div>
    <div>
      <h2 class="footer-h">${t.footerVisit}</h2>
      <address class="nap">
        <strong>${SITE.name[lang]}</strong><br>
        ${SITE.address[lang]}<br>
        ${t.hoursText}<br>
        <a href="tel:${SITE.phone}" dir="ltr">${SITE.phonePretty}</a>
      </address>
    </div>
  </div>
  <p class="copy">© ${new Date(SITE.updated).getFullYear()} ${SITE.name[lang]} · ${t.rights}</p>
</footer>
<a class="wa-float" href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON.wa}</a>`;
}

function sectionHead(eyebrow, title, lead, { center = true, tag = "h2" } = {}) {
  return `<div class="${center ? "center " : ""}reveal">
        <span class="eyebrow">${eyebrow}</span>
        <${tag} class="section-title">${title}</${tag}>
        <div class="wave"></div>
        ${lead ? `<p class="section-lead">${lead}</p>` : ""}
      </div>`;
}

function priceLabel(ctx, ev) {
  const { t, lang } = ctx;
  if (ev.price === "date") return `<span class="from">${t.from} <b>${num(SITE.dateFrom, lang)}</b> ${t.cur} <small>${t.forTwo}</small></span>`;
  if (ev.price === "girls") return `<span class="from">${t.ticket} <b>${num(SITE.girlsTicket, lang)}</b> ${t.cur}</span>`;
  return `<span class="from">${t.from} <b>${num(SITE.eventsFrom, lang)}</b> ${t.cur}</span>`;
}

function eventCards(ctx, { exclude = null, featureFirst = true } = {}) {
  const { t, lang } = ctx;
  const list = EVENTS.filter((e) => e.key !== exclude);
  return `<div class="event-grid">
    ${list.map((ev, i) => `<article class="event-card${featureFirst && i === 0 && !exclude ? " featured" : ""}${ev.key === "girls" ? " girls-card" : ""} reveal">
      ${featureFirst && i === 0 && !exclude ? `<span class="badge">${t.popular}</span>` : ""}
      <a class="event-img" href="${ctx.link(ev.slug)}" tabindex="-1" aria-hidden="true">${img(ctx, ev.img, ev[lang].name)}</a>
      <div class="event-body">
        <h3><a href="${ctx.link(ev.slug)}">${ev.icon} ${ev[lang].name}</a></h3>
        <p>${ev[lang].short}</p>
        <div class="event-price">
          ${priceLabel(ctx, ev)}
          <a href="${ctx.link(ev.slug)}" class="btn ${i === 0 && !exclude ? "btn-pink" : "btn-ghost"} btn-sm">${t.details}</a>
        </div>
      </div>
    </article>`).join("\n    ")}
  </div>`;
}

function includedBlock(ctx) {
  const { t } = ctx;
  return `<div class="included reveal">
    <h2 class="neon-gold inc-title">${t.inc.title}</h2>
    <div class="inc-grid">
      ${t.inc.items.map(([ic, n]) => `<div class="inc"><span aria-hidden="true">${ic}</span><b>${n}</b></div>`).join("")}
    </div>
    <div class="event-facts">
      <span>🔒 ${t.facts.private}</span>
      <span>👥 ${t.facts.guests}</span>
      <span>💰 ${t.facts.from}</span>
    </div>
  </div>`;
}

function bookingForm(ctx, preset = "date") {
  const { t, lang } = ctx;
  const types = [...EVENTS.map((e) => [e.key, e.icon, e[lang].name]), ["other", "✨", t.form.other]];
  const strings = {
    greet: t.form.greet, type: t.form.type, date: t.form.date, time: t.form.time, guests: t.form.guests,
    color: t.form.color, extras: t.form.extras, notes: t.form.notes, name: t.form.name, phone: t.form.phone,
    err: t.form.err, am: t.form.am, pm: t.form.pm, night: t.form.night, afternoon: t.form.afternoon, dawn: t.form.dawn,
    wa: SITE.whatsapp, max: SITE.maxGuests
  };
  return `<form class="form reveal" id="booking-form" novalidate>
        <script type="application/json" id="form-i18n">${JSON.stringify(strings)}</script>
        <fieldset class="field full type-options">
          <legend>${t.form.type}</legend>
          ${types.map(([k, ic, n]) => `<label class="type-opt"><input type="radio" name="type" value="${esc(n)}"${k === preset ? " checked" : ""}><span><i aria-hidden="true">${ic}</i><b>${n}</b></span></label>`).join("\n          ")}
        </fieldset>
        <div class="form-grid">
          <div class="field"><label for="f-name">${t.form.name}</label><input id="f-name" name="name" autocomplete="name" required></div>
          <div class="field"><label for="f-phone">${t.form.phone}</label><input id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" dir="ltr" placeholder="01xxxxxxxxx" required></div>
          <div class="field"><label for="f-date">${t.form.date}</label><input id="f-date" name="date" type="date" required></div>
          <div class="field"><label for="f-time">${t.form.time}</label><select id="f-time" name="time"></select></div>
          <div class="field"><label for="f-guests">${t.form.guests}</label><input id="f-guests" name="guests" type="number" min="1" max="${SITE.maxGuests}" value="${preset === "date" ? 2 : preset === "girls" ? 1 : 20}" inputmode="numeric"></div>
          <div class="field"><label for="f-color">${t.form.color}</label><select id="f-color" name="color">${t.colors.map((c) => `<option>${c}</option>`).join("")}</select></div>
          <div class="field full">
            <span class="field-label">${t.form.extras}</span>
            <div class="extras">${t.extras.map((x) => `<label><input type="checkbox" name="extras" value="${esc(x)}"> <span>${x}</span></label>`).join("")}</div>
          </div>
          <div class="field full"><label for="f-notes">${t.form.notes}</label><textarea id="f-notes" name="notes" placeholder="${esc(t.form.notesPh)}"></textarea></div>
        </div>
        <p class="form-error" id="form-error" role="alert"></p>
        <button type="submit" class="btn btn-wa">${ICON.wa}<span>${t.form.submit}</span></button>
        <p class="form-note">${t.form.note}</p>
      </form>`;
}

function bookingSection(ctx, preset, img1 = "date-mirror.webp") {
  const { t } = ctx;
  return `<section class="section section-alt" id="book">
    <div class="container booking-wrap">
      <div class="booking-side reveal">
        <span class="eyebrow">Book Your Night</span>
        <h2 class="section-title">${t.book.title}</h2>
        <div class="wave"></div>
        <p class="section-lead">${t.book.lead}</p>
        ${img(ctx, img1, t.book.imgAlt)}
        <ol class="booking-steps">${t.book.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
      </div>
      ${bookingForm(ctx, preset)}
    </div>
  </section>`;
}

function faqSection(ctx, keys, { title, withLink = true, id = "faq" } = {}) {
  const { t, lang } = ctx;
  return `<section class="section" id="${id}">
    <div class="container narrow">
      ${sectionHead("FAQ", title || t.faqTitle, "")}
      <div class="faq-list reveal">
        ${keys.map((k, i) => `<details class="faq-item"${i === 0 ? " open" : ""}>
          <summary><h3>${FAQ[k][lang][0]}</h3></summary>
          <p>${FAQ[k][lang][1]}</p>
        </details>`).join("\n        ")}
      </div>
      ${withLink ? `<p class="center" style="margin-top:28px"><a class="btn btn-ghost" href="${ctx.link("faq")}">${t.allFaq}</a></p>` : ""}
    </div>
  </section>`;
}

function visitSection(ctx) {
  const { t, lang } = ctx;
  return `<section class="section section-alt" id="visit">
    <div class="container">
      ${sectionHead("Find Us", t.visit.title, "")}
      <div class="visit">
        <div class="visit-card reveal">
          <div class="visit-row"><span class="ic" aria-hidden="true">📍</span><div><h3>${t.visit.addr}</h3><p>${SITE.address[lang]}</p></div></div>
          <div class="visit-row"><span class="ic" aria-hidden="true">🕒</span><div><h3>${t.visit.hours}</h3><p>${t.hoursText}</p></div></div>
          <div class="visit-row"><span class="ic" aria-hidden="true">📱</span><div><h3>${t.visit.phone}</h3><p><a href="tel:${SITE.phone}" dir="ltr">${SITE.phonePretty}</a></p></div></div>
          <div class="visit-actions">
            <a class="btn btn-ghost btn-sm" target="_blank" rel="noopener" href="${SITE.mapsUrl || mapsSearch}">${t.visit.dir}</a>
            <a class="btn btn-ghost btn-sm" href="tel:${SITE.phone}">${t.visit.call}</a>
            <a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="${waLink()}">${t.visit.wa}</a>
          </div>
        </div>
        <div class="map reveal"><iframe title="${esc(t.visit.mapTitle)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${mapsEmbed}"></iframe></div>
      </div>
    </div>
  </section>`;
}

function galleryGrid(ctx, items) {
  const { lang } = ctx;
  return `<div class="gallery reveal" id="gallery-grid">
        ${items.map(([f, ar, en]) => `<button type="button">${img(ctx, f, lang === "ar" ? ar : en)}</button>`).join("\n        ")}
      </div>`;
}

const lightbox = (t) => `<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="${t.photo}">
  <button class="lb-btn lb-close" type="button" aria-label="${t.close}">✕</button>
  <button class="lb-btn lb-prev" type="button" aria-label="${t.prev}">‹</button>
  <img alt="">
  <button class="lb-btn lb-next" type="button" aria-label="${t.next}">›</button>
</div>`;

function breadcrumbs(ctx) {
  const { lang, page } = ctx;
  return `<nav class="crumbs container" aria-label="breadcrumb"><a href="${ctx.link("")}">${SITE.name[lang]}</a><span aria-hidden="true">›</span><span aria-current="page">${page.crumb[lang]}</span></nav>`;
}

function menuList(ctx, cat, { alt = true } = {}) {
  const { lang } = ctx;
  return `<ul class="price-list">${cat.items.map(([a, e, p]) => `<li><span>${esc(lang === "ar" ? a : e)}${alt ? `<br><span class="alt" lang="${other(lang)}">${esc(lang === "ar" ? e : a)}</span>` : ""}</span><span class="dots"></span><span class="price">${p}</span></li>`).join("")}</ul>`;
}

/* ---------------- page bodies ---------------- */
function homeBody(ctx) {
  const { t, lang } = ctx;
  const vip = MENU.find((c) => c.id === "vip");
  const h = t.home;
  return `
  <section class="hero" id="home">
    <div class="hero-bg">${img(ctx, "hero.webp", "", { lazy: false, priority: true })}</div>
    <div class="container">
      ${img(ctx, "logo.webp", SITE.name[lang], { lazy: false, cls: "hero-logo" })}
      <p class="hero-tag neon-cyan">Good Times Flow</p>
      <h1><span class="h1-main neon-pink">${h.slogan}</span><span class="h1-sub">${h.h1sub}</span></h1>
      <p class="lead">${h.lead}</p>
      <div class="hero-buttons">
        <a href="#book" class="btn btn-pink">${t.bookCta}</a>
        <a href="${ctx.link("menu")}" class="btn btn-ghost">${h.seeMenu}</a>
      </div>
    </div>
    <span class="scroll-hint" aria-hidden="true"></span>
  </section>

  <div class="container">
    <div class="features reveal">
      ${h.features.map(([ic, a, b]) => `<div class="feature"><div class="feature-icon" aria-hidden="true">${ic}</div><h2>${a}</h2><p lang="${other(lang)}">${b}</p></div>`).join("\n      ")}
    </div>
  </div>

  <section class="section" id="about">
    <div class="container split">
      <div class="photo-stack reveal">
        ${img(ctx, "garden-reeds.webp", h.aboutAlt1)}
        ${img(ctx, "entrance.webp", h.aboutAlt2)}
      </div>
      <div class="reveal">
        <span class="eyebrow">Welcome to the Nile</span>
        <h2 class="section-title">${h.aboutTitle}</h2>
        <div class="wave"></div>
        ${h.about.map((p) => `<p>${p}</p>`).join("\n        ")}
        <dl class="quick-facts">
          ${h.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("\n          ")}
        </dl>
      </div>
    </div>
  </section>

  <section class="section section-alt" id="only-here">
    <div class="container">
      ${sectionHead("Only at Nile Stone", h.onlyTitle, h.onlyLead)}
      <div class="usp-grid">
        ${h.usp.map(([ic, a, b, href]) => `<a class="usp reveal" href="${href ? ctx.link(href) : "#book"}"><span class="usp-ic" aria-hidden="true">${ic}</span><h3>${a}</h3><p>${b}</p></a>`).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section" id="drinks">
    <div class="container">
      ${sectionHead("Good Times Flow", h.drinksTitle, h.drinksLead)}
      <div class="sig-grid">
        ${SIGNATURES.map((s) => `<article class="sig reveal">${img(ctx, s.img, lang === "ar" ? s.ar : s.en)}<div class="sig-body"><span class="sig-tag">${h.signature}</span><h3>${lang === "ar" ? s.ar : s.en}</h3><p>${lang === "ar" ? s.dAr : s.dEn}</p></div></article>`).join("\n        ")}
      </div>
      <div class="drinks-row">
        <div class="vip-card reveal">
          <h3 class="neon-gold">👑 Nile Stone VIP</h3>
          ${menuList(ctx, vip, { alt: false })}
        </div>
        <div class="reveal">
          <p class="section-lead" style="margin-bottom:18px">${h.menuTeaser}</p>
          <div class="menu-cats">${MENU.filter((c) => c.id !== "vip").map((c) => `<a class="chip" href="${ctx.link("menu")}#${c.id}">${c.icon} ${c[lang]}</a>`).join("")}</div>
          <a href="${ctx.link("menu")}" class="btn btn-pink">${h.fullMenu}</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-alt" id="events">
    <div class="container">
      ${sectionHead("Private Events", h.eventsTitle, h.eventsLead)}
      ${eventCards(ctx)}
      ${includedBlock(ctx)}
    </div>
  </section>

  ${girlsBanner(ctx)}

  ${bookingSection(ctx, "date")}

  <section class="section" id="gallery">
    <div class="container">
      ${sectionHead("Moments", h.galleryTitle, h.galleryLead)}
      ${galleryGrid(ctx, GALLERY)}
    </div>
  </section>

  ${faqSection(ctx, ctx.page.faq)}
  ${visitSection(ctx)}
  ${lightbox(t)}`;
}

function girlsBanner(ctx) {
  const { t, lang } = ctx;
  const g = t.girls;
  return `<section class="girls-banner">
    <div class="container girls-inner reveal">
      <div>
        <span class="eyebrow neon-pink-text">Girls Only 💃</span>
        <h2 class="section-title">${g.bannerTitle}</h2>
        <p>${g.bannerLead}</p>
        <div class="girls-tags">${g.acts.map(([ic, n]) => `<span>${ic} ${n}</span>`).join("")}</div>
      </div>
      <div class="girls-cta">
        <div class="ticket"><small>${t.ticket}</small><b>${num(SITE.girlsTicket, lang)}</b><span>${t.cur}</span></div>
        <a class="btn btn-pink" href="${ctx.link("girls-night")}">${g.more}</a>
      </div>
    </div>
  </section>`;
}

function eventBody(ctx) {
  const { t, lang, page } = ctx;
  const ev = EVENTS.find((e) => e.key === page.eventKey);
  const c = page.content[lang];
  const priceText = ev.price === "date" ? t.priceDate : t.priceEvents;
  return `
  ${breadcrumbs(ctx)}
  <section class="page-hero">
    <div class="container page-hero-grid">
      <div class="reveal in">
        <span class="eyebrow">${page.eyebrow}</span>
        <h1 class="page-title">${page.h1[lang]}</h1>
        <div class="wave"></div>
        <p class="page-lead">${c.lead}</p>
        <div class="price-pill">${priceLabel(ctx, ev)}</div>
        <p class="muted small">${priceText}</p>
        <div class="hero-buttons start">
          <a href="#book" class="btn btn-pink">${t.bookCta}</a>
          <a href="${waLink(c.wa)}" target="_blank" rel="noopener" class="btn btn-wa">${ICON.wa}<span>${t.visit.wa}</span></a>
        </div>
      </div>
      <div class="page-hero-img reveal in">${img(ctx, ev.img, page.h1[lang], { lazy: false, priority: true })}</div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${sectionHead("Why Nile Stone", c.whyTitle, c.whyLead)}
      <div class="usp-grid">
        ${c.highlights.map(([ic, a, b]) => `<div class="usp reveal"><span class="usp-ic" aria-hidden="true">${ic}</span><h3>${a}</h3><p>${b}</p></div>`).join("\n        ")}
      </div>
      ${ev.price === "events" ? includedBlock(ctx) : ""}
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      ${sectionHead("Moments", t.photosTitle, "")}
      ${galleryGrid(ctx, page.photos.map((f) => GALLERY.find((g) => g[0] === f) || [f, page.h1.ar, page.h1.en]))}
    </div>
  </section>

  ${bookingSection(ctx, ev.key, page.bookImg || "date-mirror.webp")}
  ${faqSection(ctx, page.faq, { title: c.faqTitle })}

  <section class="section section-alt">
    <div class="container">
      ${sectionHead("More at Nile Stone", t.moreEvents, "")}
      ${eventCards(ctx, { exclude: ev.key, featureFirst: false })}
    </div>
  </section>
  ${visitSection(ctx)}
  ${lightbox(t)}`;
}

function girlsBody(ctx) {
  const { t, lang, page } = ctx;
  const g = t.girls;
  const c = page.content[lang];
  const next = SITE.girlsNextDate
    ? new Date(SITE.girlsNextDate + ":00+03:00").toLocaleString(lang === "ar" ? "ar-EG" : "en-GB", { weekday: "long", day: "numeric", month: "long", hour: "numeric", minute: "2-digit", timeZone: "Africa/Cairo" })
    : null;
  return `
  ${breadcrumbs(ctx)}
  <section class="girls-hero">
    <div class="girls-hero-bg">${img(ctx, "nile-night.webp", "", { lazy: false, priority: true })}</div>
    <div class="container center">
      <p class="hero-tag neon-cyan">Girls Only</p>
      <h1 class="page-title"><span class="neon-pink">${c.h1a}</span><br>${c.h1b}</h1>
      <p class="page-lead" style="margin-inline:auto">${c.lead}</p>
      <div class="ticket big"><small>${t.ticket}</small><b>${num(SITE.girlsTicket, lang)}</b><span>${t.cur}</span></div>
      <p class="next-date">${next ? `${g.nextIs} <b>${next}</b>` : g.nextAsk}</p>
      <div class="hero-buttons">
        <a class="btn btn-wa" target="_blank" rel="noopener" href="${waLink(c.wa)}">${ICON.wa}<span>${g.cta}</span></a>
        <a class="btn btn-ghost" target="_blank" rel="noopener" href="${SITE.instagram}">${g.ig}</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${sectionHead("The Night", c.actsTitle, c.actsLead)}
      <div class="acts-grid">
        ${c.acts.map(([ic, a, b, color]) => `<div class="act ${color} reveal"><span class="act-ic" aria-hidden="true">${ic}</span><h3>${a}</h3><p>${b}</p></div>`).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container narrow">
      ${sectionHead("How it works", c.howTitle, "")}
      <ol class="how-steps reveal">${c.how.map((s) => `<li>${s}</li>`).join("")}</ol>
    </div>
  </section>

  ${faqSection(ctx, page.faq, { title: c.faqTitle })}

  <section class="section section-alt">
    <div class="container">
      ${sectionHead("More at Nile Stone", t.moreEvents, "")}
      ${eventCards(ctx, { exclude: "girls", featureFirst: false })}
    </div>
  </section>
  ${visitSection(ctx)}`;
}

function menuBody(ctx) {
  const { t, lang } = ctx;
  const m = t.menuPage;
  return `
  ${breadcrumbs(ctx)}
  <div class="container menu-hero">
    ${img(ctx, "logo.webp", SITE.name[lang], { lazy: false })}
    <p class="script neon-cyan" style="margin:0;font-size:1.4rem">Good Times Flow</p>
    <h1 class="section-title neon-pink" style="margin-top:6px">${m.h1}</h1>
    <p class="section-lead" style="margin:0 auto 6px">${m.lead}</p>
    <input class="menu-search" id="menu-search" type="search" placeholder="${esc(m.search)}" aria-label="${esc(m.search)}" data-empty="${esc(m.empty)}">
    <p class="currency-note">${m.note}</p>
  </div>
  <nav class="cat-nav" aria-label="${m.cats}"><div class="container" id="cat-nav">
    ${MENU.map((c) => `<a href="#${c.id}">${c.icon} ${c[lang]}</a>`).join("")}
  </div></nav>
  <div class="container menu-cols" id="menu-cols">
    ${MENU.map((c) => `<section class="menu-card ${c.color}" id="${c.id}"><h2><span aria-hidden="true">${c.icon}</span>${c[lang]}</h2>${menuList(ctx, c)}</section>`).join("\n    ")}
    <p class="menu-empty" hidden>${m.empty}</p>
  </div>
  <section class="section section-alt">
    <div class="container">
      ${sectionHead("Signature", m.sigTitle, "")}
      <div class="sig-grid">
        ${SIGNATURES.map((s) => `<article class="sig reveal">${img(ctx, s.img, lang === "ar" ? s.ar : s.en)}<div class="sig-body"><h3>${lang === "ar" ? s.ar : s.en}</h3><p>${lang === "ar" ? s.dAr : s.dEn}</p></div></article>`).join("")}
      </div>
    </div>
  </section>
  ${faqSection(ctx, ctx.page.faq)}`;
}

function faqBody(ctx) {
  const { t, lang, page } = ctx;
  return `
  ${breadcrumbs(ctx)}
  <section class="section" style="padding-top:30px">
    <div class="container narrow">
      <div class="center">
        <span class="eyebrow">FAQ</span>
        <h1 class="section-title">${page.h1[lang]}</h1>
        <div class="wave"></div>
        <p class="section-lead">${t.faqLead}</p>
      </div>
      ${page.groups.map((g) => `<h2 class="faq-group">${g.title[lang]}</h2>
      <div class="faq-list">
        ${g.keys.map((k) => `<details class="faq-item" open><summary><h3>${FAQ[k][lang][0]}</h3></summary><p>${FAQ[k][lang][1]}</p></details>`).join("\n        ")}
      </div>`).join("\n      ")}
      <div class="cta-box">
        <p>${t.stillQ}</p>
        <a class="btn btn-wa" target="_blank" rel="noopener" href="${waLink()}">${ICON.wa}<span>${t.visit.wa}</span></a>
      </div>
    </div>
  </section>
  ${visitSection(ctx)}`;
}

function notFoundBody(ctx) {
  const { t } = ctx;
  return `<section class="section center" style="padding-top:160px;min-height:70vh">
    <div class="container">
      <p class="hero-tag neon-cyan">404</p>
      <h1 class="section-title neon-pink">${t.nf.title}</h1>
      <p class="section-lead" style="margin-inline:auto">${t.nf.lead}</p>
      <div class="hero-buttons"><a class="btn btn-pink" href="/">${t.nav.home}</a><a class="btn btn-ghost" href="/menu/">${t.nav.menu}</a></div>
    </div>
  </section>`;
}

const BODIES = { home: homeBody, event: eventBody, girls: girlsBody, menu: menuBody, faq: faqBody, notfound: notFoundBody };

/* ---------------- layout ---------------- */
function render(page, lang) {
  const t = UI[lang];
  const depth = (lang === "en" ? 1 : 0) + (page.slug ? 1 : 0);
  const root = page.type === "notfound" ? "/" : "../".repeat(depth);
  const ctx = {
    lang, t, page, root,
    solidHeader: page.type !== "home" && page.type !== "girls",
    link: (slug) => root + pagePath(lang, slug),
    langSwitch: root + pagePath(other(lang), page.slug)
  };
  if (page.type === "notfound") ctx.langSwitch = lang === "ar" ? "/en/" : "/";

  const title = page.title[lang];
  const desc = page.desc[lang];
  const canonical = absUrl(lang, page.slug);
  const ogImage = `${SITE.url}/assets/img/${page.ogImage || "og.jpg"}`;

  const graph = [businessNode(lang)];
  if (page.type === "home") graph.push({ "@type": "WebSite", "@id": `${SITE.url}/#website`, url: `${SITE.url}/`, name: SITE.name[lang], inLanguage: lang, publisher: { "@id": `${SITE.url}/#cafe` } });
  if (page.type !== "notfound") graph.push({
    "@type": "WebPage", "@id": canonical + "#webpage", url: canonical, name: title, description: desc, inLanguage: lang,
    isPartOf: { "@id": `${SITE.url}/#website` }, about: { "@id": `${SITE.url}/#cafe` }, dateModified: SITE.updated,
    primaryImageOfPage: ogImage
  });
  if (page.slug && page.type !== "notfound") graph.push(breadcrumbNode(lang, page));
  if (page.faq && page.faq.length) graph.push(faqNode(lang, page.faq));
  if (page.type === "faq") graph.push(faqNode(lang, page.groups.flatMap((g) => g.keys)));
  if (page.type === "menu") graph.push(menuNode(lang));
  if (page.eventKey) graph.push(serviceNode(lang, EVENTS.find((e) => e.key === page.eventKey), page));
  const ev = page.type === "girls" && girlsEventNode(lang);
  if (ev) graph.push(ev);
  const ld = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");

  const alternates = page.type === "notfound" ? "" : `
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="ar" href="${absUrl("ar", page.slug)}">
  <link rel="alternate" hreflang="en" href="${absUrl("en", page.slug)}">
  <link rel="alternate" hreflang="x-default" href="${absUrl("ar", page.slug)}">`;

  const preloadHero = page.type === "home" ? `<link rel="preload" as="image" href="${root}assets/img/hero.webp" fetchpriority="high">` : "";

  return `<!doctype html>
<html lang="${lang}" dir="${lang === "ar" ? "rtl" : "ltr"}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <meta name="robots" content="${page.type === "notfound" ? "noindex" : "index, follow, max-image-preview:large, max-snippet:-1"}">
  <meta name="theme-color" content="#07060d">
  <meta name="geo.region" content="EG-C">
  <meta name="geo.placename" content="${lang === "ar" ? "منيل الروضة، مصر القديمة، القاهرة" : "Manial El-Roda, Old Cairo, Cairo"}">${alternates}
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(SITE.name[lang])}">
  <meta property="og:locale" content="${lang === "ar" ? "ar_EG" : "en_US"}">
  <meta property="og:locale:alternate" content="${lang === "ar" ? "en_US" : "ar_EG"}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImage}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="${root}assets/img/favicon.png">
  <link rel="apple-touch-icon" href="${root}assets/img/icon-192.png">
  <link rel="manifest" href="${root}site.webmanifest">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Pacifico&display=swap" rel="stylesheet">
  ${preloadHero}
  <script>document.documentElement.classList.add("js")</script>
  <link rel="stylesheet" href="${root}assets/css/style.css">
  <script type="application/ld+json">${ld}</script>
</head>
<body class="page-${page.type}">
<a class="skip" href="#main">${t.skip}</a>
${header(ctx)}
<main id="main">
${BODIES[page.type](ctx)}
</main>
${footer(ctx)}
<script src="${root}assets/js/main.js" defer></script>
</body>
</html>
`;
}

/* ---------------- write everything ---------------- */
function write(rel, content) {
  const f = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content);
}

const urls = [];
for (const page of PAGES) {
  for (const lang of LANGS) {
    if (page.type === "notfound") {
      if (lang === "ar") write("404.html", render(page, lang));
      continue;
    }
    write(pagePath(lang, page.slug) + "index.html", render(page, lang));
    urls.push(page);
  }
}

// sitemap with hreflang alternates
const seen = new Set();
const sm = PAGES.filter((p) => p.type !== "notfound").flatMap((p) => LANGS.map((l) => {
  const key = l + p.slug; if (seen.has(key)) return ""; seen.add(key);
  return `  <url>
    <loc>${absUrl(l, p.slug)}</loc>
    <lastmod>${SITE.updated}</lastmod>
    <xhtml:link rel="alternate" hreflang="ar" href="${absUrl("ar", p.slug)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${absUrl("en", p.slug)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${absUrl("ar", p.slug)}"/>
    <priority>${p.slug ? (p.type === "faq" ? "0.6" : "0.8") : "1.0"}</priority>
  </url>`;
})).join("\n");
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sm}
</urlset>
`);

write("robots.txt", `# Nile Stone Café — everyone (search engines and AI assistants) is welcome.
User-agent: *
Allow: /

# AI / answer engines explicitly allowed
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Bingbot
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`);

// llms.txt — a plain factual summary for AI assistants (GEO / AEO)
const menuLines = MENU.map((c) => `- ${c.en} / ${c.ar}: ` + c.items.map(([a, e, p]) => `${e} (${a}) ${p} EGP`).join("; ")).join("\n");
write("llms.txt", `# ${SITE.name.en} (${SITE.name.ar})

> ${UI.en.bizDesc}

## Key facts
- Name: ${SITE.name.en} — ${SITE.name.ar}
- Type: Nile-side garden café and private event venue
- Address: ${SITE.address.en} — ${SITE.address.ar}
- Opening hours: every day, 3:00 PM – 3:00 AM (Cairo time)
- Phone / WhatsApp: ${SITE.phone}
- Instagram: ${SITE.instagram}
- TikTok: ${SITE.tiktok}
- Romantic date for two: from ${SITE.dateFrom} EGP (decorated Nile-side table, candles, flowers, dinner)
- Private events (engagement, katb el-ketab, birthday, family gatherings/open buffet): from ${SITE.eventsFrom} EGP, exact quote on request; up to ${SITE.maxGuests} guests; the whole venue is closed for the event; package can include decor, food/open buffet, cake, photographer, DJ & sound, drinks
- Girls' Night: ladies only, monthly, Zumba + karaoke + nostalgia party; ticket ${SITE.girlsTicket} EGP; contact for the next date${SITE.girlsNextDate ? ` (next: ${SITE.girlsNextDate})` : ""}
- Other: fishing from the garden on the Nile is allowed; shisha served
- Drink prices: 15–140 EGP
- Booking: WhatsApp ${SITE.phone}, the booking form on the website, or Instagram DM

## Pages
- [Home (Arabic)](${absUrl("ar", "")}) · [Home (English)](${absUrl("en", "")})
- [Menu & prices](${absUrl("en", "menu")}) · [المنيو](${absUrl("ar", "menu")})
${EVENTS.map((e) => `- [${e.en.name}](${absUrl("en", e.slug)}) · [${e.ar.name}](${absUrl("ar", e.slug)})`).join("\n")}
- [FAQ](${absUrl("en", "faq")}) · [الأسئلة الشائعة](${absUrl("ar", "faq")})

## Full menu (EGP)
${menuLines}

## FAQ
${Object.values(FAQ).map((f) => `- Q: ${f.en[0]}\n  A: ${f.en[1]}`).join("\n")}
`);

write("site.webmanifest", JSON.stringify({
  name: SITE.name.en, short_name: "Nile Stone", lang: "ar", dir: "rtl", start_url: "/", display: "standalone",
  background_color: "#07060d", theme_color: "#07060d",
  icons: [{ src: "/assets/img/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "/assets/img/icon-512.png", sizes: "512x512", type: "image/png" }]
}, null, 2));

console.log(`Built ${urls.length} pages + 404, sitemap.xml, robots.txt, llms.txt`);
