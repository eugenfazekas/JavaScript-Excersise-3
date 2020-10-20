 const humanFactory = function(obj) {
     let isCrying = false;
    
     return Object.assign({}, obj, {
         cry() {
             isCrying = true;
             return this;
         }, isCrying () {
             return isCrying;
         }
     })
 };

 const techSith = humanFactory({});

 const flyFactory = function(obj) {
     let isFlying = false;

     return Object.assign({},obj, {
         fly() {
            isFlying = true;
            return this;
         }, isFlying() {
             return isFlying;
         }
     });
 };

const superman = humanFactory(flyFactory({}));
console.dir(superman);
console.log(superman.fly().cry().isCrying());
console.log(superman.isFlying());

const superman2 = flyFactory(humanFactory({}));
console.log(superman2.fly().cry().isCrying());
console.log(superman2.isFlying());

 /*
 let Car = function(color) {
     let moving = false;
     return Object.assign( {},{ 
         color:color,
        drive() {
             moving = true;
             return this;
            },
        isMoving() {
             return moving;
        }
    });
 };

 
let redCar = Car('red');

console.log(redCar.drive().isMoving());
*/

 /*
 const jsSkill = {
     knowsJS() {
         return true;
     }
 };

 const engDegree = {
    hasDegree() {
        return true;
    }
};

const backendSkill = {
    knowsBackend() {
        return true;
    }
};

const jsEngineer = Object.assign({},jsSkill,engDegree);
const fullstackEngineer = Object.assign({},jsSkill,engDegree,backendSkill);

console.dir(jsEngineer);
console.dir(fullstackEngineer);
console.dir(fullstackEngineer.knowsJS());
*/
