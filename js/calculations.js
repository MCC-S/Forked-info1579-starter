/*
    Name: Kyle H
    Date: November 15, 2026
    Assignment: Module 8 Applied Programming Activity
    File: calculations.js
*/
/*
"use strict";

import { courseModules } from "./data.js";

// Calculate Study Hours
export const calculateStudyHours = (modules, hoursPerModule = 6) =>
  modules * hoursPerModule;

// Calculate Percent Complete
export const calculatePercentComplete = (completed, total) =>
  (completed / total) * 100;

// Get Course Progress
export const getCourseProgress = (percentRemaining) => {
  if (percentRemaining === 0) {
    return "Current Progress: Finished!";
  } else if (percentRemaining <= 24.99) {
    return "Current Progress: Almost Finished!";
  } else if (percentRemaining <= 74.99) {
    return "Current Progress: Making Progress";
  } else {
    return "Current Progress: Just Getting Started";
  }
};

// Get Course Grade
export const getCourseGrade = (percentComplete) => {
  if (percentComplete >= 90) {
    return "Course Grade: A";
  } else if (percentComplete >= 80) {
    return "Course Grade: B";
  } else if (percentComplete >= 70) {
    return "Course Grade: C";
  } else if (percentComplete >= 60) {
    return "Course Grade: D";
  } else {
    return "Course Grade: F";
  }
};

// Get Study Plan
export const getStudyPlan = (studyDay) => {
  const totalStudyHours = courseModules.reduce(
    (total, module) => total + module.hoursRequired,
    0
  );

  const dailyStudyMinutes = (totalStudyHours / 7) * 60;
  const adjustedDailyMinutes = (totalStudyHours / 6) * 60;

  let studyPlan;

  switch (studyDay) {
    case "Monday":
      studyPlan = `Study for ${dailyStudyMinutes.toFixed(0)} minutes today.`;
      break;

    case "Tuesday":
      studyPlan = "Rest day.";
      break;

    case "Wednesday":
      studyPlan = `Lab day. Study for ${adjustedDailyMinutes.toFixed(0)} minutes today.`;
      break;

    case "Thursday":
      studyPlan = `Applied Programming Activity day. Study for ${adjustedDailyMinutes.toFixed(0)} minutes today.`;
      break;

    case "Friday":
    case "Saturday":
    case "Sunday":
      studyPlan = "Open study day.";
      break;

    case "Complete":
      studyPlan = "Course Completed!";
      break;

    default:
      studyPlan = "No study day selected.";
      break;
  }

  return studyPlan;
};

*/