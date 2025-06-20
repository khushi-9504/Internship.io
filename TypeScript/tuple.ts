// const user: (string|number)[] = [1, "hc"]

// when restriction on position like number must come after string.

let user: [string, number, boolean]
// order of the types must be same
user = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 132]

type User = [number, String]

const newUser: User = [112, "example@yahoo.com"]

// Wierd behavious of tuples
newUser.push("Demo");

console.log(newUser);

export{}