const repeatString = function(string, num) {
    let concatenedString = "";
    if (num >= 0){
        for (let i=0; i<num; i++) {
            concatenedString += string;
        }
        return concatenedString;
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
