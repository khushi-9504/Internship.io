const user = {
  name : "abc",
  email: "abc@gmail.com",
  isActive: true
}

// function createUser({ name: string, isPaid: boolean }) {

// }

// createUser({ name: "abc", isPaid: false })

let newUser = { name: "abc", isPaid: false, email: "h@h.com" }
// createUser(newUser)
//The above thing must not be allowed as there is a extra parameter, this is one of the weird behavior of objects in TS


//returning a object
function createCourse(): { name: string, price: number } {
    return { name: "ReactJS", price: 300 }
}

// type alias

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createuser(user: User): User {
//     return { name: '', email: '', isActive: true }
// }

// let result = createuser({ name: '', email: '', isActive: true });
// console.log(result);

type User = {
    readonly _id: string; // NO change
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
}

let myUser: User = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false
}

myUser.email = "change@gmail.com"
// myUser._id = "dah"
// the above can't be done

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: number
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export{}