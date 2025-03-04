const products = [
    { name: "Product 1", price: 10, image: "media/black-front.png", available: true },
    { name: "Product 2", price: 15, image: "media/white-front.png", available: false },
    { name: "Product 3", price: 20, image: "media/black-front.png", available: true },
    { name: "Product 4", price: 5, image: "media/black-front.png", available: false },
    { name: "Product 5", price: 25, image: "media/white-front.png", available: true },
    { name: "Product 6", price: 30, image: "media/black-front.png", available: true },
    // { name: "Product 7", price: 10, image: "media/black-front.png", available: true },
    // { name: "Product 8", price: 15, image: "media/white-front.png", available: false },
    // { name: "Product 9", price: 20, image: "media/black-front.png", available: true },
    // { name: "Product 10", price: 10, image: "media/black-front.png", available: true },
    // { name: "Product 11", price: 15, image: "media/white-front.png", available: false },
    // { name: "Product 12", price: 20, image: "media/black-front.png", available: true },
    // { name: "Product 13", price: 10, image: "media/black-front.png", available: true },
    // { name: "Product 14", price: 15, image: "media/white-front.png", available: false },
    // { name: "Product 15", price: 20, image: "media/black-front.png", available: true },
    // { name: "Product 16", price: 10, image: "media/black-front.png", available: true },
]

const productsEl = document.getElementById("products")

for (const product of products) {
    const productArticle = document.createElement("article");
    productArticle.classList.add("product");
    const statusIcon = product.available 
    ? "✅ På lager"
    : "❌ Ikke på lager";
    productArticle.innerHTML = `
    <span class="product__status">${statusIcon}</span>
    <img 
    src=${product.image} 
    alt="T-shirt" 
    class="product__image">
    <h2 class="product__title">
        <span id="productTitle">${product.name}</span></h2>
    <p class="product__price">
        Price: <span id="productPrice">$${product.price}</span>
    </p>`;
    productsEl.appendChild(productArticle);
}