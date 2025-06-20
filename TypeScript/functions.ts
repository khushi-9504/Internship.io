function addTwo(num:number){
  return num + 2;
}

let result = addTwo(5);
// let result = addTwo("5"); - Error
console.log(result);

function signUpUser(name: string, email: string, isPaid: boolean){
  // console.log(name, email, isPaid);
}

signUpUser("abc xyz", "user@example.com", true);

// let loginUser = (name: string, email: string, isPaid: boolean) => {
//   console.log(name,email,isPaid);
// }

// loginUser("abc xyz", "user@example.com"); - throws error expects 3 arguments

let loginUser = (name: string, email: string, isPaid: boolean = true) => {
  console.log(name,email,isPaid);
}

loginUser("abc xyz", "user@example.com");

// for functions to return a particular type following example

function addTwo2(num: number) :number{
    // num.toUpperCase() this shouldn't be allowed. its because of any
    return num + 2
}

let result2 = addTwo2(5);
console.log(result2);


// Functions returning two or more types of return types can also be dealt with later

// function getValue(myVal: number): boolean {
//     if (myVal>5) {
//         return true
//     }
//     return myVal
// }


const getHello = (s: string) => {
    return "Hello"
}

const heros = ["thor", "spiderMan", "ironMan"]

heros.map((hero):string => {
    return `hero is ${hero}`
})


function consoleError(errMsg: string): void {
    console.log(errMsg);
    
}

function handleError(errMsg: string): never {
    throw new Error(errMsg)
    // never is used when it is exception or error throw or stop of execution of program
}


export {}