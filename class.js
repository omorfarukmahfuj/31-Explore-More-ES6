const products = [
  { id: 1, name: 'Lenovo Laptop', price: 65000 },
  { id: 2, name: 'Hp Laptop', price: 55000 },
  { id: 3, name: 'Walton Laptop', price: 40000 },
  { id: 4, name: 'Dell Laptop', price: 35000 },
]

// has some properties, method 
class Product {
  country = 'Bangladesh';
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

const lenovo = new Product('Lenovo')
console.log(lenovo);
lenovo.speak('JavaScript')

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log('Sir is teaching JavaScript');
  }
}

const sir = new Teacher('Omor', 'JavaScript');
console.log(sir);

const sir2 = new Teacher('Faruk', 'English');
console.log(sir2);