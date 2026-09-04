/* ==================================
   FLOATING PARTICLES
================================== */

const particleContainer = document.getElementById("particles");

for (let i = 0; i < 55; i++) {

    const particle = document.createElement("div");

    particle.className = "particle";

    const size = Math.random() * 3 + 1;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;

    particle.style.animationDuration =
        `${Math.random() * 12 + 8}s`;

    particle.style.animationDelay =
        `${Math.random() * 10}s`;

    particleContainer.appendChild(particle);
}


/* ==================================
   STORY SECTIONS
================================== */

const sections =
    document.querySelectorAll(".story-section");

const progressBar =
    document.querySelector(".progress-bar");


/* First section */

sections[0].classList.add("active");


/* ==================================
   INTERSECTION OBSERVER
================================== */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.55
    }

);

sections.forEach((section) => {

    observer.observe(section);

});


/* ==================================
   SCROLL PROGRESS
================================== */

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight
        - window.innerHeight;

    const percentage =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width =
        `${percentage}%`;

});


/* ==================================
   RESTART BUTTON
================================== */

const restart =
    document.getElementById("restart");

restart.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==================================
   CARD PARALLAX
================================== */

window.addEventListener("scroll", () => {

    sections.forEach((section) => {

        const card =
            section.querySelector(".card");

        const rect =
            section.getBoundingClientRect();

        const distance =
            rect.top - window.innerHeight / 2;

        if (
            Math.abs(distance)
            < window.innerHeight
        ) {

            const move =
                distance * -0.035;

            card.style.setProperty(
                "--move",
                `${move}px`
            );

        }

    });

});