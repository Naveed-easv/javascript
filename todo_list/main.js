// initialize values
let currentOffset = 0;
let totalTodos = null;
let myId = 1
const listEl = document.getElementById("list");

async function getData(currentOffset) {
    let url = `https://dummyjson.com/todos/?skip=${currentOffset}&limit=30`;
    try {
      const response = await fetch(url);
      if (!response.ok) { // check for HTTP response errors
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json(); // convert response to JSON
      console.log(json);
      
      for (const item of json.todos) {
        let myClass = "uncompleted"
        let myId = item.id
        if (item.completed === true) {
            myClass = "completed"
        }
        listEl.innerHTML += `
        <li data-id="${item.id}" class="${item.completed ? "completed" : "uncompleted"}">
          <input type="checkbox" id="statusBox" onclick="updateTodo(${myId})" ${item.completed ? "checked" : ""}>${item.todo}
        </li>`
    }
    } catch (error) { // catches network errors or the thrown error from above
      console.error(error.message);
    }
}

function showMore() {
  currentOffset += 30;
  if (currentOffset >= totalTodos ) { // reset offset when above total amount of todos
    currentOffset = 0;
  }
  getData(currentOffset);
}
getData(0) // fetch the first 30 todos

//TODO: new todos don't get line-through
async function addTodo() {
  let newTodoText = document.getElementById("newTodo").value;
  const response = await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      todo: newTodoText, 
      completed: false,
      userId: 1,
    })
});
  const newTodo = await response.json();
  listEl.innerHTML += `
  <li class="${myClass}">
    <input type="checkbox" id="statusBox" onclick="updateTodo(${myId})">${newTodo.todo}
  </li>`
  console.log(newTodo);
}

async function updateTodo(myId) {
  const listItem = document.querySelector(`li[data-id="${myId}"]`); 
  const statusBoxEl = listItem.querySelector("input[type='checkbox']");

  listItem.className = statusBoxEl.checked === true ? "completed" : "uncompleted";

    const response = await fetch(`https://dummyjson.com/todos/${myId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        completed: statusBoxEl.checked === true,})
      });

      const updatedTodo = await response.json();
      console.log(updatedTodo);
      
      listItem.innerHTML = `
      <input type="checkbox" ${statusBoxEl.checked === true ? "checked" : ""} onclick="updateTodo(${myId})">${updatedTodo.todo}`;
}