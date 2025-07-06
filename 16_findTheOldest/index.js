    //Calculator 


//FUNCTIONS

function add(number1, number2) {
    result = number1 + number2;
    console.log(result)
}

function subtract(number1, number2) {
    result = number1 - number2;
    console.log(result)
}

function multiply(number1, number2) {
    result = number1 * number2;
    console.log(result)
}

function divide(number1, number2) {
    result = number1 / number2;
    console.log(result)
}

function calculate(op, number1, number2) {
    switch (op) {
        case '+':
            add(number1, number2);
            break;
        case '-':
            subtract(number1, number2);
            break;
        case '*':
            multiply(number1, number2);
            break;
        case '/':
            divide(number1, number2);
            break;
    }

}

function resetVariables() {

}

function clearScreen() {

}

//GLOBAL VARIABLES
let num1;
let num2;
let operator;
let result;

calculate ('+', 20, 40);