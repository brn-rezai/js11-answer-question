// ? 4. Change two or more values of this object .
// todo : one of the values that you change must be the skills property // example: ['python', 'css', 'js']

const obj2 = {
  id: 'kd455',
  age: 24,
  username: 'john2000',
  skills: [ 'html', 'css', 'js' ],
};

//  !   Answer:

obj2[ "skills" ] = [ 'python', 'css', 'js' ];
obj2[ "age" ] = 25;
obj2[ "username" ] = "john2001";

console.log( obj2 );

