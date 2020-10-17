var obj1 = {num:2};
var obj2 = {num:5};
var obj3 = {num:2};

var arr = [1,2];

var addToTHis = function(a,b) {
	return this.num + a + b;
};

var bound = addToTHis.bind(obj3);

console.log('Call '+ addToTHis.call(obj1,1,2,4));

console.log('Apply '+ addToTHis.apply(obj2,arr));

console.log('Bind ' + bound(1,5));
