
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
    let finalResult = "";

/* save the numbers chosen in the variable and in the calculators display*/

function clickDisplay() {
    buttons.forEach((button) => {
    button.addEventListener('click', function(e)  {
    sNums = display.textContent += button.value; 
});
});
}
clickDisplay();

/* runs the calculation code when equals button is pressed*/

equals.addEventListener('click', startCalculation);

function startCalculation() {
    sNum2 = sNums
    num2 = parseFloat(sNum2);
    total = display.textContent = operate(num1, num2, chosenOperator)
    sNums = total;
    finalResult = total;
}

/*calculation functions with different operators*/

buttonAdd.addEventListener('click', addButton);

function addButton() {
        let parsedDisplay = parseFloat(display.textContent);
    if (num1 !== "" && finalResult === "") {
        total = display.textContent = operate(num1, parsedDisplay, chosenOperator)
        sNums = total;
    }
        chosenOperator = "+";
        sNum1 = sNums;
        num1 = parseFloat(sNum1);
        display.textContent = "";
        finalResult = "";
}

buttonSubtract.addEventListener('click', subtractButton);

function subtractButton() {
        let parsedDisplay = parseFloat(display.textContent);
    if (num1 !== "" && finalResult === "") {
        total = display.textContent = operate(num1, parsedDisplay, chosenOperator)
        sNums = total;
    }
        chosenOperator = "-";
        sNum1 = sNums;
        num1 = parseFloat(sNum1);
        display.textContent = "";
        finalResult = "";
}

buttonMultiply.addEventListener('click', multiplyButton);

function multiplyButton() {
        let parsedDisplay = parseFloat(display.textContent);
    if (num1 !== "" && finalResult === "") {
        total = display.textContent = operate(num1, parsedDisplay, chosenOperator)
        sNums = total;
    }
        chosenOperator = "*";
        sNum1 = sNums;
        num1 = parseFloat(sNum1);
        display.textContent = "";
        finalResult = "";
}

buttonDivide.addEventListener('click', divideButton);

function divideButton() {
      let parsedDisplay = parseFloat(display.textContent);
    if (num1 !== "" && finalResult === "") {
        total = display.textContent = operate(num1, parsedDisplay, chosenOperator)
        sNums = total;
    }
        chosenOperator = "/";
        sNum1 = sNums;
        num1 = parseFloat(sNum1);
        display.textContent = "";
        finalResult = "";
}


/* buttons to clear the display variables*/

buttonAllClear.addEventListener('click', clearDisplay);

function clearDisplay() {
    sNums = "";
    sNum1 = "";
    sNum2 = "";
    num1 = "";
    num2 = "";
    total = "";
    chosenOperator = "";
    display.textContent = "";
}

buttonClear.addEventListener('click', deleteDigit);

function deleteDigit() {
    display.textContent = display.textContent.slice(0, -1);
    if (sNums !== "") {
        sNums = sNums.toString().split('').slice(0, -1).join('');
    } 
    if (sNum1 !== "") {
        sNum1 = sNum1.slice(0, -1);
    }
    if (sNum2 !== "") {
        sNum2 = sNum2.slice(0, -1);
    }
    if (num1 !== "") {
        num1.toString().split('').slice(0, -1).join('');
        num1 = num1 = parseInt(num1);
    }
    if (num2 !== "") {
        num2.toString().split('').slice(0, -1).join('');
        num2 = num2 = parseInt(num2);
    }

}






