//myName
const myName = "David";
//Display my name
document.getElementById("center").textContent = `Welcome, ${myName}!`;
//Store Buttons as variables

const add = document.getElementById("add");
const reset = document.getElementById("reset");
//Store Counter Value
const counter = document.getElementById("counter");

//When add is pressed run this function

add.addEventListener("click", addBtn);

//When reset is clicked run function

reset.addEventListener("click", resetBtn);

//Adds 1 when clicked

function addBtn(){
    counter.innerHTML++;

}
//Sets to 0 when clicked
function resetBtn(){
    counter.innerHTML = 0;
}
//Store study hours
const hours = 3;

if(hours >= 3){
    console.log("Good progress")
}
else{
    console.log("You should study more")
}
//Store goals in an array
const goals = [
    "Lock in",
    "Lock in some more",
    "Lock in X3"
];

//Print goals

for(let i = 0; i < goals.length; i++){
    console.log(goals[i]);
}
//Store button as a variable
const showBtn = document.getElementById("showGoals");
//Store ul as a variable
const goalList = document.getElementById("goalList");

// Run function when button is clicked
showBtn.addEventListener("click", showGoals);

function showGoals(){
    goalList.innerHTML = ""; //Clear Old List

    //Loop through array
    for(let i = 0; i < goals.length; i++){
        const li = document.createElement("li"); //Creates List Items
        li.textContent = goals[i]; // Put goals into this list
        goalList.appendChild(li);//Add Item to List
    }
}
