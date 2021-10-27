const chalk = require("chalk");

function getTodosMenu(list) {
  const todoList = list.todos
    .map((todo, i) => {
      const symbol = todo.isComplete ? "✅" : "🆇";
      return `${i + 1}. ${symbol} ${todo.text}`;

    })
    .join("\n");

  const menu = `${chalk.blue.bold(
    "Choose a todo to edit (by entering its number) or choose an option at the bottom (by letter):"
  )}
${todoList}

(n) Add new todo.
(r) Rename this list.
(d) Delete this list.
(b) Back to lists.

`;

  return menu;
}

module.exports = getTodosMenu;
