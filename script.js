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

function applyDiscount(total, discountCallback) {
    return discountCallback(total);
}

function studentDiscount(total) {
    return total * 0.90;
}

function seniorDiscount(total) {
    return total * 0.80;
}

console.log("Student:", applyDiscount(100, studentDiscount));
console.log("Senior:", applyDiscount(100, seniorDiscount));