const todos = require('./todos')
const readlineSync = require('readline-sync')

const editTodo = (todo) => {
  console.clear();
  const editMenu = `How would you like to edit the following todo?

${todo.isComplete ? '☑️' : '🆇'} ${todo.text}

(x) Mark it unfinished.
(v) Mark it done.
(e) Edit the text of the todo.
(d) Delete the todo.
`
  const response = readlineSync.question(editMenu).toLowerCase()
  if (response === 'x') {
    todo.markIncomplete();
  } else if (response === 'v') {
    todo.markComplete();
  } else if (response === 'e') {
    console.clear()
    const text = readlineSync.question('What should we change the text to?\n\n')
    todo.changeText(text)
  } else if (response === 'd') {
    // loop through the todos array
    todos.forEach((candidate, i) => {
      // find our todo
      if (candidate.text === todo.text) {
        // remove it
        todos.splice(i, 1);
      }
    })
    
  }

  console.clear();
}

module.exports = editTodo;