const removeFromArray = function(array, ...elementsToRemove) {
    for (const element of elementsToRemove) {
        for (index = 0; index < array.length; index++) {
            let numberInArray = array[index];
            if (numberInArray === element) {
                array.splice(index, 1);
                index--;
            }
        }
    }
    console.log(array)
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
