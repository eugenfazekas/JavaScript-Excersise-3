class Mammal {
    constructor(a,b,c,d,e){
        Object.assign(this,{a,b,c,d,e});
        console.log(new.target.name);
    }
}


class Bat extends Mammal {

    constructor(f,...args){
        super(...args);
        this.f = f;
    }
}

const newBat = new Bat('f','a','b','c','d','e');

console.log(newBat);

/*
class Mammal {
    constructor(_legs, _name='john doe'){
        this.legs = _legs;
        this.name = _name;
        this.warmBlooded = true;
    }
    walk() {
        return `${this.name} is walking`
    }
}

class Bat extends Mammal {

    constructor(_legs,_name,_eatsMeat){
        super(_legs,_name);
        this.eatsMeat = _eatsMeat; 
    }
    fly() {
        return `${this.name} is flying`;
    }
    walk() {
        let holding = this.eatsMeat ? 'bug' : 'carrot';
        return `${super.walk()} with a ${holding}`;
    }
}

let fruitBat = new Bat(4,'peter',false);

console.log(fruitBat);

console.log(fruitBat.walk());
*/