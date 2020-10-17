let cleanRoom = () => {
	return new Promise((resolve, reject) => 
			{ resolve ('Cleaned The Room, ');
	});
};

let removeGarbage = (message) => {
	return new Promise((resolve, reject) =>
			 { resolve (message +' Garbage removed, ');
	});
};

let winIcecream = (message) => {
	return new Promise((resolve, reject) =>
			 { resolve (message +' Won Icecream...');
	});
};

Promise.race([cleanRoom(),removeGarbage(),winIcecream()])
	.then(() => console.log('One of them is finished'));

/*
Promise.all([cleanRoom(),removeGarbage(),winIcecream()])
	.then(() => console.log('All finished'));
*/
/*
cleanRoom().then( (result) => {return removeGarbage(result) })
		   .then( (result) => {return winIcecream(result) })
		   .then( (result) => console.log('Finished: ' + result));
*/
/*
let promiseToCleanTheRoom = new Promise((resolve, reject) => {

	let isClean = false;

	if(isClean){
		resolve('Tiszta');
	}else{
		reject('Koszos');
	}
});

promiseToCleanTheRoom
			.then(fromResolve => console.log('A szoba ' + fromResolve))
			.catch(err => console.log('A szoba ' +err));

*/			