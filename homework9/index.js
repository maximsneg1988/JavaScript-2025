// Заголовок страницы
const header = document.createElement("header");
header.textContent = "To Do List";
document.body.appendChild(header);

// Контейнер
const todoContainer = document.createElement("div");
todoContainer.id = "todo-container";
document.body.appendChild(todoContainer);

// Поле ввода
const input = document.createElement("input");
input.placeholder = "Введите задачу...";
todoContainer.appendChild(input);

// Кнопка добавления
const addButton = document.createElement("button");
addButton.textContent = "Добавить";
todoContainer.appendChild(addButton);

// Список задач
const todoList = document.createElement("ul");
todoContainer.appendChild(todoList);

// Сохранение в localStorage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Отображение задач
const displayTodos = () => {
  todoList.innerHTML = "";
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;
    li.dataset.index = index;
    todoList.appendChild(li);
  });
};

// Добавление задачи
const addTask = () => {
  const currentTodo = input.value.trim();
  if (currentTodo) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(currentTodo);
    saveTodos(todos);
    input.value = "";
    displayTodos();
  }
};

// Удаление задачи
const removeTask = (e) => {
  if (e.target.tagName === "LI") {
    const index = e.target.dataset.index;
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.splice(index, 1);
    saveTodos(todos);
    displayTodos();
  }
};

// Обработчики событий
addButton.addEventListener("click", addTask);
todoList.addEventListener("click", removeTask);

// Загрузка задачи из localStorage при перезагрузке страницы
displayTodos();
