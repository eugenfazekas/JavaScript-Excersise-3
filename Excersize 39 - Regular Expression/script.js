let reg1 =  /a.c/i; //incase-sensitive;

let reg2 = new RegExp('a.c','i');


// a.c match word start with a end with c


console.log(reg1.test('AaaC'));

console.log(reg1.test('AaAac'));

console.log(reg2.test('ADcC'));  

let x =' I am great'.replace(/I am (?=great)/, 'we are ');

console.log(x);