// ===== SHOP SETTINGS =====
const SHOP = {
  name: "Livia",
  whatsapp: "+201067818750",   // your number: country code first, no + or spaces
  currency: "EGP",
  shipping: 60,               // flat delivery fee
  freeShippingOver: 1000      // free delivery above this amount (0 = off)
};

// ===== PRODUCTS =====
// Add new products at the TOP: the home page shows the first 8.
// image = file name inside img/products/   (missing photo = burgundy placeholder)
// options = dropdown choices (color, size...). Delete the line if not needed.
const PRODUCTS = [
  { id: "n2", name: "Pendant Necklace",    category: "Necklaces", price: 290, image: "nick1.jpg",
    options: ["Gold", "Silver", "Rose gold"], desc: "Minimal round pendant on a thin chain." },
 { id: "n3", name: "Pendant Necklace",    category: "Necklaces", price: 290, image: "nick2.jpg",
    options: ["Gold", "Silver", "Rose gold"], desc: "Minimal round pendant on a thin chain." },
 { id: "n4", name: "Pendant Necklace",    category: "Necklaces", price: 290, image: "nick3.jpg",
    options: ["Gold", "Silver", "Rose gold"], desc: "Minimal round pendant on a thin chain." },
 { id: "n5", name: "Pendant Necklace",    category: "Necklaces", price: 290, image: "nick4.jpg",
    options: ["Gold", "Silver", "Rose gold"], desc: "Minimal round pendant on a thin chain." },
 { id: "n6", name: "Pendant Necklace",    category: "Necklaces", price: 290, image: "nick5.jpg",
    options: ["Gold", "Silver", "Rose gold"], desc: "Minimal round pendant on a thin chain." },
 { id: "n7", name: "Pendant Necklace",    category: "Necklaces", price: 290, image: "nick6.jpg",
    options: ["Gold", "Silver", "Rose gold"], desc: "Minimal round pendant on a thin chain." },

 { id: "b1", name: "Link Bracelet",       category: "Bracelets", price: 320, image: "braiclet1.jpg",
    options: ["Gold", "Silver", "Black"], desc: "Adjustable length, fits most wrists." },
 { id: "b2", name: "Link Bracelet",       category: "Bracelets", price: 320, image: "braiclet2.jpg",
    options: ["Gold", "Silver", "Black"], desc: "Adjustable length, fits most wrists." },

 { id: "b3", name: "Link Bracelet",       category: "Bracelets", price: 320, image: "braiclet3.jpg",
    options: ["Gold", "Silver", "Black"], desc: "Adjustable length, fits most wrists." },

 { id: "b4", name: "Link Bracelet",       category: "Bracelets", price: 320, image: "braiclet4.jpg",
    options: ["Gold", "Silver", "Black"], desc: "Adjustable length, fits most wrists." },

 { id: "b5", name: "Link Bracelet",       category: "Bracelets", price: 320, image: "braiclet5.jpg",
    options: ["Gold", "Silver", "Black"], desc: "Adjustable length, fits most wrists." },

 { id: "b6", name: "Link Bracelet",       category: "Bracelets", price: 320, image: "braiclet6.jpg",
    options: ["Gold", "Silver", "Black"], desc: "Adjustable length, fits most wrists." },




  { id: "e1", name: "Small Hoop Earrings", category: "Earrings",  price: 180, image: "hoops.jpg",
    options: ["Gold", "Silver"], desc: "15 mm hoops with hypoallergenic posts." },
 
  { id: "n1", name: "Curb Chain Necklace", category: "Necklaces", price: 380, image: "curb-chain.jpg",
    options: ["Gold", "Silver"], desc: "50 cm chain with a secure lobster clasp." },
  { id: "r1", name: "Classic Band Ring",   category: "Rings",     price: 250, image: "band-ring.jpg",
    options: ["Gold", "Silver", "Rose gold"], desc: "Polished stainless steel, 4 mm wide." }
];
