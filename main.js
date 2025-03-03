let images = [
    "media/black-front.png",
    "media/black-back.png",
    "media/black-side.png",
    "media/white-front.png",
    "media/white-back.png",
    "media/white-side.png"
]

// image
let imageIndex = 0;
let image = document.getElementById("productImage");
let productSaleEl = document.getElementById("productSale");

function updateImage() {
    image.src = images[imageIndex];
}

// update price continously
function updatePrice() {
    if (color === "black" && (size === "medium" || size === "large")) { // check parameters for when to change the price
            productPriceEl.innerText = 75 + ",-";
    } else {
        productPriceEl.innerText = 100 + ",-";
    }
    // display "on sale" message
    if (productPriceEl.innerText === "75,-") { 
        productSaleEl.style.display = "block";
    } else {
        productSaleEl.style.display = "none";
    }
}

// colors
let color = "";
let productColorEl = document.getElementById("productColor");

function black() {
    color = "black";
    productColorEl.innerText = "Sort";
    imageIndex = 0;
    updateImage();
    updatePrice();
}

function white() {
    color = "white";
    imageIndex = 3;
    productColorEl.innerText = "Hvid";
    productPriceEl.innerText = 100 + ",-";
    updateImage();
    updatePrice();
}

// price
let productPriceEl = document.getElementById("productPrice");
let productPrice = 100 + ",-";

// sizes
let size = "";
let productSizeEl = document.getElementById("productSize");
productSizeEl.innerText = "";

function small() {
    size = "small"
    productSizeEl.innerText = "Small"
    if (color === "white") {
        productPriceEl.innerText = 100 + ",-";
    } else if (color === "black" && size === "small") {
        productPriceEl.innerText = 100 + ",-";
    }
    updatePrice();
}

function medium() {
    size = "medium";
    productSizeEl.innerText = "Medium";
    updatePrice();
}

function large() {
    size = "large";
    productSizeEl.innerText = "Large";
    updatePrice();
}