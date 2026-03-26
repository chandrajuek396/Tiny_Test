const products = [
    { id: 1, name: "Neon Buds", price: 199, image: "https://images.unsplash.com/photo-1590658268037" },
    { id: 2, name: "Smart Watch", price: 349, image: "https://images.unsplash.com/photo-1508685096489" }
];

let cart = [];

function renderProducts() {
    const container = document.getElementById('product-container');

    container.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
            <button onclick="addToCart(${p.id})">Add</button>
        </div>
    `).join('');
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;

    const items = document.getElementById('cart-items');
    items.innerHTML = cart.map(item => `<p>${item.name}</p>`).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total-price').innerText = "$" + total;
}

window.onload = renderProducts;