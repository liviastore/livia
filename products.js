// ===== SHOP SETTINGS =====
const SHOP = {
  name: "Livia",
  whatsapp: "201000000000",   // your number: country code first, no + or spaces
  currency: "EGP",
  shipping: 60,               // flat delivery fee
  freeShippingOver: 1000      // free delivery above this amount (0 = off)
};

// ===== PRODUCTS =====
// Add new products at the TOP: the home page shows the first 8.
// image = file name inside img/products/   (missing photo = burgundy placeholder)
// code  = the order code you write on the product's photo (for sorting orders)
// options = dropdown choices (color, size...). Delete the line if not needed.
// nameAr / descAr = optional Arabic name and description, shown when a visitor picks AR.
//                    Leave them out and the English name/desc is shown in Arabic mode too.
const PRODUCTS = [
  { id: "br1", name: "Emerald Stone Chain Bracelet", category: "Bracelets", price: 0, image: "br1.jpg", code: "BR1",
    options: ["Gold"], desc: "A curb chain bracelet with a green stone centerpiece.",
    nameAr: "أسورة الحجر الزمردي", descAr: "أسورة شرابيك بحجر أخضر في النص." },
  { id: "br2", name: "Ruby Vine Bracelet", category: "Bracelets", price: 0, image: "br2.jpg", code: "BR2",
    options: ["Gold"], desc: "Red stones set along a leafy gold vine.",
    nameAr: "أسورة العنب الياقوتي", descAr: "أحجار حمراء على فرع ذهبي بأوراق خضراء." },
  { id: "br3", name: "Classic Tennis Bracelet", category: "Bracelets", price: 0, image: "br3.jpg", code: "BR3",
    options: ["Gold"], desc: "A single row of round crystals, classic and sparkly.",
    nameAr: "أسورة تنس كلاسيك", descAr: "صف واحد من الكريستال الدائري، كلاسيك ولامعة." },
  { id: "br4", name: "Floral Vine Bracelet", category: "Bracelets", price: 0, image: "br4.jpg", code: "BR4",
    options: ["Gold"], desc: "Pink flower charms along a leafy gold vine.",
    nameAr: "أسورة الأزهار", descAr: "زهور وردية على فرع ذهبي بأوراق خضراء." },
  { id: "br5", name: "Emerald-Cut Tennis Bracelet", category: "Bracelets", price: 0, image: "br5.jpg", code: "BR5",
    options: ["Gold"], desc: "Baguette crystals with a halo centerpiece.",
    nameAr: "أسورة تنس باجيت", descAr: "كريستال باجيت مع قطعة مركزية بإطار." },
  { id: "nk1", name: "Butterfly Trio Necklace", category: "Necklaces", price: 0, image: "nk1.jpg", code: "NK1",
    options: ["Gold"], desc: "A row of crystal butterflies on a fine chain.",
    nameAr: "عقد الفراشات", descAr: "فراشات كريستال مرصوصة على سلسلة رفيعة." },
  { id: "nk2", name: "Infinity Necklace", category: "Necklaces", price: 0, image: "nk2.jpg", code: "NK2",
    options: ["Gold"], desc: "A crystal-set infinity pendant.",
    nameAr: "عقد إنفينيتي", descAr: "بندنت إنفينيتي مرصع بالكريستال." },
  { id: "nk3", name: "Pink Swan Necklace", category: "Necklaces", price: 0, image: "nk3.jpg", code: "NK3",
    options: ["Gold"], desc: "A crystal swan pendant with pink stone feathers.",
    nameAr: "عقد البجعة الوردي", descAr: "بندنت بجعة بأحجار وردية على شكل ريش." },
  { id: "nk4", name: "Statement Crystal Necklace", category: "Necklaces", price: 0, image: "nk4.jpg", code: "NK4",
    options: ["Gold"], desc: "A layered crystal necklace with a baguette-cut pendant.",
    nameAr: "عقد كريستال فاخر", descAr: "عقد كريستال متدرج مع بندنت باجيت." },
  { id: "nk5", name: "Cascading Hearts Necklace", category: "Necklaces", price: 0, image: "nk5.jpg", code: "NK5",
    options: ["Gold"], desc: "Five crystal hearts falling in a line.",
    nameAr: "عقد القلوب المتتالية", descAr: "خمس قلوب كريستال متدرجة على خط واحد." },
  { id: "nk6", name: "Emerald-Cut Pendant Necklace", category: "Necklaces", price: 0, image: "nk6.jpg", code: "NK6",
    options: ["Gold"], desc: "A rectangular crystal pendant with a halo setting.",
    nameAr: "عقد بندنت مستطيل", descAr: "بندنت مستطيل بحجر مركزي وإطار كريستال." },
  { id: "nk7", name: "Beaded Chain Necklace", category: "Necklaces", price: 0, image: "nk7.jpg", code: "NK7",
    options: ["Gold"], desc: "A delicate chain dotted with polished beads.",
    nameAr: "عقد سلسلة الكور", descAr: "سلسلة رفيعة منقطة بكور ذهبية لامعة." },
  { id: "n2", name: "Pendant Necklace",    category: "Necklaces", price: 290, image: "pendant.jpg", code: "N2",
    options: ["Gold", "Silver", "Rose gold"], desc: "Minimal round pendant on a thin chain.",
    nameAr: "عقد بندنت", descAr: "بندنت دائري بسيط على سلسلة رفيعة." },
  { id: "e1", name: "Small Hoop Earrings", category: "Earrings",  price: 180, image: "hoops.jpg", code: "E1",
    options: ["Gold", "Silver"], desc: "15 mm hoops with hypoallergenic posts.",
    nameAr: "حلق حلقات صغير", descAr: "حلقات 15 مم بإبرة مضادة للحساسية." },
  { id: "b1", name: "Link Bracelet",       category: "Bracelets", price: 320, image: "link-bracelet.jpg", code: "B1",
    options: ["Gold", "Silver", "Black"], desc: "Adjustable length, fits most wrists.",
    nameAr: "أسورة شرابيك", descAr: "مقاس قابل للتعديل، يناسب أغلب الأيدي." },
  { id: "n1", name: "Curb Chain Necklace", category: "Necklaces", price: 380, image: "curb-chain.jpg", code: "N1",
    options: ["Gold", "Silver"], desc: "50 cm chain with a secure lobster clasp.",
    nameAr: "عقد سلسلة كيرب", descAr: "سلسلة 50 سم بقفل آمن." },
  { id: "r1", name: "Classic Band Ring",   category: "Rings",     price: 250, image: "band-ring.jpg", code: "R1",
    options: ["Gold", "Silver", "Rose gold"], desc: "Polished stainless steel, 4 mm wide.",
    nameAr: "خاتم كلاسيك", descAr: "ستانلس ستيل مصقول، عرض 4 مم." }
];
