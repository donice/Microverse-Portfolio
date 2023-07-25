let hamburger = document.querySelector(".hamburger");
let mobile_nav = document.querySelector(".mobile-nav");
let mobile_nav_close = document.querySelector("#close");
let nav_links = document.querySelectorAll('.nav-links'); 

function toggleMobileNav() {
  hamburger.classList.toggle("is-active");
  mobile_nav.classList.toggle("is-active");
}

hamburger.addEventListener("click", toggleMobileNav);
mobile_nav_close.addEventListener("click", toggleMobileNav);

nav_links.forEach(link => {
  link.addEventListener("click", toggleMobileNav);
});

