class Car{

    static numberOfCars = 0;
    constructor(model) {
        this.model = model;
        Car.numberOfCars += 1;
    }


    static startRace() {
        console.log("3......2......1..Go!")
    }
}

const car1 = new Car("Mustang");
const car2 = new Car ("Corvette");
const car3 = new Car("BMW");
const car4 = new Car("Farari");

console.log(Car.numberOfCars);

Car.startRace();