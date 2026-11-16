/*
    Name: Kyle H
    Date: November 15, 2026
    Assignment: Module 8 Applied Programming Activity
    File: validators.js
*/

/*

"use strict";

import {
  calculateStudyHours,
  calculatePercentComplete,
  getCourseProgress,
  getCourseGrade,
  getStudyPlan
} from "./calculations.js";

import { courseModules } from "./data.js";

// Validate Inputs
export const validateInput = (
  studentName,
  completedModules,
  studyDay
) => {
  const errors = [];

  if (studentName.trim() === "") {
    errors.push("<li>Please enter a name.</li>");
  }

  if (
    !Number.isInteger(completedModules) ||
    completedModules < 0 ||
    completedModules > 10
  ) {
    errors.push(
      "<li>Completed modules must be a whole number between 0 and 10.</li>"
    );
  }

  if (studyDay === "") {
    errors.push("<li>Please select a study day.</li>");
  }

  if (errors.length > 0) {
    throw new Error(errors.join(""));
  }
};

// Run Unit Tests
export const runUnitTests = () => {
  let passedTests = 0;
  let failedTests = 0;

  const test = (description, condition) => {
    console.assert(condition, `FAIL: ${description}`);

    if (condition) {
      passedTests++;
      console.log(`PASS: ${description}`);
    } else {
      failedTests++;
      console.error(`FAIL: ${description}`);
    }
  };

  console.log("----- Starting Unit Tests -----");

  // Five Letter-Grade Tests
  test(
    "Grade A: 90% returns A",
    getCourseGrade(90) === "Course Grade: A"
  );

  test(
    "Grade B: 80% returns B",
    getCourseGrade(80) === "Course Grade: B"
  );

  test(
    "Grade C: 70% returns C",
    getCourseGrade(70) === "Course Grade: C"
  );

  test(
    "Grade D: 60% returns D",
    getCourseGrade(60) === "Course Grade: D"
  );

  test(
    "Grade F: 59% returns F",
    getCourseGrade(59) === "Course Grade: F"
  );

  // Five Additional Tests
  test(
    "Study hours: 2 modules equal 12 hours",
    calculateStudyHours(2, 6) === 12
  );

  test(
    "Percent complete: 5 of 10 modules equals 50%",
    calculatePercentComplete(5, 10) === 50
  );

  test(
    "Progress: 0% remaining means finished",
    getCourseProgress(0) === "Current Progress: Finished!"
  );

  test(
    "Study plan: Tuesday is a rest day",
    getStudyPlan("Tuesday") === "Rest day."
  );

  test(
    "Course contains 10 modules",
    courseModules.length === 10
  );

  console.log("----- Unit Test Results -----");
  console.log("Total tests:", passedTests + failedTests);
  console.log("Tests passed:", passedTests);
  console.log("Tests failed:", failedTests);
};

*/
