const myArray = [1,2,3,4,5];

console.log(myArray.length);
console.log(myArray);

console.log(myArray.push(6));
console.log(myArray);

console.log(myArray.pop());
console.log(myArray);

console.log(myArray.unshift(0));
console.log(myArray);

console.log(myArray.shift());
console.log(myArray);

console.log(myArray.slice(0,3));
console.log(myArray);

console.log(myArray.splice(1,0,7,8));
console.log(myArray);

console.log(Array.isArray(myArray));

const newArray = [1,2,3,[4,5,6],[7,8,[9,10,11]]];
console.log(newArray.flat(Infinity));



