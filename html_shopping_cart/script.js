let product1Amount = 0;
let product1AmountEl = document.getElementById("product1Amount");

//add product
function addProduct1() {
    product1Amount = product1Amount + 1;
    product1AmountEl.innerText = product1Amount;
}

//remove product
function removeProduct1() {
    if (product1Amount > 0) {
        product1Amount = product1Amount - 1;
        product1AmountEl.innerText = product1Amount;
    }
}

//update product amount though input field
let product1InputEl = document.getElementById("product1Input");
function updateProduct1Amount() {
    let inputAmount = parseInt(product1InputEl.value, 10); // Convert input to an integer
    if (!isNaN(inputAmount) && inputAmount >= 0) {
        product1Amount = inputAmount;
        product1AmountEl.innerText = product1Amount;
    } else {
        product1InputEl.value = product1Amount; // Reset input field if invalid
    }
}

//listen for enter key to update the input field
product1InputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        updateProduct1Amount();
    }
});

//product prices
const product1Price = 1400;
let product1PriceEl = document.getElementById("product1Price");
product1PriceEl.innerText = product1Price + ",-";

let product1TotalPrice = product1Amount * product1Price;
let product1TotalPriceEl = document.getElementById("product1TotalPrice");
product1TotalPriceEl.innerText = product1TotalPrice + ",-"
console.log(product1Amount)