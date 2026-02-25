// =======================
// Task 3: Student Object
// =======================
console.log("=== Task 3: Single Student Object (user input) ===");

let singleStudentName = prompt("Enter student name:");
let singleStudentAgeInput = prompt("Enter student age (number):");
let singleStudentMarksInput = prompt("Enter student marks (number):");

let singleStudentAge = Number(singleStudentAgeInput);
let singleStudentMarks = Number(singleStudentMarksInput);

if (Number.isNaN(singleStudentAge)) {
  singleStudentAge = 0;
}

if (Number.isNaN(singleStudentMarks)) {
  singleStudentMarks = 0;
}

const student = {
  name: singleStudentName || "Student Name",
  age: singleStudentAge,
  marks: singleStudentMarks
};

console.log("Student object:", student);
console.log("Student name:", student.name);
console.log("Student marks:", student.marks);

// ============================
// Task 4: Array of Objects
// ============================
console.log("\n=== Task 4: Array of Student Objects (user input) ===");

let students = [];

let numberOfStudentsInput = prompt(
  "How many students do you want to enter? (minimum 3 recommended):"
);
let numberOfStudents = Number(numberOfStudentsInput);

if (Number.isNaN(numberOfStudents) || numberOfStudents < 1) {
  numberOfStudents = 3; // default to 3 students
  console.log("Invalid number entered. Defaulting to 3 students.");
}

for (let i = 0; i < numberOfStudents; i++) {
  let name = prompt(`Enter name for student ${i + 1}:`);
  let marksInput = prompt(`Enter marks for ${name || "student " + (i + 1)} (number):`);
  let marks = Number(marksInput);

  if (Number.isNaN(marks)) {
    marks = 0;
  }

  students.push({
    name: name || `Student ${i + 1}`,
    marks: marks
  });
}

console.log("Students array:", students);

// ============================
// Task 5: Calculate Average Marks
// ============================
console.log("\n=== Task 5: Average Marks ===");

let totalMarks = 0;

for (let i = 0; i < students.length; i++) {
  totalMarks += students[i].marks;
}

let averageMarks = students.length > 0 ? totalMarks / students.length : 0;

console.log("Total marks of all students:", totalMarks);
console.log("Average marks:", averageMarks);

// =======================================
// Task 6: Iterate & Print "Student Name – Marks"
// =======================================
console.log("\n=== Task 6: Student Name – Marks ===");

students.forEach(function (currentStudent) {
  console.log(`${currentStudent.name} – ${currentStudent.marks}`);
});