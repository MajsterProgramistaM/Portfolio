// Nowa wersja dla Version 3.0

const projects = [
  {
    title: "Kalkulator",
    description: "Osobna strona z kalkulatorem w HTML, CSS i JavaScript.",
    link: "ProjectCalculator/calculator.html"
  },
  {
    title: "Portfolio",
    description: "Główna strona portfolio z sekcją projektów, menu i motywem.",
    link: "#hero"
  }
];

const container = document.getElementById("projectsContainer");
const search = document.getElementById("search");
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const typing = document.getElementById("typing");
const header = document.querySelector(".site-header");

function renderProjects(list) {
  container.innerHTML = "";

  list.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project";

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a class="project-link" href="${project.link}">Zobacz projekt</a>
    `;

    container.appendChild(card);
  });
}

renderProjects(projects);

search.addEventListener("input", () => {
  const value = search.value.trim().toLowerCase();
  const filtered = projects.filter((project) =>
    project.title.toLowerCase().includes(value) ||
    project.description.toLowerCase().includes(value)
  );
  renderProjects(filtered);
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });
hiddenElements.forEach((el) => observer.observe(el));

function closeMobileNav() {
  mobileNav.classList.remove("active");
  menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = mobileNav.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMobileNav();
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) header.classList.add("header-scroll");
  else header.classList.remove("header-scroll");
});

const brandText = "Full Stack Developer";
let i = 0;
function typeWriter() {
  if (!typing) return;
  if (i < brandText.length) {
    typing.textContent += brandText.charAt(i);
    i += 1;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();






// Testowa wersja dla Version: 2.0

/* const projects = [
    {
        title: "CodeBooks",
        description: "Sklep internetowy PHP + MySQL"
    },
    {
        title: "Weather App",
        description: "Aplikacja pogodowa API"
    },
    {
        title: "Todo App",
        description: "Lista zadań JavaScript"
    },
    {
        title: "CMS Blog",
        description: "System blogowy PHP"
    }
];

const container =
document.getElementById(
    "projectsContainer"
);

function renderProjects(list){

    container.innerHTML = "";

    list.forEach(project => {

        const card =
        document.createElement("div");

        card.classList.add("project");

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        container.appendChild(card);
    });
}

renderProjects(projects);

const search =
document.getElementById("search");

search.addEventListener("input", () => {

    const value =
    search.value.toLowerCase();

    const filtered =
    projects.filter(project =>
        project.title
        .toLowerCase()
        .includes(value)
    );

    renderProjects(filtered);
});

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body
    .classList
    .toggle("light");

});

const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el => {

    observer.observe(el);

});


window.addEventListener("scroll", () => {

    const header =
    document.querySelector("header");

    if(window.scrollY > 50){
        header.classList.add("header-scroll");
    }else{
        header.classList.remove("header-scroll");
    }

});


const menuBtn =
document.getElementById("menuBtn");

const mobileNav =
document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {

    mobileNav.classList.toggle("active");

});

const text =
"Full Stack Developer";

let i = 0;

function typeWriter(){

    if(i < text.length){

        document
        .getElementById("typing")
        .textContent += text.charAt(i);

        i++;

        setTimeout(typeWriter,100);
    }

}

typeWriter();
*/