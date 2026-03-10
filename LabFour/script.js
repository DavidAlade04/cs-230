console.log("Welcome to Week 4 Lab");

const output = document.getElementById("output");
output.textContent ="JavaScript is running!";

const studentName = "Alice";
const score = 95;
const passed = true;

console.log(typeof studentName);
console.log(typeof score);
console.log(typeof passed);

const temperature = 27;

if(temperature>20){
    console.log("It is warm today");
}
else{
    console.log("It is cold today");
}


for(let i = 1; i <= 5; i++){
    console.log("Count:",i);
}


function greet(name){
    return "Hello" + name;
}

console.log(greet(" Hierophant Green"));
console.log(greet(" David"));

const colors = ["red", "green", "blue"];
console.log(colors.length);

colors.push("yellow");
console.log(colors);

colors.pop();
console.log(colors);


const user = {
    name:"Emma",
    age: 20,
    major:"Computer Science"
};

console.log(user.name);
console.log(user.major);


try{
    let data = JSON.parse('{"name":"Tom"}');
    console.log(data.name);
}catch(error){
    console.log("Something went wrong");
}
