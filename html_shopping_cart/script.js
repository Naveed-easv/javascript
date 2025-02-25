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
