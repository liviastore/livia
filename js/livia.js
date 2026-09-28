const $=s=>document.querySelector(s);
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
  <img class="lv-pic" src="${img(p)}" alt="${p.name}" loading="lazy" onerror="this.removeAttribute('src');this.alt=''">
  <div class="lv-info"><h6>${p.name}</h6><p>${p.desc||""}</p><div class="lv-price">${money(p.price)}</div>
  <div class="lv-row">${p.options?`<select id="o-${p.id}" aria-label="Option">${p.options.map(o=>`<option>${o}</option>`).join("")}</select>`:""}
  <button class="lv-add" data-id="${p.id}">Add</button></div></div></article>`).join("")||'<p>No products found.</p>';
}
document.addEventListener("click",e=>{
  const t=e.target;
  if(t.classList.contains("lv-add")){
    const s=$("#o-"+t.dataset.id),opt=s?s.value:"";
    const f=cart.find(i=>i.id===t.dataset.id&&i.opt===opt);
    f?f.qty++:cart.push({id:t.dataset.id,opt,qty:1});
    save();t.textContent="Added";setTimeout(()=>t.textContent="Add",900);
  }
  if(t.dataset.d){const i=cart[t.dataset.k];i.qty+=+t.dataset.d;if(i.qty<1)cart.splice(t.dataset.k,1);save()}
  if(t.dataset.rm){cart.splice(t.dataset.rm,1);save()}
});

// Home
if($("#home-grid")){
  $("#home-grid").innerHTML=cards(PRODUCTS.slice(0,8));
  $("#home-cats").innerHTML=[...new Set(PRODUCTS.map(p=>p.category))].map(c=>`<a href="shop.html?c=${encodeURIComponent(c)}">${c}</a>`).join("");
}
// Shop
if($("#shop-grid")){
  let cat=new URLSearchParams(location.search).get("c")||"All",q="";
  const draw=()=>{
    const cats=["All",...new Set(PRODUCTS.map(p=>p.category))];
    $("#chips").innerHTML=cats.map(c=>`<button class="lv-chip ${c===cat?"on":""}" data-c="${c}">${c}</button>`).join("");
    $("#shop-grid").innerHTML=cards(PRODUCTS.filter(p=>(cat==="All"||p.category===cat)&&p.name.toLowerCase().includes(q)));
  };
  $("#chips").addEventListener("click",e=>{if(e.target.dataset.c){cat=e.target.dataset.c;draw()}});
  $("#search").addEventListener("input",e=>{q=e.target.value.toLowerCase();draw()});
  draw();
}
// Cart
function drawCart(){
  const has=cart.length>0;
  $("#cartitems").innerHTML=has?cart.map((i,k)=>{const p=find(i.id);return `<div class="lv-cartrow">
   <img src="${img(p)}" alt="" onerror="this.removeAttribute('src');this.alt=''">
   <div class="n">${p.name}<small>${i.opt||""}</small>
   <span class="lv-q"><button data-k="${k}" data-d="-1" aria-label="Less">-</button>${i.qty}<button data-k="${k}" data-d="1" aria-label="More">+</button></span></div>
   <div>${money(p.price*i.qty)}<br><button class="lv-rm" data-rm="${k}">Remove</button></div></div>`}).join(""):'<p>Your cart is empty. <a href="shop.html">Go to the shop</a>.</p>';
  $("#order").style.display=has?"block":"none";
  const s=sub(),f=fee(s);
  $("#totals").innerHTML=`<div class="t"><span>Items</span><span>${money(s)}</span></div><div class="t"><span>Delivery</span><span>${f?money(f):"Free"}</span></div><div class="t g"><span>Total</span><span>${money(s+f)}</span></div>`;
}
if($("#cartitems")){
  drawCart();
  $("#orderform").addEventListener("submit",e=>{
    e.preventDefault();
    const d=Object.fromEntries(new FormData(e.target)),s=sub(),f=fee(s);
    const lines=cart.map(i=>{const p=find(i.id);return `- ${p.name}${i.opt?" ("+i.opt+")":""} x${i.qty}: ${money(p.price*i.qty)}`}).join("\n");
    const msg=`New order\n${lines}\nDelivery: ${f?money(f):"Free"}\nTotal (cash on delivery): ${money(s+f)}\n\nName: ${d.name}\nPhone: ${d.phone}\nCity: ${d.city}\nAddress: ${d.address}`;
    window.open(`https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(msg)}`,"_blank");
    cart=[];save();e.target.reset();
  });
}
badge();
