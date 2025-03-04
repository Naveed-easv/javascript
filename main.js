const products = [
    { name: "Product 1", price: 10, image: "media/black-front.png", available: true },
    { name: "Product 2", price: 15, image: "media/white-front.png", available: false },
    { name: "Product 3", price: 20, image: "media/black-front.png", available: true },
    { name: "Product 4", price: 5, image: "media/black-front.png", available: false },
    { name: "Product 5", price: 25, image: "media/white-front.png", available: true },
    { name: "Product 6", price: 30, image: "media/black-front.png", available: true },
]

const productsEl = document.getElementById("products")

for (const product of products) {
    const productArticle = document.createElement("article");
    productArticle.classList.add("product");
    productArticle.innerHTML = `
    <img 
    src=${product.image} 
    alt="T-shirt" 
    class="product__image">
    <h2 class="product__title">
        <span id="productTitle">${product.name}</span></h2>
    <p class="product__price">
        Pris: <span id="productPrice">$${product.price}</span>
    </p>`;
    productsEl.appendChild(productArticle);
}