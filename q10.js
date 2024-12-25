// ? 10. Write a function which accepts a single array argument.
// todo1 : It should return an object with the keys first, second, third, and rest.
// todo2 : first: the first element in the array
// todo3 : second: the second element in the array
// todo4 : third: the third element in the array
// todo5 : rest: all other elements in the array
// Hint  : You can write a one line function to make this work using : An arrow function and array destructuring in the function argument

const ArrayOfNames = [ 'Tom', 'Margaret', 'Allison', 'David', 'Pierre' ];

// ! Answer

// const obj = {
//     first: 'Tom',
//     second : 'Margaret',
//     third : 'Allison',
//     rest: [ 'David', 'Pierre' ]
// };





// const makeObject = ( arr ) => {
//     const obj = {};
//     const [ first, second, third, ...rest ] = arr;
//     obj[ "first" ] = first;
//     obj[ "second" ] = second;
//     obj[ "third" ] = third;
//     obj[ "rest" ] = rest;
//     return obj;
// };

// console.log( makeObject( ArrayOfNames ) );


const makeObject = ( first, second, third, ...rest ) => {
    const obj = {};
    obj[ "first" ] = first;
    obj[ "second" ] = second;
    obj[ "third" ] = third;
    obj[ "rest" ] = rest;
    return obj;
};

console.log( makeObject( ...ArrayOfNames ) );

