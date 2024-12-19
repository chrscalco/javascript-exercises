const repeatString = function(string,num) {
    let repeatString;
    if (num > 0) {
        repeatString = string;
        for (i=1; i < num; i++) {
            string += repeatString;
        }
    } else if (num < 0){
        return "ERROR";
    } else {
        return "";
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
