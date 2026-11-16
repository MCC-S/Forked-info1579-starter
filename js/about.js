/*
    Name: Kyle H
    Assignment: Final Project
    File: about.js
*/

"use strict";

// About Me Information

const aboutMeObject = {
  name: "Kyle H",

  major: "Computer Engineering",

  currentJob: "High school software developer",

  hobbies: ["Walk", "Run", "Basketball"],

  skills: ["HTML", "CSS", "JavaScript", "Java", "C#"],
};

// Get HTML Elements Using DOM IDs
const nameElement = document.getElementById("name");

const majorElement = document.getElementById("major");

const currentJobElement = document.getElementById("currentJob");

const hobbiesElement = document.getElementById("hobbies");

const skillsElement = document.getElementById("skills");

const jokeContainer = document.getElementById("jokeContainer");

// Display Personal Information Using innerHTML
nameElement.innerHTML = `
  <p><strong>Name:</strong> ${aboutMeObject.name}</p>
`;

majorElement.innerHTML = `
  <p><strong>Major:</strong> ${aboutMeObject.major}</p>
`;

currentJobElement.innerHTML = `
  <p><strong>Current Job:</strong> ${aboutMeObject.currentJob}</p>
`;

// Use map() to Display Hobbies
hobbiesElement.innerHTML = aboutMeObject.hobbies
  .map((hobby) => `<li>${hobby}</li>`)
  .join("");

// Use map() to Display Technical Skills
skillsElement.innerHTML = aboutMeObject.skills
  .map((skill) => `<li>${skill}</li>`)
  .join("");

// Move Joke Feature to About Me Page
const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",

  "Why did the computer go to the doctor? Because it had a virus!",

  "Why do JavaScript developers wear glasses? Because they cannot C#!",
];

// Select a Random Joke
const randomIndex = Math.floor(Math.random() * jokes.length);

jokeContainer.innerHTML = `
  <p>${jokes[randomIndex]}</p>
`;
