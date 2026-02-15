const slides = document.querySelector(".slides");
const bullets = document.querySelectorAll(".bullets li");
const rightArrow = document.querySelector(".change-background-right");
const leftArrow = document.querySelector(".change-background-left");

let currentIndex = 0;
const totalSlides = document.querySelectorAll(".slide").length;
const realSlides = totalSlides - 1;

function updateSlider(transition = true) {
    if (transition) {
        slides.style.transition = "transform 0.6s ease-in-out";
    } else {
        slides.style.transition = "none";
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    bullets.forEach(b => b.classList.remove("active"));
    bullets[currentIndex % realSlides].classList.add("active");
}

function nextSlide() {
    currentIndex++;
    updateSlider();

    if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
            currentIndex = 0;
            updateSlider(false); 
        }, 600);
    }
}

function prevSlide() {
    if (currentIndex === 0) {
        currentIndex = realSlides;
        updateSlider(false);
    } else {
        currentIndex--;
        updateSlider();
    }
}

rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", prevSlide);

bullets.forEach(bullet => {
    bullet.addEventListener("click", function () {
        currentIndex = parseInt(this.dataset.index);
        updateSlider();
    });
});

setInterval(nextSlide, 5000);

updateSlider();
