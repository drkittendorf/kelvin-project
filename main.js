
// kelvin is a constant variable
const kelvin =  293;
// celius takes the kelvin value and coverts it to celsius
const celsius = kelvin - 273;
// declare fahrenheit variable
let fahrenheit = (celsius * 9) / 5 + 32;
// round the value of fahrenheit down
fahrenheit = Math.floor(fahrenheit);

let newton = (celsius * 33) / 100;
newton = Math.floor(newton);

//console.logs
console.log (fahrenheit);
console.log (`The temperature is ${fahrenheit} degrees fahrenheit`);
console.log (newton);
console.log (`The temperature is ${newton} degrees newton`);
