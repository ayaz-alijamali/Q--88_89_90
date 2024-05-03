// Question ___________ 88
function roundToNearestInteger(decimalNumber) {
    // Use Math.round() to round the decimal number to the nearest integer
    const roundedNumber = Math.round(decimalNumber);
    return roundedNumber;
}
// Example usage:
const inputDecimal = 8.56;
const roundedInteger = roundToNearestInteger(inputDecimal);
console.log(`Rounded to nearest integer: ${roundedInteger}`);
// Question _____________ 89
function convertStringToNumber(inputString) {
    // Attempt to parse the string as an integer
    const integerNumber = parseInt(inputString, 10);
    // Attempt to parse the string as a floating-point number
    const floatNumber = parseFloat(inputString);
    // Check if either parsing was successful and return the corresponding number
    if (!isNaN(integerNumber)) {
        return integerNumber;
    }
    else if (!isNaN(floatNumber)) {
        return floatNumber;
    }
    else {
        return null; // Return null if parsing fails
    }
}
// Example usage:
const numericString1 = "123";
const numericString2 = "45.67";
const number1 = convertStringToNumber(numericString1);
const number2 = convertStringToNumber(numericString2);
console.log(`Number 1: ${number1}`); // Output: 123
console.log(`Number 2: ${number2}`); // Output: 45.67
// Question ______________ 90
function checkIfNaN(value) {
    // Use isNaN() to check if the value is NaN
    const isValueNaN = isNaN(value);
    return isValueNaN;
}
// Example usage:
const inputValue1 = 10;
const inputValue2 = "Hello";
const inputValue3 = NaN;
const result1 = checkIfNaN(inputValue1); // false
const result2 = checkIfNaN(inputValue2); // true
const result3 = checkIfNaN(inputValue3); // true
console.log(`Result 1: ${result1}`); // Output: false
console.log(`Result 2: ${result2}`); // Output: true
console.log(`Result 3: ${result3}`); // Output: true
export {};
