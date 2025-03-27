let currentOffset = 0;
let totalTodos = null;

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
      
      const listEl = document.getElementById("list");
      listEl.innerHTML = "";
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