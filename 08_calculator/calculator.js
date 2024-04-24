const add = function(a, b) {
  
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, next) => total += next, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, next) => total *= next);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a===0) {
    return 1
  }
  else {
    let result = a;
    while (a !== 1) {
      result *= a - 1;
      a--;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
