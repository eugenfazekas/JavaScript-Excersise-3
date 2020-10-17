for(let i = 0; i < 30; i++){
	setTimeout ( () => {
		console.log(i);
	}, i * 1000); 
}

console.log('after the loop');

/*
let f = () => {
	let i = 1;
	let j = 2;
	return () => {
		console.log(i);
		console.log(j);
	}
};

console.dir(f());

*/