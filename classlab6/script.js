let hourNow = 20;
let greeting;

if(hourNow >24){greeting = 'Welcome to the next day'}
else if(hourNow>18){greeting = 'Goodevening!'}
else if(hourNow>12) {greeting = 'Good afternoon!'}
else if (hourNow>0) {greeting = 'Good morning!'}
else{greeting = 'Welcome!'}
document.write('<h2 class="greet">' + greeting + '</h2>')

console.log("Tyler Willis")
console.log(greeting)
console.log("Example 1 : conversion between data types")
let num1 = prompt("Enter number 1")
num1 = parseInt(num1)
let num2 = parseInt(prompt("Enter number 2"))
let sum = num1 + num2
console.log(`The sum of ${num1} and ${num2} is ${sum}`)

console.log("Exercise")
let firstname = prompt("Enter first name: ")
let age = prompt("Enter your age: ")
let language = prompt("Enter your language: ")
let hobby = prompt("Enter your hobby: ")
console.log(`My name is ${firstname}. I am ${age} years old and my favorite programming language is ${language} and my favorite hobby is ${hobby}.`)