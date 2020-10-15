const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// filter
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

// find
const foundItem = items.find((item) => {
  return item.name === "Book";
});
items.forEach((item) => console.log(item.name));

// some
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});

// every
const hasInexpensiveItems2 = items.every((item) => {
  return item.price <= 1000;
});
console.log(hasInexpensiveItems2);

// reduce
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

// includes
const numbers = [2, 7, 4, 9, 3];
const includesTwo = numbers.includes(7);
console.log(includesTwo);
