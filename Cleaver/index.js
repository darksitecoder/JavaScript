// console.log('Hello world');

// console.log('Sumit Pal ')

// Array

//Objects

// const person = {
//     name: 'Leonardo',
//     shirt: 'white'
// }

// console.log(person.name);
// console.log(person.shirt );

// console.log(person['name']);
// console.log(person['shirt']);

// person['phone'] = '578516645444';

// console.log(person.phone);
// console.log(person);

//person 2

// const person2 = {
//     name: 'Qazi',
//     shirt: 'black'
// }

// console.log(person2.name );

// const introducer = (name, shirt) => {
//     const person ={
//     name: name,
//     shirt: shirt,
//     assets: 100000,
//     liability: 50000,
//     netWorth: function (){
//         return this.assets - this.liability
//     }
// }

//     const intro = `HI, my name is ${person.name} and the color of my shirt is ${person.shirt} and my networth is $${person.netWorth()} USD`

//     return intro
// }

// console.log(introducer('Qazi', 'black'))

// console.log(introducer('Leonardo', 'white'))

// DOM manupulation

// console.log('Hello');

// let title = document.getElementById('title')

// console.log('before: ',title.innerText)

// let message = 'Goodbey my lover'
// title.innerText = message;

// console.log('after: ',title.innerText)

// title.innerHTML = `<p>${message}</p>`

// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')

// redDiv.onclick = () => title.innerHTML = `<h1 style="background-color:red;">Red</h1>`
// yellowDiv.onclick = () => title.innerHTML = `<h1 style="background-color:yellow;">Yellow</h1>`
// greenDiv.onclick = () => title.innerHTML = `<h1 style="background-color:green;">Green</h1>`

const squares = document.querySelectorAll(".colorSquare");
// console.log(squares)

const timesClicked = { red: 0, yellow: 0, green: 0 };
squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
  };
});


function clearScores() {
  squares.forEach(square => {square.innerText = ''})
}

const clearGameDiv = document.getElementById('clear-game')
clearGameDiv.onclick = () => clearScores()

// console.log(squares[0].value)
