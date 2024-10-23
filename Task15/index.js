// Create a constructor function Dog that takes in breed and age as parameters and initializes them.
// Add a method bark() that logs "Woof!".
class Dog {
  constructor(breed, age) {
    this.breed = breed;
    this.age = age;
  }

  bark() {
    console.log("Woof!");
  }
}

//Instantiate two different Dog objects and call their bark() methods.
const obj1 = new Dog("BullDog", 8);
const obj2 = new Dog("Boxer", 4);
console.log(obj1.breed, obj1.age);
obj1.bark();
console.log(obj2.breed, obj2.age);
obj2.bark();
