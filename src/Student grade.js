function calculateGrade() {
    // Get the input elements
  const marksInput = document.getElementById("marks");

  // Get the value of the input
  const marks = Number(marksInput.value);
// Determine the grades based on the marks that have been inputed.
  let grade;
  if (marks > 79) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

// output the achieved grades to the user  
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `The students grade is ${grade}.`;

  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  console.log(form);
}
