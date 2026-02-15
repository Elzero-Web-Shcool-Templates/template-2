const ToggleMenu = document.querySelector(".toggle-menu");
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll(
    "#home, #services, #portfolio, #about, #pricing, #contact"
);

ToggleMenu.onclick = function () {
    ToggleMenu.classList.toggle("open-toggle-menu");
};

function setActiveLink(id) {
    navLinks.forEach(link => {
    link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
        }
    });
    history.replaceState(null, null, "#" + id);
}

window.addEventListener("scroll", function () {
    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });
    if (currentSection !== "") {
        setActiveLink(currentSection);
    }
});

function navigate(link) {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    ToggleMenu.classList.remove("open-toggle-menu");
}