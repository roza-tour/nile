/* Nile Stone Café — menu data.
   To change a price: edit the number next to the item. Prices are in EGP.
   To add an item: copy a line and change it. */
window.NILE_MENU = [
  {
    id: "hot", icon: "☕", color: "gold",
    ar: "مشروبات ساخنة", en: "Hot Drinks",
    items: [
      ["شاي", "Tea", 35],
      ["شاي نعناع", "Mint Tea", 40],
      ["شاي أخضر", "Green Tea", 50],
      ["ينسون", "Anise", 45],
      ["كركديه", "Hibiscus", 45],
      ["نعناع", "Mint", 40],
      ["قرفة", "Cinnamon", 50],
      ["جنزبيل", "Ginger", 55],
      ["أعشاب", "Herbal Mix", 75],
      ["قهوة تركي", "Turkish Coffee", 55],
      ["قهوة فرنش", "French Coffee", 75],
      ["قهوة بندق", "Hazelnut Coffee", 85],
      ["قهوة كراميل", "Caramel Coffee", 85],
      ["قهوة توت", "Berry Coffee", 85],
      ["كابتشينو / نسكافيه", "Cappuccino / Nescafé", 75],
      ["هوت شوكليت", "Hot Chocolate", 75],
      ["هوت سيدر", "Hot Cider", 75],
      ["سحلب مكسرات", "Sahlab with Nuts", 80],
      ["سحلب سادة", "Plain Sahlab", 65],
      ["حمص الشام", "Hummus El Sham", 65]
    ]
  },
  {
    id: "juice", icon: "🍹", color: "cyan",
    ar: "عصائر فريش", en: "Fresh Juices",
    items: [
      ["مانجو", "Mango", 75],
      ["فراولة", "Strawberry", 75],
      ["جوافة", "Guava", 75],
      ["موز بحليب", "Banana Milk", 75],
      ["لمون", "Lemon", 60],
      ["لمون نعناع", "Lemon Mint", 65],
      ["كيوي", "Kiwi", 90],
      ["كيوي مانجو", "Kiwi Mango", 100],
      ["لمون نعناع كيوي", "Lemon Mint Kiwi", 100],
      ["بطيخ", "Watermelon", 75],
      ["بطيخ نعناع", "Watermelon Mint", 85],
      ["برتقال", "Orange", 75],
      ["أوريو", "Oreo", 80],
      ["زبادي مانجو", "Mango Yogurt", 85],
      ["زبادي", "Yogurt", 70],
      ["زبادي عسل", "Honey Yogurt", 85],
      ["زبادي فراولة", "Strawberry Yogurt", 85],
      ["أفوكادو موز", "Avocado Banana", 120]
    ]
  },
  {
    id: "smoothie", icon: "🥤", color: "pink",
    ar: "سموزي", en: "Smoothies",
    items: [
      ["سموزي مانجو", "Mango", 80],
      ["سموزي مانجو كيوي", "Mango Kiwi", 95],
      ["سموزي مانجو جوز هند", "Mango Coconut", 100],
      ["سموزي فراولة", "Strawberry", 80],
      ["سموزي فراولة جوز هند", "Strawberry Coconut", 100],
      ["سموزي فراولة كيوي", "Strawberry Kiwi", 95],
      ["سموزي فراولة نعناع", "Strawberry Mint", 95],
      ["سموزي بلو بيري", "Blueberry", 85],
      ["سموزي ريد بيري", "Red Berry", 85],
      ["سموزي ميكس بيري", "Mixed Berry", 90]
    ]
  },
  {
    id: "mojito", icon: "🍃", color: "cyan",
    ar: "موخيتو", en: "Mojito",
    items: [
      ["بلو هاواي", "Blue Hawaii", 100],
      ["موخيتو كلاسيك", "Classic Mojito", 90],
      ["بلو بيري", "Blueberry", 95],
      ["بلو بيري / باشن فروت ريدبول", "Blueberry / Passion Fruit Red Bull", 140],
      ["ميكس بيري", "Mixed Berry", 100],
      ["باشن فروت", "Passion Fruit", 95],
      ["شيري كولا", "Cherry Cola", 95],
      ["ريدبول موخيتو", "Red Bull Mojito", 130],
      ["سان شاين", "Sunshine", 90],
      ["سكوتش منت", "Scotch Mint", 95]
    ]
  },
  {
    id: "shake", icon: "🥛", color: "pink",
    ar: "ميلك شيك", en: "Milkshakes",
    items: [
      ["فانيليا", "Vanilla", 85],
      ["شوكليت", "Chocolate", 85],
      ["كوكيز", "Cookies", 95],
      ["مانجو", "Mango", 85],
      ["فراولة", "Strawberry", 85],
      ["بلوبيري", "Blueberry", 85],
      ["ريد بيري", "Red Berry", 85],
      ["كيت كات", "KitKat", 120],
      ["هوهوز", "HoHos", 95],
      ["تودو توتيلا", "Tutti Frutti", 100],
      ["سنيكرز", "Snickers", 120]
    ]
  },
  {
    id: "vip", icon: "👑", color: "gold",
    ar: "Nile Stone VIP", en: "Nile Stone VIP",
    items: [
      ["بينا كولادا", "Piña Colada", 100],
      ["نايل كوكو", "Nile Coco", 120],
      ["بلو كولادا", "Blue Colada", 110],
      ["نايل إلكتريك", "Nile Electric", 120],
      ["نايل صودا", "Nile Soda", 110],
      ["نايل تروبيكال", "Nile Tropical", 110],
      ["بلو بيري ليمون", "Blueberry Lemon", 110]
    ]
  },
  {
    id: "soft", icon: "🧊", color: "cyan",
    ar: "مشروبات غازية", en: "Soft Drinks",
    items: [
      ["مياه", "Water", 15],
      ["كولا - بيبسي - فيروز", "Cola - Pepsi - Fayrouz", 50],
      ["بيرل", "Birell", 60],
      ["ريدبول", "Red Bull", 90]
    ]
  },
  {
    id: "shisha", icon: "💨", color: "pink",
    ar: "شيشة", en: "Shisha",
    items: [
      ["فواكه", "Fruit Flavor", 100],
      ["ميكس فواكه", "Mixed Fruit", 120],
      ["لي طبي", "Medical Hose", 20],
      ["معسل قص - سلوم", "Mo'assel (Qas / Salloum)", 35]
    ]
  }
];
