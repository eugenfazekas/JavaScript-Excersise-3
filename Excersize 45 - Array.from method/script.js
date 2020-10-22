let str = 'techsith';

console.log(...str);

const fromString = Array.from(str);

console.log(fromString);

const fromScratch = Array.from({length:5}, (value ,index) => "");

console.log(fromScratch);

const fromScratch2 = (new Array(5)).fill(0).map((v,i) => i);

console.log(fromScratch2);

const array = [1,2,2];

const unique = Array.from(new Set(array));

const unique2 = [...new Set (array)];

console.log(unique);

console.log(unique2);

const func = function() {

    console.log(Array.from(arguments).join(''));
}

func('t','e','c','h','s','i','t','h');

//[1,2,3].splice(); 