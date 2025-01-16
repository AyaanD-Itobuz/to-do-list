const inputBox = document.getElementById("input-box");
const display = document.getElementById("container-display");
const newTaskButton = document.getElementById("add-task");
const all = document.getElementById("all");
const active = document.getElementById("active");
const completed = document.getElementById("completed");
const clear = document.getElementById("clear");

let arr = [];
let obj_arr = [];

//function contains same task
contains = function (item) {
  // debugger;
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    if (temp.input_value === item) {
      return true;
    }
  }
  return false;
};

// function newTask()
newTaskButton.addEventListener("click", () => {
  const value = inputBox.value.trim();
  // debugger;
  if (value === "") {
    alert("Enter a Value");
  } else if (contains(value)) {
    alert("Task Already Exists");
  } else {
    const obj = {
      input_value: value,
      done_status: 0,
      remove_status: 0,
    };

    arr.push(obj);
    console.log(arr);

    const parentDiv = document.createElement("div");
    let newDiv = document.createElement("div");
    parentDiv.appendChild(newDiv);

    const newContent = document.createTextNode(value);
    newDiv.appendChild(newContent);

    const currentDiv = document.getElementById("task-display");
    // currentDiv.setAttribute("class" , "parent-class")
    document.body.insertBefore(newDiv, currentDiv);
    newDiv.setAttribute("class", "child-class");

    //creating div for buttons
    const div_button = document.createElement("div");
    div_button.setAttribute("class", "div-buttons");

    //delete button
    const remove_button = document.createElement("BUTTON");
    remove_button.setAttribute("class", "child-button btn btn-danger");
    const remove_img = document.createElement("img");
    remove_img.src = "./images/delete.svg";
    remove_img.width = 20;
    remove_img.setAttribute("class", "child-button-img");
    remove_button.appendChild(remove_img);
    div_button.appendChild(remove_button);
    newDiv.appendChild(div_button);

    //done button
    const done_button = document.createElement("BUTTON");
    done_button.setAttribute("class", "child-button btn btn-success");
    const done_img = document.createElement("img");
    done_img.src = "./images/done.svg";
    done_img.width = 20;
    done_img.setAttribute("class", "child-button-img");
    done_button.appendChild(done_img);
    div_button.appendChild(done_button);
    newDiv.appendChild(div_button);

    //done button
    done_button.addEventListener("click", () => {
      newDiv.innerHTML = value.strike();
      console.log(newDiv);
    });

    //delete button
    remove_button.addEventListener("click", () => {
      parentDiv.removeChild(newDiv);
    });

    completed.addEventListener("click", () => {
      arr.forEach((element) => {
        stats = element.done_status;
        if (stats === 1) 
        {
            newDiv.setAttribute("class" , "hidden");
        }
      });
    });
  }
});

// completed.addEventListener("click" , () => {
//     display.innerHTML = "done";
// })
