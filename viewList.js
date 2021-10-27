const readlineSync = require("readline-sync");
const chalk = require("chalk");
const getTodosMenu = require("./getTodosMenu");
const editTodo = require("./editTodo");
const app = require("./app");
//IF USER CHOOSES A SPECIFIC LIST
const viewList = (list) => {
  console.clear();
  //ASK USER WHAT TO DO WITH LIST
  let response = readlineSync.question(getTodosMenu(list)).toLowerCase();
  //LOOP UNTIL USER GOES BACK TO LISTS VIEW
  while (response !== "b") {
    if (isNaN(response) === false) {
      //IF USER RESPONSE IS A NUMBER, EDIT THAT LIST
      const todo = list.todos[response - 1];
      editTodo(todo);
    } else if (response === "n") {
      console.clear();
      // IF RESPONSE IS "n", ASK ANOTHER QUESTION
      const text = readlineSync.question("What task do you want to add?\n\n");
      //ADD TODO TO LIST
      list.addTodo(text);
      console.clear();
    } else if (response === "r") {
      console.clear();
//ASK USER ANOTHER QUESTION
      const title = readlineSync.question("What should the new title be?\n\n");
      list.changeTitle(title);
      console.clear();
    
    } else if (response === "d") {
      console.clear()
      //DELETE LIST
      app.removeList(list);
      console.clear();
//QUIT OUT OF LOOP AND RETURN TO LIST VIEW
      break;
    } else {
      console.clear();
      //IF UNKNOWN COMMAND IS ENTERED
      console.log(chalk.red.bold(`${response} is not a valid input.`));
    }
    
//REFRESH MENU AND WAIT FOR NEW USER INPUT
    response = readlineSync.question(getTodosMenu(list)).toLowerCase();
  }
};

module.exports = viewList;
