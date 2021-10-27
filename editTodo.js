const readlineSync = require('readline-sync')

const editTodo = (todo, list) => {
  console.clear();
  //TERNARY STATEMENT: IS TODO COMPLETE (?) IF TRUE MARK ✅ (:) OR IF FALSE MARK 🆇
  const editMenu = `How would you like to edit the following todo?
${todo.isComplete ? '✅' : '🆇'} ${todo.text}

(x) Mark it unfinished.
(v) Mark it done.
(e) Edit the text of the todo.
(d) Delete the todo.
(b) Go back without changing anything.
`;
//ASK USER WHAT THEY WANT TO DO
  const response = readlineSync.question(editMenu).toLowerCase();

  if (response === 'x') {
    todo.markIncomplete();
  } else if (response === 'v') {
    todo.markComplete();
  } else if (response === 'e') {
    console.clear()
    //IF RESPONSE IS "e", ASK USER ANOTHER QUESTION
    const text = readlineSync.question('What should we change the text to?\n\n');
    todo.changeText(text)
  } else if (response === 'd') {
    // // IF RESPONSE IS "d", LOOP THRU TODOS ARRAY
    // todos.forEach((candidate, i) => {
    //   // FIND SELECTED TODO
    //   if (candidate.text === todo.text) {
    //     // REMOVE AT INDEX POSITION, JUST 1
    //     todos.splice(i, 1);
    //   }
    // })
    list.removeTodo(todo)
  }

  console.clear();
}

module.exports = editTodo;