const projects = [
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