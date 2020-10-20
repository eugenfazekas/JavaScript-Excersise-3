console.log('1');


let counter;

function startimer() {
    counter = setTimeout( () =>  { console.log('from timer'); }, 3000);
}

function stoptimer() {
    clearTimeout(counter);
  }

  let counter2 = document.getElementById("interval").innerHTML;

function startinterval() {
     setInterval( () =>  { counter2 ='Interval' }, 1000);
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
