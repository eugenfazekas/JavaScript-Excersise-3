'use strict';

this.table = 'window table';
//console.log(window.table);

/*
const cleanTable = function(soap) {

	const innerFunction = (_soap) => {

		console.log(`cleaning ${this.table} using ${_soap}`);
	}

	innerFunction(soap);
	
};
*/

this.garage = {
	table: 'garage table'
};

let johnsRoom =  {
	table: 'johns table'
};

let createRoom = function(name) {
	this.table = `${name}s table`
}

createRoom.prototype.cleanTable = function(soap) {

	console.log(`cleaning ${this.table} using ${soap}`);
};

const jillsRoom = new createRoom('jill');
const johns2Room = new createRoom('john2');

/*
cleanTable.call(this,'some soap window');
cleanTable.call(this,'some soap window');
cleanTable.call(this.garage,'some soap garage');
cleanTable.call(johnsRoom,'some soap john');
cleanTable.call(jillsRoom,'some soap john');
cleanTable.call(johns2Room,'some soap john');
*/
this.garage2 =  {
	table2 : 'garage table2',
	cleanTable2() { return `Cleaning ${this.table2}`}
}

console.log('Console ' + this.garage.table);
console.log('Console ' + this.garage2.cleanTable2());


jillsRoom.cleanTable('some soap');
johns2Room.cleanTable('some soap');

