//Object.setPrototypeOf(dObj,sObj);

let toyota = {

    drive() {

        return 'driving toyota';
    }
};

let camry = {

    drive() {

        return `${super.drive()}`;
    },

    wifi() {

        return 'using wifi';
    }
}


console.dir(camry);
//Object.setPrototypeOf(camry,toyota);

camry.__proto__ = toyota;

console.dir(camry.drive());

console.dir(camry.wifi());