const $=s=>document.querySelector(s);
const t=()=>I18N[livLang()];
const pname=p=>livLang()==="ar"&&p.nameAr?p.nameAr:p.name;
const pdesc=p=>livLang()==="ar"&&p.descAr?p.descAr:(p.desc||"");
const catLabel=c=>livLang()==="ar"?(CATS_AR[c]||c):c;
const money=n=>n.toLocaleString("en-US")+" "+SHOP.currency;
const find=id=>PRODUCTS.find(p=>p.id===id);
let cart=JSON.parse(localStorage.getItem("livia_cart")||"[]"); // [{id,opt,qty}]
const sub=()=>cart.reduce((a,i)=>a+find(i.id).price*i.qty,0);
const fee=s=>SHOP.freeShippingOver&&s>=SHOP.freeShippingOver?0:SHOP.shipping;
const img=p=>`img/products/${p.image}`;
function save(){localStorage.setItem("livia_cart",JSON.stringify(cart));badge();if($("#cartitems"))drawCart()}
function badge(){document.querySelectorAll(".lv-count").forEach(e=>e.textContent=cart.reduce((a,i)=>a+i.qty,0))}

function cards(list){
  return list.map(p=>`<article class="lv-card">
  <img class="lv-pic" src="${img(p)}" alt="${pname(p)}" loading="lazy" onerror="this.removeAttribute('src');this.alt=''">
  <div class="lv-info"><h6>${pname(p)}</h6><p>${pdesc(p)}</p><div class="lv-price">${money(p.price)}</div>
  <div class="lv-row">${p.options?`<select id="o-${p.id}" aria-label="Option">${p.options.map(o=>`<option value="${o}">${livLang()==="ar"?(OPTS_AR[o]||o):o}</option>`).join("")}</select>`:""}
  <button class="lv-add" data-id="${p.id}">${t().add}</button></div></div></article>`).join("")||'<p>No products found.</p>';
}
document.addEventListener("click",e=>{
  const el=e.target;
  if(el.classList.contains("lv-add")){
    const s=$("#o-"+el.dataset.id),opt=s?s.value:"";
    const f=cart.find(i=>i.id===el.dataset.id&&i.opt===opt);
    f?f.qty++:cart.push({id:el.dataset.id,opt,qty:1});
    save();const added=t().added,add=t().add;el.textContent=added;setTimeout(()=>el.textContent=add,900);
  }
  if(el.dataset.d){const i=cart[el.dataset.k];i.qty+=+el.dataset.d;if(i.qty<1)cart.splice(el.dataset.k,1);save()}
  if(el.dataset.rm){cart.splice(el.dataset.rm,1);save()}
});

function drawHome(){
  if(!$("#home-grid"))return;
  $("#home-grid").innerHTML=cards(PRODUCTS.slice(0,8));
  $("#home-cats").innerHTML=[...new Set(PRODUCTS.map(p=>p.category))].map(c=>`<a href="shop.html?c=${encodeURIComponent(c)}">${catLabel(c)}</a>`).join("");
}
let shopCat="All",shopQ="";
function drawShop(){
  if(!$("#shop-grid"))return;
  const cats=["All",...new Set(PRODUCTS.map(p=>p.category))];
  $("#chips").innerHTML=cats.map(c=>`<button class="lv-chip ${c===shopCat?"on":""}" data-c="${c}">${c==="All"?t().chip_all:catLabel(c)}</button>`).join("");
  $("#shop-grid").innerHTML=cards(PRODUCTS.filter(p=>(shopCat==="All"||p.category===shopCat)&&(pname(p).toLowerCase().includes(shopQ)||p.name.toLowerCase().includes(shopQ))));
}
if($("#shop-grid")){
  shopCat=new URLSearchParams(location.search).get("c")||"All";
  $("#chips").addEventListener("click",e=>{if(e.target.dataset.c){shopCat=e.target.dataset.c;drawShop()}});
  $("#search").addEventListener("input",e=>{shopQ=e.target.value.toLowerCase();drawShop()});
}
function drawCart(){
  if(!$("#cartitems"))return;
  const has=cart.length>0;
  $("#cartitems").innerHTML=has?cart.map((i,k)=>{const p=find(i.id);return `<div class="lv-cartrow">
   <img src="${img(p)}" alt="" onerror="this.removeAttribute('src');this.alt=''">
   <div class="n">${pname(p)}<small>${i.opt||""}</small>
   <span class="lv-q"><button data-k="${k}" data-d="-1" aria-label="Less">-</button>${i.qty}<button data-k="${k}" data-d="1" aria-label="More">+</button></span></div>
   <div>${money(p.price*i.qty)}<br><button class="lv-rm" data-rm="${k}">${t().remove}</button></div></div>`}).join(""):`<p>${t().cart_empty} <a href="shop.html">${t().cart_goshop}</a>.</p>`;
  $("#order").style.display=has?"block":"none";
  const s=sub(),f=fee(s);
  $("#totals").innerHTML=`<div class="t"><span>${t().items}</span><span>${money(s)}</span></div><div class="t"><span>${t().delivery}</span><span>${f?money(f):t().free}</span></div><div class="t g"><span>${t().total}</span><span>${money(s+f)}</span></div>`;
}
if($("#cartitems")){
  $("#orderform").addEventListener("submit",e=>{
    e.preventDefault();
    const d=Object.fromEntries(new FormData(e.target)),s=sub(),f=fee(s);
    const lines=cart.map(i=>{const p=find(i.id);return `- [${p.code||p.id}] ${p.name}${i.opt?" ("+i.opt+")":""} x${i.qty}: ${money(p.price*i.qty)}`}).join("\n");
    const msg=`New order\n${lines}\nDelivery: ${f?money(f):"Free"}\nTotal (cash on delivery): ${money(s+f)}\n\nName: ${d.name}\nPhone: ${d.phone}\nCity: ${d.city}\nAddress: ${d.address}`;
    window.open(`https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(msg)}`,"_blank");
    cart=[];save();e.target.reset();
  });
}
function drawFootCats(){
  const ul=$("#footCats"); if(!ul)return;
  ul.querySelectorAll("a").forEach(a=>{
    const c=new URLSearchParams(a.getAttribute("href").split("?")[1]).get("c");
    a.textContent=catLabel(c);
  });
}
function onLangChange(){ drawHome(); drawShop(); drawCart(); drawFootCats(); }
drawHome(); drawShop(); drawCart(); drawFootCats(); badge();
