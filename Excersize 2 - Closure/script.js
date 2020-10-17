var addTo = (passed)  => {
	var add = (inner) => {
		return passed + inner;
	};
	return add;
};

var addThree = addTo(3);
var addFour = addTo(4);

console.log(addThree(2));
console.log(addFour(1));


/*
var passed = 3;

var addTo = () => {
	var inner = 2;
	return passed + inner;
};

console.log(addTo());

var passed = 4;

console.log(addTo());

*/