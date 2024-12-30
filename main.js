let inputBox = document.getElementById("input-box") ;
// let display = document.getElementById("task-display");
let display = document.getElementById("container-display");
let taskButton = document.getElementById("add-task");

let arr = [];

function getData()
{
    const value = inputBox.value;
    arr.push(value)
    console.log(arr);

    const newDiv = document.createElement("div");
    
    // newDiv.style.backgroundColor='#158ad8';
    // newDiv.className = "child-class";
    // newDiv.classList.add("child-class")

    const newContent = document.createTextNode(value);
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("task-display");
    document.body.insertBefore(newDiv, currentDiv);
    newDiv.setAttribute("class", "child-class")
}