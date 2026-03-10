// stores username
const myName = "Shiloh";
// displays user name
document.getElementById("welcome").textContent = `Welcome, ${myName}!`;

// Store button as a variable
const add = document.getElementById("add");
const reset = document.getElementById("reset");
// Stores counter value
const counter = document.getElementById("counter");

// When add button is clicked runs function
add.addEventListener("click", addBtn);
// When reset button is clicked runs function
reset.addEventListener("click", resetBtn);

// Adds 1 when clicked
function addBtn() {
    counter.innerHTML++
}

// sets to 0 when clicked
function resetBtn() {
    counter.innerHTML = 0;
}

// stores study hours
const hours = 3;

// checks if study hours is 3 or greater
if(hours >= 3){
    console.log("Good progress")
}
else{
    console.log("You should study more")
}

// Weekly goals array
const goals = [
    "Read notes",
    "Finish lab",
    "Practice JavaScript"
];

// Print goals to console using a loop
for (let i = 0; i < goals.length; i++) {
    console.log(goals[i]);
}

// Store button as a variable
const showBtn = document.getElementById("showGoals");
// Store ul as a variable
const goalList = document.getElementById("goalList");

// runs function with button is clicked
showBtn.addEventListener("click", showGoals);

function showGoals() {
    goalList.innerHTML = ""; // clear old list
    
    // loops thru array
    for (let i = 0; i < goals.length; i++) {
        const li = document.createElement("li"); // creates list item
        li.textContent = goals[i]; // puts goal into list item
        goalList.appendChild(li); // add item to list
    }
}