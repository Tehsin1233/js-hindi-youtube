function sayMyName() {

// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);    
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result  
    return number1 + number2   
       
}

const result = addTwoNumbers(3, 5)

// console.log("Result :", result)

function LoginUserMessege(username = "sammy") {
    if(!username) {
        // console.log("Please enter a username");
        return
    }
    return ` ${username} just logged in`
}

// console.log(LoginUserMessege("hitesh"));
// console.log(LoginUserMessege(""));
// console.log(LoginUserMessege("hitesh"));


function calculatecartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculatecartPrice(200, 400, 500, 2000));

const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} price is ${anyobject.price}`);

}

// handleObject(user)
handleObject({
    username : "sam",
    price : 199
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 800, 600]));
