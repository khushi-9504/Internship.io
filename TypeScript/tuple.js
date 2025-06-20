// const user: (string|number)[] = [1, "hc"]
// when restriction on position like number must come after string.
var user;
// order of the types must be same
user = ["hc", 131, true];
var rgb = [255, 123, 132];
var newUser = [112, "example@yahoo.com"];
// Wierd behavious of tuples
newUser.push("Demo");
console.log(newUser);
