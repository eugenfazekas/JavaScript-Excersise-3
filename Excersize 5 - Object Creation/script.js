var peopleDynamicProto = function(name,age,state) {

	this.age = age;
	this.name = name;
	this.state = state;

	if(typeof this.printPerson !== 'function'){
		peopleDynamicProto.prototype.printPerson = function() {

		console.log(this.name +', ' + this.age + ', '+ this.state);
		};
	}
};

var person1 = new peopleDynamicProto('John', 24, 'CA');
var person2 = new peopleDynamicProto('Kim', 25, 'SC');

person1.printPerson();
person2.printPerson();


/*
var peopleProto = function() {

	peopleProto.prototype.age = 0;
	peopleProto.prototype.name = 'no name';
	peopleProto.prototype.city = 'no city';

	peopleProto.prototype.printPerson = function() {

		console.log(this.name +', ' + this.age + ', '+ this.city);
	}

};

var person1 = new peopleProto(); 
//person1.name = 'John';
person1.age = 24;
person1.city = 'Los Angeles';

var person2 = new peopleProto(); 
person2.name = 'Kim';
person2.age = 28;
person2.city = 'Chicago';

person1.printPerson();
person2.printPerson();

var boolean1 = 'name' in person1;
console.log('If name exist: '+ boolean1);
console.log(person1.hasOwnProperty('name'));

*/


/*
var poepleConstructor = function(name,age,state) {
	
	this.name = name;
	this.age = age;
	this.state = state;
	this.printPerson = () => console.log(this.name +', ' 
	+ this.age + ', '+ this.state) ;

};

var person1 = new poepleConstructor('John', 24, 'CA');
var person2 = new poepleConstructor('Kim', 25, 'SC');

person1.printPerson();
person2.printPerson();
*/

/*
var poepleFactory = function(name,age,state) {

	var temp = {};
	temp.age = age;
	temp.name = name;
	temp.state = state;

	temp.printPerson = () => console.log(temp.name +', ' 
	+ temp.age + ', '+ temp.state) ;

	return temp;
};

var person1 = poepleFactory('John', 24, 'CA');
var person2 = poepleFactory('Kim', 25, 'SC');

person1.printPerson();
person2.printPerson(); 
*/