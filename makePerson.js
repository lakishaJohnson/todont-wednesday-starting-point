const makeTodo = require("./makeTodo");

const person1 = {
  firstName: 'Colin',
  lastName: 'Jaffe',
  fullName: 'Colin Jaffe',
  age: 41,
  lovesVim: true,
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },

  ageUp: function() {
    this.age = this.age + 1;
  },

  getHobbies: function() {
    return this.lovesVim ? "Vimmin' all day" : "I don't know, something useful probably."
  },

  changeFirstName: function(newName) {
    if (newName.length === 0) {
      throw "A blank name was attempted."
    }

    this.firstName = newName;
  }
}

const person2 = {
  firstName: 'Younes',
  lastName: 'Tahiri',
  age: Infinity,
  lovesVim: false,
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },

  ageUp: function () {
    this.age = this.age + 1;
  },

  getHobbies: function () {
    return this.lovesVim ? "Vimmin' all day" : "I don't know, something useful probably."
  },

  changeFirstName: function (newName) {
    if (newName.length === 0) {
      throw "A blank name was attempted."
    }

    this.firstName = newName;
  }
}

console.clear();
// person1.firstName = 'Danger'
// console.log(person1.getFullName());
// person1.ageUp();
// person1.ageUp();
// person1.ageUp();
// console.log(person1.age)
// console.log(person1.getHobbies())

// person1.changeFirstName('Danger')
// console.log(person1.getFullName())

const makePerson = (firstName, lastName, age, lovesVim) => {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    lovesVim: lovesVim,
    getFullName: function () {
      return this.firstName + ' ' + this.lastName;
    },

    ageUp: function () {
      this.age = this.age + 1;
    },

    getHobbies: function () {
      return this.lovesVim ? "Vimmin' all day" : "I don't know, something useful probably."
    },

    changeFirstName: function (newName) {
      if (newName.length === 0) {
        throw "A blank name was attempted."
      }

      this.firstName = newName;
    }
  }
}

const colin = makePerson('Colin', "Jaffe", 41, true)
const younes = makePerson('Younes', "Tahiri", Infinity, false)
console.log(younes.getFullName())