let userName = "Bro";
let items = 3;
let total = 75;

// console.log("Hello",userName);
// console.log(items);
// console.log(total);


// console.log(`Hello ${userName}`);
// console.log(`You have $${items}`);
// console.log(`Your total is ${total}`);

let text =`Hello ${userName} <br>
You have $${items} <br>
Your total is ${total}`;


document.getElementById("myLabel").innerHTML = text;