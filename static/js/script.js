// ==============================
// Element References
// ==============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
const header = document.querySelector("header");
const heading = document.querySelector(".hero-text h2");


// ==============================
// Hamburger Menu Toggle
// ==============================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const menuIcon = menuToggle.querySelector("i");

function closeMenu() {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
}

function openMenu() {
    navMenu.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
}

menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (navMenu.classList.contains("open")) {
        closeMenu();
    } else {
        openMenu();
    }
});

document.addEventListener("click", (e) => {
    if (
        navMenu.classList.contains("open") &&
        !navMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        closeMenu();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
        closeMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && navMenu.classList.contains("open")) {
        closeMenu();
    }
});


// ==============================
// Fast Custom Smooth Scroll
// (replaces native scroll-behavior:smooth so nav clicks land
// quickly and cleanly — no lingering mid-scroll overlap frame)
// ==============================
function fastScrollTo(targetSection) {
    const isMobile = window.innerWidth <= 900;
    const headerHeight = isMobile
        ? getComputedStyle(document.documentElement).getPropertyValue("--header-h-mobile")
        : getComputedStyle(document.documentElement).getPropertyValue("--header-h");

    const offset = parseInt(headerHeight, 10) || header.offsetHeight;
    const targetY = targetSection.getBoundingClientRect().top + window.scrollY - offset;

    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 280; // ms — fast enough to avoid catching an overlap frame
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, startY + distance * ease);

        if (elapsed < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

// Single, correct click handler for nav links (no duplicates)
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;

        e.preventDefault();

        if (navMenu.classList.contains("open")) closeMenu();

        // Show the target section immediately (no fade delay)
        // so it's already fully visible before the scroll lands.
        targetSection.classList.add("show");

        fastScrollTo(targetSection);
    });
});


// ==============================
// Scroll Handler
// (active nav link + sticky header + back-to-top button)
// ==============================
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

    header.classList.toggle("sticky", window.scrollY > 50);

    if (window.scrollY > 400) {
        topButton.classList.add("show");
        topButton.style.display = "block";
    } else {
        topButton.classList.remove("show");
        setTimeout(() => {
            if (!topButton.classList.contains("show")) {
                topButton.style.display = "none";
            }
        }, 300);
    }
});


// ==============================
// Typing Animation
// ==============================
const roles = [
    "Python Developer",
    "AI/ML Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isTyping = false;
let typingTimeout;

function typeEffect() {
    if (!isTyping) return;

    if (charIndex < roles[roleIndex].length) {
        heading.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        typingTimeout = setTimeout(typeEffect, 80);
    } else {
        typingTimeout = setTimeout(deleteEffect, 1500);
    }
}

function deleteEffect() {
    if (!isTyping) return;

    if (charIndex > 0) {
        heading.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        typingTimeout = setTimeout(deleteEffect, 35);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        typingTimeout = setTimeout(typeEffect, 500);
    }
}


// ==============================
// Smooth Scroll Reveal
// ==============================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach((section) => revealObserver.observe(section));

const skillCards = document.querySelectorAll(".skill-card");
const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

skillCards.forEach(card => {
    card.classList.add("show");
});


// ==============================
// Typing Animation — start/stop based on Home visibility
// ==============================
const homeSection = document.getElementById("home");

const homeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (!isTyping) {
                isTyping = true;
                heading.textContent = "";
                roleIndex = 0;
                charIndex = 0;
                typeEffect();
            }
        } else {
            isTyping = false;
            clearTimeout(typingTimeout);
        }
    });
}, { threshold: 0.4 });

homeObserver.observe(homeSection);


// ==============================
// Back To Top Button
// ==============================
const topButton = document.createElement("button");
topButton.innerHTML = "↑";
topButton.id = "topBtn";
document.body.appendChild(topButton);

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ==============================
// Welcome Message
// ==============================
window.addEventListener("load", () => {
    console.log("Portfolio Loaded Successfully!");
});


window.dispatchEvent(new Event("scroll"));