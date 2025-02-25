let productCount = 0
let productCountEl = document.getElementById("productCount")
function addProduct() {
    productCount = productCount + 1
    productCountEl.innerText = productCount
}
function removeProduct() {
    if (productCount > 0) {
        productCount = productCount - 1
        productCountEl.innerText = productCount
    }
}