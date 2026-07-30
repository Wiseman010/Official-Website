const textElement = document.getElementById("carousel-text");

// Array of words/phrases for the carousel
const phrases = ["Web Developer.", "UI/UX Designer.", "Problem Solver.", "Bypass FRP Lock on Android Devices.", "Unlock Google Account on Android Devices.", "Remove FRP Lock on Samsung Devices.", "Bypass Google Verification on Android Phones.", "FRP Bypass Tool for Android Devices.", "Unlock FRP Lock on Android Tablets.", "Bypass Google Account Verification on Android Phones.", "Firmware Dump Download.", "Apple Ramdisk Download."];

let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function playCarousel() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    // Add letters one by one
    textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
    characterIndex++;

    // Check if the word is completely typed
    if (characterIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(playCarousel, 3000); // Pause at the end of the phrase
      return;
    }
  } else {
    // Remove letters one by one
    textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
    characterIndex--;

    // Check if the word is completely deleted
    if (characterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length; // Move to next phrase
    }
  }

  // Set typing speed (faster when deleting)
  const speed = isDeleting ? 50 : 100;
  setTimeout(playCarousel, speed);
}

// Start the animation loop when the DOM is loaded
document.addEventListener("DOMContentLoaded", playCarousel);



//The Menu bar toggle button
// 1. Select your elements
const menuBarEl = document.getElementById("menuBar"); 
const menuEl = document.querySelector(".menu"); 
const xmarkEl = document.getElementById("xmark"); 
const offEl = document.querySelector(".off");
const switchEl = document.querySelector(".switch"); 

// 2. Define the 780px mobile media query tracker
const mobileQuery = window.matchMedia('(max-width: 780px)');

// 3. Set up the menuBar click event
menuBarEl.addEventListener('click', () => {
  // Guard Clause: If the screen is wider than 780px, stop right here
  if (!mobileQuery.matches) return; 

  menuEl.style.display = 'flex';
  menuBarEl.style.right = '-70px';
  switchEl.style.right = "5px";
});

// 4. Set up the xmark click event
xmarkEl.addEventListener("click", () => {
  // Guard Clause: If the screen is wider than 780px, stop right here
  if (!mobileQuery.matches) return;

  menuEl.style.display = 'none';
  menuBarEl.style.right = '10px';
  switchEl.style.right = '70px';
});

// 5. Handle layout cleanups when transitioning between desktop and mobile views
function handleScreenResize(e) {
  if (e.matches) {
    // Screen just shrunk to 780px or less (Mobile state reset)
    menuEl.style.display = 'none';
    menuBarEl.style.display = 'block'; // Make sure the hamburger icon is visible
    menuBarEl.style.right = '15px';
    switchEl.style.right = '60px';
  } else {
    // Screen just expanded beyond 780px (Desktop view override)
    menuBarEl.style.display = 'none';
    menuEl.style.display = 'flex';
    // Clear out inline styles so CSS can handle desktop placement cleanly
    menuBarEl.style.right = '';
    switchEl.style.right = '';
  }
}

// 6. Run the layout checker once on load and watch for future changes
handleScreenResize(mobileQuery);
mobileQuery.addEventListener("change", handleScreenResize);
