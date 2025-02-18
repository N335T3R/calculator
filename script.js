class Calculator {
    constructor(inputText, resultText) {
        this.inputText = inputText;
        this.resultText = resultText;
        this.operator = null;
        this.clear();
    }

    clear() {
        this.input = '';
        this.result = '';
        this.operator = null;

        this.updateDisplay();
    }
 
    appendNum(number) {
        this.input += number;
        this.updateDisplay();
    }

    selectOperation(operator) {
        if (this.result !== '' && this.input !== '' && this.operator !== null) {
            this.compute();
            this.operator = operator;
        }
        // if (this.input = '') return;
        else {
            this.operator = operator;
            if (this.result === '') this.result = this.input;
            this.input = '';
            this.updateDisplay();
        }
    }

    compute() {
        let num1 = parseFloat(this.result);
        let num2 = parseFloat(this.input);

        console.log(num1, num2)

        switch (this.operator) {
            case '+':
                this.result = num1 + num2;
                break;
            case '*':
                this.result = num1 * num2;
                break;
            case '/':
                this.result = num1 / num2;
                break;
            case '-':
                this.result = num1 - num2;
                break;
            default: 
                break;
        }

        this.input = '';
        this.operator = null;
        this.updateDisplay();
    }

    updateDisplay() {
        this.inputText.innerText = this.input;
        this.resultText.innerText = this.result;
    }
}


const screen = document.getElementById('screen');
const inputText = document.getElementById('inputText');
const resultText = document.getElementById('resultText');
const nums = document.querySelectorAll('.num');
const ops = document.querySelectorAll('.op');
const equal = document.getElementById('equal');
const del = document.getElementById('delete');
const negative = document.getElementById('neg');
const clear = document.getElementById('clear')
const decimal = document.getElementById('dec');


const calculator = new Calculator(inputText, resultText);


nums.forEach((num) => {
    num.addEventListener('click', () => {
        calculator.appendNum(num.innerText);
    });
});

ops.forEach((op) => {
    op.addEventListener('click', () => {
        calculator.selectOperation(op.innerText);
    });
});

clear.addEventListener('click', () => {
    calculator.clear();
});

equal.addEventListener('click', () => {
    calculator.compute();
});