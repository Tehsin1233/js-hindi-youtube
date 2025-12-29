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

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// // console.log(Jsuser["Full name"])
// // console.log(Jsuser.mySym);
// console.log(Jsuser[mySym]);

// console.log(typeof Jsuser[mySym]);

Jsuser.email = "Hitesh@chatgpt.com"

// Object.freeze(Jsuser)

Jsuser.email = "hitesh@microsoft.com"
// console.log(Jsuser); 

// console.log(Jsuser.email)

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());


