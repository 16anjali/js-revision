const accountId = 144533
let accountEmail = "tiwarianjali1612@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"

// accountid = 2 can't change
accountEmail = "anjali1612@gmail.com"
accountPassword = "987456"
accountCity = "Pune"


console.log(accountId);

console.table([accountEmail, accountPassword, accountCity])

// Prefer not to use var 
// bacause of issue in block scope and functional scope