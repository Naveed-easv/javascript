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
const statusEl = document.getElementById("status")

function renderProducts(showStatus) {
    productsEl.innerHTML = ""; // clear content to avoid duplicate products
    for (const product of products) {
        if (showStatus && !product.available) continue; // if the user wants to hide unavailable products AND the product is not available, the product will be skipped in the loop
        const productArticle = document.createElement("article");
        productArticle.classList.add("product");
        const statusMessage = product.available
            ? "✅ På lager"
            : "❌ Ikke på lager"; // string for both states of product availability
        // update article element's contents to the following structure with template literals for different products:
        productArticle.innerHTML = `
        <span class="product__status">${statusMessage}</span>
        <img 
        src=${product.image} 
        alt="T-shirt" 
        class="product__image">
        <h2 class="product__title">
            <span id="productTitle">${product.name}</span></h2>
        <p class="product__price">
            Price: <span id="productPrice">$${product.price}</span>
        </p>`;
        productsEl.appendChild(productArticle); // append article element as a child of the container div
    }
}
statusEl.addEventListener("change", () => {
    renderProducts(statusEl.checked) // detects when the checkbox state changes and updates its value
});

renderProducts(false); // display unavailable products by default