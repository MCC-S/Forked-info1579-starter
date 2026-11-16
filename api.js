/*
    Name: Kyle H
    Date: November 15, 2026
    Assignment: Module 8 Applied Programming Activity
    File: api.js
*/

"use strict";

// Joke and Quote DOM Elements
export const jokeContainer =
  document.getElementById("jokeContainer");

export const quoteContainer =
  document.getElementById("quoteContainer");

// Get Random Joke Using JokeAPI
export const getJoke = async () => {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Any?safe-mode"
  );

  if (!response.ok) {
    throw new Error("Unable to fetch joke.");
  }

  const data = await response.json();

  if (data.error) {
    throw new Error("Joke API returned an error.");
  }

  return data;
};

// Display Random Joke
export const displayJoke = async () => {
  try {
    jokeContainer.textContent = "Loading joke...";

    const joke = await getJoke();

    jokeContainer.innerHTML = "";

    const setupParagraph = document.createElement("p");

    if (joke.type === "twopart") {
      setupParagraph.textContent = joke.setup;

      const deliveryParagraph = document.createElement("p");

      deliveryParagraph.textContent = joke.delivery;

      jokeContainer.appendChild(setupParagraph);
      jokeContainer.appendChild(deliveryParagraph);
    } else {
      setupParagraph.textContent = joke.joke;

      jokeContainer.appendChild(setupParagraph);
    }
  } catch (error) {
    jokeContainer.textContent = "Unable to load joke.";

    console.error("Error loading joke:", error);
  }
};

// Get Random Quote
export const getQuote = async () => {
  const response = await fetch(
    "https://dummyjson.com/quotes/random"
  );

  if (!response.ok) {
    throw new Error("Unable to fetch quote.");
  }

  const data = await response.json();

  return data;
};

// Display Random Quote
export const displayQuote = async () => {
  try {
    quoteContainer.textContent = "Loading quote...";

    const quote = await getQuote();

    quoteContainer.innerHTML = "";

    const quoteParagraph = document.createElement("p");

    quoteParagraph.textContent = `"${quote.quote}"`;

    const authorParagraph = document.createElement("p");

    const author = document.createElement("strong");

    author.textContent = `— ${quote.author}`;

    authorParagraph.appendChild(author);

    quoteContainer.appendChild(quoteParagraph);
    quoteContainer.appendChild(authorParagraph);
  } catch (error) {
    quoteContainer.textContent = "Unable to load quote.";

    console.error("Error loading quote:", error);
  }
};
