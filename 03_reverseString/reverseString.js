const reverseString = function(string) {
    // We take the length of the string - 1 as index starts at 0
    let lengthString = string.length - 1;

    let stringSplittedArray = string.split("")
    let reversedArray = [];

    for (let i = 0; i <= lengthString; i++) {
        let reversedIndex = lengthString - i
        reversedArray[i] = stringSplittedArray[reversedIndex]
        console.log(i)
    }
    return reversedArray.join("")

};

// Do not edit below this line
module.exports = reverseString;
