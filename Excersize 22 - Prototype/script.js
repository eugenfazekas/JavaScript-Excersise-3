let Car = function(color) {
    this.color = color;
};

 Car.prototype.getColor = function() {
     return this.color;
 }

 Car.prototype.toString = function() {
     return `color:${this.color}`;
 }

 Object.prototype.toString = function() {
    return `color:${this.color}`;
}

redCar = new Car('red')

 console.log(redCar.getColor());

 console.log(redCar.toString());

