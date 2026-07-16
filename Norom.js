const Year = new Date().getFullYear();
document.querySelectorAll('.year').forEach(el => {
    el.textContent = Year;
});