const person = {
  name: 'Omor',
  job: 'Web Developer',
  3: 'third',
  'key-word': true

}
const prop = 'job';
console.log(person.job);
console.log(person['job']);
console.log(person[prop]);


// console.log(person.3); this will give an error
console.log(person['3']);
console.log(person["key-word"]);