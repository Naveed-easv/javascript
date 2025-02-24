let productAmount = 0
let productAmountEl = document.getElementById("product__amount")
function addProduct() {
    productAmount = productAmount + 1
    productAmountEl.innerText = productAmount
}
function removeProduct() {
    productAmount = productAmount - 1
    productAmountEl.innerText = productAmount
}