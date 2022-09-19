// Also know as ...

/*Spread:
Used to split up array elements OR object properties
const newArray = [...oldArray, 1, 2]
const newObject = {...oldOnject, newProp: 5}
*/

/*Rest:
Used to merge a list of function arguments into an array
function sortArgs(...args) {
    return args.sort()
}
*/

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
  name: "Bunsbof",
};

const newPerson = {
  ...person,
  age: 22,
};

console.log(newPerson);

const filter = (...args) => args.filter((el) => el === 1);

console.log(filter(1, 2, 3));
