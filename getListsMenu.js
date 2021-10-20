const chalk = require("chalk");
const lists = require("./lists");

function getListsMenu() {
  const listsDisplay = lists
    .map((list, i) => `${i + 1}. ${list.title}`)
    .join("\n");

  const menu = `${chalk.blue.bold(
    "Choose a list to view (by entering its number) or choose an option at the bottom (by letter):"
  )}

${listsDisplay}

(n) Add new list.
(q) Quit.

`;

  return menu;
}

module.exports = getListsMenu;
