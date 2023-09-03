document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskDisc = document.getElementById('new-task-description')
  const taskList = document.getElementById("tasks")
  const form = document.getElementById("create-task-form")

  const addTodo = (e) => {
    e.preventDefault()
    const theTask = createTodoItem(taskDisc.value)
    taskList.appendChild(theTask)
    taskDisc.value = ""
  }

  const createTodoItem = (theTask) => {
    const item = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText = " delete 🗑️ "
    btn.style.fontSize = "1rem"
    btn.addEventListener('click', () => item.remove())
    item.innerText = `${theTask} `
    item.style.fontFamily = "monospace"
    item.style.fontWeight = "bold"
    item.appendChild(btn)
    return item
  }
  form.addEventListener('submit', (e) => addTodo(e))
});