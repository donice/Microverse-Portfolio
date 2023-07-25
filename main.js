const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('#close');
const navLinks = document.querySelectorAll('.nav-links');

function toggleMobileNav() {
  hamburger.classList.toggle('is-active');
  mobileNav.classList.toggle('is-active');
}

hamburger.addEventListener('click', toggleMobileNav);
mobileNavClose.addEventListener('click', toggleMobileNav);

navLinks.forEach((link) => {
  link.addEventListener('click', toggleMobileNav);
});

function scrollToSection(event) {
  event.preventDefault();
  const target = document.querySelector(event.target.getAttribute("href"));
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

const anchorTags = document.querySelectorAll('a[href^="#"]');

anchorTags.forEach((anchor) => {
  anchor.addEventListener("click", scrollToSection);
});
