const { jsx } = require("react/jsx-runtime")

1 //  Singleton
// Object.create

//  object literals

const mySym = Symbol("key1")
const Jsuser = {
    name: "hitesh",
    "Full name": "Hitesh Choudhary",
    [mySym] : "mykey1",
    age : 18,
    location: "jaipur" ,
    email : "hitesh@google.com",
    isLoggedIn : false,
    LastLoginDays: ['Monday','Saturday']
}

console.log(Jsuser.email)
// console.log(Jsuser["email"])
// // console.log(Jsuser["Full name"])
// // console.log(Jsuser.mySym);
// console.log(Jsuser[mySym]);

// console.log(typeof Jsuser[mySym]);

jsx.email = "Hitesh@chatgpt.com"
console.log(Jsuser.email)
