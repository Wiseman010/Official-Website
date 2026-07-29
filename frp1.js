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
const menuBarEl = document.getElementById("menuBar");
const menuEl = document.querySelector(".menu");
const xmarkEl = document.getElementById("xmark");
const offEl = document.querySelector(".off")
const switchEl = document.querySelector(".switch");

menuBarEl.addEventListener('click', () => {
    menuEl.style.display = 'flex';
    menuBarEl.style.right = '-60px';
    switchEl.style.right = "10px";
});

xmarkEl.addEventListener("click", () => {
    menuEl.style.display = 'none';
    menuBarEl.style.right = '15px';
    switchEl.style.right = '60px';
});
