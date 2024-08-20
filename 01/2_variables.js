const accountId=1234
let accountmail="ssnkr@gmail.com"
var accountpassword="1221"
accountcity="agartala"
let accountstate;

//accountId=2 // not allowed for const
accountmail="massimo@gmail.com"
accountpassword="321"
accountcity="shillong"

console.log(accountId);
/* 
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountmail,accountpassword,accountcity,accountstate]);
