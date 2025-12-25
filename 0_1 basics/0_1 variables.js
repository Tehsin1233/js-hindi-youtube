const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345" 
let accountstate;
accountCity = "Jaipur"

// accountId = 2
accountEmail = "hc@gmail.com"
accountPassword = "215489"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])
