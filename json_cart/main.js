async function getData() {
    const productsEl = document.querySelector(".products");
    const titleEl = document.querySelector(".info__title");
    const url = "https://dummyjson.com/carts/1";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      for (const product of json.products) {
        productsEl.innerHTML += `
        <li class="product" onclick="getProductData()">
            <h3 class="product__title">${product.title}</h3>
            <div class="product__info">
                <p>Antal: ${product.quantity}<span id="productAmount"></span></p>
                <p id="productPrice">${product.price}$</p>
            </div>
        </li>`
      }
      titleEl.innerHTML = `
        <p class="product__total">${json.total}$
            <p>Discount: <span  id="cartDiscount">${json.discountedTotal}$
            </span></p>
        </p>`
    } catch (error) {
      console.error(error.message);
    }
}
getData()

function sum(tal1, tal2) {
    return tal1 + tal2
}
sum(32, 10)
console.log(sum(32, 10));
