/* normal functions syntax
function myFunc () {
    
}
*/

/* arrow functions
const myFunction = () => {

}

No more issues with the this keyword
*/

// function printMyName(name) {
//     console.log(name);
// }

// const printMyName = (name) => {
//     console.log(name);
// }

const printMyName = name => {
    console.log(name);
}

printMyName('Bunsbof')

// const multiply = (number) => {
//     return number * 2;
// }

/* If your arrow function end with one line you should write it like this
const multiply = (number) => number * 2
*/

// Or like this
const multiply = number => number * 2;

console.log(multiply(6));