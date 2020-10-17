var myArr = [
			 {num:5,str:'apple'},
			 {num:7,str:'cabbage'},
			 {num:1,str:'banana'}				
];

myArr.sort((val1,val2) => {
	if(val1.num > val2.num){
		return 1;
	} else {
		return -1;
	}
});

console.log(myArr);
/*

let add = (a,b) =>  a + b  ;

let multiply = (a,b) =>   a * b ;

let doWhatEver = (a,b) => console.log('Console1:' + `Here are your two numbers back ${a} , ${b}`);

let calc = (num1, num2, callback) => {
	if(typeof callback === 'function'){
	return callback(num1, num2);
	}
};

console.log(calc(2,2,add)); 

console.log(calc(2,4,multiply));

console.log(calc(2,4,doWhatEver));

console.log(calc(2,4,(a,b) => a - b ));
*/

/*
let x = () => console.log('I am called from inside a function');

let y = (callback) => {
	console.log('Do Something');
	callback();
} 

y(x); 
*/