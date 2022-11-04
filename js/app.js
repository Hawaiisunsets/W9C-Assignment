let itemNames = [`Ping`, `Pong`, `Table`];
console.log(itemNames);

let itemPrices = [1, 2, 3];
console.log(itemPrices);

let inStock = [true, false, true];
console.log(inStock);

// First value would be the 2nd element of my Array.  If I wanted the 1st element then index is 0.
let itemName = itemNames[1];
console.log(itemName);

let itemPrice = itemPrices[1];
console.log(itemPrice);

// Push add an item to my Array.
itemNames.push(`Net`);

itemPrices.push(`4`);

inStock.push(`false`);

// Pop removed last item in my Array and created new variable
let lastitemName = itemNames.pop(3);
console.log(lastitemName);

let lastitemPrice = itemPrices.pop(3);
console.log(lastitemPrice);

let lastitemStock = inStock.pop(3);
console.log(lastitemStock);