const sumAll = function(integerFirst, integerLast) {
    let sum;
    let counter;

    if (integerFirst > integerLast) {
        sum = integerLast;
        counter = integerLast
        while (counter < integerFirst) {
            counter++;
            sum += counter;
        }
    }
    else if (typeof integerFirst != "number" || typeof integerLast != "number" || integerFirst < 0 || integerLast < 0) {
        return ("ERROR")
    }
    else {
        sum = integerFirst;
        counter = integerFirst;    while (counter < integerLast) {
            counter++;
            sum += counter;
        }
        while (counter < integerLast) {
            counter++;
            sum += counter;
        }
    }


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
