let c1 = function(x,y,z,) {
    this.x = x;
    this.y = y;
    this.z = z;
}

let c1 = function(x,y,z,) {  //same
    Object.assign(this,{x,y,z});
}

/*
let toyota = {

    drive() {
        return 'driving toyota';
    },

    break() {
        return 'breaking toyota';
    }
};

let camry = {
 
    drive2() {
        return 'driving camry';
    }
};

Object.assign(toyota ,{wifi() {return 'Using Wifi';}, color:'red'});

    // assign properties to toyota

//let copyToyota = Object.assign({},toyota); //copy toyota object

Object.assign(camry,toyota); 

console.dir(toyota);

console.dir(camry);

//console.dir(camry.drive());

*/