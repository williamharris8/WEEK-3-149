console.log("CONNECTED");

const calculatePrice = (price, quantity) => price * quantity;

const getTax = (amount, taxRate) => amount * taxRate;

const subtotal = calculatePrice(15,4);
console.log("Subtotal:", subtotal);
console.log("Tax:", getTax(subtotal, 0.07));

function calculateStoreTax(amount) {
    const defaultTaxRate = 0.07;
    return getTax(amount, defaultTaxRate);
}

console.log(calculateStoreTax(100));