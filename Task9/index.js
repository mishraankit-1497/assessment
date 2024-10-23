// Write an arrow function that divides two numbers.

const division = (num1, num2) => {
  return num1 / num2;
};

console.log(division(125, 5));
console.log(division(1000, 20));
console.log(division(87, 5));

// Use let and const to declare variables inside a block and log them to the console.

{
  let name = "Ravi";
  const value = 10;
  console.log(name);
  console.log(value);
}

// Create a message using template literals that includes a name and age.
const name = "Ankit";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
