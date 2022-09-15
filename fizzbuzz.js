const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter number to see if you fizz or buzz: "));

console.log(num);

if(num % 15 === 0){
    console.log("FizzBuzz");

} else if(num % 3 === 0){
    console.log ("Fizz");

} else if(num % 5 === 0){
        console.log ("Buzz");
}