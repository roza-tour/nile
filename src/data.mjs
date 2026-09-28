/* ============================================================
   Nile Stone Café — all site content lives here.
   Edit this file, then run:  node src/build.mjs
   ============================================================ */

export const SITE = {
  // ⚠️ Change to the real domain once it is bought (no trailing slash).
  url: "https://nilestonecafe.com",
  name: { ar: "نايل ستون كافيه", en: "Nile Stone Café" },
  phone: "+201093195894",
  phoneLocal: "01093195894",
  phonePretty: "0109 319 5894",
  whatsapp: "201093195894",
  instagram: "https://www.instagram.com/nile.stone.cafe/",
  tiktok: "https://www.tiktok.com/@nile.stone05",
  address: {
    ar: "20 شارع الملك الصالح، منيل الروضة، مصر القديمة، القاهرة",
    en: "20 El-Malek El-Saleh St., Manial El-Roda, Old Cairo, Cairo, Egypt",
    street: "20 El-Malek El-Saleh St.",
    locality: "Manial El-Roda, Old Cairo",
    region: "Cairo",
    country: "EG"
  },
  mapsQuery: "20 شارع الملك الصالح، منيل الروضة، مصر القديمة، القاهرة",
  // Paste the exact pin once the Google Business profile exists, e.g. { lat: 30.01, lng: 31.22 }
  geo: null,
  // Paste the Google Maps share link of the listing here once it exists.
  mapsUrl: null,
  hours: { opens: "15:00", closes: "03:00" },
  dateFrom: 800,
  eventsFrom: 2500,
  maxGuests: 40,
  girlsTicket: 200,
  // When the next girls' night is fixed, set it like "2026-10-16T19:00" → it shows on the site
  // and is published to Google as an Event. Leave null otherwise.
  girlsNextDate: null,
  updated: "2026-09-28"
};

/* ---------------- menu (prices in EGP) ---------------- */
export const MENU = [
  { id: "hot", icon: "☕", color: "gold", ar: "مشروبات ساخنة", en: "Hot Drinks", items: [
    ["شاي", "Tea", 35], ["شاي نعناع", "Mint Tea", 40], ["شاي أخضر", "Green Tea", 50],
    ["ينسون", "Anise", 45], ["كركديه", "Hibiscus", 45], ["نعناع", "Mint", 40],
    ["قرفة", "Cinnamon", 50], ["جنزبيل", "Ginger", 55], ["أعشاب", "Herbal Mix", 75],
    ["قهوة تركي", "Turkish Coffee", 55], ["قهوة فرنش", "French Coffee", 75],
    ["قهوة بندق", "Hazelnut Coffee", 85], ["قهوة كراميل", "Caramel Coffee", 85],
    ["قهوة توت", "Berry Coffee", 85], ["كابتشينو / نسكافيه", "Cappuccino / Nescafé", 75],
    ["هوت شوكليت", "Hot Chocolate", 75], ["هوت سيدر", "Hot Cider", 75],
    ["سحلب مكسرات", "Sahlab with Nuts", 80], ["سحلب سادة", "Plain Sahlab", 65],
    ["حمص الشام", "Hummus El-Sham", 65]
  ]},
  { id: "juice", icon: "🍹", color: "cyan", ar: "عصائر فريش", en: "Fresh Juices", items: [
    ["مانجو", "Mango", 75], ["فراولة", "Strawberry", 75], ["جوافة", "Guava", 75],
    ["موز بحليب", "Banana Milk", 75], ["لمون", "Lemon", 60], ["لمون نعناع", "Lemon Mint", 65],
    ["كيوي", "Kiwi", 90], ["كيوي مانجو", "Kiwi Mango", 100], ["لمون نعناع كيوي", "Lemon Mint Kiwi", 100],
    ["بطيخ", "Watermelon", 75], ["بطيخ نعناع", "Watermelon Mint", 85], ["برتقال", "Orange", 75],
    ["أوريو", "Oreo", 80], ["زبادي مانجو", "Mango Yogurt", 85], ["زبادي", "Yogurt", 70],
    ["زبادي عسل", "Honey Yogurt", 85], ["زبادي فراولة", "Strawberry Yogurt", 85],
    ["أفوكادو موز", "Avocado Banana", 120]
  ]},
  { id: "smoothie", icon: "🥤", color: "pink", ar: "سموزي", en: "Smoothies", items: [
    ["سموزي مانجو", "Mango Smoothie", 80], ["سموزي مانجو كيوي", "Mango Kiwi Smoothie", 95],
    ["سموزي مانجو جوز هند", "Mango Coconut Smoothie", 100], ["سموزي فراولة", "Strawberry Smoothie", 80],
    ["سموزي فراولة جوز هند", "Strawberry Coconut Smoothie", 100], ["سموزي فراولة كيوي", "Strawberry Kiwi Smoothie", 95],
    ["سموزي فراولة نعناع", "Strawberry Mint Smoothie", 95], ["سموزي بلو بيري", "Blueberry Smoothie", 85],
    ["سموزي ريد بيري", "Red Berry Smoothie", 85], ["سموزي ميكس بيري", "Mixed Berry Smoothie", 90]
  ]},
  { id: "mojito", icon: "🍃", color: "cyan", ar: "موخيتو", en: "Mojito", items: [
    ["بلو هاواي", "Blue Hawaii", 100], ["موخيتو كلاسيك", "Classic Mojito", 90],
    ["موخيتو بلو بيري", "Blueberry Mojito", 95], ["بلو بيري / باشن فروت ريدبول", "Blueberry / Passion Fruit Red Bull", 140],
    ["موخيتو ميكس بيري", "Mixed Berry Mojito", 100], ["موخيتو باشن فروت", "Passion Fruit Mojito", 95],
    ["شيري كولا", "Cherry Cola", 95], ["ريدبول موخيتو", "Red Bull Mojito", 130],
    ["سان شاين", "Sunshine", 90], ["سكوتش منت", "Scotch Mint", 95]
  ]},
  { id: "shake", icon: "🥛", color: "pink", ar: "ميلك شيك", en: "Milkshakes", items: [
    ["ميلك شيك فانيليا", "Vanilla Milkshake", 85], ["ميلك شيك شوكليت", "Chocolate Milkshake", 85],
    ["ميلك شيك كوكيز", "Cookies Milkshake", 95], ["ميلك شيك مانجو", "Mango Milkshake", 85],
    ["ميلك شيك فراولة", "Strawberry Milkshake", 85], ["ميلك شيك بلوبيري", "Blueberry Milkshake", 85],
    ["ميلك شيك ريد بيري", "Red Berry Milkshake", 85], ["ميلك شيك كيت كات", "KitKat Milkshake", 120],
    ["ميلك شيك هوهوز", "HoHos Milkshake", 95], ["تودو توتيلا", "Tutti Frutti", 100],
    ["ميلك شيك سنيكرز", "Snickers Milkshake", 120]
  ]},
  { id: "vip", icon: "👑", color: "gold", ar: "Nile Stone VIP", en: "Nile Stone VIP", items: [
    ["بينا كولادا", "Piña Colada", 100], ["نايل كوكو", "Nile Coco", 120], ["بلو كولادا", "Blue Colada", 110],
    ["نايل إلكتريك", "Nile Electric", 120], ["نايل صودا", "Nile Soda", 110],
    ["نايل تروبيكال", "Nile Tropical", 110], ["بلو بيري ليمون", "Blueberry Lemon", 110]
  ]},
  { id: "soft", icon: "🧊", color: "cyan", ar: "مشروبات غازية", en: "Soft Drinks", items: [
    ["مياه", "Water", 15], ["كولا - بيبسي - فيروز", "Cola - Pepsi - Fayrouz", 50],
    ["بيرل", "Birell", 60], ["ريدبول", "Red Bull", 90]
  ]},
  { id: "shisha", icon: "💨", color: "pink", ar: "شيشة", en: "Shisha", items: [
    ["شيشة فواكه", "Fruit Shisha", 100], ["شيشة ميكس فواكه", "Mixed Fruit Shisha", 120],
    ["لي طبي (خرطوم استعمال مرة واحدة)", "Disposable hygienic hose", 20],
    ["معسل قص - سلوم", "Mo'assel (Qas / Salloum)", 35]
  ]}
];

/* signature drinks shown on the home page (from our Instagram) */
export const SIGNATURES = [
  { img: "smurf.webp", ar: "السنفور", en: "The Smurf",
    dAr: "مشروبنا الأزرق اللي الكل بيسأل عليه. اطلبه وهتتفاجئ بطعمه.",
    dEn: "Our famous blue drink everyone asks about. Order it and be surprised." },
  { img: "guava-fraise.webp", ar: "جوزا لافريزا", en: "Guava La Fraise",
    dAr: "جوافة وفراولة في كاسة واحدة. آخر حاجة نزلت عندنا.",
    dEn: "Guava meets strawberry in one glass. Our newest drink." },
  { img: "blue-mojito.webp", ar: "بلو هاواي", en: "Blue Hawaii",
    dAr: "موخيتو أزرق بالنعناع واللمون، وأشهر صورة على الترابيزة.", dEn: "A blue mint-and-lime mojito, and the most photographed glass on the table." }
];

/* ---------------- FAQ (used on pages + FAQ schema) ---------------- */
export const FAQ = {
  location: {
    ar: ["نايل ستون كافيه فين؟", "في 20 شارع الملك الصالح، منيل الروضة، مصر القديمة، القاهرة. الكافيه جنينة على النيل مباشرة."],
    en: ["Where is Nile Stone Café?", "20 El-Malek El-Saleh St., Manial El-Roda, Old Cairo, Cairo. The café is a garden right on the Nile."]
  },
  hours: {
    ar: ["مواعيد نايل ستون إيه؟", "مفتوحين كل يوم من 3 العصر لحد 3 الفجر."],
    en: ["What are Nile Stone's opening hours?", "Open every day from 3 PM until 3 AM."]
  },
  datePrice: {
    ar: ["سعر الرومانتيك ديت في نايل ستون كام؟", "الرومانتيك ديت لفردين بيبدأ من 800 جنيه. بيشمل ترابيزة متجهزة على النيل بالديكور والشموع والورد، والعشا. السعر النهائي بيتحدد حسب الإضافات اللي تختاروها."],
    en: ["How much is a romantic date at Nile Stone?", "A romantic date for two starts from 800 EGP. It includes a decorated Nile-side table with candles and flowers, plus dinner. The final price depends on the extras you choose."]
  },
  eventsPrice: {
    ar: ["أسعار المناسبات (خطوبة، كتب كتاب، عيد ميلاد) كام؟", "المناسبات بتبدأ من 2500 جنيه. كلمونا واحكولنا عايزين إيه (عدد الأفراد، الأكل، الديكور، الدي جي، التصوير)، وإحنا نبعتلكم السعر بالظبط."],
    en: ["How much do events (engagement, katb el-ketab, birthday) cost?", "Events start from 2,500 EGP. Tell us what you need (guest count, food, decor, DJ, photography) and we'll send you an exact quote."]
  },
  capacity: {
    ar: ["المكان بيستوعب كام فرد في المناسبات؟", "لحد 40 فرد، والمكان بيتقفل بالكامل للمناسبة."],
    en: ["How many guests can the venue host?", "Up to 40 guests, and the whole venue is closed privately for your event."]
  },
  private: {
    ar: ["المكان بيتقفل للمناسبة؟", "أيوه، في المناسبات الخاصة الكافيه كله بيتقفل ليكم."],
    en: ["Is the venue private during events?", "Yes. For private events the entire café is closed just for you."]
  },
  included: {
    ar: ["إيه اللي بيتقدم في باكدج المناسبات؟", "ديكور كامل، أكل وأوبن بوفيه، تورتة، مصور، دي جي وساوند، ومشروبات. وكل ده بيتظبط على حسب طلبكم."],
    en: ["What's included in an event package?", "Full decor, food and open buffet, cake, a photographer, DJ and sound, and drinks, all tailored to your request."]
  },
  food: {
    ar: ["في أكل في نايل ستون؟", "في أكل وأوبن بوفيه في المناسبات والعزومات كجزء من الباكدج. المنيو اليومي مشروبات ساخنة وعصاير وموخيتو وسموزي وميلك شيك وشيشة."],
    en: ["Does Nile Stone serve food?", "Food and open buffets are served for events and group dinners as part of the package. The everyday menu is hot drinks, juices, mojitos, smoothies, milkshakes and shisha."]
  },
  shisha: {
    ar: ["في شيشة؟", "أيوه. الشيشة الفواكه بـ 100 جنيه، والميكس فواكه بـ 120، ومتاح لي طبي بيتستعمل مرة واحدة بـ 20 جنيه."],
    en: ["Do you serve shisha?", "Yes. Fruit shisha is 100 EGP, mixed fruit is 120 EGP, and a disposable hygienic hose is available for 20 EGP."]
  },
  prices: {
    ar: ["أسعار المشروبات في نايل ستون كام؟", "الأسعار من 15 جنيه (مياه) لحد 140 جنيه. القهوة التركي بـ 55، والموخيتو من 90، والسموزي من 80، والعصاير الفريش من 60."],
    en: ["What are drink prices at Nile Stone?", "Prices range from 15 EGP (water) to 140 EGP. Turkish coffee is 55, mojitos start at 90, smoothies at 80 and fresh juices at 60."]
  },
  girls: {
    ar: ["إيه هي حفلات البنات في نايل ستون؟", "حفلة للبنات بس بنعملها مرة كل شهر، فيها زومبا وكاريوكي وسهرة نوستالجيا. التذكرة بـ 200 جنيه. كلمونا عشان تعرفوا أقرب ميعاد."],
    en: ["What is the Girls' Night at Nile Stone?", "A ladies-only night held once a month, with Zumba, karaoke and a nostalgia party. Tickets are 200 EGP. Message us to find out the next date."]
  },
  girlsWhen: {
    ar: ["حفلة البنات الجاية إمتى؟", "بنعملها مرة في الشهر. ابعتولنا على واتساب 01093195894 أو رسايل انستجرام ونقولكم أقرب ميعاد متاح."],
    en: ["When is the next Girls' Night?", "It runs monthly. Message us on WhatsApp (+20 109 319 5894) or Instagram and we'll tell you the nearest date."]
  },
  girlsOnly: {
    ar: ["الحفلة للبنات بس؟", "أيوه، حفلة البنات للبنات بس."],
    en: ["Is it ladies only?", "Yes, Girls' Night is for women only."]
  },
  fishing: {
    ar: ["ينفع أصطاد في نايل ستون؟", "أيوه! الجنينة على النيل مباشرة، فتقدر تجيب صنارتك وتصطاد وانت قاعد معانا."],
    en: ["Can I fish at Nile Stone?", "Yes! The garden sits right on the Nile, so bring your fishing rod and fish while you hang out."]
  },
  book: {
    ar: ["أحجز إزاي؟", "ابعتولنا على واتساب 01093195894، أو املوا فورم الحجز في الموقع وهتتبعت رسالة جاهزة، أو كلمونا على رسايل انستجرام."],
    en: ["How do I book?", "WhatsApp us on +20 109 319 5894, fill in the booking form on this site (it sends a ready-made WhatsApp message), or DM us on Instagram."]
  },
  view: {
    ar: ["الكافيه على النيل فعلًا؟", "أيوه، القعدة في جنينة مفتوحة على النيل مباشرة، ومنها بتشوف أنوار الكورنيش بالليل."],
    en: ["Is the café really on the Nile?", "Yes, seating is in an open garden directly on the Nile, facing the corniche lights at night."]
  },
  katbOutdoor: {
    ar: ["ينفع أعمل كتب الكتاب في نايل ستون؟", "أيوه، بنجهز المكان للكتب كتاب بديكور هادي على النيل، وبعدها احتفال مع العيلة. لحد 40 فرد، والباكدجات بتبدأ من 2500 جنيه."],
    en: ["Can I hold my katb el-ketab at Nile Stone?", "Yes. We set up a calm Nile-side ceremony, followed by a family celebration, for up to 40 guests. Packages start from 2,500 EGP."]
  },
  engageSmall: {
    ar: ["ينفع خطوبة صغيرة؟", "أيوه، المكان مناسب لخطوبة عائلية لحد 40 فرد، وبيتقفل بالكامل ليكم."],
    en: ["Is it good for a small engagement?", "Yes. It suits an intimate family engagement of up to 40 guests, with the whole venue closed for you."]
  },
  dateColors: {
    ar: ["أقدر أختار لون ديكور الديت؟", "أيوه، اختاروا اللون اللي تحبوه (بنفسجي، أحمر، أبيض وذهبي، بينك، أزرق) وإحنا نجهز عليه."],
    en: ["Can I choose the date decor color?", "Yes. Pick your color (purple, red, white & gold, pink or blue) and we'll set it up."]
  },
  surprise: {
    ar: ["ينفع أعمل مفاجأة أو بروبوزال؟", "أيوه، قولولنا الفكرة على واتساب ونظبطها معاكم: ورد، تورتة، أغنية معينة، أو أي تفصيلة تحبوها."],
    en: ["Can you help with a surprise or proposal?", "Yes. Share the idea on WhatsApp and we'll arrange it: flowers, cake, a special song, or any detail you like."]
  }
};

/* ---------------- event types ---------------- */
export const EVENTS = [
  {
    key: "date", slug: "romantic-date", img: "date-setup.webp", icon: "💜",
    price: "date",
    ar: { name: "رومانتيك ديت", short: "ترابيزة لاتنين على النيل: شموع وورد ومراية منورة، وعشا وتفاصيل بتتعمل مخصوص ليكم." },
    en: { name: "Romantic Date", short: "A table for two on the Nile, with candles, flowers, a lit mirror, dinner and details made just for you." }
  },
  {
    key: "engage", slug: "engagement", img: "date-wide.webp", icon: "💍", price: "events",
    ar: { name: "خطوبة", short: "حفلة خطوبة في جنينة على النيل، بديكور ودي جي وأوبن بوفيه للمعازيم." },
    en: { name: "Engagement", short: "An engagement party in a Nile-side garden, with decor, a DJ and an open buffet for guests." }
  },
  {
    key: "katb", slug: "katb-ketab", img: "pillars.webp", icon: "🤍", price: "events",
    ar: { name: "كتب كتاب", short: "كتب كتاب في مكان مفتوح وهادي على النيل، وبعدها احتفال مع العيلة." },
    en: { name: "Katb El-Ketab", short: "An open-air, calm Nile-side ceremony followed by a family celebration." }
  },
  {
    key: "bday", slug: "birthday", img: "garden.webp", icon: "🎂", price: "events",
    ar: { name: "عيد ميلاد", short: "تورتة، وديكور بألوانك، ومزيكا لحد آخر الليل." },
    en: { name: "Birthday", short: "Cake, decor in your colors, and music till late." }
  },
  {
    key: "buffet", slug: "gatherings", img: "overview.webp", icon: "🍽️", price: "events",
    ar: { name: "عزومات وأوبن بوفيه", short: "عزومة عيلة، أو تخرج، أو تجمع شغل. أوبن بوفيه والمكان كله ليكم." },
    en: { name: "Gatherings & Open Buffet", short: "Family dinners, graduations or team nights, with an open buffet and the whole venue to yourselves." }
  },
  {
    key: "girls", slug: "girls-night", img: "nile-night.webp", icon: "💃", price: "girls",
    ar: { name: "حفلة بنات", short: "للبنات بس، مرة كل شهر: زومبا وكاريوكي ونوستالجيا. التذكرة 200 جنيه." },
    en: { name: "Girls' Night", short: "Ladies only, once a month: Zumba, karaoke and nostalgia. Tickets 200 EGP." }
  }
];

/* ---------------- gallery ---------------- */
export const GALLERY = [
  ["date-setup.webp", "ترابيزة رومانتيك ديت على النيل بالشموع والورد البنفسجي", "Romantic date table on the Nile with candles and purple flowers"],
  ["nile-night.webp", "النيل بالليل من جنينة نايل ستون", "The Nile at night from Nile Stone's garden"],
  ["date-rose.webp", "وردة وشموع في رومانتيك ديت", "Rose and candles on a romantic date"],
  ["overview.webp", "جنينة نايل ستون على النيل من فوق", "Nile Stone's Nile-side garden from above"],
  ["smurf.webp", "مشروب السنفور الأزرق", "The blue Smurf drink"],
  ["date-guest.webp", "ضيفة في رومانتيك ديت على النيل", "A guest on a romantic date by the Nile"],
  ["corner.webp", "ركن قعدة على النيل", "A seating corner on the Nile"],
  ["fishing.webp", "صيد على النيل من نايل ستون", "Fishing on the Nile at Nile Stone"],
  ["date-dinner.webp", "عشا رومانتيك ديت", "Romantic date dinner"],
  ["arabesque.webp", "ديكور أرابيسك في الجنينة", "Arabesque decor in the garden"],
  ["entrance.webp", "مدخل نايل ستون بلافتة النيون", "Nile Stone's neon-lit entrance"],
  ["guava-fraise.webp", "مشروب جوزا لافريزا", "Guava La Fraise drink"],
  ["date-wide.webp", "تجهيزات مناسبة على النيل بالمراية المنورة", "Event setup on the Nile with a lit mirror"],
  ["garden.webp", "الجنينة الخضرا", "The green garden"]
];
