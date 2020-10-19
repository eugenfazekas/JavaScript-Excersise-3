const testUserForm = async () => {

    const loadUserForm = new Promise((resolve,reject) => {
        setTimeout(() => resolve('page loaded'),3000);
    });

    const enterUserName = new Promise((resolve,reject) => {
        setTimeout(() => resolve('user entered'),3000);
    });

    await loadUserForm;
    await enterUserName;

    const verifyUserDetails = () => {

        let a  = loadUserForm ;
     
        return a ;

    }
    const testResult = verifyUserDetails();

    return testResult;

}
testUserForm().then((m) => console.log(`person3: shows ${m}`));

/*
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promisWifeBringingTicks = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),3000);
});

    const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));

    const getCandy = new Promise((resolve,reject) => resolve('candy'));

    const getCoke = new Promise((resolve,reject) => resolve('coke'));

    let ticket = await promisWifeBringingTicks;

    let[popcorn,candy,coke] = await Promise.all([getPopcorn,getCandy,getCoke])

    console.log(`${popcorn}, ${candy}, ${coke}`)

    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
*/

/*
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promisWifeBringingTicks = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),3000);
});

    const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));

    const addButter = new Promise((resolve,reject) => resolve('butter'));

    let ticket = await promisWifeBringingTicks;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');

    let butter = await addButter;

    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: anything else darling');
    console.log('wife: lets got we are getting late');
    console.log('husband: thank you for the reminder *grins*');

    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
*/
/*
console.log('person1: shows ticket');
console.log('person2: shows ticket');
const promisWifeBringingTicks = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('ticket');
    },3000)
});

const getPopcorn = promisWifeBringingTicks.then((t) => {
    console.log("wife: here's the ticks");
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');
    return new Promise((resolve,reject) => resolve(`${t} butter`));
});

getButter.then((t) => console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
*/