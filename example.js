// example_bug.js

// Function with a small bug
function multiply(a, b) {
  // Intentional mistake: returning addition instead of multiplication
  return a + b;
}

console.log(multiply(3, 4));

// Add some extra lines so Ellipsis has enough context
function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}
