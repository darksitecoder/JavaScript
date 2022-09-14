let userName = "Sumit";
let userInbox = 0;

login();

// displayUserName();
// displayUserInbox();
    
function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }

    function displayUserInbox(){
        console.log(`You have ${userInbox} new massages`);
    }
}




