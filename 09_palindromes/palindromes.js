const palindromes = function (str) {
    const punctuationAndDigits = /[^\w]|_/g
    let word = str.toLowerCase().replace(punctuationAndDigits, "").split("").toString()
    let reverseWord = str.toLowerCase().replace(punctuationAndDigits, "").split("").reverse().toString()
    return word === reverseWord
};

// Do not edit below this line
module.exports = palindromes;
