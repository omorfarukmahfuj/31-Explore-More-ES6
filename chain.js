// data access
const data = [{ id: 1, name: 'Omor', address: 'Dhaka' }];
// console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    { id: 1, name: 'Lenovo Laptop', price: 65000 },
    { id: 2, name: 'Hp Laptop', price: 55000 },
  ]
}

// Second Product Price
// console.log(products.data[1].price);


const user = {
  id: 101,
  name: 'Sayem',
  address: {
    street: {
      first: '75/4, b, mohammadpur',
      second: 'kazipara-1100',
      third: 'Dhanmondi'
    },
    city: 'Dhaka',
    country: 'Bangladesh'
  }
}

// Second Address
// console.log(user.address.street.second);

const user2 = {
  id: 102,
  name: 'Mahir',
  address: {
    city: 'Dhaka',
    country: 'Bangladesh'
  }
}

console.log(user.address.street?.second); // Optional Chain
console.log(user2.address.street?.second); // Optional Chain