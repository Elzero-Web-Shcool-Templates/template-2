let nums = document.querySelectorAll(".stats .container .number");
let section = document.querySelector(".stats");
let started = false;

window.addEventListener("scroll", function () {
    if (!started && isInViewport(section)) {
        nums.forEach(element => slideNumber(element));
        started = true;
    }
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

function slideNumber(elem) {
    let goal = parseFloat(elem.dataset.goal);
    let current = 0;
    let steps = 50;
    let duration = 300;
    let increment = goal / steps;
    let intervalTime = duration / steps;

    let count = setInterval(() => {
        current += increment;
        if (current >= goal) {
            elem.textContent = goal.toFixed(Math.min(3, getDecimalPlaces(goal)));
            clearInterval(count);
        } else {
            elem.textContent = current.toFixed(Math.min(3, getDecimalPlaces(goal)));
        }
    }, intervalTime);
}

function getDecimalPlaces(num) {
    const str = num.toString();
    if (str.includes('.')) {
        return Math.min(str.split('.')[1].length, 3);
    }
    return 0;
}
