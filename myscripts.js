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
        output = num1 + num2;
        break;

        case '-': 
        output = num1 - num2;
        break;

        case '*':
        output = num1 * num2;
        break;

        case '/':
        if (num1 === 0 || num2 === 0) {
            "Can't divide by 0"
        } else {
        output = num1 / num2;
        break;
        }
    }
    return output;
}





