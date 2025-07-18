// Cau 1
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++)
    if (number % i === 0) return false;

  return true;
}

// Cau 2
function sumOfOdd(arr) {
  return arr.reduce((acc, curr) => (curr % 2 !== 0 ? acc + curr : acc), 0);
}

// Cau 3

let msg = "Nhập một dãy các số cách nhau bằng dấu ','";

let input = prompt(msg);
let arr = input.split(",").map((elm) => Number(elm));

console.log(...arr.filter((elm) => elm % 2 === 0));

console.log(Math.max(...arr));

console.log(arr.filter((elm) => elm > 0));
