let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(elements) 
{
    return elements >= 18;    
}


function print(elements){
    console.log(elements);
} 