const reverseString = function (word) {
    let string = word.split("");
    let reverse = string.reverse();
    let reversedString = reverse.join('');
    return reversedString

};

// Do not edit below this line
module.exports = reverseString;
