
// Part 1: Variables & Conditionals


let userName = "Ghyslaine";
let currentYear = new Date().getFullYear();

if (userName) {
  document.getElementById("greeting").textContent = `Hello, ${userName}!`;
} else {
  document.getElementById("greeting").textContent = "Hello, guest!";
}


// Part 2: Custom Functions


// Function to calculate age based on birth year
function calculateAge() {
  let birthYear = document.getElementById("birthYear").value;
  let age = currentYear - birthYear;

  if (age > 0 && age < 120) {
    document.getElementById("ageResult").textContent = `You are ${age} years old.`;
  } else {
    document.getElementById("ageResult").textContent = "Please enter a valid birth year.";
  }
}

// Function to update the page title
function updateTitle(newTitle) {
  document.getElementById("main-title").textContent = newTitle;
}
updateTitle("JavaScript Fun Zone");


// Part 3: Loops


// For loop example: populate a list
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = `Item ${i}`;
  document.getElementById("loopList").appendChild(li);
}

// While loop example: countdown
let countdown = 3;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}


// Part 4: DOM Interactions

// DOM Interaction 1: Change text content
document.getElementById("main-title").style.color = "blue";

// DOM Interaction 2: Add event listener
document.getElementById("birthYear").addEventListener("focus", () => {
  document.getElementById("ageResult").textContent = "";
});

// DOM Interaction 3: Create and append elements (done in loop above)