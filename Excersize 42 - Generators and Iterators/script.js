function request(url) {
    return new Promise(function(resolve,reject){
        makeAjaxCall(url, function(err,text) {
            if(err) reject (err);
            else resolve(text);
        });
    });
};

function *generator() {

    yield request('url1');
    yield request('url12');
}

/*
function *generator() {

    yield 1;
    yield* anotherGenerator();
    return 'hello';
    yield 3;
}


function *anotherGenerator() {

    yield 2;
}

let iterator4 = generator();

console.log(iterator4.next()); 
console.log(iterator4.next()); 
console.log(iterator4.next()); 
console.log(iterator4.next()); 
console.log(iterator4.next()); 
*/

/*
function* infiniteMaker() {

    let i = 0;
    while(true) {
        yield i; 
        i++;
    }

}

let iterator3 = infiniteMaker();

console.log(iterator3.next()); 
console.log(iterator3.next()); 
console.log(iterator3.next()); 
console.log(iterator3.next()); 
console.log(iterator3.next()); 
console.log(iterator3.next()); 
*/

/*
function *generator() {

    yield 1; 
    yield 2;
    yield 3;
    yield 4;
};


let iterator1 = generator(); 

console.log(iterator1.next()); 
console.log(iterator1.next()); 
console.log(iterator1.next()); 
console.log(iterator1.next()); 
console.log(iterator1.next()); 
*/

/*
let i = [1,2,3,4];

let iterator2 = i[Symbol.iterator]();

console.log(iterator2.next()); 
console.log(iterator2.next()); 
console.log(iterator2.next()); 
console.log(iterator2.next()); 
console.log(iterator2.next()); 

*/