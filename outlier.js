function findOutlier(integers){
    var evens = [];
    var odds = [];
    for (var i = 0; i < integers.length; i++) {
       
        if ((integers[i] % 2) ==0){
            evens.push(integers[i]);
        } else {
            odds.push(integers[i]);
        }
    }
    var evlen = evens.length;
    var odlen = odds.length

    if (evlen > odlen) {
        return odds;
    } else {
        return evens[0];
    }
}
console.log(findOutlier([2, 6, 111, 10, 3]));