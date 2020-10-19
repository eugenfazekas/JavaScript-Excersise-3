'use strict';

var x = (...n) => {
	console.log(n[1])
};

x(1,2,3);

var x = function() {
	console.log(arguments[0])
};

x(1,2,3);

/*
var x = function() {
	this.val = 1;
	setTimeout(() =>  {
		this.val++;
		console.log(this.val)
	},1)
};
 
var xx = new x(); 
*/
/*
var x = function() {
	var that = this;
	this.val = 1;
	setTimeout(function() {
		that.val++;
		console.log(that.val)
	},1)
};
 
var xx = new x(); 
*/

/*
let b = 4;

let square = a => a * a;

let square2 = (a) => {return a * a};

let square3 = () => {return b * b};

console.log(square(2));

console.log(square2(2));

console.log(square3());

*/