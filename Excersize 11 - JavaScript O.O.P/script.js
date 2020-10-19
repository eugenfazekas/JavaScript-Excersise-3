var Pizza = function() {

	var crust = 'thin'; //private
	var toppings = 3;

	var getToppings = function() {
		return toppings;
	};
	var getCrust = function() {
		return crust;
	};

	var tmp = {};

	tmp.getToppings = getToppings;
	tmp.getCrust = getCrust;

	return tmp;
	
};

var PizzaA = new Pizza();

console.log(PizzaA.getToppings());
console.log(PizzaA.getCrust());

/*
var Pizza = function() {

	this.crust = 'thin';
	this.toppings = 3;
	this.hasBacon = true;

};

var PizzaA = new Pizza();
var PizzaB = new Pizza();

PizzaB.crust = 'pan';

console.log(PizzaA.crust);
console.log(PizzaB.crust);

console.log(PizzaB.constructor);

console.log(PizzaB instanceof Pizza);
*/
/*
var Pizza = {
	crust:'thin',
	toppings:3,
	hasBacon:true,
	howmanyToppings: function() {
		return this.toppings;
	}
};

console.log(Pizza.hasBacon);
console.log(Pizza.howmanyToppings());

Pizza.price = '12$';

console.log(Pizza);

delete(Pizza.crust); //delete property

console.log(Pizza);
*/
/*
var x = new Object(); // new Object
var y = {};           // new Object
*/
 