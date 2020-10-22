let numArray = [3,7,9,4];

console.dir(numArray); //check proto Symbol.iterator

let mySet = new Set([1,2,2,2,3]); //HashSet

for(let val of mySet) {

    console.log(val);

}

console.dir(mySet);

let anObject = {
    name:'bob',
    age:20,
    friends:['john','becky','peter'],
    getName:function() {
        return this.name;
    }
}

for(let key in anObject) {
    console.log(key);
}

console.log(anObject.friends);

let myArray = [1,2,3,4];

let iterator = myArray[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



