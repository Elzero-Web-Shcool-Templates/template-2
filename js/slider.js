const landing = document.querySelector(".landing");
const leftArrow = document.querySelector(".change-background-left");
const rightArrow = document.querySelector(".change-background-right");
const bullets = document.querySelectorAll(".bullets li");

const images = [
    "Images/landing-0.webp",
    "Images/landing-1.webp",
    "Images/landing-2.webp",
];

let currentIndex = 0;

function updateSlider() {
    landing.style.backgroundImage = `url(${images[currentIndex]})`;

    bullets.forEach(b => b.classList.remove("active"));
    bullets[currentIndex].classList.add("active");
}

rightArrow.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateSlider();
});

leftArrow.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateSlider();
});

bullets.forEach(bullet => {
    bullet.addEventListener("click", function () {
        currentIndex = parseInt(this.dataset.index);
        updateSlider();
    });
});

setInterval(function () {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateSlider();
}, 5000);

updateSlider();
