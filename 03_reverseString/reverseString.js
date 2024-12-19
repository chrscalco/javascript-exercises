const reverseString = function(word) {
    const reverseWord = [];
    var arrayWord = word.split('');
    for(i=0; i<word.length; i++) {
        reverseWord.push(arrayWord[(word.length - 1) - i]);
    }
    return reverseWord.join("");
};

// Do not edit below this line
module.exports = reverseString;
