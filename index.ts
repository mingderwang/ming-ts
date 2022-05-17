interface Person {
  age: number
  name: string
  say(): string
}

const mike = {
  age: 60,
  name: 'Ming',
  say: function () {
    return 'My name is ' + this.name + " and I'm " + this.age + ' years old!'
  },
}

function sayIt(person: Person) {
  return person.say()
}

console.log(sayIt(mike))
