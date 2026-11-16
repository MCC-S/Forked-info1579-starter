/*
    Name: Kyle H
    Assignment: Final Project
    File: script.js
*/

"use strict";

// Import Career and Course Data
import { careerPaths, courseModules } from "./data.js";

// Get HTML Elements
const dashboardForm = document.getElementById("dashboardForm");

const studentNameInput = document.getElementById("studentName");

const completedModulesInput =
  document.getElementById("completedModules");

const studyDayInput = document.getElementById("studyDay");

const careerInput = document.getElementById("career");

const output = document.getElementById("output");

// Part 3: Array Iterator Methods

// Use map() to Get All Career Names
const careerNames = careerPaths.map(
  (career) => career.name
);

console.log("Career Path Names:", careerNames);

// Use filter() to Get Careers With More Than 4 Resources
const careersWithMoreResources = careerPaths.filter(
  (career) => career.resources.length > 4
);

console.log(
  "Career Paths With More Than 4 Resources:",
  careersWithMoreResources
);

// Use reduce() to Calculate Total Skills
const totalSkills = careerPaths.reduce(
  (total, career) => total + career.skills.length,
  0
);

console.log("Total Career Skills:", totalSkills);

// Calculate Study Dashboard Information
const generateDashboard = (event) => {
  event.preventDefault();

  try {
    // Get User Information
    const studentName = studentNameInput.value.trim();

    const completedModules = Number(
      completedModulesInput.value
    );

    const studyDay = studyDayInput.value;

    const selectedCareer = careerInput.value;

    // Validate Student Name
    if (studentName === "") {
      throw new Error("Please enter your student name.");
    }

    // Validate Completed Modules
    if (
      completedModulesInput.value.trim() === "" ||
      !Number.isInteger(completedModules) ||
      completedModules < 0 ||
      completedModules > courseModules.length
    ) {
      throw new Error(
        "Please enter a valid number of completed modules between 0 and 10."
      );
    }

    // Validate Study Day
    if (studyDay === "") {
      throw new Error("Please select a study day.");
    }

    // Validate Career Path
    if (selectedCareer === "") {
      throw new Error("Please select a career path.");
    }

    // Find Selected Career
    const career = careerPaths.find(
      (item) => item.name === selectedCareer
    );

    // Calculate Remaining Modules Using filter()
    const remainingModules = courseModules.filter(
      (module, index) => index >= completedModules
    );

    // Get Module Names Using map()
    const moduleNames = courseModules.map(
      (module) => module.moduleName
    );

    // Calculate Remaining Study Hours Using reduce()
    const remainingHours = remainingModules.reduce(
      (total, module) => total + module.hoursRequired,
      0
    );

    // Calculate Total Study Hours
    const totalStudyHours = courseModules.reduce(
      (total, module) => total + module.hoursRequired,
      0
    );

    // Calculate Progress
    const percentComplete = Math.round(
      (completedModules / courseModules.length) * 100
    );

    const percentRemaining = 100 - percentComplete;

    // Calculate Study Time
    const dailyStudyHours = totalStudyHours / 7;

    const dailyStudyMinutes = Math.round(
      dailyStudyHours * 60
    );

    // Determine Grade
    let grade;

    if (percentComplete >= 90) {
      grade = "Excellent";
    } else if (percentComplete >= 70) {
      grade = "Good";
    } else if (percentComplete >= 50) {
      grade = "Making Progress";
    } else {
      grade = "Keep Working";
    }

    // Display Console Information
    console.log("Student Name:", studentName);
    console.log("Completed Modules:", completedModules);
    console.log("Study Day:", studyDay);
    console.log("Percent Complete:", percentComplete);
    console.log("Grade:", grade);
    console.log("Module Names:", moduleNames);
    console.log("Remaining Modules:", remainingModules);
    console.log("Remaining Study Hours:", remainingHours);

    // Display Dashboard
    output.style.backgroundColor = "#ffffff";

    output.innerHTML = `
      <h2>Dashboard Summary</h2>

      <div class="dashboard-card">
        <h3>Student Information</h3>
        <p><strong>Name:</strong> ${studentName}</p>
        <p><strong>Study Day:</strong> ${studyDay}</p>
        <p><strong>Career Path:</strong> ${career.name}</p>
      </div>

      <div class="dashboard-card">
        <h3>Study Progress</h3>
        <p><strong>Completed Modules:</strong>
          ${completedModules} of ${courseModules.length}
        </p>
        <p><strong>Percent Complete:</strong>
          ${percentComplete}%
        </p>
        <p><strong>Percent Remaining:</strong>
          ${percentRemaining}%
        </p>
        <p><strong>Progress Status:</strong> ${grade}</p>
      </div>

      <div class="dashboard-card">
        <h3>Study Plan</h3>
        <p><strong>Total Study Hours:</strong>
          ${totalStudyHours}
        </p>
        <p><strong>Remaining Study Hours:</strong>
          ${remainingHours}
        </p>
        <p><strong>Suggested Daily Hours:</strong>
          ${dailyStudyHours.toFixed(2)}
        </p>
        <p><strong>Suggested Daily Minutes:</strong>
          ${dailyStudyMinutes}
        </p>
      </div>

      <div class="dashboard-card">
        <h3>Career Skills: ${career.name}</h3>
        <ul>
          ${career.skills.map(
            (skill) => `<li>${skill}</li>`
          ).join("")}
        </ul>
      </div>

      <div class="dashboard-card">
        <h3>Career Learning Resources</h3>
        <ul>
          ${career.resources.map(
            (resource) => `<li>${resource}</li>`
          ).join("")}
        </ul>
      </div>

      <div class="dashboard-card">
        <h3>Remaining Modules</h3>
        <ul>
          ${remainingModules.length > 0
            ? remainingModules.map(
                (module) => `<li>${module.moduleName}</li>`
              ).join("")
            : "<li>All modules completed!</li>"
          }
        </ul>
      </div>
    `;

    // Apply Dashboard Color Based on Progress
    if (percentComplete >= 75) {
      output.style.borderLeft = "6px solid #28a745";
    } else if (percentComplete >= 40) {
      output.style.borderLeft = "6px solid #ffc107";
    } else {
      output.style.borderLeft = "6px solid #0b77be";
    }

  } catch (error) {
    output.style.backgroundColor = "#f8d7da";
    output.style.borderLeft = "6px solid #dc3545";

    output.innerHTML = `
      <div class="dashboard-card">
        <h2>Error</h2>
        <p>${error.message}</p>
      </div>
    `;
  }
};

// Submit Dashboard Form
dashboardForm.addEventListener(
  "submit",
  generateDashboard
);

// Reset Dashboard
dashboardForm.addEventListener("reset", () => {
  output.innerHTML = "";
  output.style.backgroundColor = "#ffffff";
  output.style.borderLeft = "none";
});
