const removeFromArray = function(arrayToRemove,...args) {
    for (i=arrayToRemove.length; i>=0; i--) {
        for(j=args.length; j>=0; j--) {
            if (arrayToRemove[i] === args[j]) {
                arrayToRemove.splice(i,1);
            }
        }
    }
    return arrayToRemove;
};

// Do not edit below this line
module.exports = removeFromArray;
