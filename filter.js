// filter selects elements based on a condition and return an array with the elements that fulfilled the condition.
const numbers = [1, 4, 5, 6, 8, 9];

const playersInchHeight = [75, 65, 67, 72, 55, 59];
const selected = playersInchHeight.filter(p => p % 2 === 0);
console.log(selected);

const friends = ['Sayem', 'Lisan', 'Mahir', 'Nazmul'];
const oddFriends = friends.filter(friend => friend.length > 5);
console.log(oddFriends);

