const array = [1,2,3];

array[3] = 4;

console.log(...new Set(array))

console.log(Array.from(new Set(array)))

const mySet = new Set(array);

console.log(mySet);

mySet.clear();

mySet.add(5);

mySet.add(6).add(7).delete(5);

console.log(mySet);

console.log(mySet.size);

for(let val of mySet) {
    console.log(val)
}

const ws2 = new WeakSet([{a:1},{a:2}]);

ws2.add({a:3});

const ws = new WeakSet();

class SomeClass {

    constructor() {
        ws.add(this)
    }

    method() {
        if(!ws.has(this)) {
            throw new TypeError('SomeClass.prototype.method called incompatible object')
        }
    }
}
  