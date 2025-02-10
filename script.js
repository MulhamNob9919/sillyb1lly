// Select necessary DOM elements
const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the navigation menu for mobile screens when hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle visibility of navigation links
});

// Change navbar color when scrolled down
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) { // If scrolled more than 0px
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'; // Dark background when scrolled
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; // Transparent navbar at the top
    }
});
