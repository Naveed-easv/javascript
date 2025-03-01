let images = [
    "media/black-front.png",
    "media/black-back.png",
    "media/black-side.png",
    "media/white-front.png",
    "media/white-back.png",
    "media/white-side.png"
]
let image = document.getElementById("productImage");
let productSaleEl = document.getElementById("productSale")

// update price continously
function updatePrice() {
    if (color === "black") {
        if (size === "medium" || size === "large") {
            productPriceEl.innerText = 75 + ",-";
        }
    } else {
        productPriceEl.innerText = 100 + ",-";
    }
    if (productPriceEl.innerText === "75,-") {
        productSaleEl.style.display = "block";
    } else {
        productSaleEl.style.display = "none";
    }
}

// colors
let color = "black"
let productColorEl = document.getElementById("productColor")
productColorEl.innerText = "Sort"

function black() {
    color = "black"
    productColorEl.innerText = "Sort"
    image.src = images[0]
    updatePrice()
}

function white() {
    color = "white"
    image.src = images[3]
    productColorEl.innerText = "Hvid"
    productPriceEl.innerText = 100 + ",-";
    updatePrice()
}

// price
let productPriceEl = document.getElementById("productPrice")
let productPrice = 100 + ",-";
productPriceEl.innerText = productPrice

// sizes
let size = "small"
let productSizeEl = document.getElementById("productSize")
productSizeEl.innerText = "Small"

function small() {
    size = "small"
    productSizeEl.innerText = "Small"
    if (color === "white") {
        productPriceEl.innerText = 100 + ",-";
    } else if (color === "black" && size === "small") {
        productPriceEl.innerText = 100 + ",-";
    }
    updatePrice()
}

function medium() {
    size = "medium"
    productSizeEl.innerText = "Medium"
    updatePrice()
}

function large() {
    size = "large"
    productSizeEl.innerText = "Large"
    updatePrice()
}