let progs = document.querySelectorAll(".our-skills .skills .prog span");
skillsSection = document.querySelector(".our-skills");
skillBarStarted = false;

console.log(progs);

window.addEventListener("scroll", function () {
    if (!skillBarStarted && isInViewport(skillsSection)) {
        progs.forEach(element => fillProgress(element));
        skillBarStarted = true;
    }
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

function fillProgress(element) {
    let goal = parseInt(element.dataset.goal);
    let width = 0;

    let interval = setInterval(() => {
        width++;
        element.style.width = width + "%";
        element.dataset.progress = width + "%";
        console.log(window.getComputedStyle(element, "::before").content);
        if (width >= goal) {
            clearInterval(interval);
        }
    }, 10);
}
