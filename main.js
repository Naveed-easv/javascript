let images = [
    "media/black-front.png",
    "media/black-back.png",
    "media/black-side.png",
    "media/white-front.png",
    "media/white-back.png",
    "media/white-side.png"
]

let image = document.getElementById("productImage");

// colors
let color = "black"
let productColorEl = document.getElementById("productColor")

function black() {
    color = "black"
    productColorEl.innerText = "Sort"
    image.src = images[0]
    console.log(size + ", " + color);
}

function white() {
    color = "white"
    image.src = images[3]
    productColorEl.innerText = "Hvid"
    productPriceEl.innerText = 100 + ",-";
    console.log(size + ", " + color);
}

// price
let productPriceEl = document.getElementById("productPrice")
let productPrice = 100 + ",-";
productPriceEl.innerText = productPrice

function updatePrice() {
    if (color === "black") {
        productPriceEl.innerText = 75
    } else {
        productPriceEl.innerText = 100
    }
}

// sizes
let size = "small"
let productSizeEl = document.getElementById("productSize")

function small() {
    size = "small"
    productSizeEl.innerText = "Small"
    if (color === "white") {
        productPriceEl.innerText = 100 + ",-";
    } else if (color === "black" && size === "small") {
        productPriceEl.innerText = 100 + ",-";
    }
    updatePrice()
    console.log(size + ", " + color);
}

function medium() {
    size = "medium"
    productSizeEl.innerText = "Medium"
    if (color === "black") {
        productPriceEl.innerText = 75 + ",-";
    } else {
        productPriceEl.innerText = 100 + ",-";
    }
    productSizeEl.innerText = "Medium"
    updatePrice()
    console.log(size + ", " + color);
}

function large() {
    size = "large"
    if (color === "black") {
        productPriceEl.innerText = 75 + ",-";
    } else {
        productPriceEl.innerText = 100 + ",-";
    }
    productSizeEl.innerText = "Large"
    updatePrice()
    console.log(size + ", " + color);
}