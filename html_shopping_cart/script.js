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