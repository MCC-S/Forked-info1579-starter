/*
    Name: Kyle H
    Assignment: Final Project
    File: contact.js
*/

"use strict";

// Get Contact Form Elements
const contactForm = document.getElementById("contactForm");

const contactName = document.getElementById("contactName");

const contactEmail = document.getElementById("contactEmail");

const contactMessage = document.getElementById("contactMessage");

const contactOutput = document.getElementById("contactOutput");

// Handle Contact Form Submission
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = contactName.value.trim();

  const email = contactEmail.value.trim();

  const message = contactMessage.value.trim();

  if (name === "" || email === "" || message === "") {
    contactOutput.innerHTML = `
      <p>Please complete all fields.</p>
    `;

    return;
  }

  contactOutput.innerHTML = `
    <div class="dashboard-card">
      <h3>Thank You, ${name}!</h3>
      <p>Your message has been entered successfully.</p>
      <p>Email: ${email}</p>
    </div>
  `;

  contactForm.reset();
});
