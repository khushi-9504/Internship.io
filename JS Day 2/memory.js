//Stack Memory
// let userOneState = "Gujarat";
// let userTwoState = userOneState;

// console.log(userOneState);
// console.log(userTwoState);

// userTwoState = "Maharashtra";

// console.log(userOneState);
// console.log(userTwoState);


//Heap Memory

let userOne = {
  name: "abc",
  email : "abc@gmail.com",
  country : "India"
}

let userTwo = userOne;

console.log(userOne);
console.log(userTwo);


userTwo.email = "user2@gmail.com";

console.log(userTwo);
console.log(userOne);
