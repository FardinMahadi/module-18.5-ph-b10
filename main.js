const num1 = 121;
const num2 = 122;
const num3 = 123;
const num4 = 124;

const numbers = [121, 122, 123, 124];

const friends = ["Abul", "Babul", "Cabul", "Dabul"];
const passed = [true, false, true, false];

const mixedArray = [12, "Alahbad", true, 45.566];

console.log(numbers);
console.log(friends);
console.log(passed);
console.log(mixedArray);

console.log(numbers.length);

// push, pop, shift and unshift
// push
const ages = [];
const number = [12, 831, 31, 54];

console.log(number);
number.push(32, 54);
console.log(number);

// pop
console.log(friends);
friends.push("Eabul");
console.log(friends);
friends.pop();
const out1 = friends.pop();
console.log(out1);
console.log(friends);

// shift
console.log(friends);
friends.shift();
console.log(friends);
friends.unshift("Fabul");
console.log(friends);
