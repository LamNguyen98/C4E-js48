const name = "Lam";
const age = 30;

// Concatenation
console.log("My name is " + name + " and I am " + age);
// Template String (use this)
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = "hello world!";
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.substring(0, 7).toUpperCase());
console.log(s.split(''));

const a = "technology, computers, it, code";
console.log(a.split(', '))

/*multi-line
comment */
// Arrays - variables that holds multiple values
const fruits = ['apples', 'oranges', 'pears', 10, true]
fruits[3] = 'a'
fruits.push('mangos')
fruits.unshift('strawberries')
fruits.pop()  // pop the last one off

console.log(fruits)
console.log(Array.isArray(fruits))
console.log(fruits.indexOf('oranges'))

// Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "A",
        city: "HN",
        state: "VN"
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address: { state } } = person;
console.log(firstName);
console.log(state);

person.email = "john@gmail";

const todos = [
    {
        id: 1,
        text: "take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "dentist appointment",
        isCompleted: false
    }
];
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For
for (let i = 0; i <= 10; i++) {
    console.log(i);
    console.log(`For Loop Number: ${i}`)
};
// While
let i = 0
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
};

for (let todo of todos)
    console.log(todo.text)

