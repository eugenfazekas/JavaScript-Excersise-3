
let counter;

function startimer() {
    counter = setTimeout( () =>  { console.log('from timer'); }, 3000);
}

function stoptimer() {
    clearTimeout(counter);
  }

let counter2;

function startinterval() {
    counter2 =  setInterval( () =>  { document.getElementById("interval").innerHTML = 'Interval'; }, 1000);
     setTimeout( setInterval( () =>  { document.getElementById("interval").innerHTML = ''; }, 2000),1000);
}

function stoptinterval() {
    clearInterval(counter2);
  }

/*
var tID; 
function timeOut() { // function name reserved

    tID = setTimeout( function() { alert("Hello"); },5000);
}

function clearTimeout() {
    clearTimeout(tID);
}
*/
