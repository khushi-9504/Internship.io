// Object : 

// let mySymbol = Symbol('sym1');

// let myObject = {
// 	name : "abc",
// 	"full name" : "abc xyz",
// 	age : "10",
// 	isLoggedIn : true,
// 	email : "abc@gmail.com",
// 	loginDays : ["Monday", "Wednesday", "Saturday"],
// 	greeting : function(){
// 		console.log("Hello");
// 	},
// 	[mySymbol] : "%"
// }


// Methods : 

// assign(target, source) : To combine multiple objects into one
// keys() :
// values() :
// entries() :
// Object.freeze() :
// Object.hasOwnProperty() : 




let mySymbol = Symbol('sym1');

let myObject = {
	name : "abc",
	"full name" : "abc xyz",
	age : "10",
	isLoggedIn : true,
	email : "abc@gmail.com",
	loginDays : ["Monday", "Wednesday", "Saturday"],
	greeting : function(){
		console.log("Hello");
	},
	[mySymbol] : "%"
}

console.log(myObject);

console.log(myObject.name);
console.log(myObject["full name"]);

console.log(myObject.greeting);
console.log(myObject.greeting());


myObject.email = "abc.xyz@gmail.com";
console.log(myObject.email);

Object.freeze(myObject);

console.log(myObject.age);
myObject.age = 20;
console.log(myObject.age);
