"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "abc",
    email: "abc@gmail.com",
    isActive: true
};
// function createUser({ name: string, isPaid: boolean }) {
// }
// createUser({ name: "abc", isPaid: false })
var newUser = { name: "abc", isPaid: false, email: "h@h.com" };
// createUser(newUser)
//The above thing must not be allowed as there is a extra parameter, this is one of the weird behavior of objects in TS
//returning a object
function createCourse() {
    return { name: "ReactJS", price: 300 };
}
var myUser = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUser.email = "change@gmail.com";
