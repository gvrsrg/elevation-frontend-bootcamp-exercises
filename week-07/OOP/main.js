class Vehicle {
    constructor(x, y, speed, fuel = 0) {
        this.x = x;
        this.y = y;
        this._speed = speed;
        this._fuel = fuel
        Vehicle.carsSold++;
    }

    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }
    static calculateMoney() {
        console.log("We've made " + Vehicle.carsSold * 30000 + " $.");

    }

    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }

    get speed() {
        return this._speed
    }

    set fuel(amount) {
        if (amount > 150) { return console.log("Too much") }
        if (amount < 0) { return console.log("Not reasonable") }
        this._fuel = amount
    }
    
    get fuel() {
        return this._fuel
    }
}
Vehicle.carsSold = 0;
car1 = new Vehicle(1, 2, 150);
car2 = new Vehicle(2, 2, 250);
car3 = new Vehicle(3, 3, 190);
car4 = new Vehicle(4, 4, 180);
Vehicle.getInfo()
Vehicle.calculateMoney()

car3.fuel = -2
car2.fuel = 300
car1.fuel = 150