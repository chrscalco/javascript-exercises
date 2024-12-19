const sumAll = function(numberOne,numberTwo) {
    let min;
    let max;
    var sum = 0;
    if(((typeof numberOne !== 'number') || (numberOne%1 !== 0) || (Math.abs(numberOne) !== numberOne))) {return "ERROR"}
    if(((typeof numberTwo !== 'number') || (numberTwo%1 !== 0) || (Math.abs(numberTwo) !== numberTwo))) {return "ERROR"}
    if (numberOne > numberTwo) {
        max = numberOne; 
        min = numberTwo;
    } 
    else {
        min = numberOne;
        max = numberTwo;
    }

    for (i=min; i<=max; i++) {
        sum += i;
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
