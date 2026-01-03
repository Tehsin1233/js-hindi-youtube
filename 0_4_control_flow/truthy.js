const userEmail = []

if (userEmail) {
    // console.log("Got User email");
    
}else {
    // console.log("Don't have User email");    
}

// Falsy Value

// false, 0, -0, bigint on, "", null, undefined, NaN

// Truthy  Value
// "0", 'false', " ", [], {}, function(){}, 

// if (userEmail.length === 0) {
//     console.log("Array is empty");    
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    // console.log("object is empty");    
}


// Nullish Coalescing Operator (??): nullundefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 110 ?? 10

    // console.log(val1);

// Terniary Operator

// condiition ? true : false 

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Less than 80"): console.log("more than 80");


