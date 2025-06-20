"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var abc = { name: "abc", id: 1 };
abc = { username: "abcAdmin", id: 2 };
//UNION Narrowing
function getDBId(id) {
    // id.toLowerString(); - this is wrong as it can be either num or str
    //Do the following to correct
    if (typeof id === "string") {
        // all string operation can be used
        id.toLowerCase();
    }
}
var data1 = [1, 2, 3];
var data2 = ["1", "2", "3"];
// below can be either a string array or number array purely but cant include both
var data3 = [1, 2, 3];
// both can be included
var data4 = [1, "2", "3", 4];
