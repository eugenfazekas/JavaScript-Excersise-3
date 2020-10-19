var counter = (function() {

	i = 1;

	return {
		get: function() {
			return i;
		},
		set: function(val) {
			i = val;
		} ,
		increment: function() {
			i++;
		}
	}

})();

console.log(counter.get());
counter.set(5);
counter.increment();
console.log(counter.get());

/*
function increment1(i) {
	console.log('Increment1 '+ (i+1))
	return i + 1;
}

var increment = function(i) {
	return i + 1;
}

increment1(2);

(function increment2(i) {
	console.log('Increment2 '+ (i+1))
	return i + 1;
}(4));

!function(){  console.log('Felkialtojel') }();
~function(){  console.log('Hullamjel')}();

*/