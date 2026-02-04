// ===============================
// SMOOTH SCROLL FOR NAV LINKS
// ===============================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const sectionId = link.textContent
            .toLowerCase()
            .replace(/\s/g, "");

        const target = document.querySelector("." + sectionId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ===============================
// HERO IMAGE SLIDER
// ===============================
const heroImages = [
    "images/hero.jpg",
    "images/vegetables.jpg",
    "images/flowers.jpg"
];

let heroIndex = 0;
const heroImg = document.querySelector(".hero-image img");

setInterval(() => {
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroImg.style.opacity = 0;

    setTimeout(() => {
        heroImg.src = heroImages[heroIndex];
        heroImg.style.opacity = 1;
    }, 500);
}, 4000);

// ===============================
// LEARN MORE BUTTON SCROLL
// ===============================
const learnMoreBtn = document.querySelector(".hero-text button");
const productSection = document.querySelector(".products");

learnMoreBtn.addEventListener("click", () => {
    productSection.scrollIntoView({ behavior: "smooth" });
});

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const revealElements = document.querySelectorAll(
    ".product-card, .facility-card"
);

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("reveal");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
