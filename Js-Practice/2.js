// Object

let person = {
    name: "Ganesh",
    age: 25,
    isAlive: true,
    gender: 'male',
    address: 'Nagercoil',
    sibling: {
       value: true
    }
}

console.log(person.sibling.value);

// changing value
person.age = 24

// Dot Notation
console.log(person.name);

//Bracket Notation
console.log(person['gender']);


const objName = new Object() //object constructor syntax
const objName2 = {} //Object literal syntax

const personFirstName = 'Anbu'
const personLastName = 'Selvan'
// const person = 27

const{ newVal } = person

console.log(newVal);
