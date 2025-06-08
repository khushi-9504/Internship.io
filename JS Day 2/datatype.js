let numberData = 123;
let stringData = "Hello, World!";
let booleanData = true;
let nullData = null;
let undefinedData = undefined;
let stateData;
let mixData = Number("abc");
let symbolData = Symbol(123);

let arrayData = ["Demo", 1, true, 1.5];

let studentObject = {
  name: "abc",
  age: 20,
  address: "xyz",
  hobbies: ["reading", "swimming"]
}

function add(a,b){
  // console.log (a + b);
  return a+b;
}


console.log(typeof numberData);
console.log(typeof stringData);
console.log(typeof booleanData);
console.log(typeof nullData);
console.log(typeof undefinedData);
console.log(typeof stateData);
console.log(typeof mixData);
console.log(typeof symbolData);
console.log(typeof NaN);
console.log("Reference Data type");
console.log(typeof arrayData);
console.log(typeof studentObject);
console.log(typeof add);

