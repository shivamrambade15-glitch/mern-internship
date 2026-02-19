// DAY 9 – JavaScript Conditions & Loops
// Interactive Menu System (All User Inputs + Loops/Conditions Practice)

console.log("🚀 Welcome to Day 9 Demo!");
console.log("Open console for outputs. Follow prompts.");

// ================================
// Helper Functions (Reusable)
// ================================

function getValidNumber(promptMsg, min = -Infinity, max = Infinity) {
  while (true) {
    let input = prompt(promptMsg);
    if (input === null) return null; // User canceled
    let num = Number(input);
    if (!Number.isNaN(num) && num >= min && num <= max) {
      return num;
    }
    console.log("❌ Invalid input. Please enter a valid number.");
  }
}

function pressToContinue(msg = "Press OK to continue...") {
  prompt(msg); // Pauses for user acknowledgment
}

// ================================
// Task Functions
// ================================

// 1. Check Number (if/else if/else)
function task1CheckNumber() {
  console.log("\n=== 1️⃣ Check Number (Positive/Negative/Zero) ===");
  let num = getValidNumber("Enter a number:");
  if (num === null) return;

  if (num > 0) {
    console.log(`${num} is POSITIVE ✓`);
  } else if (num < 0) {
    console.log(`${num} is NEGATIVE ✓`);
  } else {
    console.log(`${num} is ZERO ✓`);
  }
}

// 2. Grade Calculator (if/else if/else)
function task2GradeCalculator() {
  console.log("\n=== 2️⃣ Grade Calculator ===");
  console.log("90+ → A | 75-89 → B | 60-74 → C | <60 → Fail");
  let marks = getValidNumber("Enter marks (0-100):", 0, 100);
  if (marks === null) return;

  let grade;
  if (marks >= 90) grade = "A";
  else if (marks >= 75) grade = "B";
  else if (marks >= 60) grade = "C";
  else grade = "Fail";

  console.log(`Marks: ${marks} → Grade: ${grade} 🎓`);
}

// 3. For Loops
function task3ForLoops() {
  console.log("\n=== 3️⃣ For Loops ===");
  
  // Program 1: 1 to 20 (fixed)
  console.log("Numbers 1 to 20:");
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
  
  // Program 2: Multiplication Table
  let tableNum = getValidNumber("Enter number for table (1-12):", 1, 12);
  if (tableNum === null) return;
  
  console.log(`Table of ${tableNum}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);
  }
}

// 4. While Loop (Countdown)
function task4WhileLoop() {
  console.log("\n=== 4️⃣ While Loop: Countdown 10 to 1 ===");
  let i = 10;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}

// 5. Guessing Game (Enhanced: Multi-guess + while/do-while)
function task5GuessingGame() {
  console.log("\n=== 5️⃣ Number Guessing Game (1-10) ===");
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;

  console.log("Secret number: " + secretNumber); // Reveal for demo (remove in prod)

  let guess;
  do {
    guess = getValidNumber("Guess (1-10):", 1, 10);
    if (guess === null) return;
    
    attempts++;
    if (guess > secretNumber) {
      console.log("📈 Too HIGH!");
    } else if (guess < secretNumber) {
      console.log("📉 Too LOW!");
    } else {
      console.log(`🎉 CORRECT! Found in ${attempts} attempts!`);
      break;
    }
  } while (true);
}

// ================================
// Main Menu Loop (do-while + switch-like if-else)
// ================================

function showMenu() {
  return prompt(
    "Choose Task:\n" +
    "1. Check Number\n" +
    "2. Grade Calculator\n" +
    "3. For Loops (1-20 + Table)\n" +
    "4. While Countdown\n" +
    "5. Guessing Game\n" +
    "0. Quit\n\n" +
    "Enter number:"
  );
}

function main() {
  let choice;
  do {
    choice = showMenu();
    let choiceNum = Number(choice);

    if (Number.isNaN(choiceNum)) {
      console.log("❌ Enter a number 0-5.");
      pressToContinue();
      continue;
    }

    switch (choiceNum) {
      case 1: task1CheckNumber(); break;
      case 2: task2GradeCalculator(); break;
      case 3: task3ForLoops(); break;
      case 4: task4WhileLoop(); break;
      case 5: task5GuessingGame(); break;
      case 0: console.log("👋 Thanks for practicing Day 9!"); break;
      default: console.log("❌ Invalid choice (0-5)."); break;
    }

    if (choiceNum !== 0) {
      pressToContinue();
    }
  } while (choiceNum !== 0);
}

// 🚀 Start the Program
main();