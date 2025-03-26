async function getData() {
    const url = "https://dummyjson.com/todos";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Response status: ${response.status}");
      }
  
      const json = await response.json();
      console.log(json);
      const listEl = document.getElementById("list");

      for (const item of json.todos) {
        let myClass = "uncompleted"
        const statusMessage = item.completed
            ? "✅"
            : "❌";
        if (item.completed === true) {
            myClass = "completed"
        }
        listEl.innerHTML += `<li class="${myClass}">${item.todo} - completed: ${statusMessage}</li>`
    }
    } catch (error) {
      console.error(error.message);
    }
}
getData();