/*
Name: Tyler Willis
Course: JavaScript Programming
Homework 2: Arrays, Functions, and AI Assistance
Date: September 27, 2026
*/

// Class Example 1: Creating an Array

console.log("\n------ Class Example 1: Arrays -----");

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);
console.log("First fruit:", fruits[0]);


// Class Example 2: Using a Loop with Arrays

console.log("\n------ Class Example 2: Loop Through Array -----");

let colors = ["Red", "Blue", "Green"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


// Class Example 3: Functions and Return Values

console.log("\n------ Class Example 3: Functions -----");

function squareNumber(num) {
    return num * num;
}

console.log("Square:", squareNumber(5));


// Lab Exercise: Student Score Analyzer

console.log("\n------ Student Score Analyzer -----");

let scores = [];

for (let i = 0; i < 5;) {
    let input = prompt("Enter student score " + (i + 1) + ":");

    if (input === null) {
        console.log("Score entry cancelled.");
        break;
    }

    let score = Number(input);

    if (input.trim() === "" || !Number.isFinite(score) || score < 0 || score > 100) {
        console.log("Please enter a number from 0 to 100.");
        continue;
    }

    scores.push(score);
    i++;
}

function calculateAverage() {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    return total / scores.length;
}

if (scores.length === 5) {
    let average = calculateAverage();

    console.log("Scores:", scores.join(", "));
    console.log("Average Score:", average);

    if (average >= 70) {
        console.log("Class Passed");
    } else {
        console.log("Class Failed");
    }
}


// AI Assistance:
// ChatGPT helped explain the calculateAverage() function,
// check the loop, and debug the JavaScript code.