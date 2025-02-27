let images = [
    "media/black-front.png",
    "media/black-back.png",
    "media/black-side.png",
    "media/white-front.png",
    "media/white-back.png",
    "media/white-side.png"
]

let image = document.getElementById("productImage");
let size = "small"

// colors
let color = "black"
let productColorEl = document.getElementById("productColor")
function black() {
    productColorEl.innerText = "Black"
    image.src = images[0]
}

function white() {
    image.src = images[3]
    color = "white"
    productColorEl.innerText = "White"
    productPriceEl.innerText = 100 + ",-";
}

// price
let productPriceEl = document.getElementById("productPrice")
let productPrice = 100 + ",-";
productPriceEl.innerText = productPrice

function updatePrice() {
    if (color = "black") {
        productPriceEl.innerText = 75
    } else {
        productPriceEl.innerText = 100
    }
}

// sizes
let productSizeEl = document.getElementById("productSize")
function small() {
    let size = "small"
    productSizeEl.innerText = "Small"
    productPriceEl.innerText = 100 + ",-";
    if (color = "white") {
        productPriceEl.innerText = 100 + ",-";
    }
    updatePrice()
}

function medium() {
    let size = "medium"
    productSizeEl.innerText = "Medium"
    if (color = "black") {
        productPriceEl.innerText = 75 + ",-";
    }
    updatePrice()
}

function large() {
    let size = "large"
    if (color = "black") {
        productPriceEl.innerText = 75 + ",-";
    }
    productSizeEl.innerText = "Large"
    updatePrice()
}