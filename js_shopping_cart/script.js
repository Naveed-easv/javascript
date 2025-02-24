let product1Name = "Bord"
let product1Price = 1000
let product1Amount = 5
console.log("Produkt 1:",product1Name)

let product1TotalPrice = product1Price * product1Amount
console.log("Pris:",product1TotalPrice,"kr.")
console.log("Antal:",product1Amount,"stk.")

let product2Name = "Stol"
let product2Price = 250
let product2Amount = 10
console.log("Produkt 2:",product2Name)

let product2TotalPrice = product2Price * product2Amount
console.log("Pris:",product2TotalPrice,"kr.")
console.log("Antal:",product2Amount,"stk.")

let totalProductAmount = product1Amount + product2Amount
console.log("Samlet antal:",totalProductAmount,"stk.")

let totalProductPrice = product1TotalPrice + product2TotalPrice
console.log("Samlet pris:",totalProductPrice,"kr.")