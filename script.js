
const logo = document.querySelector('.logo');
const menuIcon = document.querySelector('.menu-icon');
const mainNav = document.querySelector('.main-nav');
const closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('click', showNav);
closeIcon.addEventListener('click', hideNav);

function showNav() {
    // 1. Make logo invisible
    logo.style.display = 'none';

    // 2. Hide the menu icon
    menuIcon.style.display = 'none';

    // 3. Show the navlinks and close btn
    mainNav.style.display = 'flex'
    closeIcon.classList.remove('hidden')
}

function hideNav() {
    // 1. Make logo visible
    logo.style.display = 'block';

    // 2. Show the menu icon
    menuIcon.style.display = 'block';

    // 3. Hide the navlinks and close btn
    mainNav.style.display = 'none'
    closeIcon.classList.add('hidden')
}