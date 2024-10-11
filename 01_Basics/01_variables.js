const accountId = 412321;
let accountEmail = "Ak@google.com";
var accountPassword = "12345678";
accountCity = "Jaipur";
let accountState;

//accountId = 2;    //This is not allowed as we are making changes to the constant variable

accountEmail = "ap@gmail.com";
accountPassword = "87654321";
accountCity = "Delhi";


console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and function scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
