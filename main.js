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
  const target = document.querySelector(event.target.getAttribute('href'));
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

const anchorTags = document.querySelectorAll('a[href^="#"]');

anchorTags.forEach((anchor) => {
  anchor.addEventListener('click', scrollToSection);
});

const projects = [
  {
    name: "Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featured: {
      name: "CANOPY",
      stack: "Back End Dev",
      year: 2018,
    },
    imageMobile: "./images/project-1.svg",
    imageDesktop: "./images/project-1-dt.svg",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveLink: "drdonice.dev",
    srcLink: "github.com",
    inversed: false,
  },
  {
    name: "Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featured: {
      name: "CANOPY",
      stack: "Back End Dev",
      year: 2018,
    },
    imageMobile: "./images/project-2.svg",
    imageDesktop: "./images/project-2-dt.svg",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveLink: "drdonice.dev",
    srcLink: "github.com",
    inversed: true,
  },
  {
    name: "Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featured: {
      name: "CANOPY",
      stack: "Back End Dev",
      year: 2018,
    },
    imageMobile: "./images/project-3.svg",
    imageDesktop: "./images/project-3-dt.svg",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveLink: "drdonice.dev",
    srcLink: "github.com",
    inversed: false,
  },
  {
    name: "Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featured: {
      name: "CANOPY",
      stack: "Back End Dev",
      year: 2018,
    },
    imageMobile: "./images/project-4.svg",
    imageDesktop: "./images/project-4-dt.svg",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveLink: "drdonice.dev",
    srcLink: "github.com",
    inversed: true,
  },
]
