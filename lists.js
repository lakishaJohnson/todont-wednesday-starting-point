const makeTodo = require("./makeTodo");

const fakeTodo1 = makeTodo("Walk the dog");
fakeTodo1.isComplete = true;
const fakeTodo2 = makeTodo("Wash the dishes");
const fakeTodo3 = makeTodo("Make a todo app");
const fakeTodo4 = makeTodo("Prep for today's meeting");
fakeTodo4.isComplete = true;

const lists = [
  {
    title: "Personal",
    todos: [fakeTodo1, fakeTodo2],
  },
  {
    title: "Work",
    todos: [fakeTodo3, fakeTodo4],
  },
];

module.exports = lists;
