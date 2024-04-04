// forEach don't return anything
const numbers = [1, 4, 5, 6, 8, 9];
const result = numbers.forEach(n => console.log(n));
console.log(result);

const result2 = numbers.forEach(n => {
  // More statements
});