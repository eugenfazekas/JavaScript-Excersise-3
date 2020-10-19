'use strict';

let Car = function(_color){

    this.setColor = function(color){
        _color = color;
    };

    this.getColor = function () {
        return _color;
    }
}

let redCar =  new Car('red');


console.log(redCar._color);
console.log(redCar.getColor());


/*

let Car = function(color){
    if(!new.target) throw 'Car() must be called with new'; 
    this.color = color;
}

let redCar =  new Car('red');
let blueCar = new Car('blue');

console.log(redCar.color);
console.log(blueCar);

*/

