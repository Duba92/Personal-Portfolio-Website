/* ===============================
   MOBILE MENU
================================ */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

        });

    });



/* ===============================
   DARK MODE
================================ */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const dark =
        document.body.classList.contains("dark");


    themeToggle.textContent =
        dark ? "☀" : "☾";


    localStorage.setItem(
        "portfolio-theme",
        dark ? "dark" : "light"
    );

});



/* ===============================
   ACTIVE NAVIGATION
================================ */

const sections =
    document.querySelectorAll("section[id]");

const links =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 180;

        const bottom =
            top + section.offsetHeight;


        if (
            window.scrollY >= top &&
            window.scrollY < bottom
        ) {

            current =
                section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});



/* ===============================
   REVEAL ON SCROLL
================================ */

const revealElements =
    document.querySelectorAll(
        ".section, .project, .skill"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});