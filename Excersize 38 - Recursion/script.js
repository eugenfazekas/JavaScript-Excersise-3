let add = function(n) {

    if(n<=0) {
        return 0;
    }else {
        console.log(n);
        return n + add(n-1);
    }
}

console.log(add(12));

