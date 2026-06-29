const containerEl = document.querySelector('.container');
const searchBarEl = document.querySelector('.search-bar');
const magnifierEl = document.querySelector('.magnifier');
const searchBar = document.querySelector('.search-input');
const itemList = document.querySelectorAll('.item-list li');
const openBtnEl = document.getElementById('open-button');
const hideEl = document.querySelector('.second-list');
const menuEl = document.querySelector('.menu-bar');
const sideMenuEl = document.querySelector('.side-menu');
const cancleEl = document.querySelector('.cancle');



window.addEventListener('scroll', () => {
  if (window.scrollY > 20 * pageXOffset) {
    containerEl.classList.add('scrolled');
  }
    else {
    containerEl.classList.remove('scrolled');
  }
});


//Get references to the search bar and item list elements


//add an event listener to the search bar to listen for input events
searchBar.addEventListener('input', () => {
  const searchTerm = searchBar.value.toLowerCase();

  itemList.forEach(item => {
    const itemText = item.textContent.toLowerCase();
    if (itemText.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

magnifierEl.addEventListener('click', () => {
  searchBarEl.classList.toggle('active');
});

/* 
window.addEventListener('mousemove', function(event) {
  // Get the total width of the browser window
  const totalWidth = window.innerWidth;
  
  // Find the exact middle point of the screen
  const middlePoint = totalWidth / 2;
  
  // Get the current horizontal position of the mouse
  const mouseX = event.clientX;

  if (mouseX < middlePoint) {
    console.log("Mouse is on the LEFT side");
    // Add your visual feedback code here (e.g., show a menu, change color)

   // sideMenuEl.classList.toggle('display'); // Example: Toggle the display of a side menu when mouse is on the left side
  } else {
    console.log("Mouse is on the RIGHT side");
    // Add your visual feedback code here (e.g., show a menu, change color)

     //  sideMenuEl.classList.toggle('display');
  }
});
 */

openBtnEl.addEventListener('click', () => {
  hideEl.classList.toggle('hide');
  openBtnEl.innerHTML = hideEl.classList.contains('hide') ? 'open' : 'close';
});


menuEl.addEventListener('click', () => {
  sideMenuEl.classList.toggle('display');
});

cancleEl.addEventListener('click', () => {
   sideMenuEl.classList.toggle('display');
});




/* 
 if (window.innerWidth < 768) {
  const menuEl = document.querySelector('.menu-bar');
  const sideMenuEl = document.querySelector('.side-menu'); 
  const closeBtnEl = document.querySelector('.close-btn');

  menuEl.addEventListener('click', () => {
    sideMenuEl.classList.toggle('active');
  });

  closeBtnEl.addEventListener('click', () => {
    sideMenuEl.classList.remove('active');
  });
} */



  
/* 
magnifierEl.addEventListener('click', () => {
  searhchBarEl.classList.toggle('active');

 

     setTimeout(() => {
    searhchBarEl.classList.toggle('active');
  }, 1000);   
});

if (window.innerWidth < 768) {
  const menuEl = document.querySelector('.menu-bar');
  const sideMenuEl = document.querySelector('.side-menu');

  menuEl.addEventListener('click', () => {
    sideMenuEl.classList.toggle('active');
  });
} */


// Scroll event listener

/* experimenting with scrollY and scrollHeight to trigger the scrolled class at a certain point in the page, but it doesn't work as expected. I might need to adjust the condition or use a different approach to achieve the desired effect. */



/*
// 1. Select the search input field
const searchInput = document.getElementById('search-input'); 

// 2. Add an event listener for when a key is pressed down
searchInput.addEventListener('keydown', function(event) {
    // 3. Check if the pressed key is the 'Enter' key
    if (event.key === 'Enter') {
        event.preventDefault(); // Optional: Prevents the page from refreshing if inside a form
        
        // 4. Put your logic here to close the search bar
        closeSearch(); 
    }
});

// Example function to close the search bar
function closeSearch() {
    const searchBar = document.getElementById('search-bar-container');
    searchBar.style.display = 'none'; // Hides the search bar
    searchInput.blur();               // Removes focus from the input field
}
*/