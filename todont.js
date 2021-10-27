const readlineSync = require("readline-sync");
const chalk = require("chalk");
const getListsMenu = require("./getListsMenu");
const viewList = require("./viewList");
const app = require("./app");

console.clear();
//ASK USER WHAT LIST THEY WANT TO VIEW OR CREATE
let response = readlineSync.question(getListsMenu()).toLowerCase();
//LOOP THRU LIST UNTIL "q" IS SELECTED
while (response !== "q") {
  if (isNaN(response) === false) {
    //IF USER RESPONSE IS A NUMBER, THAT LIST IS VIEWED
    const list = app.lists[response - 1];
    viewList(list);
  } else if (response === "n") {
    console.clear();
    // IF RESPONSE IS "n", ASK USER ANOTHER QUESTION
    const title = readlineSync.question("What list do you want to add?\n\n");
    // ADD NEW TODO TO LIST
    app.addList(title)
    console.clear();
  } else {
    console.clear()
    console.log(chalk.red.bold(`${response} is not a valid input.`));
  }
//ASK USER ANOTHER QUESTION
  response = readlineSync.question(getListsMenu()).toLowerCase();
}
