'use strict';

var sayWhat = function(a) {

	return function(b) {

		return function(c) {

			console.log('saying ' + a + ' to ' + b + ' using ' + c );
		}
	}
};

sayWhat('hello')('toFriends')('javaScript');

var sayHi = sayWhat('hi');
var sayHiToMe = sayHi('me');
var sayHiToMeUsingNothing = sayHiToMe('nothing');


/*
var avg = function(...n){
	let tot = 0;
	for(let i = 0; i < n.length; i+=1){
		tot += n[i];
	}
	return tot/n.length;
}

var spiceUp = function(fn, ...n) {
	return function(...m){
	return	fn.apply(this,n.concat(m));
	}
};

var doAvg = spiceUp(avg, 1,2,3);

console.log(doAvg(26)); 
*/

/*
var add = function(a) {
	return function(b) {
		return a + b;
	}
};

var addToFive = add(5);

var sum = addToFive(10);

console.log(sum);
*/