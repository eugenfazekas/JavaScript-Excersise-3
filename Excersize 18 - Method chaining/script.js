var obj2 = function() {

	var i = 0;

	var add = function(j) {
		i += j;
		return this;
	}

	var subtract = function(j){
		i -= j;
		return this;
	}

	var  print = function() {

		console.log(i);
	}

	return {add:add, substract:subtract, print:print};

 }

 var x = new obj2();
 var xx = new obj2();
  
 x.add(4);
 x.substract(2);
 x.print();

xx.add(4).substract(2).print();
 
 /*

 var obj = function() {

	this.i = 0;

	this.add = function(i) {
		this.i += i;
		return this;
	}

	this.subtract = function(i){
		this.i -= i;
		return this;
	}

	this.print = function() {

		console.log(this.i);
	}
 }

 var x = new obj();
 var xx = new obj();
  
 x.add(4);
 x.subtract(2);
 x.print();

xx.add(4).subtract(2).print();

*/

