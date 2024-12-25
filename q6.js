// ? 6. We have an object called 'user'.
// Write the destructuring assignment that converts:
// todo1 : 'name' property into the variable 'firstName'.
// todo2 : 'years' property into the variable 'age'.
// todo3 : 'admin' property into the variable 'isAdmin'.(if no such property exists create 'isAdmin' variable and assign false value to that)

let user = { name: 'John', years: 30 };
let { name, years: age, isAdmin = false } = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

// ! Answer
