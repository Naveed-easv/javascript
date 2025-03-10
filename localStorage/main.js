let textEl = document.getElementById("text")
let buttonEl = document.getElementById("button")
let inputEl = document.getElementById("input")

let inputAmount = localStorage.getItem("amount")
textEl.innerText = inputAmount

function saveText() {
    localStorage.setItem("amount", inputEl.value)
    let inputAmount = localStorage.getItem("amount")
    textEl.innerText = inputAmount
}
