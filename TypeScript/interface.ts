interface User {
    readonly dbId: number,
    email: string, 
    userId: number,
    googleId?: string
    startTrial: () => string
    // Just another way to declare functions
    // starTrial(): string
    getCoupon(couponName: string): number
}

//reopening of interface
interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}
const hitesh: User = {
    dbId: 9, email: "h@h.com", userId: 9, startTrial: () => {
        return "hello"
    }, getCoupon: (couponName: "HELLO") => {
        return 10
    },
    githubToken: "https"
}

const hiteshAdmin: Admin = {
    role: "admin",
    dbId: 9, email: "h@h.com", userId: 9, startTrial: () => {
        return "hello"
    }, getCoupon: (couponName: "HELLO") => {
        return 10
    },
    githubToken: "https"
}

export { }