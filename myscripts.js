
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

/* runs one of the functions above depending on the input*/

function operate(num1, num2, operator) {
    let output = 0;

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

/* on click save the number clicked in the display div*/
    let mums = "";
function populateDisplay() {
    buttons.forEach((button) => {
    button.addEventListener('click', function(e)  {
        nums = display.textContent += button.value;
        numso = parseInt(nums);
console.log(typeof numso)
        
});
});
}

populateDisplay();

function addButton() {
    buttonAdd.addEventListener('click', () => {
        
    });
}











