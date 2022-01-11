function newAdditionTask() {
    let firstNumber = randomDualNumber(2, 8)
    let secondNumber = randomDualNumber(2, 8)

    document.getElementsByClassName('additionFirstNumber')[0].innerHTML = firstNumber;
    document.getElementsByClassName('additionSecondNumber')[0].innerHTML = secondNumber;
    document.getElementsByClassName('additionOutput')[0].innerHTML = '';
}

function showAdditionSolution() {
    let firstNumber = document.getElementsByClassName('additionFirstNumber')[0].innerHTML;
    let secondNumber = document.getElementsByClassName('additionSecondNumber')[0].innerHTML;
    console.log(firstNumber)
    let solution = additionDual(firstNumber, secondNumber);
    document.getElementsByClassName('additionOutput')[0].innerHTML = solution;
}

function newBinaryToDecimalTask() {
    let number = randomDualNumber(2, 8);
    document.getElementsByClassName('binaryToDecimalNumber')[0].innerHTML = number;
}

function showBinaryToDecimalSolution() {
    let solution = dualToDezimal(document.getElementsByClassName('binaryToDecimalNumber')[0].innerHTML);
    document.getElementsByClassName('binaryToDecimalOutput')[0].innerHTML = solution;
}

function newDecimalTOBinary() {
    let number = Math.round(Math.random()*255);
    document.getElementsByClassName('decimalToBinaryNumber')[0].innerHTML = number;
}

function showDecimalToBinarySolution() {
    let solution = dezimalToDual(document.getElementsByClassName('decimalToBinaryNumber')[0].innerHTML)
    document.getElementsByClassName('decimalToBinaryOutput')[0].innerHTML = solution;   
}



// HEX
function newHexToDecimalTask() {
    let number = randomHexNumber();
    document.getElementsByClassName('hexToDecimalNumber')[0].innerHTML = number;
    document.getElementsByClassName('hexToDecimalOutput')[0].innerHTML = '';
}

function showHexToDecimalSolution() {
    let solution = hexToDecimal(document.getElementsByClassName('hexToDecimalNumber')[0].innerHTML);
    document.getElementsByClassName('hexToDecimalOutput')[0].innerHTML = solution;
}

function newDecimalToHexTask() {
    let number = Math.round(Math.random()*255);
    document.getElementsByClassName('decimalToHexNumber')[0].innerHTML = number;
    document.getElementsByClassName('decimalToHexOutput')[0].innerHTML = '';
}

function showDecimalToHexSolution() {
    let number = parseInt(document.getElementsByClassName('decimalToHexNumber')[0].innerHTML);
    let solution = decimalToHex(number);
    document.getElementsByClassName('decimalToHexOutput')[0].innerHTML = solution;
}


function init() {
    newBinaryToDecimalTask();
    newAdditionTask();
    newDecimalTOBinary();
    newHexToDecimalTask();
    newDecimalToHexTask();
}

init();