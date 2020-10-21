let str1 = 'hello\n\nworld';

let str2 = "hello\n\nworld";

let str3 = `hello

world`;

console.log(str1);

console.log(str2);

console.log(str3);

let x = `Bond` 

let bondlin = `my name is ${x}, James ${x}`;

console.log(bondlin);

let one = 1;

let two = 2;

let sum = `adding ${one} and ${two} gives me ${one + two}`;

console.log(sum);

let tagged = (strArray,...vals) => {

    console.log(strArray);
    console.log(vals);
}

tagged`adding ${one} and ${two} gives me ${one + two}`;

console.log('hello World'.startsWith('hell'));

console.log('hello World'.endsWith('World'));

console.log('hello World'.includes('Wo'));

console.log('hello World '.repeat(3));

let raw = String.raw`Not a new line:\n`;

console.log(raw);

