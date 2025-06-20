"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
var result = addTwo(5);
// let result = addTwo("5"); - Error
console.log(result);
function signUpUser(name, email, isPaid) {
    // console.log(name, email, isPaid);
}
signUpUser("abc xyz", "user@example.com", true);
// let loginUser = (name: string, email: string, isPaid: boolean) => {
//   console.log(name,email,isPaid);
// }
// loginUser("abc xyz", "user@example.com"); - throws error expects 3 arguments
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    console.log(name, email, isPaid);
};
loginUser("abc xyz", "user@example.com");
// for functions to return a particular type following example
function addTwo2(num) {
    // num.toUpperCase() this shouldn't be allowed. its because of any
    return num + 2;
}
var result2 = addTwo2(5);
console.log(result2);
// Functions returning two or more types of return types can also be dealt with later
// function getValue(myVal: number): boolean {
//     if (myVal>5) {
//         return true
//     }
//     return myVal
// }
var getHello = function (s) {
    return "Hello";
};
var heros = ["thor", "spiderMan", "ironMan"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
    // never is used when it is exception or error throw or stop of execution of program
}
