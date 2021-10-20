const readlineSync = require("readline-sync");
const chalk = require("chalk");
const getTodosMenu = require("./getTodosMenu");
const editTodo = require("./editTodo");

const viewList = (list) => {
  console.clear();
  let response = readlineSync.question(getTodosMenu(list)).toLowerCase();
  while (response !== "b") {
    if (isNaN(response) === false) {
      const todo = list.todos[response - 1];
      editTodo(todo);
    } else if (response === "n") {
      console.clear();
      // get the text from the user
      const text = readlineSync.question("What task do you want to add?\n\n");
      // make a new todo out of it
      const todo = makeTodo(text);
      // put it in our todo list
      list.todos.unshift(todo);
      console.clear();
    } else {
      console.log(chalk.red.bold(`${response} is not a valid input.`));
    }

    response = readlineSync.question(getTodosMenu(list)).toLowerCase();
    console.clear();
  }
};

module.exports = viewList;
