const shoppingCart = [
    { name: "shirt", price: 1200, quantity: 3 },
    { name: "pant", price: 1800, quantity: 2 },
    { name: "shoe", price: 2700, quantity: 4 },
    { name: "belt", price: 500, quantity: 2 }
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const product = products[i];
        sum = sum + product.price * product.quantity;
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log(expense);