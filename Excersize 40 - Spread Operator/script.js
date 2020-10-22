
let x = [1,2,3,4];

//let y = Object.assign([],x);

let y = [...x];

console.log(y);

let a = [1,2,3,4];

let b = [5,6,7];

let c = [...a,...b];

console.log([...a,...b]);

console.log(a.concat(...b));

let alpha1 = ['a','b','c'];

let alpha2 = [a,b,c];

let arrfunc = function(...n){

    console.log(n);

}

arrfunc('a','b','c','d');

arrfunc(1,2,3,4,5,6,7,8,9,0);

arrfunc(alpha1);

console.log(Math.hypot(3,4)); //Pitagorasz

console.log(Math.min(...a));




 