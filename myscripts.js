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
    let result = " ";

/* save the numbers chosen in the variable and in the calculators display*/

function clickDisplay() {
    buttons.forEach((button) => {
    button.addEventListener('click', function(e)  {
        if (result === total && chosenOperator === "") {
            clearDisplay();
        }
    sNums = display.textContent += button.value;
    charLimit();
        
});
});
}
clickDisplay();

/* add dot on click, don't add dot if one already exists in the display*/

buttonDot.addEventListener('click', preventDot);

function preventDot() {
    if (display.textContent.includes(".")) {
        return;
    } else {
    display.textContent += ".";
    result = " ";
    }
}

/* runs the calculation code when equals button is pressed*/

equals.addEventListener('click', startCalculation);

function startCalculation() {
    sNum2 = sNums
    num2 = parseFloat(sNum2);
    if (num2 === 0 && chosenOperator === "/") {
        display.textContent = "ERROR! Can't divide by 0!"
    } else {
    total = display.textContent = operate(num1, num2, chosenOperator)
    sNums = total;
    result = total;
    chosenOperator = "";
    }
}

/*calculation functions with different operators*/

buttonAdd.addEventListener('click', addButton);

function addButton() {
        let parsedDisplay = parseFloat(display.textContent);
    if (num1 !== "" && result === "") {
        if (parsedDisplay === 0 && chosenOperator === "/") {
            display.textContent = "ERROR! Can't divide by 0!"
            return;
        }
        total = display.textContent = operate(num1, parsedDisplay, chosenOperator)
        sNums = total;
    }
        chosenOperator = "+";
        sNum1 = sNums;
        num1 = parseFloat(sNum1);
        display.textContent = "";
        result = "";
}

buttonSubtract.addEventListener('click', subtractButton);

function subtractButton() {
        let parsedDisplay = parseFloat(display.textContent);
    if (num1 !== "" && result === "") {
        if (parsedDisplay === 0 && chosenOperator === "/") {
            display.textContent = "ERROR! Can't divide by 0!"
            return;
        }
        total = display.textContent = operate(num1, parsedDisplay, chosenOperator)
        sNums = total;
    }
        chosenOperator = "-";
        sNum1 = sNums;
        num1 = parseFloat(sNum1);
        display.textContent = "";
        result = "";
}

buttonMultiply.addEventListener('click', multiplyButton);

function multiplyButton() {
        let parsedDisplay = parseFloat(display.textContent);
    if (num1 !== "" && result === "") {
        if (parsedDisplay === 0 && chosenOperator === "/") {
            display.textContent = "ERROR! Can't divide by 0!"
            return;
        }
        total = display.textContent = operate(num1, parsedDisplay, chosenOperator)
        sNums = total;
    }
        chosenOperator = "*";
        sNum1 = sNums;
        num1 = parseFloat(sNum1);
        display.textContent = "";
        result = "";
}

buttonDivide.addEventListener('click', divideButton);

function divideButton() {
      let parsedDisplay = parseFloat(display.textContent);
    if (num1 !== "" && result === "") {
        if (parsedDisplay === 0) {
            display.textContent = "ERROR! Can't divide by 0!"
            return;
        }
        total = display.textContent = operate(num1, parsedDisplay, chosenOperator)
        sNums = total;
    }
        chosenOperator = "/";
        sNum1 = sNums;
        num1 = parseFloat(sNum1);
        display.textContent = "";
        result = "";
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
    output = 0;
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

/* keyboard functionality*/

function keyPress() {

document.addEventListener('keydown', (e) => {
    if (e.key !== "+" && e.key !== "-" && e.key !== "*" && e.key !== "/" && e.key !== "Enter" && e.key !== "Backspace" && e.key !== "." && e.key !== "=" && e.key !== "0" && e.key !== "1" && e.key !== "2" && e.key !== "3" && e.key !== "4" && e.key !== "5" && e.key !== "6" && e.key !== "7" && e.key !== "8" && e.key !== "9" ) {
        return;
    }
      if (e.key === "+") {
        addButton();
        return;
    } if (e.key === "-") {
        subtractButton();
        return;
    } if (e.key === "*") {
        multiplyButton();
        return;
    } if (e.key === "/") {
        divideButton();
        return;
    } if (e.key === "=" || e.key === "Enter") {
        startCalculation();
        return;
    } if (e.key === "Backspace") {
        deleteDigit();
        return;
    } if (e.key === ".") {
        preventDot();
        return;
    }
    
    if (result === total && chosenOperator === "") {
    clearDisplay();
    } else {
    sNums = display.textContent += e.key;
    }
    charLimit();
});
}
keyPress();

/* limit maximum character in a display*/

function charLimit() {
        display.textContent = display.textContent.substring(0, 26);
    }