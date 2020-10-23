const p1 = new Promise((resolve,reject) => setTimeout(resolve,200));

const p2 = new Promise((resolve,reject) => setTimeout(reject,300));

const p3 = new Promise((resolve,reject) => setTimeout(resolve,4000));

Promise.allSettled([p1,p2,p3]).then(results => 
    results.forEach(result => console.log(result))) //When they all done! (reolve or reject)


let x = {
    profile:{
        name:'John Doe',
        age:21
    }
}

let x2 = {
    profile:{
        name:'',
        age:0
    }
}

let x3 = {
    profile:{
        name:'John3'
      }
}


console.log(x.profile.name  || 'John');

console.log(x2.profile.age  ?? 21 );

console.log(x3 && x3.profile && x3.profile.name); //if xexist, if x.profile exist, if x.profile.name exist

console.log(x3?.profile?.name); // if question mark positions exist



const max = Number.MAX_SAFE_INTEGER;

console.log(max);



const bigInteger = 1n;

console.log(bigInteger + 1n);

console.log(bigInteger + 2n);


const bigOne = BigInt('1');

console.log('bigOne: ',bigOne);


console.log(globalThis);

console.log(window);

console.log(self); 

console.log(frames);

console.log(this);



