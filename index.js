var total = require ('./src/cart')

var lineItems = [
    { id: 'item-1', title: 'Book1', price: 50, qty: 2 },
    { id: 'item-2', title: 'Book2', price: 80, qty: 1 },
]

var result = total(lineItems)

console.log('result')
// console.log('Hello');