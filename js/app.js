
/* Sherie Kollections shared vanilla JS store */
const CONFIG = { mpesa: { paybill: "123456", account: "SHERIE", instructions: "Go to M-Pesa → Lipa na M-Pesa → Pay Bill → enter the Paybill and your order number." }, whatsapp: "254700000000", deliveryFee: 300, freeDeliveryAt: 5000 };
const seedProducts = [
    { id: "p1", name: "Quality linen", category: "shirt", price: 1200, stock: "in stock", sizes: ["S", "M", "L", "XL"], image: "images/linenshirt1.jpeg", description: "White,black, skyblue, brown, jungle-green and grey." },
    { id: "p2", name: "Black Monks", category: "Shoes", price: 3200, stock: 6, sizes: ["36", "37", "38", "39", "40"], image: "images/monks1.jpeg", description: "Statement shoes with a refined quality accent." },
    { id: "p3", name: "Hats paired with bags", category: "Sets", price: 5200, stock: 5, sizes: ["S", "M", "L"], image: "images/baghat1.jpeg", description: "Polished two-piece set for elevated everyday style." },
    { id: "p4", name: "all season polo", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/refinedpolo1.jpeg", description: "Versatile top with a clean premium finish." },
    { id: "p5", name: "all season polo", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/refinedpolo2.jpeg", description: "Versatile top with a clean premium finish." },
    { id: "p6", name: "all season polo", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/refinedpolo3.jpeg", description: "Versatile top with a clean premium finish." },
    { id: "p7", name: "all season polo", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/refinedpolo4.jpeg", description: "Versatile top with a clean premium finish." },
    { id: "p8", name: "all season polo", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/refinedpolo5.jpeg", description: "Versatile top with a clean premium finish." },
    { id: "p9", name: "all season polo", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/refinedpolo6.jpeg", description: "Versatile top with a clean premium finish." },
    { id: "p10", name: "all season polo", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/refinedpolo7.jpeg", description: "Versatile top with a clean premium finish." },
    { id: "p11", name: "Quality Hand Knitted", category: "Bags", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/bag1.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p12", name: "Quality Hand Knitted", category: "Bags", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/bag2.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p13", name: "Quality Hand Knitted", category: "Bags", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/bag3.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p14", name: "Quality Hand Knitted", category: "Knitwear", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/Couplesweater1.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p15", name: "Quality Hand Knitted", category: "Knitwear", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/Couplesweater2.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p16", name: "Quality Hand Knitted", category: "Knitwear", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/Couplesweater3.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p17", name: "Quality Hand Knitted", category: "Knitwear", price: 2400, stock: 12, sizes: ["S", "M","L","XL"], image: "images/Couplesweater4.jpeg", description:"Versatile bag with a clean premium finish." },
    { id: "p18", name: "Quality Hand Knitted", category: "Knitwear", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/Couplesweater5.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p19", name: "Quality Hand Knitted", category: "Knitwear", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/Couplesweater6.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p20", name: "Quality Hand Knitted", category: "Knitwear", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/Couplesweater7.jpeg", description:"Versatile bag with a clean premium finish." },
    { id: "p21", name: "Quality Hand Knitted", category: "Knitwear", price: 2400, stock: 12, sizes: ["S","M","L","XL"], image: "images/Couplesweater8.jpeg", description:"Versatile bag with a clean premium finish." },
    { id: "p22", name: "Quality Hand Knitted", category: "Knitwear", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/Couplesweater9.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p23", name: "Quality Hand Knitted", category: "Knitwear", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/Couplesweater10.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p24", name: "Quality Hand Knitted", category: "Knitwear", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/Couplesweater11.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p25", name: "Matched Sets", category: "Bags", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/baghat1.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p26", name: "Matched Sets", category: "Bags", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/baghat2.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p27", name: "Matched Sets", category: "Bags", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/baghat3.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p28", name: "Matched Sets", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/linenshirt1.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p29", name: "Matched Sets", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/linenshirt2.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p30", name: "Matched Sets", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/linenshirt3.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p31", name: "Matched Sets", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/linenshirt4.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p32", name: "Matched Sets", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L", "XL"], image: "images/linenshirt5.jpeg", description: "Versatile bag with a clean premium finish." },
    { id: "p33", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks1.jpeg", description: "elegance redifined" },
    { id: "p34", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks2.jpeg", description: "elegance redifined" },
    { id: "p35", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks3.jpeg", description: "elegance redifined" },
    { id: "p36", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks4.jpeg", description: "elegance redifined" },
    { id: "p37", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks5.jpeg", description: "elegance redifined" },
    { id: "p38", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks6.jpeg", description: "elegance redifined" },
    { id: "p39", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks7.jpeg", description: "elegance redifined" },
    { id: "p40", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks8.jpeg", description: "elegance redifined" },
    { id: "p41", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks9.jpeg", description: "elegance redifined" },
    { id: "p42", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks10.jpeg", description: "elegance redifined" },
    { id: "p44", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks11.jpeg", description: "elegance redifined" },
    { id: "p33", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks12.jpeg", description: "elegance redifined" },
    { id: "p34", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks13.jpeg", description: "elegance redifined" },
    { id: "p35", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks14.jpeg", description: "elegance redifined" },
    { id: "p36", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks15.jpeg", description: "elegance redifined" },
    { id: "p37", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks16.jpeg", description: "elegance redifined" },
    { id: "p38", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks17.jpeg", description: "elegance redifined" },
    { id: "p39", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks18.jpeg", description: "elegance redifined" },
    { id: "p40", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks19.jpeg", description: "elegance redifined" },
    { id: "p41", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks20.jpeg", description: "elegance redifined" },
    { id: "p42", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks21.jpeg", description: "elegance redifined" },
    { id: "p44", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks22.jpeg", description: "elegance redifined" },
    { id: "p41", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks23.jpeg", description: "elegance redifined" },
    { id: "p42", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks24.jpeg", description: "elegance redifined" },
    { id: "p44", name: "Comfortable Monks", category: "Shoes", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/monks25.jpeg", description: "elegance redifined" },
    { id: "p44", name: "Comfortable Polo", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/Vcrestpolo1.jpeg", description: "elegance redifined" },
    { id: "p44", name: "Comfortable Polo", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/Vcrestpolo1.jpeg", description: "elegance redifined" },
    { id: "p44", name: "Comfortable Polo", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/Vcrestpolo1.jpeg", description: "elegance redifined" },
    { id: "p44", name: "Comfortable Polo", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/Vcrestpolo1.jpeg", description: "elegance redifined" },
    { id: "p44", name: "Comfortable Polo", category: "Tops", price: 2400, stock: 12, sizes: ["S", "M", "L","XL"], image: "images/Vcrestpolo1.jpeg", description: "elegance redifined" },

];
const load = (k, f) => JSON.parse(localStorage.getItem(k) || JSON.stringify(f));
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
let products = load("sk_products", seedProducts); let cart = load("sk_cart", []); let wishlist = load("sk_wishlist", []);
const money = n => new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);
function toast(msg) { let x = document.querySelector(".toast"); if (!x) { x = document.createElement("div"); x.className = "toast"; document.body.appendChild(x) } x.textContent = msg; x.classList.add("show"); setTimeout(() => x.classList.remove("show"), 2200) }
function productCard(p) { return `<article class="card product-card reveal"><a href="product.html?id=${p.id}"><div class="pic"><img src="${p.image}" alt="${p.name}" onerror="this.src='images/placeholder.svg'"></div><div class="info"><span class="badge">${p.category}</span><h3>${p.name}</h3><div class="price">${money(p.price)}</div></div></a></article>` }
function renderProducts(target, list = products) { let el = document.querySelector(target); if (el) el.innerHTML = list.map(productCard).join("") || `<div class="empty">No products found.</div>`; reveal() }
function initTheme() { let t = localStorage.getItem("sk_theme") || "light"; document.documentElement.dataset.theme = t; document.querySelectorAll("[data-theme-toggle]").forEach(b => b.onclick = () => { t = t === "dark" ? "light" : "dark"; document.documentElement.dataset.theme = t; localStorage.setItem("sk_theme", t) }) }
function reveal() { document.querySelectorAll(".reveal:not(.visible)").forEach(e => setTimeout(() => e.classList.add("visible"), 30)) }
function addToCart(id, qty = 1, size = "") { let p = products.find(x => x.id === id); if (!p || p.stock < qty) return toast("Product is out of stock."); let old = cart.find(x => x.id === id && x.size === size); if (old) old.qty = Math.min(old.qty + qty, p.stock); else cart.push({ id, qty, size }); save("sk_cart", cart); toast("Added to bag."); updateCartCount() }
function updateCartCount() { document.querySelectorAll("[data-cart-count]").forEach(e => e.textContent = cart.reduce((a, b) => a + b.qty, 0)) }
function waLink(order) { let text = `Hello Sherie Kollections,%0AI'd like to place order ${order.id}.%0AItems: ${order.items.map(i => `${i.name} x${i.qty}${i.size ? " (" + i.size + ")" : ""}`).join(", ")}%0ATotal: ${money(order.total)}%0AName: ${order.customer.name}%0APhone: ${order.customer.phone}`; return `https://wa.me/${CONFIG.whatsapp}?text=${text}` }
document.addEventListener("DOMContentLoaded", () => { initTheme(); updateCartCount(); reveal() });
