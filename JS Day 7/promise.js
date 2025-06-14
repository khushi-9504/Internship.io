const promiseOne = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async Task 1")
  }, 1000);
});

promiseOne.then(function(){
  console.log("Task 1 completed");
})

// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("Async Task 2");
//     resolve();
//   },2000);
// }).then(function(){
//   console.log("Async Task 2 resolved");
// })

// const promiseThree = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("Async Task 3");
//     resolve({username: "abc", email: "abc@gmail.com"});
//   },3000);
// })

// promiseThree.then(function(user){
//   console.log(user);
//   console.log("Async Task 3 resolved");
// })

// const promiseFour = new Promise(function(resolve, reject){
//   let error=false;

//   if(!error){
//     resolve({username: "abc", password: "abc123"});
//   }
//   else{
//     reject('ERROR : Something went wrong!!');
//   }
// })

// promiseFour.then((user)=>{
//   console.log(user);
//   return user.username;
// }).then((username)=>{
//   console.log(username);
// }).catch((error)=>{
//   console.log(error);
// }).finally(()=>{console.log("Promise 4 is either resolved or rejected.");
// })

// const promiseFive = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     let error = false;

//     if(!error){
//       resolve({username: "abc xyz pqr", password: "abc#123"})
//     }
//     else{
//       reject('ERROR : Something went wrong');
//     }
//   },1000);
// });

// async function promiseFiveAsyncAwait(){
//   try{
//     const response = await promiseFive;
//     console.log(response);
    
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// promiseFiveAsyncAwait();

// async function getAllUsers(){
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
  return response.json();
}).then((data)=>{
  console.log(data);
  
})
.catch((error)=>{
  console.log(error);
});
