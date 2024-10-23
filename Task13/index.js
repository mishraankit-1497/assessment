//Create a base class Vehicle with a method move() that logs "The vehicle is moving."
class Vehicle {
  move() {
    console.log("The vehicle is moving.");
  }
}

//Create a subclass Car that inherits from Vehicle and adds a method honk() that logs "The car honks."
class Car extends Vehicle {
  honk() {
    console.log("The car honks.");
  }
}

//Create an instance of Car and call both methods.
const car = new Car();
car.move()
car.honk();
