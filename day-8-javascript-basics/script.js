// ========================================
// 1️⃣ Variables & Data Types (with user input)
// ========================================

// string (const)
const userName = prompt("Enter your name:");

// number (let)
let ageInput = prompt("Enter your age:");
let age = Number(ageInput);

// boolean (let) from "yes"/"no"
let isStudentInput = prompt("Are you a student? (yes/no)");
let isStudent = isStudentInput
  ? isStudentInput.toLowerCase() === "yes"
  : false;

// Log values
console.log("User Name (string):", userName);
console.log("Age (number):", age);
console.log("Is Student (boolean):", isStudent);

// Change a let variable
age = age + 1; // pretend the user had a birthday
console.log("Age after 1 year (updated let):", age);



// ========================================
// 2️⃣ Even / Odd Checker (user input)
// ========================================

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return number + " is even";
  } else {
    return number + " is odd";
  }
}

let evenOddInput = prompt("Enter a number to check if it is even or odd:");
let evenOddNumber = Number(evenOddInput);

if (Number.isNaN(evenOddNumber)) {
  alert("Even/Odd: That is not a valid number.");
  console.log("Even/Odd: Invalid input.");
} else {
  let evenOddResult = checkEvenOdd(evenOddNumber);
  console.log("Even/Odd Result:", evenOddResult);
  alert(evenOddResult);
}



// ========================================
// 3️⃣ Simple Calculator (all numbers from user)
// ========================================

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
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

// Ask user for calculator input
let calcFirstInput = prompt("Calculator: Enter the first number:");
let calcSecondInput = prompt("Calculator: Enter the second number:");
let operation = prompt("Choose operation: +, -, *, /");

let calcFirst = Number(calcFirstInput);
let calcSecond = Number(calcSecondInput);

if (Number.isNaN(calcFirst) || Number.isNaN(calcSecond)) {
  alert("Calculator: One or both values are not valid numbers.");
  console.log("Calculator: Invalid number input.");
} else {
  let calcResult;

  if (operation === "+") {
    calcResult = add(calcFirst, calcSecond);
  } else if (operation === "-") {
    calcResult = subtract(calcFirst, calcSecond);
  } else if (operation === "*") {
    calcResult = multiply(calcFirst, calcSecond);
  } else if (operation === "/") {
    calcResult = divide(calcFirst, calcSecond);
  } else {
    calcResult = "Unknown operation";
  }

  console.log(
    "Calculator:",
    calcFirst,
    operation,
    calcSecond,
    "=",
    calcResult
  );
  alert("Calculator result: " + calcFirst + " " + operation + " " +
    calcSecond + " = " + calcResult);
}



// ========================================
// 4️⃣ Temperature Converter (user input)
// ========================================

// Celsius → Fahrenheit: F = (C * 9/5) + 32
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Fahrenheit → Celsius: C = (F - 32) * 5/9
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Ask user what conversion they want
let tempChoice = prompt(
  "Temperature Converter:\n" +
  "Type 1 for Celsius to Fahrenheit\n" +
  "Type 2 for Fahrenheit to Celsius"
);

if (tempChoice === "1") {
  let cInput = prompt("Enter temperature in Celsius:");
  let cValue = Number(cInput);

  if (Number.isNaN(cValue)) {
    alert("Temperature: Not a valid Celsius value.");
    console.log("Temperature: Invalid Celsius input.");
  } else {
    let fResult = celsiusToFahrenheit(cValue);
    console.log(cValue + "°C in Fahrenheit is " + fResult + "°F");
    alert(cValue + "°C = " + fResult + "°F");
  }

} else if (tempChoice === "2") {
  let fInput = prompt("Enter temperature in Fahrenheit:");
  let fValue = Number(fInput);

  if (Number.isNaN(fValue)) {
    alert("Temperature: Not a valid Fahrenheit value.");
    console.log("Temperature: Invalid Fahrenheit input.");
  } else {
    let cResult = fahrenheitToCelsius(fValue);
    console.log(fValue + "°F in Celsius is " + cResult + "°C");
    alert(fValue + "°F = " + cResult + "°C");
  }

} else {
  alert("Temperature: Invalid choice (must be 1 or 2).");
  console.log("Temperature: Invalid choice.");
}



// ========================================
// 5️⃣ User Input (Basic) – even/odd (already covered)
// ========================================
// The requirement "Ask the user for a number → show if even or odd"
// is fulfilled above in section 2 using prompt() and alert().