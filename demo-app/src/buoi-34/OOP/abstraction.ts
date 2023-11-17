abstract class Vehicle {
    abstract start(): void;
    abstract stop(): void;
}

class Car extends Vehicle {
    start() {
        console.log("Car starting...");
    }

    stop() {
        console.log("Car stopping...");
    }
}

class Bike extends Vehicle {
    start() {
        console.log("Bike starting...");
    }

    stop() {
        console.log("Bike stopping...");
    }
}

var x = new Bike();
x.start()
