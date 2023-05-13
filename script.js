// Select the hamburger icon and the navigation menu element from the DOM
const hamburger = document.querySelector('.hambuger');
const navMenu = document.querySelector('.nav-links');
const navlinks = document.querySelectorAll('.links');

function mobileMenu() {
  if (navMenu.classList.contains('way')) {
    navMenu.classList.remove('way');
    hamburger.classList.toggle('active');
  } else {
    navMenu.classList.add('way');
    hamburger.classList.toggle('active');
  }
}
// Add a click event listener to the hamburger icon that triggers the mobileMenu function
hamburger.addEventListener('click', mobileMenu);

document.querySelectorAll('.links').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.add('way');
    hamburger.toggle('fa-bars active');
  })
);
