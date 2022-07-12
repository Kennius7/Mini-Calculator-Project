
class Calculator {
    constructor (prevOperandData, currOperandData) {
        this.prevOperandData = prevOperandData;
        this.currOperandData = currOperandData;
        this.clear();
    }

    clear () {
        this.prevOperandData = "";
        this.currOperandData = "";
        this.operationButtons = undefined;
    }

    delete () {
        
    }

    appendNumber () {
        
    }

    updateDisplay () {
        this.currOperandData.innerText = this.currOperandData;
    }

    chooseOperation () {
        
    }

    compute () {
        
    }
}

const numbButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const prevOperandData = document.querySelector("[data-prevOperand]");
const currOperandData = document.querySelector("[data-currOperand]");

const calculator = new Calculator (prevOperandData, currOperandData);

numbButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

