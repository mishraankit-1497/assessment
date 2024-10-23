// Write a function that uses the rest operator to accept any number of arguments and returns their product.
const productOfNumbers = (...nums) => {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  return product;
};

console.log(productOfNumbers(10, 20, 300));

// Use the spread operator to copy an object {a: 1, b: 2} into a new object.
const objA = { a: 1, b: 2 };
const objB = {...objA}
console.log(objB)