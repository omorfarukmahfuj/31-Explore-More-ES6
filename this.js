class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`Sleeping now ${this.name}`);
  }
}

const person1 = new Person('Omor', 20);
console.log(person1);
person1.sleep();


const person2 = new Person('Faruk', 20);
console.log(person2);
person2.sleep();