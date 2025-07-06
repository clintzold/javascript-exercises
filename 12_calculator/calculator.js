const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return (num1) - (num2);
};

const sum = function(numbers) {
  let total = 0;
  
    for (num of numbers) {
    total += num;
    };
  return total;
};

const multiply = function(numbers) {
  return numbers.reduce((acc, item) => acc * item);
};

const power = function(num, power) {
  return Math.pow(num, power);
	
  
};

const factorial = function(number) {
  let result = 1;
	for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
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
