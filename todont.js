const readlineSync = require("readline-sync");
const chalk = require("chalk");
const getListsMenu = require("./getListsMenu");
const lists = require("./lists");
const viewList = require("./viewList");

console.clear();
let response = readlineSync.question(getListsMenu()).toLowerCase();

while (response !== "q") {
  if (isNaN(response) === false) {
    const list = lists[response - 1];
    viewList(list);
  } else if (response === "n") {
    console.clear();
    // get the text from the user
    const text = readlineSync.question("What list do you want to add?\n\n");
    // make a new todo out of it
    const todo = makeTodo(text);
    // put it in our todo list
    todos.unshift(todo);
    console.clear();
  } else {
    console.log(chalk.red.bold(`${response} is not a valid input.`));
  }

  console.clear();
  response = readlineSync.question(getListsMenu()).toLowerCase();
}
