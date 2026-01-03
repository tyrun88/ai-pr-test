// heavyExample.js

// Function with a deliberate bug
function multiplyArray(arr) {
    let result = 0; // Bug: should start from 1
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i]; // Bug: using *= with 0, always returns 0
    }
    return result;
}

// Function with style/complexity issues
function messyFunction(a,b,c,d,e,f,g,h) {
  return a+b-c*d/e+f-g+h; // Hard to read
}

// Call functions
console.log(multiplyArray([2,3,4]));
console.log(messyFunction(1,2,3,4,5,6,7,8));
