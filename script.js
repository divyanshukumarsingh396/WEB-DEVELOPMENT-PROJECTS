const userLoggedIn =true
const debitCard = true
const loggedFromGoogle = false
 const loggedFromEmail = true

 if(userLoggedIn && debitCard && 2==3){
    console.log("allow to buy course");
    
 }
 if(loggedFromGoogle || loggedFromEmail){
    console.log("user logged in");
    
 }