
	$('#parent1').click(function() {
		console.log('parent1 clicked');
	});



	$('#child1').click(function() {
		console.log('child1 clicked');
	});

	var p = document.querySelector('#parent2');

	p.addEventListener('click', function() {
		console.log('parent2 clicked');
	},true);

	var c = document.querySelector('#child2');

	p.addEventListener('click', function() {
		console.log('child2 clicked');
	},true);




