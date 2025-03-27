let currentOffset = 0;
let totalTodos = null;
const listEl = document.getElementById("list");

async function getData(currentOffset) {
    let url = `https://dummyjson.com/todos?skip=${currentOffset}&limit=30`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);

      if (totalTodos === null) {
        totalTodos = json.total;
      }
      
      for (const item of json.todos) {
        let myClass = "uncompleted"
        const statusMessage = item.completed
            ? "✅"
            : "❌";
        if (item.completed === true) {
            myClass = "completed"
        }
        listEl.innerHTML += `<li class="${myClass}">${statusMessage} - ${item.todo}</li>`
    }
    } catch (error) {
      console.error(error.message);
    }
}

function showMore() {
  currentOffset += 30;
  if (totalTodos != null && currentOffset >= totalTodos ) {
    currentOffset = 0;
  }
  getData(currentOffset);
}
getData(0)


async function addTodo() {
  let newTodoText = document.getElementById("newTodo").value;
  console.log(newTodoText);
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
  listEl.innerHTML += `<li class=uncompleted>❌ - ${newTodo.todo}</li>`
  console.log(newTodo);
}
