let itemNames = [`Ping`, `Pong`, `Table`];
console.log(itemNames);

let itemPrices = [1, 2, 3];
console.log(itemPrices);

let inStock = [true, false, true];
console.log(inStock);

let itemName = itemNames[1];
console.log(itemName);

let itemPrice = itemPrices[1];
console.log(itemPrice);

itemNames.push(`Net`);
console.log(itemNames[3]);

itemPrices.push(`4`);
console.log(itemPrices[3]);

inStock.push(`false`);
console.log(inStock[3]);

let lastitemName = itemNames.pop(3);
console.log(lastitemName);

let lastitemPrice = itemPrices.pop(3);
console.log(lastitemPrice);

let lastitemStock = inStock.pop(3);
console.log(lastitemStock);