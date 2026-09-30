const I18N = {
  en: { dir:"ltr",
    nav_home:"Home", nav_shop:"Shop", cart_word:"Cart", topbar:"Pay on delivery across Egypt",
    hero_eyebrow:"Stainless steel jewelry", hero_title:"Because ordinary was never meant for you.",
    hero_sub:"Won't tarnish or rust. Delivered across Egypt, and you pay when it arrives.", hero_cta:"Shop now",
    cat_title:"Shop by category", new_title:"New arrivals", see_all:"See all",
    perk1_t:"Pay on delivery", perk1_d:"Cash when your order arrives.",
    perk2_t:"Stainless steel", perk2_d:"No tarnish, no rust.",
    perk3_t:"WhatsApp confirmation", perk3_d:"We confirm every order before shipping.",
    foot_about:"Livia, since 2026. Stainless steel jewelry made to be worn every day.",
    foot_shop_h:"Shop", foot_delivery_h:"Delivery",
    foot_delivery_p:"Cash on delivery, InstaPay or Vodafone Cash. We confirm every order on WhatsApp before shipping.",
    breadcrumb_shop:"Shop", search_ph:"Search products", chip_all:"All",
    breadcrumb_cart:"Your cart", cart_empty:"Your cart is empty.", cart_goshop:"Go to the shop",
    items:"Items", delivery:"Delivery", free:"Free", total:"Total",
    ph_name:"Full name", ph_phone:"Phone number", ph_city:"City / governorate", ph_address:"Full address",
    submit:"Send order on WhatsApp", note:"You pay in cash when the order arrives.",
    add:"Add", added:"Added", remove:"Remove"
  },
  ar: { dir:"rtl",
    nav_home:"الرئيسية", nav_shop:"المتجر", cart_word:"السلة", topbar:"الدفع عند الاستلام في جميع أنحاء مصر",
    hero_eyebrow:"مجوهرات ستانلس ستيل", hero_title:"لأن العادي لم يُخلق لكِ",
    hero_sub:"لا تصدأ ولا تفقد لمعتها. توصيل لكل مصر، وتدفعي وقت الاستلام.", hero_cta:"تسوقي الآن",
    cat_title:"تسوقي حسب الفئة", new_title:"وصل حديثًا", see_all:"عرض الكل",
    perk1_t:"الدفع عند الاستلام", perk1_d:"تدفعي كاش وقت وصول طلبك.",
    perk2_t:"ستانلس ستيل", perk2_d:"لا صدأ، ولا تفقد لمعتها.",
    perk3_t:"تأكيد عبر واتساب", perk3_d:"بنأكد كل طلب قبل الشحن.",
    foot_about:"ليفيا، من 2026. مجوهرات ستانلس ستيل تُصنع لتُلبس كل يوم.",
    foot_shop_h:"المتجر", foot_delivery_h:"التوصيل والدفع",
    foot_delivery_p:"الدفع عند الاستلام، أو إنستاباي، أو فودافون كاش. بنأكد كل طلب على واتساب قبل الشحن.",
    breadcrumb_shop:"المتجر", search_ph:"ابحثي عن منتج", chip_all:"الكل",
    breadcrumb_cart:"عربة التسوق", cart_empty:"عربة التسوق فاضية.", cart_goshop:"روحي للمتجر",
    items:"المنتجات", delivery:"التوصيل", free:"مجانًا", total:"الإجمالي",
    ph_name:"الاسم بالكامل", ph_phone:"رقم الموبايل", ph_city:"المحافظة / المدينة", ph_address:"العنوان بالتفصيل",
    submit:"إرسال الطلب على واتساب", note:"تدفعي كاش وقت وصول الطلب.",
    add:"أضيفي", added:"تمت الإضافة", remove:"إزالة"
  }
};
const CATS_AR = { Rings:"خواتم", Necklaces:"عقود", Bracelets:"أساور", Earrings:"حلق" };
const OPTS_AR = { Gold:"ذهبي", Silver:"فضي", "Rose gold":"روز جولد", Black:"أسود" };

function livLang(){ return localStorage.getItem("livia_lang") || "en"; }
function livSetLang(l){
  localStorage.setItem("livia_lang", l);
  const t=I18N[l];
  document.documentElement.lang = l==="ar" ? "ar" : "en";
  document.documentElement.dir = t.dir;
  const btn=document.getElementById("langBtn");
  if(btn) btn.textContent = l==="ar" ? "EN" : "AR";
  const accent=document.getElementById("arAccent");
  if(accent) accent.style.display = l==="ar" ? "none" : "block";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k=el.dataset.i18n; if(t[k]!==undefined) el.textContent=t[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const k=el.dataset.i18nPh; if(t[k]!==undefined) el.placeholder=t[k];
  });
  if(typeof onLangChange==="function") onLangChange(l);
}
document.addEventListener("click",e=>{
  if(e.target.id==="langBtn"){ livSetLang(livLang()==="ar"?"en":"ar"); }
});
document.addEventListener("DOMContentLoaded",()=>livSetLang(livLang()));
