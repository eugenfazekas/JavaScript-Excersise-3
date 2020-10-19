const Car = function() {};

 Car.prototype = {
     print() {
         return " I'm a Car";
     }
 };

 const ToyCar = function() {};
 
 ToyCar.prototype.print = function() {
     return " I'm a toyCar";
 };

 const ToyTransformer = function (){} ;

 ToyTransformer.prototype = Object.create(ToyCar.prototype);

 ToyTransformer.prototype.print = function() {

    return "I'm a toyTransformer "
 };

 const toyota = new Car();

 const legoCar = new  ToyCar();

 const optimusPrim = new ToyTransformer();

 console.log(toyota.print());
 console.log(legoCar.print());
 console.log(optimusPrim.print());

 console.log(optimusPrim);

