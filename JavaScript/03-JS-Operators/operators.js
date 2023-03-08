/**
 * 1. Arithmetic Operators + - / * %
 * 2. Shorthand math += -= *= /=
 * 3. incr/decr operators ++ --
 * 4. ternary operators ?:
 * 5. logical operators && ||
 * 6. conditional operators < > <= >= !==
 * 7. equality operators == ===
 */
const num1 = 10;
const num2 = 20;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);

let theNumber = 2324;
if(theNumber % 2 === 0){
    console.log(`The ${theNumber} is Even`);
}
else{
    console.log(`The ${theNumber} is Odd`);
}

// 2. Shorthand math += -= *= /=
/**
 * value = value + (something) => value += (something)
 * value = value - (something) => value -= (something)
 * value = value * (something) => value *= (something)
 * value = value / (something) => value /= (something)
 */
const a = 10;
const b = 20;
let result = 100;
result += (a * b);
console.log(result);

// 3. incr/decr operators ++ --
let count = 10;
count = count + 1;
count += 1;
count++;
console.log(`count : ${count}`);

// 6. conditional operators < > <= >= !==
let marks = 27;
let examResult;
if(marks <= 34){
    examResult = "You Failed the Exam";
}
else {
    examResult = "You Passed the Exam";
}
console.log(examResult);

// 4. ternary operators ?:
/**
 * (condition)? true : false;
 */
marks = 67;
(marks <= 34) ?  examResult = "You Failed the Exam" : examResult = "You Passed the Exam";
console.log(examResult);

// 5. logical operators && ||
const inRelation = true;
const parentsAgreed = true;
let nextStep = "";
(inRelation && parentsAgreed) ? nextStep = "Get marry soon" : nextStep = "Wait until parents agreed";
console.log(nextStep);

// 7. equality operators == ===
let x = 10;
let y = "10";
if(x === y){
    console.log("both are equal");
}
else{
    console.log("both are not equal");
}









