
{
    let x = {
        a:[1,2]
    }
    var weakmap = new WeakMap();
    weakmap.set(x,'something');
}

console.log(weakmap);

/*
{
    let x = {
        a:[1,2]
    }
    var map = new Map();
    map.set(x,'something');
}

console.log(map);
*/

/*
const a = {};

const b = {
    num:1
};

const map = new Map() ;

map.set(a,'a').set(b,'b');

map.delete(a);

map.set(a,'c');

const arr = [...map];

/*
for(let[key,value] of map.entries()){
    console.log(key,value);
}

console.dir(arr);

*/