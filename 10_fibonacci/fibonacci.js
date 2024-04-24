const fibonacci = function(index) {
    if (index < 0) return "OOPS"
    if (index == 1) return 1
    let n = 0;
    let n1 = 1;
    let n2 = 0;
    for (let i=0; i < index-1; i++) {
        n2 = n + n1
        n = n1;
        n1 = n2;
        console.log(n2)
    }
    return n2
};

// Do not edit below this line
module.exports = fibonacci;
