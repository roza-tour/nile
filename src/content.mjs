/* Nile Stone Café — page text (Arabic + English) and page list. */
import { SITE } from "./data.mjs";

const D = SITE.dateFrom, E = SITE.eventsFrom, G = SITE.girlsTicket, M = SITE.maxGuests;

export const UI = {
  ar: {
    bizDesc: "نايل ستون كافيه: كافيه في جنينة على النيل مباشرة في منيل الروضة، مصر القديمة، القاهرة. مشروبات مميزة وشيشة، ومفتوح يوميًا من 3 العصر لـ 3 الفجر. بنقفل المكان بالكامل للمناسبات الخاصة لحد 40 فرد: رومانتيك ديت، خطوبة، كتب كتاب، أعياد ميلاد، عزومات وأوبن بوفيه، وحفلة بنات شهرية.",
    skip: "تخطى للمحتوى",
    navLabel: "القائمة الرئيسية",
    nav: { home: "الرئيسية", menu: "المنيو", date: "رومانتيك ديت", girls: "حفلة البنات", faq: "أسئلة", events: "المناسبات" },
    langName: "EN",
    bookCta: "احجز دلوقتي",
    menuBtn: "القائمة",
    footerLinks: "صفحات",
    footerVisit: "زورنا",
    hoursText: "يوميًا من 3 العصر لـ 3 الفجر",
    rights: "Good Times Flow",
    menu: "المنيو",
    from: "تبدأ من", cur: "ج.م", forTwo: "لفردين", ticket: "التذكرة",
    popular: "الأكثر طلبًا",
    details: "التفاصيل",
    priceDate: "السعر النهائي بيتحدد حسب الإضافات اللي تختاروها.",
    priceEvents: "احكولنا عايزين إيه، ونبعتلكم السعر بالظبط حسب عدد الأفراد والطلبات.",
    inc: {
      title: "إيه اللي ممكن يكون في الباكدج",
      items: [["🌸", "ديكور كامل"], ["🍽️", "أكل وأوبن بوفيه"], ["🎂", "تورتة"], ["📸", "مصور"], ["🎧", "دي جي وساوند"], ["🍹", "مشروبات"]]
    },
    facts: { private: "المكان بيتقفل بالكامل", guests: `لحد <b>${M}</b> فرد`, from: `المناسبات تبدأ من <b>${E} ج.م</b>` },
    form: {
      greet: "مرحبًا نايل ستون 👋 طلب حجز:",
      type: "نوع المناسبة", name: "الاسم", phone: "رقم الموبايل", date: "التاريخ", time: "الوقت",
      guests: "عدد الأفراد", color: "لون الديكور المفضل", extras: "إضافات", notes: "ملاحظات",
      notesPh: "أي تفاصيل تحب نعرفها… مفاجأة؟ أغنية معينة؟",
      submit: "ابعت على واتساب", note: "الحجز بيتأكد بعد ما نتواصل معاك على واتساب.",
      err: "من فضلك اكتب الاسم ورقم الموبايل والتاريخ.", other: "مناسبة تانية",
      am: "ص", pm: "م", afternoon: "العصر", night: "بالليل", dawn: "الفجر"
    },
    colors: ["سيبوها علينا", "بنفسجي", "أحمر", "أبيض وذهبي", "بينك", "أزرق"],
    extras: ["تورتة", "مصور", "دي جي", "ورد", "أوبن بوفيه", "مفاجأة"],
    book: {
      title: "احجز في دقيقة",
      lead: "املا البيانات، وهتتبعت رسالة جاهزة على واتساب. هنرد عليك ونأكد التفاصيل والسعر.",
      imgAlt: "تجهيزات رومانتيك ديت على النيل في نايل ستون",
      steps: ["اختار نوع المناسبة والتاريخ", "اضغط \"ابعت على واتساب\"", "نتواصل معاك ونأكد الحجز"]
    },
    faqTitle: "أسئلة بتتسأل كتير",
    allFaq: "كل الأسئلة",
    faqLead: "كل اللي محتاج تعرفه عن نايل ستون: المكان، والمواعيد، والأسعار، والحجز.",
    stillQ: "لسه عندك سؤال؟ كلمنا على طول.",
    visit: { title: "تعالى على النيل", addr: "العنوان", hours: "مواعيد الشغل", phone: "واتساب / موبايل", dir: "الاتجاهات", call: "اتصل", wa: "واتساب", mapTitle: "خريطة نايل ستون كافيه" },
    photo: "صورة", close: "إغلاق", prev: "السابق", next: "التالي",
    photosTitle: "صور حقيقية من عندنا",
    moreEvents: "مناسبات تانية عندنا",
    home: {
      slogan: "الزبون ديمًا على بحر",
      h1sub: "كافيه ومكان مناسبات على النيل في منيل الروضة",
      lead: "جنينة على النيل في قلب القاهرة القديمة. مشروبات مميزة، وسهر لحد 3 الفجر، ومكان بيتقفل ليك لوحدك في مناسباتك.",
      seeMenu: "شوف المنيو",
      features: [["☕", "أجواء حلوة", "Good Vibes"], ["🍹", "مشروبات مميزة", "Great Drinks"], ["🌊", "على النيل", "Nile View"], ["🌿", "لحظات تنعش يومك", "Fresh Moments"]],
      aboutAlt1: "جنينة نايل ستون على النيل بالورد والنخل",
      aboutAlt2: "مدخل نايل ستون كافيه بلافتة النيون",
      aboutTitle: "جنينة خضرا على النيل، في قلب القاهرة القديمة",
      about: [
        "نايل ستون مش مجرد كافيه. نجيلة خضرا وورد جهنمية ونخل، والنيل قدامك على طول، وأنوار الكورنيش بالليل.",
        "تعالى اشرب حاجة مع صحابك، أو اصطاد من على النيل، أو احجز المكان كله ليك في يوم مايتنسيش."
      ],
      facts: [
        ["📍 المكان", "20 شارع الملك الصالح، منيل الروضة، مصر القديمة"],
        ["🕒 المواعيد", "يوميًا 3 العصر – 3 الفجر"],
        ["💜 رومانتيك ديت", `من ${D} ج.م لفردين`],
        ["🎉 المناسبات", `من ${E} ج.م · لحد ${M} فرد`],
        ["💃 حفلة البنات", `شهريًا · التذكرة ${G} ج.م`],
        ["🍹 المشروبات", "من 15 لـ 140 ج.م"]
      ],
      onlyTitle: "حاجات مش هتلاقيها غير هنا",
      onlyLead: "مش مجرد قعدة. نايل ستون فيه تجارب مختلفة.",
      usp: [
        ["🎣", "صيد على النيل", "هات صنارتك واصطاد وانت قاعد في الجنينة على المية.", ""],
        ["💃", "حفلة بنات كل شهر", "زومبا وكاريوكي ونوستالجيا، للبنات بس.", "girls-night"],
        ["🔒", "المكان كله ليك", `في مناسبتك الكافيه بيتقفل ليكم، لحد ${M} فرد.`, "engagement"],
        ["🌙", "سهر لحد 3 الفجر", "مفتوحين كل يوم من 3 العصر لـ 3 الفجر.", ""]
      ],
      drinksTitle: "مشروبات تتشاف قبل ما تتشرب",
      drinksLead: "السنفور وجوزا لافريزا وتشكيلة Nile Stone VIP، ومعاهم موخيتو وسموزي وعصاير فريش ومشروبات ساخنة.",
      signature: "من اختراعنا",
      menuTeaser: "84 صنف بأسعار واضحة، من الشاي بـ 35 لحد الموخيتو الريدبول بـ 130.",
      fullMenu: "المنيو كامل بالأسعار",
      eventsTitle: "المكان كله ليك في يومك",
      eventsLead: "رومانتيك ديت، خطوبة، كتب كتاب، عيد ميلاد، عزومة، أو حفلة بنات. بنقفل الكافيه ونظبط كل حاجة، وانت عليك تيجي وتفرح.",
      galleryTitle: "من عندنا",
      galleryLead: "صور حقيقية من المكان ومن مناسبات عملناها."
    },
    girls: {
      bannerTitle: "حفلة البنات الشهرية",
      bannerLead: "مرة كل شهر نايل ستون بيبقى للبنات بس: زومبا وكاريوكي وسهرة نوستالجيا على النيل.",
      acts: [["💃", "زومبا"], ["🎤", "كاريوكي"], ["📼", "نوستالجيا"]],
      more: "اعرفي أقرب ميعاد",
      nextIs: "الحفلة الجاية:",
      nextAsk: "بنعملها مرة كل شهر. كلمينا نقولك أقرب ميعاد متاح.",
      cta: "احجزي تذكرتك على واتساب",
      ig: "تابعينا على انستجرام"
    },
    menuPage: {
      h1: "منيو نايل ستون كافيه بالأسعار",
      lead: "مشروبات ساخنة، عصاير فريش، سموزي، موخيتو، ميلك شيك، Nile Stone VIP، وشيشة.",
      search: "دوّر على مشروب…", empty: "مفيش نتايج", note: "كل الأسعار بالجنيه المصري", cats: "أقسام المنيو",
      sigTitle: "مشروبات من اختراعنا"
    },
    nf: { title: "الصفحة دي مش موجودة", lead: "بس النيل لسه في مكانه 🌊 ارجع للرئيسية أو شوف المنيو." }
  },

  en: {
    bizDesc: "Nile Stone Café is a garden café right on the Nile in Manial El-Roda, Old Cairo, Cairo. It serves signature drinks and shisha, and is open daily from 3 PM to 3 AM. The whole venue can be booked privately for up to 40 guests: romantic dates, engagements, katb el-ketab, birthdays, family gatherings with open buffet, and a monthly girls' night.",
    skip: "Skip to content",
    navLabel: "Main menu",
    nav: { home: "Home", menu: "Menu", date: "Romantic Date", girls: "Girls' Night", faq: "FAQ", events: "Events" },
    langName: "عربي",
    bookCta: "Book now",
    menuBtn: "Menu",
    footerLinks: "Pages",
    footerVisit: "Visit us",
    hoursText: "Daily, 3 PM – 3 AM",
    rights: "Good Times Flow",
    menu: "Menu",
    from: "From", cur: "EGP", forTwo: "for two", ticket: "Ticket",
    popular: "Most popular",
    details: "Details",
    priceDate: "The final price depends on the extras you choose.",
    priceEvents: "Tell us what you need and we'll send an exact quote based on guests and requests.",
    inc: {
      title: "What the package can include",
      items: [["🌸", "Full decor"], ["🍽️", "Food & open buffet"], ["🎂", "Cake"], ["📸", "Photographer"], ["🎧", "DJ & sound"], ["🍹", "Drinks"]]
    },
    facts: { private: "Entire venue closed for you", guests: `Up to <b>${M}</b> guests`, from: `Events from <b>${E.toLocaleString("en-US")} EGP</b>` },
    form: {
      greet: "Hi Nile Stone 👋 Booking request:",
      type: "Occasion", name: "Name", phone: "Mobile number", date: "Date", time: "Time",
      guests: "Guests", color: "Preferred decor color", extras: "Extras", notes: "Notes",
      notesPh: "Anything we should know… a surprise? a special song?",
      submit: "Send on WhatsApp", note: "Your booking is confirmed once we talk on WhatsApp.",
      err: "Please enter your name, mobile number and date.", other: "Other occasion",
      am: "AM", pm: "PM", afternoon: "PM", night: "PM", dawn: "AM"
    },
    colors: ["Surprise me", "Purple", "Red", "White & gold", "Pink", "Blue"],
    extras: ["Cake", "Photographer", "DJ", "Flowers", "Open buffet", "Surprise"],
    book: {
      title: "Book in a minute",
      lead: "Fill in the details and a ready-made WhatsApp message opens. We'll reply to confirm the details and price.",
      imgAlt: "Romantic date setup on the Nile at Nile Stone",
      steps: ["Choose the occasion and date", "Tap \"Send on WhatsApp\"", "We contact you and confirm"]
    },
    faqTitle: "Frequently asked questions",
    allFaq: "All questions",
    faqLead: "Everything you need to know about Nile Stone: location, hours, prices and booking.",
    stillQ: "Still have a question? Message us directly.",
    visit: { title: "Come to the Nile", addr: "Address", hours: "Opening hours", phone: "WhatsApp / Phone", dir: "Directions", call: "Call", wa: "WhatsApp", mapTitle: "Nile Stone Café map" },
    photo: "Photo", close: "Close", prev: "Previous", next: "Next",
    photosTitle: "Real photos from our place",
    moreEvents: "More occasions we host",
    home: {
      slogan: "Always by the water",
      h1sub: "A Nile-side café & private event venue in Manial El-Roda, Cairo",
      lead: "A garden on the Nile in the heart of Old Cairo. Signature drinks, late nights until 3 AM, and the whole place closed just for you on your special day.",
      seeMenu: "See the menu",
      features: [["☕", "Good Vibes", "أجواء حلوة"], ["🍹", "Great Drinks", "مشروبات مميزة"], ["🌊", "Nile View", "على النيل"], ["🌿", "Fresh Moments", "لحظات تنعش يومك"]],
      aboutAlt1: "Nile Stone's garden on the Nile with bougainvillea and palms",
      aboutAlt2: "Nile Stone Café's neon-lit entrance",
      aboutTitle: "A green garden on the Nile, in the heart of Old Cairo",
      about: [
        "Nile Stone is more than a café: green lawn, bougainvillea and palm trees, the Nile right in front of you, and the corniche lights at night.",
        "Grab a drink with friends, fish from the Nile bank, or book the whole place for a day you won't forget."
      ],
      facts: [
        ["📍 Location", "20 El-Malek El-Saleh St., Manial El-Roda, Old Cairo"],
        ["🕒 Hours", "Daily 3 PM – 3 AM"],
        ["💜 Romantic date", `from ${D} EGP for two`],
        ["🎉 Private events", `from ${E.toLocaleString("en-US")} EGP · up to ${M} guests`],
        ["💃 Girls' Night", `monthly · ticket ${G} EGP`],
        ["🍹 Drinks", "15 – 140 EGP"]
      ],
      onlyTitle: "Only at Nile Stone",
      onlyLead: "More than a place to sit, with experiences you won't find elsewhere.",
      usp: [
        ["🎣", "Fishing on the Nile", "Bring your rod and fish right from the garden.", ""],
        ["💃", "Monthly Girls' Night", "Zumba, karaoke and nostalgia, ladies only.", "girls-night"],
        ["🔒", "The whole venue is yours", `We close the café for your event, up to ${M} guests.`, "engagement"],
        ["🌙", "Open till 3 AM", "Every day from 3 PM to 3 AM.", ""]
      ],
      drinksTitle: "Drinks you see before you sip",
      drinksLead: "The Smurf, Guava La Fraise and our Nile Stone VIP signatures, plus mojitos, smoothies, fresh juices and hot drinks.",
      signature: "Our creation",
      menuTeaser: "84 items with clear prices, from tea at 35 EGP to a Red Bull mojito at 130.",
      fullMenu: "Full menu & prices",
      eventsTitle: "The whole place, just for you",
      eventsLead: "Romantic date, engagement, katb el-ketab, birthday, family gathering or girls' night. We close the café and handle everything; you just show up and celebrate.",
      galleryTitle: "From our place",
      galleryLead: "Real photos of the venue and events we've hosted."
    },
    girls: {
      bannerTitle: "The monthly Girls' Night",
      bannerLead: "Once a month, Nile Stone is ladies only: Zumba, karaoke and a nostalgia party on the Nile.",
      acts: [["💃", "Zumba"], ["🎤", "Karaoke"], ["📼", "Nostalgia"]],
      more: "Find the next date",
      nextIs: "Next Girls' Night:",
      nextAsk: "It runs once a month. Message us for the nearest available date.",
      cta: "Book your ticket on WhatsApp",
      ig: "Follow us on Instagram"
    },
    menuPage: {
      h1: "Nile Stone Café Menu & Prices",
      lead: "Hot drinks, fresh juices, smoothies, mojitos, milkshakes, Nile Stone VIP and shisha.",
      search: "Search drinks…", empty: "No results", note: "All prices in Egyptian Pounds (EGP)", cats: "Menu sections",
      sigTitle: "Our signature drinks"
    },
    nf: { title: "This page doesn't exist", lead: "But the Nile is still here 🌊 Head home or check the menu." }
  }
};
UI.en.amenities = ["Nile view", "Outdoor garden seating", "Private events (up to 40 guests)", "Shisha", "Fishing on the Nile", "Open until 3 AM", "Monthly ladies-only night"];

/* ---------------- pages ---------------- */
export const PAGES = [
  {
    type: "home", slug: "",
    title: {
      ar: "نايل ستون كافيه | كافيه ومكان مناسبات على النيل في منيل الروضة – القاهرة",
      en: "Nile Stone Café | Nile-side Café & Event Venue in Manial El-Roda, Cairo"
    },
    desc: {
      ar: `كافيه في جنينة على النيل في منيل الروضة، مصر القديمة. مفتوح يوميًا من 3 العصر لـ 3 الفجر. رومانتيك ديت من ${D} جنيه، ومناسبات لحد ${M} فرد من ${E} جنيه، وحفلة بنات شهرية. احجز على واتساب.`,
      en: `A garden café on the Nile in Manial El-Roda, Old Cairo. Open daily 3 PM–3 AM. Romantic dates from ${D} EGP, private events for up to ${M} guests from ${E.toLocaleString("en-US")} EGP, and a monthly girls' night.`
    },
    crumb: { ar: "الرئيسية", en: "Home" },
    faq: ["location", "hours", "datePrice", "eventsPrice", "capacity", "girls", "fishing", "book"]
  },
  {
    type: "menu", slug: "menu",
    title: { ar: "منيو نايل ستون كافيه بالأسعار 2026 | موخيتو، سموزي، قهوة، شيشة", en: "Nile Stone Café Menu & Prices 2026 | Mojitos, Smoothies, Coffee, Shisha" },
    desc: {
      ar: "منيو نايل ستون كافيه بالأسعار: قهوة تركي 55، موخيتو من 90، سموزي من 80، عصاير فريش من 60، ميلك شيك، Nile Stone VIP، وشيشة. كافيه على النيل في منيل الروضة.",
      en: "Nile Stone Café menu with prices: Turkish coffee 55 EGP, mojitos from 90, smoothies from 80, fresh juices from 60, milkshakes, Nile Stone VIP and shisha. Nile-side café in Manial El-Roda."
    },
    crumb: { ar: "المنيو", en: "Menu" },
    faq: ["prices", "shisha", "food", "hours"]
  },
  {
    type: "event", slug: "romantic-date", ogImage: "og-date.jpg", eventKey: "date", eyebrow: "Romantic Date",
    title: { ar: `رومانتيك ديت على النيل من ${D} جنيه | نايل ستون كافيه – القاهرة`, en: `Romantic Date on the Nile from ${D} EGP | Nile Stone Café Cairo` },
    desc: {
      ar: `احجز رومانتيك ديت على النيل في منيل الروضة، القاهرة: ترابيزة لفردين بالشموع والورد والمراية المنورة، والعشا. يبدأ من ${D} جنيه. احجز على واتساب 01093195894.`,
      en: `Book a romantic date on the Nile in Manial El-Roda, Cairo: a table for two with candles, flowers, a lit mirror and dinner. From ${D} EGP. Book on WhatsApp.`
    },
    h1: { ar: "رومانتيك ديت على النيل في القاهرة", en: "Romantic Date on the Nile in Cairo" },
    crumb: { ar: "رومانتيك ديت", en: "Romantic Date" },
    faq: ["datePrice", "dateColors", "surprise", "location", "hours", "book"],
    photos: ["date-rose.webp", "date-guest.webp", "date-dinner.webp", "date-wide.webp"],
    bookImg: "date-mirror.webp",
    content: {
      ar: {
        lead: `ترابيزة لاتنين على النيل في منيل الروضة: شموع وورد ومراية منورة وعشا، بيبدأ من ${D} جنيه لفردين. سواء عيد جواز، أو صلحة، أو بروبوزال، إحنا بنظبطهولكم.`,
        wa: "مرحبًا نايل ستون 💜 حابب أحجز رومانتيك ديت لفردين.",
        whyTitle: "ليه الديت عندنا؟",
        whyLead: "مش مجرد ترابيزة. إحنا بنجهز الليلة كلها بتفاصيلها.",
        highlights: [
          ["🕯️", "شموع وورد", "الترابيزة متجهزة بالشموع والورد باللون اللي تختاروه."],
          ["🌊", "على النيل مباشرة", "ترابيزتكم قدام المية وأنوار الكورنيش."],
          ["🍝", "عشا لاتنين", "العشا جزء من الباكدج."],
          ["🪞", "مراية منورة للصور", "ركن تصوير متجهز عشان الصور تطلع حلوة."],
          ["🎁", "مفاجآت وبروبوزال", "قولولنا الفكرة، ونظبطها معاكم."],
          ["🎨", "ألوان على ذوقكم", "بنفسجي، أحمر، أبيض وذهبي، بينك، أو أزرق."]
        ],
        faqTitle: "أسئلة عن الرومانتيك ديت"
      },
      en: {
        lead: `A table for two on the Nile in Manial El-Roda, with candles, flowers, a lit mirror and dinner, from ${D} EGP for two. Anniversary, making up or a proposal, we'll set it up.`,
        wa: "Hi Nile Stone 💜 I'd like to book a romantic date for two.",
        whyTitle: "Why date here?",
        whyLead: "Not just a table: we set up the whole evening, down to the details.",
        highlights: [
          ["🕯️", "Candles & flowers", "Your table dressed with candles and flowers in your color."],
          ["🌊", "Right on the Nile", "Your table faces the water and the corniche lights."],
          ["🍝", "Dinner for two", "Dinner is part of the package."],
          ["🪞", "Lit mirror for photos", "A ready photo corner so your pictures shine."],
          ["🎁", "Surprises & proposals", "Share your idea and we'll make it happen."],
          ["🎨", "Your colors", "Purple, red, white & gold, pink or blue."]
        ],
        faqTitle: "Romantic date questions"
      }
    }
  },
  {
    type: "event", slug: "engagement", ogImage: "og-engagement.jpg", eventKey: "engage", eyebrow: "Engagement",
    title: { ar: `مكان خطوبة على النيل في القاهرة لحد ${M} فرد | نايل ستون كافيه`, en: `Engagement Venue on the Nile in Cairo, up to ${M} Guests | Nile Stone Café` },
    desc: {
      ar: `اعمل خطوبتك في جنينة على النيل في منيل الروضة، والمكان بيتقفل بالكامل ليكم. لحد ${M} فرد، ديكور ودي جي وأوبن بوفيه وتصوير. الباكدجات تبدأ من ${E} جنيه.`,
      en: `Host your engagement in a Nile-side garden in Manial El-Roda, with the whole venue closed for you. Up to ${M} guests, with decor, DJ, open buffet and photography. From ${E.toLocaleString("en-US")} EGP.`
    },
    h1: { ar: "مكان خطوبة على النيل في القاهرة", en: "Engagement Venue on the Nile in Cairo" },
    crumb: { ar: "خطوبة", en: "Engagement" },
    faq: ["engageSmall", "eventsPrice", "included", "capacity", "private", "book"],
    photos: ["date-wide.webp", "overview.webp", "garden.webp", "nile-night.webp"],
    bookImg: "overview.webp",
    content: {
      ar: {
        lead: `خطوبة في جنينة على النيل، والكافيه كله مقفول ليكم. لحد ${M} فرد، والباكدجات بتبدأ من ${E} جنيه وبتتظبط على حسب طلبكم.`,
        wa: "مرحبًا نايل ستون 💍 حابب أعرف تفاصيل وأسعار حفلة خطوبة.",
        whyTitle: "ليه تعمل خطوبتك عندنا؟", whyLead: "مكان مفتوح على النيل، وخصوصية كاملة ليكم وللمعازيم.",
        highlights: [
          ["🔒", "المكان كله ليكم", "بنقفل الكافيه بالكامل للخطوبة."],
          ["🌊", "كوشة وصور على النيل", "خلفية النيل وأنوار الكورنيش في كل صورة."],
          ["🎧", "دي جي وساوند", "مزيكا ورقص لحد آخر الليل."],
          ["🍽️", "أوبن بوفيه", "أكل للمعازيم كجزء من الباكدج."],
          ["📸", "مصور", "صور الخطوبة كلها متغطية."],
          ["👥", `لحد ${M} فرد`, "مناسب للخطوبة العائلية الصغيرة."]
        ],
        faqTitle: "أسئلة عن حفلات الخطوبة"
      },
      en: {
        lead: `An engagement in a Nile-side garden with the whole café closed for you. Up to ${M} guests; packages start from ${E.toLocaleString("en-US")} EGP and are tailored to your request.`,
        wa: "Hi Nile Stone 💍 I'd like details and prices for an engagement party.",
        whyTitle: "Why celebrate your engagement here?", whyLead: "An open-air Nile setting with full privacy for you and your guests.",
        highlights: [
          ["🔒", "The venue is yours", "We close the entire café for your engagement."],
          ["🌊", "Nile backdrop", "The river and corniche lights in every photo."],
          ["🎧", "DJ & sound", "Music and dancing till late."],
          ["🍽️", "Open buffet", "Food for your guests as part of the package."],
          ["📸", "Photographer", "Every moment captured."],
          ["👥", `Up to ${M} guests`, "Ideal for an intimate family engagement."]
        ],
        faqTitle: "Engagement party questions"
      }
    }
  },
  {
    type: "event", slug: "katb-ketab", ogImage: "og-katb.jpg", eventKey: "katb", eyebrow: "Katb El-Ketab",
    title: { ar: `مكان كتب كتاب على النيل في القاهرة | نايل ستون كافيه – منيل الروضة`, en: `Katb El-Ketab Venue on the Nile in Cairo | Nile Stone Café` },
    desc: {
      ar: `مكان كتب كتاب في جنينة مفتوحة على النيل في منيل الروضة، مصر القديمة. ديكور هادي، وأوبن بوفيه للعيلة، والمكان مقفول ليكم. لحد ${M} فرد، ويبدأ من ${E} جنيه.`,
      en: `A katb el-ketab venue in an open-air Nile garden in Manial El-Roda, Old Cairo. Calm decor, family open buffet, private venue for up to ${M} guests, from ${E.toLocaleString("en-US")} EGP.`
    },
    h1: { ar: "مكان كتب كتاب على النيل في القاهرة", en: "Katb El-Ketab Venue on the Nile in Cairo" },
    crumb: { ar: "كتب كتاب", en: "Katb El-Ketab" },
    faq: ["katbOutdoor", "eventsPrice", "included", "capacity", "location", "book"],
    photos: ["pillars.webp", "arabesque.webp", "date-wide.webp", "overview.webp"],
    bookImg: "pillars.webp",
    content: {
      ar: {
        lead: `كتب كتاب في جنينة مفتوحة على النيل، بديكور هادي وشيك وقعدة مريحة للعيلة. لحد ${M} فرد، والمكان مقفول ليكم، والباكدجات بتبدأ من ${E} جنيه.`,
        wa: "مرحبًا نايل ستون 🤍 حابب أعرف تفاصيل وأسعار كتب كتاب.",
        whyTitle: "ليه كتب الكتاب عندنا؟", whyLead: "هدوء النيل وخصوصية المكان، في يوم محتاج يطلع مظبوط.",
        highlights: [
          ["🤍", "ديكور هادي وشيك", "أبيض وذهبي، أو اللون اللي تحبوه."],
          ["🌿", "مكان مفتوح", "جنينة خضرا على النيل مباشرة."],
          ["📜", "ركن متجهز للكتب كتاب", "ترابيزة ومكان مخصوص للحظة الإمضا."],
          ["🍽️", "أوبن بوفيه للعيلة", "أكل ومشروبات للمعازيم."],
          ["📸", "مصور", "صور للحظة اللي مش هتتكرر."],
          ["🔒", "المكان كله ليكم", `لحد ${M} فرد.`]
        ],
        faqTitle: "أسئلة عن كتب الكتاب"
      },
      en: {
        lead: `A katb el-ketab in an open-air garden on the Nile, with calm, elegant decor and comfortable family seating. Up to ${M} guests, private venue, packages from ${E.toLocaleString("en-US")} EGP.`,
        wa: "Hi Nile Stone 🤍 I'd like details and prices for a katb el-ketab.",
        whyTitle: "Why hold your katb el-ketab here?", whyLead: "The calm of the Nile and a private venue, for a day that has to be just right.",
        highlights: [
          ["🤍", "Calm, elegant decor", "White & gold, or your own colors."],
          ["🌿", "Open-air setting", "A green garden right on the Nile."],
          ["📜", "Ceremony corner", "A dedicated table and spot for the signing."],
          ["🍽️", "Family open buffet", "Food and drinks for your guests."],
          ["📸", "Photographer", "Photos of a once-in-a-lifetime moment."],
          ["🔒", "Private venue", `Up to ${M} guests.`]
        ],
        faqTitle: "Katb el-ketab questions"
      }
    }
  },
  {
    type: "event", slug: "birthday", ogImage: "og-birthday.jpg", eventKey: "bday", eyebrow: "Birthday",
    title: { ar: `مكان عيد ميلاد على النيل في القاهرة | نايل ستون كافيه`, en: `Birthday Party Venue on the Nile in Cairo | Nile Stone Café` },
    desc: {
      ar: `احتفل بعيد ميلادك على النيل في منيل الروضة: تورتة، وديكور بألوانك، ودي جي، وأكل، والمكان مقفول ليكم لحد ${M} فرد. يبدأ من ${E} جنيه، ومفتوحين لحد 3 الفجر.`,
      en: `Celebrate your birthday on the Nile in Manial El-Roda: cake, decor in your colors, DJ and food, with the venue closed for up to ${M} guests. From ${E.toLocaleString("en-US")} EGP; open till 3 AM.`
    },
    h1: { ar: "عيد ميلاد على النيل في القاهرة", en: "Birthday Parties on the Nile in Cairo" },
    crumb: { ar: "عيد ميلاد", en: "Birthday" },
    faq: ["eventsPrice", "included", "capacity", "hours", "surprise", "book"],
    photos: ["garden.webp", "entrance.webp", "corner.webp", "nile-night.webp"],
    bookImg: "garden.webp",
    content: {
      ar: {
        lead: `عيد ميلاد في جنينة على النيل: تورتة، وديكور بألوانك، ومزيكا لحد 3 الفجر. المكان مقفول ليكم لحد ${M} فرد، والباكدجات بتبدأ من ${E} جنيه.`,
        wa: "مرحبًا نايل ستون 🎂 حابب أعرف تفاصيل وأسعار حفلة عيد ميلاد.",
        whyTitle: "ليه عيد ميلادك عندنا؟", whyLead: "مكان مختلف، وصور حلوة، وسهر لآخر الليل.",
        highlights: [
          ["🎂", "تورتة", "التورتة جزء من الباكدج."],
          ["🎈", "ديكور بألوانك", "اختار الثيم والألوان وإحنا نجهز."],
          ["🎧", "دي جي ومزيكا", "الحفلة شغالة لحد آخر الليل."],
          ["🌙", "سهر لحد 3 الفجر", "مفيش حد هيقولكم خلاص."],
          ["🍽️", "أكل وأوبن بوفيه", "للمعازيم كلهم."],
          ["🎁", "مفاجآت", "عايز تفاجئ حد؟ قولنا ونظبطها."]
        ],
        faqTitle: "أسئلة عن حفلات أعياد الميلاد"
      },
      en: {
        lead: `A birthday in a Nile-side garden: cake, decor in your colors, and music till 3 AM. The venue is closed for up to ${M} guests; packages from ${E.toLocaleString("en-US")} EGP.`,
        wa: "Hi Nile Stone 🎂 I'd like details and prices for a birthday party.",
        whyTitle: "Why celebrate here?", whyLead: "A different setting, great photos and late nights.",
        highlights: [
          ["🎂", "Cake", "Cake is part of the package."],
          ["🎈", "Your theme", "Pick the theme and colors; we set it up."],
          ["🎧", "DJ & music", "The party runs till late."],
          ["🌙", "Open till 3 AM", "No early wrap-up."],
          ["🍽️", "Food & open buffet", "For all your guests."],
          ["🎁", "Surprises", "Planning a surprise? Tell us and we'll arrange it."]
        ],
        faqTitle: "Birthday party questions"
      }
    }
  },
  {
    type: "event", slug: "gatherings", ogImage: "og-gatherings.jpg", eventKey: "buffet", eyebrow: "Gatherings & Buffet",
    title: { ar: `عزومات وأوبن بوفيه على النيل في القاهرة | نايل ستون كافيه`, en: `Group Dinners & Open Buffet on the Nile in Cairo | Nile Stone Café` },
    desc: {
      ar: `مكان لعزومة عيلة، أو حفلة تخرج، أو تجمع شغل على النيل في منيل الروضة. أوبن بوفيه، والمكان مقفول ليكم لحد ${M} فرد، ويبدأ من ${E} جنيه.`,
      en: `A Nile-side venue for family dinners, graduation parties or team gatherings in Manial El-Roda. Open buffet, private venue for up to ${M} guests, from ${E.toLocaleString("en-US")} EGP.`
    },
    h1: { ar: "عزومات وأوبن بوفيه على النيل", en: "Group Dinners & Open Buffet on the Nile" },
    crumb: { ar: "عزومات وأوبن بوفيه", en: "Gatherings & Buffet" },
    faq: ["food", "eventsPrice", "capacity", "private", "location", "book"],
    photos: ["overview.webp", "garden.webp", "corner.webp", "nile-night.webp"],
    bookImg: "overview.webp",
    content: {
      ar: {
        lead: `عزومة عيلة، أو حفلة تخرج، أو تجمع شغل. أوبن بوفيه في جنينة على النيل والمكان كله ليكم، لحد ${M} فرد، ويبدأ من ${E} جنيه.`,
        wa: "مرحبًا نايل ستون 🍽️ حابب أعرف تفاصيل وأسعار عزومة بأوبن بوفيه.",
        whyTitle: "ليه العزومة عندنا؟", whyLead: "أكل وقعدة ومنظر، من غير ما تشيل هم أي حاجة.",
        highlights: [
          ["👨‍👩‍👧", "عزومات عيلة", "جمعة العيلة في مكان مفتوح على النيل."],
          ["🎓", "حفلات تخرج", "احتفلوا مع دفعتكم."],
          ["💼", "تجمعات شغل", "إفطار أو عشا أو يوم للفريق."],
          ["🍽️", "أوبن بوفيه", "أكل ومشروبات لكل المعازيم."],
          ["🔒", "المكان كله ليكم", "خصوصية كاملة."],
          ["👥", `لحد ${M} فرد`, "مناسب للمجموعات الصغيرة والمتوسطة."]
        ],
        faqTitle: "أسئلة عن العزومات والأوبن بوفيه"
      },
      en: {
        lead: `Family dinners, graduation parties or team nights, with an open buffet in a Nile garden and the venue all to yourselves. Up to ${M} guests, from ${E.toLocaleString("en-US")} EGP.`,
        wa: "Hi Nile Stone 🍽️ I'd like details and prices for a group dinner with open buffet.",
        whyTitle: "Why gather here?", whyLead: "Food, seating and a view, with nothing for you to worry about.",
        highlights: [
          ["👨‍👩‍👧", "Family dinners", "Bring the family together on the Nile."],
          ["🎓", "Graduations", "Celebrate with your class."],
          ["💼", "Team gatherings", "Breakfast, dinner or a team day."],
          ["🍽️", "Open buffet", "Food and drinks for every guest."],
          ["🔒", "Private venue", "Complete privacy."],
          ["👥", `Up to ${M} guests`, "Ideal for small and mid-size groups."]
        ],
        faqTitle: "Group dinner & buffet questions"
      }
    }
  },
  {
    type: "girls", slug: "girls-night", ogImage: "og-girls.jpg", eventKey: "girls",
    title: { ar: `حفلة بنات في القاهرة: زومبا وكاريوكي ونوستالجيا على النيل | نايل ستون`, en: `Girls' Night in Cairo: Zumba, Karaoke & Nostalgia on the Nile | Nile Stone` },
    desc: {
      ar: `حفلة بنات شهرية على النيل في منيل الروضة: زومبا وكاريوكي وسهرة نوستالجيا، للبنات بس. التذكرة ${G} جنيه. كلمينا على واتساب لأقرب ميعاد.`,
      en: `A monthly ladies-only night on the Nile in Manial El-Roda: Zumba, karaoke and a nostalgia party. Tickets ${G} EGP. Message us on WhatsApp for the next date.`
    },
    h1: { ar: "حفلة بنات على النيل: زومبا وكاريوكي ونوستالجيا", en: "Girls' Night on the Nile: Zumba, Karaoke & Nostalgia" },
    crumb: { ar: "حفلة البنات", en: "Girls' Night" },
    faq: ["girls", "girlsWhen", "girlsOnly", "location", "hours"],
    content: {
      ar: {
        h1a: "حفلة بنات على النيل", h1b: "زومبا وكاريوكي ونوستالجيا",
        lead: `مرة كل شهر، نايل ستون بيبقى للبنات بس. هاتي صحابك وتعالي نرقص ونغني ونرجع لأيام زمان على النيل. التذكرة ${G} جنيه.`,
        wa: "مرحبًا نايل ستون 💃 عايزة أعرف ميعاد حفلة البنات الجاية وأحجز تذكرة.",
        actsTitle: "الليلة فيها إيه؟", actsLead: "تلات فقرات، وليلة كاملة من الضحك.",
        acts: [
          ["💃", "زومبا", "رقص وطاقة وضحك مع البنات.", "pink"],
          ["🎤", "كاريوكي", "المايك معاكي، غني أغانيكي المفضلة مع صحابك.", "cyan"],
          ["📼", "نوستالجيا", "سهرة على أغاني زمان وذكرياته.", "gold"]
        ],
        howTitle: "تحجزي إزاي؟",
        how: ["ابعتيلنا على واتساب أو انستجرام", "نقولك ميعاد أقرب حفلة", `تحجزي تذكرتك بـ ${G} جنيه`, "تيجي انتي وصحابك وتستمتعوا"],
        faqTitle: "أسئلة عن حفلة البنات"
      },
      en: {
        h1a: "Girls' Night on the Nile", h1b: "Zumba, Karaoke & Nostalgia",
        lead: `Once a month, Nile Stone is ladies only. Bring your friends to dance, sing and relive the good old days on the Nile. Tickets are ${G} EGP.`,
        wa: "Hi Nile Stone 💃 I'd like to know the next Girls' Night date and book a ticket.",
        actsTitle: "What's on the night?", actsLead: "Three acts, one full night of fun.",
        acts: [
          ["💃", "Zumba", "Dance, energy and laughs with the girls.", "pink"],
          ["🎤", "Karaoke", "Grab the mic and sing your favorites with friends.", "cyan"],
          ["📼", "Nostalgia", "A night of throwback songs and memories.", "gold"]
        ],
        howTitle: "How to book",
        how: ["Message us on WhatsApp or Instagram", "We tell you the next date", `Book your ticket for ${G} EGP`, "Come with your friends and enjoy"],
        faqTitle: "Girls' Night questions"
      }
    }
  },
  {
    type: "faq", slug: "faq",
    title: { ar: "أسئلة شائعة عن نايل ستون كافيه | المواعيد والأسعار والحجز", en: "Nile Stone Café FAQ | Hours, Prices & Booking" },
    desc: {
      ar: "إجابات عن كل الأسئلة عن نايل ستون كافيه في منيل الروضة: العنوان، والمواعيد، وأسعار المنيو، والرومانتيك ديت، والمناسبات، وحفلة البنات، والحجز.",
      en: "Answers to common questions about Nile Stone Café in Manial El-Roda: address, hours, menu prices, romantic dates, private events, girls' night and booking."
    },
    h1: { ar: "أسئلة شائعة عن نايل ستون كافيه", en: "Nile Stone Café FAQ" },
    crumb: { ar: "أسئلة شائعة", en: "FAQ" },
    groups: [
      { title: { ar: "عن المكان", en: "The place" }, keys: ["location", "hours", "view", "fishing", "book"] },
      { title: { ar: "المنيو والأسعار", en: "Menu & prices" }, keys: ["prices", "shisha", "food"] },
      { title: { ar: "الرومانتيك ديت", en: "Romantic dates" }, keys: ["datePrice", "dateColors", "surprise"] },
      { title: { ar: "المناسبات", en: "Private events" }, keys: ["eventsPrice", "included", "capacity", "private", "engageSmall", "katbOutdoor"] },
      { title: { ar: "حفلة البنات", en: "Girls' Night" }, keys: ["girls", "girlsWhen", "girlsOnly"] }
    ]
  },
  {
    type: "notfound", slug: "404",
    title: { ar: "الصفحة مش موجودة | نايل ستون كافيه", en: "Page not found | Nile Stone Café" },
    desc: { ar: "الصفحة دي مش موجودة.", en: "Page not found." },
    crumb: { ar: "404", en: "404" }
  }
];
