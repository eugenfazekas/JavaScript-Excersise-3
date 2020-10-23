
/*
let add = (a,b) => {
    
    a = a || 0;
    b = b || 0;
    
    if(a === undefined){
        a = 0;
    }
    if(b === undefined){
        b = 0;
    }
    
    return (a || 0) + (b || 0);
}

console.log(add());
*/


let add2 = (a=[], b=[]) => {
    return[...a, ...b];
};

console.log(add2([1],[2]))



let x = {a:1, b:2};

let add3 = (obj) => {
    obj = obj || {};
    let a = obj.a || 0;
    let b = obj.b || 0;
    return obj.a + obj.b;
};

console.log(add3(x))

let x2 = {a:2, b:2};

let add4 =  ({ a = 0, b = 0} = {}) => {
   return a + b;
};

console.log(add4(x2))