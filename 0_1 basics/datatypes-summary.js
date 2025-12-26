// Primitive

// 7 types : String, Number, Boolean, null, udefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetempt = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid)

// const bigNumber = 3458795121365n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
 let myobj = {
    name: "hitesh",
    age : 22,
}

const myfunction = function(){
    // console.log("hello world");
    
}

// console.log(typeof anotherid);

// +++++++++++++++++++++++++++++++++++++++++++


// STACK(Primitive), HEAP(Non - Primitive)

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode" 
console.log(anothername);
console.log(myYoutubename);


let userone = {
    email:"user@google.com",
    upi : "user@ybl"
}

let userTwo = userone
userTwo.email = "hitesh@google.com"

console.log(userone.email);
console.log(userTwo.email);
