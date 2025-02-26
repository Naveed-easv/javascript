// product list
const products = {
    product1: { amount: 0, price: 1400 },
    product2: { amount: 0, price: 595 }
}

// define product elements
for (let key in products) { // iterates over the "products" object, "key" represents each property name (e.g. "product1", "product2")
    products[key].amountEl = document.getElementById(`${key}__amount`);
    products[key].costEl = document.getElementById(`${key}__cost`);
}

// product prices
let product1PriceEl = document.getElementById("product1Price");
product1PriceEl.innerText = products.product1.price + ",-";
let product2PriceEl = document.getElementById("product2Price");
product2PriceEl.innerText = products.product2.price + ",-";

// update total cost
function updateTotalCost(productKey) {
    const product = products[productKey];
    const totalCost = product.amount * product.price;
    product.costEl.innerText = totalCost + ",-";
}

// add product
function addProduct(productKey) {
    products[productKey].amount++; // add 1
    products[productKey].amountEl.innerText = products[productKey].amount;
    updateTotalCost(productKey);
}

// remove product
function removeProduct(productKey) {
    if (products[productKey].amount > 0) {
        products[productKey].amount--; // remove 1
        products[productKey].amountEl.innerText = products[productKey].amount;
        updateTotalCost(productKey);
    }
}

//update product amount though input field
function updateProductAmount(productKey, inputEl) {
    let inputAmount = parseInt(inputEl.value, 10); // converts string to integer in base 10
    if (!isNaN(inputAmount) && inputAmount >= 0) {
        products[productKey].amount = inputAmount;
        products[productKey].amountEl.innerText = products[productKey].amount;
        updateTotalCost(productKey);
    } else {
        inputEl.value = products[productKey].amount; // Reset invalid input
    }
}