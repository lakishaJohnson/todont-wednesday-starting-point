// (text: String) => Todo object
const makeTodo = (text) => {
  return {
    text: text,
    isComplete: false,
    markComplete: function() {
      this.isComplete = true;
    },

    markIncomplete: function() {
      this.isComplete = false;
    },

    changeText: function(newText) {
      this.text = newText;
    }
  }
}

module.exports = makeTodo;