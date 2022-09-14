const car = {
    model: "Musting",
    color: "red",
    year: 2023,

    drive : function (){
        console.log("You drive the car");

    },
    brake : function (){
        console.log("You step on the brakes");
    }
}

const car1 = {
    model: "Corvette",
    color: "black",
    year: 2024,

    drive : function (){
        console.log("You drive the car");

    },
    brake : function (){
        console.log("You step on the brakes");
    }
}

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);

car1.drive();
car1.brake();