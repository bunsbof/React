// Easily extract array elements or object properties and store them in varibales

/*Array Destructoring
[a,b] = ['Hello', 'Bunsbof']
console.log(a) // Hello
console.log(b) // Bunsbof
*/

/*Object Destructuring
{name} = {name: "Bunsbof", age: 22}
console.log(name) // Bunsbof
console.log(age) // undefined
*/

const numbers = [1, 2, 3];
[num1, num2] = numbers;
// Or if you want to get the number 3
[num1, , num3] = numbers;
console.log(num1, num3);

