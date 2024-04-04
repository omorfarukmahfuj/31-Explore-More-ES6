const numbers = [12, 10, 9, 8, 7, 6];

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus);

const half = numbers.map(num => num / 2);
console.log(half);


const friends = ['Sayem', 'Lisan', 'Mahir', 'Nazmul']
const length = friends.map(friend => friend.length);
console.log(length);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);