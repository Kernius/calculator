
const buttons = document.querySelectorAll(".numbtn")
const buttonAllClear = document.querySelector("#allClear");
const buttonClear = document.querySelector("#clear");
const buttonSubtract = document.querySelector("#buttonSubtract");
const buttonDivide = document.querySelector("#buttonDivide");
const buttonAdd = document.querySelector("#buttonAdd");
const buttonMultiply = document.querySelector("#buttonMultiply");
const buttonDot = document.querySelector("#buttonDot");
const equals = document.querySelector("#equals");
let display = document.querySelector("#display");

/* calculator options*/

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

/* runs one of the functions above depending on the operator*/
let output = 0;
function operate(num1, num2, operator) {
    

    switch(operator) {
        case '+':
        output = add(num1, num2);
        break;

        case '-': 
        output = subtract(num1, num2);
        break;

        case '*':
        output = multiply(num1, num2);
        break;

        case '/':
        if (num1 === 0 || num2 === 0) {
            "Can't divide by 0"
        } else {
        output = divide(num1, num2);
        break;
        }
    }
    return output;
}

/* variables for calculation use*/

    let sNums = "";
    let sNum1 = "";
    let sNum2 = "";
    let num1 = "";
    let num2 = "";
    let total = "";
    let chosenOperator = "";

/* save the numbers chosen in the variable and in the calculators display*/


function populateDisplay() {
    buttons.forEach((button) => {
    button.addEventListener('click', function(e)  {
    sNums = display.textContent += button.value; 
});
});
}
populateDisplay();

/* runs the calculation code when equals button is pressed*/


equals.addEventListener('click', startCalculation);

function startCalculation() {
    sNum2 = sNums
    num2 = parseInt(sNum2);
    total = display.textContent = operate(num1, num2, chosenOperator)
    sNums = total;
}

/*calculation functions with different operators*/

function addButton() {
    buttonAdd.addEventListener('click', () => {
        chosenOperator = "+";
        sNum1 = sNums;
        num1 = parseInt(sNum1);
        display.textContent = "";
    });
}
addButton();

function subtractButton() {
    buttonSubtract.addEventListener('click', () => {
        chosenOperator = "-";
        sNum1 = sNums;
        num1 = parseInt(sNum1);
        display.textContent = "";
    });
}
subtractButton();

function multiplyButton() {
    buttonMultiply.addEventListener('click', () => {
        chosenOperator = "*";
        sNum1 = sNums;
        num1 = parseInt(sNum1);
        display.textContent = "";
    });
}
multiplyButton();

function divideButton() {
    buttonDivide.addEventListener('click', () => {
        chosenOperator = "/";
        sNum1 = sNums;
        num1 = parseInt(sNum1);
        display.textContent = "";
    });
}
divideButton();







