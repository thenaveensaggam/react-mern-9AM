/**
 * 1. normal function
 * 2. function expression
 * 3. arrow function (new)
 */
function printNumbersNF(startNumber, endNumber, incrNumber){
    let result = "";
    for(let i=startNumber; i<=endNumber; i += incrNumber){
        result += `${i} `;
    }
   return result;
}
let output = printNumbersNF(1,10, 2);
console.log(output);

// function expression
const printNumbersFE = function (startNumber, endNumber, incrNumber){
    let result = "";
    for(let i=startNumber; i<=endNumber; i += incrNumber){
        result += `${i} `;
    }
    return result;
};
output = printNumbersFE(1,10, 2);
console.log(output);

// Arrow function
const printNumbersAF = (startNumber, endNumber, incrNumber) => {
    let result = "";
    for(let i=startNumber; i<=endNumber; i += incrNumber){
        result += `${i} `;
    }
    return result;
};
output = printNumbersAF(1,10, 2);
console.log(output);

//
function sum(a , b){
    const result = a + b;
    return result;
}
function mul(a , b){
    const result = a * b;
    return result;
}

function calculate(result1, result2){
    const output = result1 + result2;
    console.log(output);
}

const theSum = sum(10,20);
const theMul = mul(10,20);
calculate(theSum,theMul);

























