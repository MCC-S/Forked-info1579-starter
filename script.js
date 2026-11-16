/*
    Name: Kyle H
    Date: November 15, 2026
    Assignment: Module 8 Applied Programming Activity
    File: script.js
    Trimester: 1
    Instructor: Lisa Thoendel
*/

"use strict";

// Import Calculation Functions
import {
  calculatePercentComplete,
  getCourseProgress,
  getCourseGrade,
  getStudyPlan
} from "./calculations.js";

// Import Validation Functions
import {
  validateInput,
  runUnitTests
} from "./validators.js";

// Import Dashboard Functions
import {
  resetDashboard,
  displayRemainingModules,
  applyDashboardColor,
  displayDashboard
} from "./dashboard.js";

// Import API Functions
import {
  displayJoke,
  displayQuote
} from "./api.js";

// Import Course Data
import { courseModules } from "./data.js";

// Part 1: Get DOM Elements
const studentNameInput =
  document.getElementById("studentName");

const completedModulesInput =
  document.getElementById("completedModules");

const studyDayInput =
  document.getElementById("studyDay");

const generateButton =
  document.getElementById("generateButton");

const resetButton =
  document.getElementById("resetButton");

const output =
  document.getElementById("output");

// Part 2: Generate Dashboard
const generateDashboard = () => {
  try {
    const studentName = studentNameInput.value.trim();

    const completedModules =
      completedModulesInput.value.trim() === ""
        ? NaN
        : Number(completedModulesInput.value);

    const studyDay = studyDayInput.value;

    // Validate User Inputs
    validateInput(
      studentName,
      completedModules,
      studyDay
    );

    // Run Unit Tests
    runUnitTests();

    // Calculate Remaining Modules
    const remainingModules = courseModules.filter(
      (module, index) => index >= completedModules
    );

    // Use map() to Create a List of Module Names
    const moduleNames = courseModules.map(
      (module) => module.moduleName
    );

    // Use reduce() to Calculate Remaining Study Hours
    const remainingHours = remainingModules.reduce(
      (total, module) => total + module.hoursRequired,
      0
    );

    // Calculate Total Study Hours
    const totalStudyHours = courseModules.reduce(
      (total, module) => total + module.hoursRequired,
      0
    );

    // Calculate Percent Complete
    const percentComplete = calculatePercentComplete(
      completedModules,
      courseModules.length
    );

    const percentRemaining = 100 - percentComplete;

    // Calculate Daily Study Hours and Minutes
    const dailyStudyHours = totalStudyHours / 7;

    const dailyStudyMinutes = dailyStudyHours * 60;

    const adjustedDailyHours = totalStudyHours / 6;

    const adjustedDailyMinutes = adjustedDailyHours * 60;

    // Get Grade, Progress, and Study Plan
    const grade = getCourseGrade(percentComplete);

    const progress = getCourseProgress(percentRemaining);

    let studyPlan;

    if (completedModules === courseModules.length) {
      studyPlan = getStudyPlan("Complete");
    } else {
      studyPlan = getStudyPlan(studyDay);
    }

    // Display Console Information
    console.log("Student Name:", studentName);

    console.log("Completed Modules:", completedModules);

    console.log("Study Day:", studyDay);

    console.log("Percent Complete:", percentComplete);

    console.log("Grade and Progress:", grade, progress);

    // Module 7: Display Array Iterator Results
    console.log("Module Names:", moduleNames);

    console.log("Remaining Modules:", remainingModules);

    console.log("Remaining Study Hours:", remainingHours);

    // Display Dashboard
    displayDashboard(
      studentName,
      completedModules,
      totalStudyHours,
      percentComplete,
      percentRemaining,
      grade,
      progress,
      studyDay,
      studyPlan,
      dailyStudyHours,
      dailyStudyMinutes,
      adjustedDailyHours,
      adjustedDailyMinutes,
      remainingHours,
      remainingModules,
      output
    );

    // Display Remaining Modules
    displayRemainingModules(remainingModules, output);

    // Apply Dashboard Color
    applyDashboardColor(percentComplete, output);

  } catch (error) {
    output.innerHTML = `
      <div class="dashboard-card">
        <h2>Error</h2>
        <ul>${error.message}</ul>
      </div>
    `;

    output.style.backgroundColor = "#f8d7da";
  }
};

// Part 3: Button Event Listeners
generateButton.addEventListener("click", () => {
  generateDashboard();
});

resetButton.addEventListener("click", () => {
  resetDashboard(
    studentNameInput,
    completedModulesInput,
    studyDayInput,
    output
  );
});

// Part 4: Load Joke and Quote When Page Opens
displayJoke();

displayQuote();
