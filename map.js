// map loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally return you the array 

const numbers = [4, 5, 6, 7, 8, 9];

/*
const doubled = [];
for (const num of numbers) {
  const double = num * 2;
  doubled.push(double);
}
console.log(doubled);
*/

// Map
function doubleIt(num) {
  return num * 2;
}
const result = numbers.map(doubleIt);
// console.log(result);

// Map using arrow call back function
const doubleItArrow = num => num * 2;
const output = numbers.map(doubleItArrow);
// console.log(result);

// More Short
const output2 = numbers.map(n => n * 2);