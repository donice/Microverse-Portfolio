const projects = [
  {
    key: 1,
    name: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featured: {
      name: "CANOPY",
      stack: "Back End Dev",
      year: 2018,
    },
    imageMobile: "./images/project-1.svg",
    imageDesktop: "./images/project-1-dt.svg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "drdonice.dev",
    srcLink: "github.com",
    inversed: false, // if true toggle the inverse class name on
  },
  {
    key: 2,
    name: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featured: {
      name: "CANOPY",
      stack: "Back End Dev",
      year: 2018,
    },
    imageMobile: "./images/project-2.svg",
    imageDesktop: "./images/project-2-dt.svg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "drdonice.dev",
    srcLink: "github.com",
    inversed: true,
  },
  {
    key: 3,
    name: "Veracity",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featured: {
      name: "CANOPY",
      stack: "Back End Dev",
      year: 2018,
    },
    imageMobile: "./images/project-3.svg",
    imageDesktop: "./images/project-3-dt.svg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "drdonice.dev",
    srcLink: "github.com",
    inversed: false, // if true toggle the inverse class name on
  },
];

const projectSection = document.getElementById("portfolio");
const popupContainer = document.getElementById("popupContainer");
const popupImage = document.getElementById("popupImage");
const popupHeader = document.getElementById("popupHeader");
const popupDescription = document.getElementById("popupDescription");
const closeButton = document.getElementById("closeButton");
const popupFeature1 = document.getElementById("popupFeature1");
const popupFeature2 = document.getElementById("popupFeature2");
const popupFeature3= document.getElementById("popupFeature3");
const popupSkill1 = document.getElementById("popupSkill1");
const popupSkill2 = document.getElementById("popupSkill2");
const popupSkill3= document.getElementById("popupSkill3");

function renderProjects() {
  projectSection.innerHTML = "";
  projects.forEach(
    ({
      key,
      name,
      featured,
      imageMobile,
      imageDesktop,
      description,
      technologies,
      inversed,
    }) => {
      const card = document.createElement("div");
      card.classList.add(inversed ? "project-card-inverse" : "project-card");
      const contentMarkup = `
        <img src='${imageMobile}' alt='${name}' class='mobile-img'>
        <img src='${imageDesktop}' alt='${name}' class='desktop-img'>
          <div class='project-info'>
            <h2>${name}</h2>
            <div class='role-year-container'>
              <span>${featured.name}</span>
              <img src='./images/dot.svg' alt='dot'>
              <span class='grey'>${featured.stack}</span>
              <img src='./images/dot.svg' alt='dot'>
              <span class='grey'>${featured.year}</span>
            </div>
            <p>
              ${description}
            </p>
            <ul class='skill-container'>
              ${technologies.map((tech) => `<li>${tech}</li>`).join("")}
            </ul>
            <div class='button-container' type='button'>
              <button class='project-button' data-index="${key}">
                See Projects
              </button>
            </div>
          </div>
    `;

      card.innerHTML = contentMarkup;
      projectSection.appendChild(card);
    }
  );
}

renderProjects();

function openPopup(index) {
  const data = projects[index - 1];
  console.log(data);

  popupImage.src = data.imageMobile;
  popupHeader.textContent = data.name;
  popupDescription.textContent = data.description;
  popupFeature1.textContent = data.featured.name;
  popupFeature2.textContent = data.featured.stack;
  popupFeature3.textContent = data.featured.year;
  popupSkill1.textContent = data.technologies[0];
  popupSkill2.textContent = data.technologies[1];
  popupSkill3.textContent = data.technologies[2];

  popupContainer.style.display = "block";
}

function closePopup() {
  popupContainer.style.display = "none";
}

projectSection.addEventListener("click", (event) => {
  if (event.target.classList.contains("project-button")) {
    const index = event.target.getAttribute("data-index");
    openPopup(index);
  }
});

closeButton.addEventListener("click", closePopup);

// Mobile Nav menu
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavClose = document.querySelector("#close");
const navLinks = document.querySelectorAll(".nav-links");

function toggleMobileNav() {
  hamburger.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active");
}

hamburger.addEventListener("click", toggleMobileNav);
mobileNavClose.addEventListener("click", toggleMobileNav);

navLinks.forEach((link) => {
  link.addEventListener("click", toggleMobileNav);
});

function scrollToSection(event) {
  event.preventDefault();
  const target = document.querySelector(event.target.getAttribute("href"));
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

const anchorTags = document.querySelectorAll('a[href^="#]');

anchorTags.forEach((anchor) => {
  anchor.addEventListener("click", scrollToSection);
});
