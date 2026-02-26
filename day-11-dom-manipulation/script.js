// =======================
// TASK 1: Access elements
// =======================

// getElementById -> heading
const animeHeading = document.getElementById("main-heading");

// querySelector -> first paragraph with this class
const animeIntroParagraph = document.querySelector(".main-paragraph");

// querySelector -> button that changes text & styles
const changeAnimeBtn = document.querySelector("#change-anime-btn");

// querySelectorAll -> all paragraphs (NodeList)
const allParagraphs = document.querySelectorAll("p");
console.log("All paragraphs on the page:", allParagraphs);

// ==========================================
// TASK 2 & 3: Change text and styles on click
// ==========================================

changeAnimeBtn.addEventListener("click", function () {
  // Change heading and paragraph text (textContent)
  animeHeading.textContent = "Top Anime Recommendations";
  animeIntroParagraph.textContent =
    "Start with Naruto, One Piece, and Attack on Titan, then dive into Demon Slayer and Jujutsu Kaisen.";

  // Change styles dynamically (element.style.property)
  document.body.style.backgroundColor = "#020617"; // darker background
  document.body.style.color = "#e5e7eb";           // light text
  animeHeading.style.fontSize = "3rem";           // bigger heading
});

// ========================
// TASK 4: Show / hide text
// ========================

// Elements for show/hide
const synopsisParagraph = document.getElementById("anime-synopsis");
const toggleSynopsisBtn = document.getElementById("toggle-synopsis-btn");

let synopsisVisible = true;

toggleSynopsisBtn.addEventListener("click", function () {
  if (synopsisVisible) {
    synopsisParagraph.style.display = "none"; // hide paragraph
    toggleSynopsisBtn.textContent = "Show Synopsis";
    synopsisVisible = false;
  } else {
    synopsisParagraph.style.display = "block"; // show paragraph
    toggleSynopsisBtn.textContent = "Hide Synopsis";
    synopsisVisible = true;
  }
});

// ==================================
// TASK 5: Add new element dynamically
// ==================================

// Elements for dynamic anime list
const addAnimeBtn = document.getElementById("add-anime-btn");
const animeList = document.getElementById("anime-list");

// Some extra anime titles to add
const extraAnimeTitles = [
  "Demon Slayer",
  "Jujutsu Kaisen",
  "Fullmetal Alchemist: Brotherhood",
  "My Hero Academia",
  "Chainsaw Man",
];

let addedAnimeCount = 0;

addAnimeBtn.addEventListener("click", function () {
  // Create new <li>
  const newAnime = document.createElement("li");
  newAnime.classList.add("anime-item");

  if (addedAnimeCount < extraAnimeTitles.length) {
    newAnime.textContent = extraAnimeTitles[addedAnimeCount];
  } else {
    // Fallback name if we run out of predefined titles
    newAnime.textContent = "New Anime " + (addedAnimeCount + 1);
  }

  addedAnimeCount++;

  // Add it to the list
  animeList.appendChild(newAnime);
});