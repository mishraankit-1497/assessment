// Create a class Person with properties firstName and lastName
// and a method fullName() that returns the full name.
// Create two instances of the Person class and call their fullName() methods.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const obj1 = new Person('Ankit', 'Mishra');
const obj2 = new Person('Ravi', 'Sharma');
console.log(obj1.fullName());
console.log(obj2.fullName());
