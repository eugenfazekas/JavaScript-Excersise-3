console.time('o')

const o = {};

for (let i =0; i < 1000000; i++) {

    o[i] = i;

}

console.timeEnd('o');


console.time('a')

const a = [];

for (let i =0; i < 1000000; i++) {

    a[i] = i;

}

console.timeEnd('a');


console.time('ain');
a[50000] = 50000;
console.timeEnd('ain');

console.time('oin');
o[50000] = 50000;
console.timeEnd('oin');


/*
const array3 = [1,2,3]
const obj = {}; 

obj[0] = 1;
obj[1] = 2;
obj[2] = 3;

console.log(obj);

console.log(array3);
*/

/*
const array2 = [];

array2['a'] = 'aval';

array2['b'] = 'bval';

for(let key in array2) {

    console.log(`${key} : ${array2[key]}`)

}
*/

/*
const array1 = [1,2,3];

array1[-1] = 0;

array1['hikey'] = 'hgivalue';

console.log(array1); 

*/