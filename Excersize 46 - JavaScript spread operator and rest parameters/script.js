
var dowhatever = ['have fun','have morefun','have even more fun'];

var life = ['born','learn to walk','learn js', ...dowhatever,'go to heaven'];

console.log(life);


var a = [1,2,3];

var b = [4,5,6];

a.push(...b);

console.log(a);

/*
var n = [1,2,3];

var x4 =function(){

    console.log(n);

};

x4.apply(null,n);

x4(1,2,3,4);
*/

/*
var n1 = [1,2,3];
var x3 = function(n1, ...n) {

    console.log(n1,n)

};

x3('a',n1);
 */


 /*
 var x1 = function(...n) {

    console.log(n);
 };


 x1(1,2,3,4,5);
*/



 /*

var x2 = function() {

    var args = Array.prototype.slice.call(arguments,0);
    var args = [].slice.call(arguments,0)
 };
 x2(1,2,3,4,5);
*/