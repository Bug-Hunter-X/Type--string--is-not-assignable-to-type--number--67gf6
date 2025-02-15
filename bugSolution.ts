function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  return numA + numB;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6
let result3 = addSafe("5", "3");
let result4 = addSafe(5, "3");

console.log(result1); // Output: 8
console.log(result2); // Output: 6
console.log(result3); // Output: 8
console.log(result4); // Output: 8