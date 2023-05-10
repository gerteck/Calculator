function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "can't do that!"
    }

    return a/b;
}

// Initialize some variables
let num1 = 0;
let num2 = 0;
let prevAns = 0;
let op = "+";

const display = document.querySelector('#output');
refreshDisplay();

function operate(a, b, operator) {
    let result = 0;
    console.log(operator);

    switch(operator) {
        case "+":
            num1 = add(a, b);
            break;
        
        case '-':
            num1 = subtract(a, b);
            break;
        
        case '*':
            num1 = multiply(a, b);
            break;
        
        case '/':
            num1 = divide(a, b);
            break;
        
        default:
            num1 = "op not recognised";
    }
    prevAns = num1;
    refreshDisplay();
}

function refreshDisplay() {
    display.textContent = num1;
}

// clear display (AC)
const ac = document.querySelector('#AC');
ac.addEventListener('click', clear);

function clear() {
    num1 = 0;
    num2 = 0;
    op = "+";
    refreshDisplay();
}

//Add Event Listeners
function inputNum(num) {
    num = parseInt(num);
    if (num1 == 0) {
        num1 = num;
    } else {
        num1 = num1*10 + num;
    }
    refreshDisplay();
}

const numbers = document.querySelectorAll('.number');
numbers.forEach(number =>
    number.addEventListener('click', () => inputNum(number.id))
);


//Operators, + - * /
// When operator is called we store the current value in num 2.

function inputOp(sign) {
    op = sign;
    num2 = num1;
    num1 = 0;
}

const operators = document.querySelectorAll('.operator');
operators.forEach(operate =>
    operate.addEventListener('click', () => inputOp(operate.id))
);


//equals:
const equals = document.querySelector('.equal');
equals.addEventListener('click', () => operate(num1, num2, op));



//Misc Stuff
const ans = document.querySelector('.ans');
ans.addEventListener('click', () => {
    num1 = prevAns;
    refreshDisplay();
});


// Del
const del = document.querySelector('#DEL');
del.addEventListener('click', () => {
    num1 = Math.floor(num1/10);
    refreshDisplay();
});