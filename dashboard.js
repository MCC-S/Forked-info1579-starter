/*
    Name: Kyle H
    Date: November 15, 2026
    Assignment: Module 8 Applied Programming Activity
    File: dashboard.js
*/

"use strict";

import { courseModules } from "./data.js";

// Reset Dashboard
export const resetDashboard = (
  studentNameInput,
  completedModulesInput,
  studyDayInput,
  output
) => {
  console.log("Student Name before reset:", studentNameInput.value);

  console.log(
    "Completed Modules before reset:",
    completedModulesInput.value
  );

  console.log("Study Day before reset:", studyDayInput.value);

  studentNameInput.value = "";
  completedModulesInput.value = 0;
  studyDayInput.value = "";
  output.innerHTML = "";
  output.style.backgroundColor = "";
};

// Display Modules
export const displayModules = (modules) => {
  const list = document.createElement("ul");

  for (let i = 0; i < modules.length; i++) {
    const listItem = document.createElement("li");

    listItem.textContent = modules[i].moduleName;

    list.appendChild(listItem);
  }

  return list;
};

// Display Remaining Modules
export const displayRemainingModules = (
  remainingModules,
  output
) => {
  const remainingModulesList = output.querySelector(
    "#remainingModulesList"
  );

  if (remainingModulesList) {
    remainingModulesList.appendChild(
      displayModules(remainingModules)
    );
  }
};

// Apply Dashboard Color
export const applyDashboardColor = (
  percentComplete,
  output
) => {
  if (percentComplete >= 75) {
    output.style.backgroundColor = "#d4edda";
  } else if (percentComplete >= 25) {
    output.style.backgroundColor = "#fff3cd";
  } else {
    output.style.backgroundColor = "#f8d7da";
  }
};

// Display Dashboard
export const displayDashboard = (
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
) => {
  output.innerHTML = `
    <div class="dashboard-card">
      <h2>My Study Dashboard</h2>

      <p><strong>Name:</strong> ${studentName}</p>
      <p><strong>Total Modules:</strong> ${courseModules.length}</p>
      <p><strong>Completed Modules:</strong> ${completedModules}</p>
      <p><strong>Total Study Hours:</strong> ${totalStudyHours}</p>
      <p><strong>Remaining Study Hours:</strong> ${remainingHours}</p>

      <p><strong>Daily Study Hours (7 days):</strong> ${dailyStudyHours.toFixed(2)}</p>
      <p><strong>Daily Study Minutes (7 days):</strong> ${dailyStudyMinutes.toFixed(0)}</p>

      <p><strong>Daily Study Hours (with rest day):</strong> ${adjustedDailyHours.toFixed(2)}</p>
      <p><strong>Daily Study Minutes (with rest day):</strong> ${adjustedDailyMinutes.toFixed(0)}</p>

      <p><strong>Percent Complete:</strong> ${percentComplete.toFixed(0)}%</p>
      <p><strong>Percent Remaining:</strong> ${percentRemaining.toFixed(0)}%</p>
      <p><strong>Current Grade:</strong> ${grade}</p>
      <p><strong>Progress Status:</strong> ${progress}</p>
      <p><strong>Study Day:</strong> ${studyDay}</p>
      <p><strong>Today's Plan:</strong> ${studyPlan}</p>

      <p><strong>Remaining Modules:</strong></p>
      <div id="remainingModulesList"></div>
    </div>
  `;
};
