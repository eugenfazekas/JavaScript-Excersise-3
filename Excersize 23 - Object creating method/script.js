const Car = function(color) {
    this.color = color;
};

Car.prototype = {
    getColor() {
        return this.color;
    }
};

const ToyCar = function() {

};

ToyCar.prototype = Object.create(Car.prototype);

const LegoCar = new ToyCar();

console.dir(LegoCar instanceof ToyCar);

console.dir(LegoCar instanceof Car);

console.dir(LegoCar instanceof Object);

console.dir(ToyCar.prototype.isPrototypeOf(LegoCar));


