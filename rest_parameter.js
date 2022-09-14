let a = 10;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(b, d, a, c, e));

// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number
//     }
//     return total;
// }


function sum(x,y,z, ...numbers){
    let total = 0;
    let mult = 0;
    for(let number of numbers){
        total += number;
        mult = x * y * z;
    }
    return total + " and " + mult;
}