const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const buttonZero = document.getElementById("zero");
const decimalButton = document.getElementById("dot");

const multiplyBtn = document.getElementById("multiplication");
const divideBtn = document.getElementById("division");
const subtractBtn = document.getElementById("subtraction");
const addBtn = document.getElementById("addition");

const clearBtn = document.getElementById("allClear");
const deleteBtn = document.getElementById("delete");
const equalsBtn = document.getElementById("equalitySign");

const prevOperandData = document.getElementById("prevOperand");
const currOperandData = document.getElementById("currOperand");




numberInputFunction = () => {
    button1.addEventListener('click', () => {
        button1.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        setTimeout(() => {
            button1.style.backgroundColor = 'rgba(255, 255, 255, .75)'
        }, 1000);

        if (currOperandData.innerHTML === "") {
            currOperandData.innerHTML = "1";
        }
        else if (currOperandData.innerHTML !== "") {
            currOperandData.innerHTML = currOperandData.innerText + "1";
        }
    });

    button2.addEventListener('click', () => {
        button2.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        setTimeout(() => {
            button2.style.backgroundColor = 'rgba(255, 255, 255, .75)'
        }, 1000);

        if (currOperandData.innerHTML === "") {
            currOperandData.innerHTML = "2";
        }
        else if (currOperandData.innerHTML !== "") {
            currOperandData.innerHTML = currOperandData.innerText + "2";
        }
    });

    button3.addEventListener('click', () => {
        button3.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        setTimeout(() => {
            button3.style.backgroundColor = 'rgba(255, 255, 255, .75)'
        }, 1000);

        if (currOperandData.innerHTML === "") {
            currOperandData.innerHTML = "3";
        }
        else if (currOperandData.innerHTML !== "") {
            currOperandData.innerHTML = currOperandData.innerText + "3";
        }
    });

    button4.addEventListener('click', () => {
        button4.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        setTimeout(() => {
            button4.style.backgroundColor = 'rgba(255, 255, 255, .75)'
        }, 1000);

        if (currOperandData.innerHTML === "") {
            currOperandData.innerHTML = "4";
        }
        else if (currOperandData.innerHTML !== "") {
            currOperandData.innerHTML = currOperandData.innerText + "4";
        }
    });

    button5.addEventListener('click', () => {
        button5.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        setTimeout(() => {
            button5.style.backgroundColor = 'rgba(255, 255, 255, .75)'
        }, 1000);

        if (currOperandData.innerHTML === "") {
            currOperandData.innerHTML = "5";
        }
        else if (currOperandData.innerHTML !== "") {
            currOperandData.innerHTML = currOperandData.innerText + "5";
        }
    });

    button6.addEventListener('click', () => {
        button6.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        setTimeout(() => {
            button6.style.backgroundColor = 'rgba(255, 255, 255, .75)'
        }, 1000);

        if (currOperandData.innerHTML === "") {
            currOperandData.innerHTML = "6";
        }
        else if (currOperandData.innerHTML !== "") {
            currOperandData.innerHTML = currOperandData.innerText + "6";
        }
    });

    button7.addEventListener('click', () => {
        button7.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        setTimeout(() => {
            button7.style.backgroundColor = 'rgba(255, 255, 255, .75)'
        }, 1000);

        if (currOperandData.innerHTML === "") {
            currOperandData.innerHTML = "7";
        }
        else if (currOperandData.innerHTML !== "") {
            currOperandData.innerHTML = currOperandData.innerText + "7";
        }
    });

    button8.addEventListener('click', () => {
        button8.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        setTimeout(() => {
            button8.style.backgroundColor = 'rgba(255, 255, 255, .75)'
        }, 1000);

        if (currOperandData.innerHTML === "") {
            currOperandData.innerHTML = "8";
        }
        else if (currOperandData.innerHTML !== "") {
            currOperandData.innerHTML = currOperandData.innerText + "8";
        }
    });

    button9.addEventListener('click', () => {
        button9.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        setTimeout(() => {
            button9.style.backgroundColor = 'rgba(255, 255, 255, .75)'
        }, 1000);

        if (currOperandData.innerHTML === "") {
            currOperandData.innerHTML = "9";
        }
        else if (currOperandData.innerHTML !== "") {
            currOperandData.innerHTML = currOperandData.innerText + "9";
        }
    });

    buttonZero.addEventListener('click', () => {
        buttonZero.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        setTimeout(() => {
            buttonZero.style.backgroundColor = 'rgba(255, 255, 255, .75)'
        }, 1000);

        if (currOperandData.innerHTML === "") {
            currOperandData.innerHTML = "0";
        }
        else if (currOperandData.innerHTML === "0") {
            currOperandData.innerHTML = "0";
        }
        else if (currOperandData.innerHTML !== "") {
            currOperandData.innerHTML = currOperandData.innerText + "0";
        }
    });

    decimalButton.addEventListener('click', () => {
        decimalButton.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        setTimeout(() => {
            decimalButton.style.backgroundColor = 'rgba(255, 255, 255, .75)'
        }, 1000);

        if (currOperandData.innerHTML === "") {
            currOperandData.innerHTML = ".";
        }
        else if (currOperandData.innerHTML !== "" && !currOperandData.innerHTML.includes(".")) {
            currOperandData.innerHTML = currOperandData.innerText + ".";
        }
        else if (currOperandData.innerHTML !== "" && currOperandData.innerHTML.includes(".")) {
            currOperandData.innerHTML = currOperandData.innerText;
        }
    });
}

numberInputFunction();


let prevNumber = 0;
let currNumber = 0;
let computeNumber = 0;
let multiplySign = "x";
let divideSign = "/";
let addSign = "+";
let subtractSign = "-";


multiplyBtn.addEventListener('click', () => {
    multiplyBtn.style.backgroundColor = 'rgba(255, 255, 255, 1)'
    setTimeout(() => {
        multiplyBtn.style.backgroundColor = 'rgba(255, 255, 255, .75)'
    }, 1000);


    if (currOperandData.innerHTML === "" && prevOperandData.innerHTML === "" && !prevOperandData.innerHTML.includes(divideSign)) {
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML === "" && !prevOperandData.innerHTML.includes(addSign)) {
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML === "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        prevOperandData.innerHTML = prevNumber + multiplySign
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(divideSign)) {
        prevOperandData.innerHTML = prevNumber + multiplySign
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(addSign)) {
        prevOperandData.innerHTML = prevNumber + multiplySign
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        prevOperandData.innerHTML = prevNumber + multiplySign
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(multiplySign)) {
        prevOperandData.innerHTML = prevNumber + multiplySign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(divideSign)) {
        prevOperandData.innerHTML = prevNumber + multiplySign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(addSign)) {
        prevOperandData.innerHTML = prevNumber + multiplySign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(subtractSign)) {
        prevOperandData.innerHTML = prevNumber + multiplySign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(multiplySign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber * currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + multiplySign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(divideSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber / currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + multiplySign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(addSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber + currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + multiplySign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(subtractSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber - currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + multiplySign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML === "") {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + multiplySign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(divideSign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + multiplySign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(addSign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + multiplySign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + multiplySign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + multiplySign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(divideSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + multiplySign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(addSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + multiplySign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + multiplySign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + multiplySign;
        currOperandData.innerHTML = "";
    }
});


divideBtn.addEventListener('click', () => {
    divideBtn.style.backgroundColor = 'rgba(255, 255, 255, 1)'
    setTimeout(() => {
        divideBtn.style.backgroundColor = 'rgba(255, 255, 255, .75)'
    }, 1000);


    if (currOperandData.innerHTML === "" && prevOperandData.innerHTML === "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML === "" && !prevOperandData.innerHTML.includes(addSign)) {
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML === "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        prevOperandData.innerHTML = prevNumber + divideSign
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(divideSign)) {
        prevOperandData.innerHTML = prevNumber + divideSign
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(addSign)) {
        prevOperandData.innerHTML = prevNumber + divideSign
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        prevOperandData.innerHTML = prevNumber + divideSign
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(multiplySign)) {
        prevOperandData.innerHTML = prevNumber + divideSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(divideSign)) {
        prevOperandData.innerHTML = prevNumber + divideSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(addSign)) {
        prevOperandData.innerHTML = prevNumber + divideSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(subtractSign)) {
        prevOperandData.innerHTML = prevNumber + divideSign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(multiplySign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber * currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + divideSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(divideSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber / currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + divideSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(addSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber + currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + divideSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(subtractSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber - currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + divideSign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML === "") {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + divideSign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(divideSign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + divideSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(addSign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + divideSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + divideSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + divideSign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(divideSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + divideSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(addSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + divideSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + divideSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + divideSign;
        currOperandData.innerHTML = "";
    }
});


addBtn.addEventListener('click', () => {
    addBtn.style.backgroundColor = 'rgba(255, 255, 255, 1)'
    setTimeout(() => {
        addBtn.style.backgroundColor = 'rgba(255, 255, 255, .75)'
    }, 1000);


    if (currOperandData.innerHTML === "" && prevOperandData.innerHTML === "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML === "" && !prevOperandData.innerHTML.includes(divideSign)) {
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML === "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        prevOperandData.innerHTML = prevNumber + addSign
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(divideSign)) {
        prevOperandData.innerHTML = prevNumber + addSign
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(addSign)) {
        prevOperandData.innerHTML = prevNumber + addSign
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        prevOperandData.innerHTML = prevNumber + addSign
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(multiplySign)) {
        prevOperandData.innerHTML = prevNumber + addSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(divideSign)) {
        prevOperandData.innerHTML = prevNumber + addSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(addSign)) {
        prevOperandData.innerHTML = prevNumber + addSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(subtractSign)) {
        prevOperandData.innerHTML = prevNumber + addSign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(multiplySign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber * currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + addSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(divideSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber / currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + addSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(addSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber + currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + addSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(subtractSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber - currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + addSign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML === "") {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + addSign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(divideSign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + addSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(addSign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + addSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + addSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + addSign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(divideSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + addSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(addSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + addSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + addSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + addSign;
        currOperandData.innerHTML = "";
    }
});


subtractBtn.addEventListener('click', () => {
    subtractBtn.style.backgroundColor = 'rgba(255, 255, 255, 1)'
    setTimeout(() => {
        subtractBtn.style.backgroundColor = 'rgba(255, 255, 255, .75)'
    }, 1000);


    if (currOperandData.innerHTML === "" && prevOperandData.innerHTML === "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML === "" && !prevOperandData.innerHTML.includes(addSign)) {
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML === "" && !prevOperandData.innerHTML.includes(divideSign)) {
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        prevOperandData.innerHTML = prevNumber + subtractSign
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(divideSign)) {
        prevOperandData.innerHTML = prevNumber + subtractSign
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(addSign)) {
        prevOperandData.innerHTML = prevNumber + subtractSign
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        prevOperandData.innerHTML = prevNumber + subtractSign
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(multiplySign)) {
        prevOperandData.innerHTML = prevNumber + subtractSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(divideSign)) {
        prevOperandData.innerHTML = prevNumber + subtractSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(addSign)) {
        prevOperandData.innerHTML = prevNumber + subtractSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(subtractSign)) {
        prevOperandData.innerHTML = prevNumber + subtractSign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(multiplySign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber * currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + subtractSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(divideSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber / currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + subtractSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(addSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber + currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + subtractSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(subtractSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber - currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber + subtractSign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML === "") {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + subtractSign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(divideSign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + subtractSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(addSign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + subtractSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + subtractSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        prevOperandData.innerHTML = prevOperandData.innerText + subtractSign;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(divideSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + subtractSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(addSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + subtractSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + subtractSign;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText + subtractSign;
        currOperandData.innerHTML = "";
    }
});


equalsBtn.addEventListener('click', () => {
    equalsBtn.style.backgroundColor = 'rgba(255, 255, 255, 1)'
    setTimeout(() => {
        equalsBtn.style.backgroundColor = 'rgba(255, 255, 255, .75)'
    }, 1000);


    if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML === "") {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(multiplySign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber * currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(divideSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber / currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(addSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber + currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(subtractSign)) {
        currNumber = parseFloat(currOperandData.innerText);
        computeNumber = prevNumber - currNumber;
        prevNumber = computeNumber;
        prevOperandData.innerHTML = computeNumber;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(multiplySign)) {
        prevOperandData.innerHTML = prevNumber;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(divideSign)) {
        prevOperandData.innerHTML = prevNumber;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(subtractSign)) {
        prevOperandData.innerHTML = prevNumber;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "" && prevOperandData.innerHTML.includes(addSign)) {
        prevOperandData.innerHTML = prevNumber;
        currOperandData.innerHTML = "";
    }


    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(multiplySign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(divideSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(subtractSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText;
        currOperandData.innerHTML = "";
    }
    else if (currOperandData.innerHTML !== "" && prevOperandData.innerHTML !== "" && !prevOperandData.innerHTML.includes(addSign)) {
        prevNumber = parseFloat(currOperandData.innerText);
        prevOperandData.innerHTML = currOperandData.innerText;
        currOperandData.innerHTML = "";
    }
});


clearBtn.addEventListener("click", () => {
    clearBtn.style.backgroundColor = 'rgba(255, 255, 255, 1)'
    setTimeout(() => {
        clearBtn.style.backgroundColor = 'rgba(255, 255, 255, .75)'
    }, 1000);


    if (currOperandData.innerHTML !== "" || prevOperandData.innerHTML !== "") {
        prevNumber = 0;
        currNumber = 0;
        prevOperandData.innerHTML = "";
        currOperandData.innerHTML = "";
    }

});


deleteBtn.addEventListener("click", () => {
    deleteBtn.style.backgroundColor = 'rgba(255, 255, 255, 1)'
    setTimeout(() => {
        deleteBtn.style.backgroundColor = 'rgba(255, 255, 255, .75)'
    }, 1000);


    if (currOperandData.innerHTML !== "") {
        currOperandData.innerHTML = currOperandData.innerText.toString().slice(0, -1);
    }
    else if (currOperandData.innerHTML === "" && prevOperandData.innerHTML !== "") {
        prevOperandData.innerHTML = prevOperandData.innerText.toString().slice(0, -1);
        prevNumber = parseFloat(prevOperandData.innerText);
    }
});


