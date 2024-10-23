// Write a function that checks if a number is even or odd.
const checkEvenOrOdd = (num) => {
  return num % 2 === 0 ? num + "-> Even" : num + "-> Odd";
};

console.log(checkEvenOrOdd(0));
console.log(checkEvenOrOdd(12));
console.log(checkEvenOrOdd(5));
console.log(checkEvenOrOdd(87));
console.log(checkEvenOrOdd(110));

//Create a program that prints numbers from 1 to 50 but skips numbers divisible by 5.

const printNumbers = (start, end) => {
  const numbers = [];
  for (let i = start; i <= end; i++) {
    if (i % 5 !== 0) {
      numbers.push(i);
    }
  }
  return numbers;
};

console.log(printNumbers(1, 50));
