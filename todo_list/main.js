let currentOffset = 0;
function showMore() {
  currentOffset += 30;
  if (currentOffset >= 254) {
    currentOffset = 0;
  }
  getData(currentOffset);
}

async function getData() {
    let url = `https://dummyjson.com/todos?skip=${currentOffset}&limit=30`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Response status: ${response.status}");
      }
  
      const json = await response.json();
      console.log(json);
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
getData();