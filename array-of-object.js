const products = [
  { id: 1, name: 'Lenovo Laptop', price: 65000 },
  { id: 2, name: 'Hp Laptop', price: 55000 },
  { id: 3, name: 'Walton Laptop', price: 40000 },
  { id: 4, name: 'Dell Laptop', price: 35000 },
]

// map
const names = products.map(product => product.name);
const prices = products.map(product => product.price);
console.log(names);
console.log(prices);

// forEach
products.forEach(product => console.log(product.id));

// filter
const expensive = products.filter(product => product.price > 50000);
console.log(expensive);

// find
const affordable = products.find(product => product.price < 50000);
console.log(affordable);

// reduce
const total = products.reduce((acum, current) => acum + current.price, 0);
console.log(total);