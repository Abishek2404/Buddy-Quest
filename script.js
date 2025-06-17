let todos = [];

function addTodo() {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text === "") return;

  todos.push(text);
  input.value = "";
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  todos.forEach((todo, id) => {
    list.innerHTML += `
      <li>
        ${todo}
        <button onclick="deleteTodo(${id})">❌</button>
      </li>
    `;
  });
}
