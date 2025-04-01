async function fetchCart() {
    const productsEl = document.querySelector(".cart__products");
    const titleEl = document.querySelector(".header__title");
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
        <li class="product__preview" onclick="fetchProduct(${product.id})">
            <h3 class="product__title">${product.title}</h3>
            <div class="product__info">
                <p>Amount: ${product.quantity}<span id="productAmount"></span></p>
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
fetchCart()

async function fetchProduct(productId) {
    const url = `https://dummyjson.com/products/${productId}`;

    function formatCategory(category) {
      // Dictionary for known special cases
      const specialCases = {
          "womens": "Women's",
          "mens": "Men's",
          "kids": "Kids'", // Possessive if needed
      };
    
      return category
          .replace(/-/g, " ") // Replace all hyphens with spaces
          .split(" ") // Split into words
          .map(word => specialCases[word.toLowerCase()] || word.charAt(0).toUpperCase() + word.slice(1)) // Handle special cases & capitalization
          .join(" "); // Join words back
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      
      const titleEl = document.querySelector(".product > h2")
      const categoryEl = document.querySelector(".product > p > span")
      const imagesEl = document.querySelector(".product__images")
      const descriptionEl = document.querySelector(".product__description")
      const tagsEl = document.querySelector(".product__tags")

      titleEl.innerHTML = json.title
      categoryEl.innerHTML = formatCategory(json.category)
      descriptionEl.innerHTML = json.description

      imagesEl.innerHTML = "" // clear images before inserting new ones
      for (const image of json.images) {
      imagesEl.innerHTML += `<img src="${image}" alt="${json.title}">`;
      }

      tagsEl.innerHTML = "" // clear tags before inserting new ones
      for (const tag of json.tags) {
        tagsEl.innerHTML += `
        <li>${tag}</li>`
      }
    } catch (error) {
      console.error(error.message);
    }
}