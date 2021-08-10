function randomDualNumber(minlength = 0, maxLength = 10) {
    let outputNumber = ''
    let biggestNumber = maxLength - minlength;
    let randomNumber = Math.random()
    let numberLength = Math.round((randomNumber * biggestNumber) + minlength);
    console.log(numberLength)
    for (let i = 0; i < numberLength; i++) {
        outputNumber += Math.round(Math.random())
        }
    if (outputNumber == '') {
        return '0'
    }
    return outputNumber;
}

function makeNumbersSameLength(inputNumbers) {
    let number1 = inputNumbers.number1
    function helperFunction(longerNumber, smallerNumber) {
        let zerosToAdd = longerNumber.length - smallerNumber.length;
        console.log(zerosToAdd)
        for (let i = 0; i < zerosToAdd; i++) {
            smallerNumber = '0'.concat(smallerNumber)
        }
        return smallerNumber
    }

    if (inputNumbers.number1.length == inputNumbers.number2.length) {
        return {
            number1: inputNumbers.number1,
            number2: inputNumbers.number2
        }
    }

    if (inputNumbers.number1.length > inputNumbers.number2.length) {
        return {
            number1: inputNumbers.number1,
            number2: helperFunction(inputNumbers.number1, inputNumbers.number2)
        }
    } else {
        return {
            number1: helperFunction(inputNumbers.number2, inputNumbers.number1),
            number2: inputNumbers.number2
        }
    }
}


function additionDual(inputNumber1, inputNumber2) {
    if (inputNumber1.length != inputNumber2.length) {
        let outputNumber = makeNumbersSameLength({number1: inputNumber1, number2: inputNumber2})
        inputNumber1 = outputNumber.number1;
        inputNumber2 = outputNumber.number2;
    }

    let output = ''
    let uebertrag = 0;
    for (var i = inputNumber1.length - 1; i >= 0; i--) {
        let currentNumber1 = parseInt(inputNumber1.substring(i, i+1));
        let currentNumber2 = parseInt(inputNumber2.substring(i, i+1));
        

        let sum = currentNumber1 + currentNumber2 + uebertrag;
        uebertrag = 0

        if (sum == 0) {
            output = '0'.concat(output)
        } else if (sum == 1) {
            output = '1'.concat(output)
        } else if (sum == 2) {
            uebertrag = 1;
            if (i == 0) {
                output = '10'.concat(output)
            } else {
                output = '0'.concat(output)
            }
            
        } else if (sum == 3) {
            uebertrag = 1;
            if (i == 0) {
                output = '11'.concat(output)
            } else {
                output = '1'.concat(output)
            }
            
        }

    }
    return output
}

function dezimalToDual(inputNumber, length) {
    if (inputNumber == 0) {
        return '0'
    }
    let negativeNumber = (inputNumber < 0) ? true: false;
    if (negativeNumber) {
        inputNumber *= -1
    }
    // get the biggest number that fits
    let currentNumberTesting = 1;
    while (inputNumber - currentNumberTesting >= 0) {
        currentNumberTesting *= 2
    } 
    currentNumberTesting /= 2;

    let outputNumber = ''
    while (currentNumberTesting >= 1) {
        if ((inputNumber - currentNumberTesting) >= 0) {
            outputNumber += '1';
            inputNumber -= currentNumberTesting;
        
        } else {
            outputNumber += '0';
        }
        currentNumberTesting /= 2
        
    }
    return outputNumber
}

function dualToDezimal(inputNumber) {
    let outputNumber = 0;

    let lengthOfNumber = inputNumber.length;
    let power = 0;
    for (let i = lengthOfNumber-1; i >= 0; i--) {
        let currentNumberInInputNumber = inputNumber.substring(i, i+1);
        if (currentNumberInInputNumber == '1') {
            outputNumber += Math.pow(2, power);   
        }
        power++
    }
    return outputNumber;
}
