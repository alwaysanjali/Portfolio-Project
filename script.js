/* =========================================
   SELECT ELEMENTS
========================================= */

const contactForm = document.querySelector("#contactForm");

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");

const scrollTopButton = document.querySelector("#scrollTop");

const themeToggle = document.querySelector("#themeToggle");

const sections = document.querySelectorAll("section[id]");


/* =========================================
   MOBILE NAVIGATION MENU
========================================= */

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");


    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking */

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================================
   DARK / LIGHT MODE
========================================= */

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");


    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});


/* =========================================
   REMEMBER THEME
========================================= */

const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    const icon = themeToggle.querySelector("i");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(function (item) {

        item.classList.remove("active");


        if (
            item.getAttribute("href") ===
            "#" + currentSection
        ) {

            item.classList.add("active");

        }

    });

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.querySelector("#name");

        const email =
            document.querySelector("#email");

        const message =
            document.querySelector("#message");


        let isValid = true;


        /* ---------- NAME ---------- */

        if (name.value.trim() === "") {

            showError(
                name,
                "Please enter your name."
            );

            isValid = false;

        } else {

            showSuccess(name);

        }


        /* ---------- EMAIL ---------- */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email.value.trim() === "") {

            showError(
                email,
                "Please enter your email."
            );

            isValid = false;

        } else if (
            !emailPattern.test(
                email.value.trim()
            )
        ) {

            showError(
                email,
                "Please enter a valid email."
            );

            isValid = false;

        } else {

            showSuccess(email);

        }


        /* ---------- MESSAGE ---------- */

        if (message.value.trim() === "") {

            showError(
                message,
                "Please enter your message."
            );

            isValid = false;

        } else if (
            message.value.trim().length < 10
        ) {

            showError(
                message,
                "Message must contain at least 10 characters."
            );

            isValid = false;

        } else {

            showSuccess(message);

        }


        /* ---------- SUCCESS ---------- */

        if (isValid) {

            alert(
                "Thank you! Your message has been submitted."
            );


            contactForm.reset();


            document
                .querySelectorAll(".success")
                .forEach(function (element) {

                    element.classList.remove(
                        "success"
                    );

                });

        }

    }
);


/* =========================================
   SHOW ERROR
========================================= */

function showError(input, message) {

    input.classList.remove("success");

    input.classList.add("error");


    const errorMessage =
        input.parentElement
            .querySelector(".error-message");


    errorMessage.textContent = message;

}


/* =========================================
   SHOW SUCCESS
========================================= */

function showSuccess(input) {

    input.classList.remove("error");

    input.classList.add("success");


    const errorMessage =
        input.parentElement
            .querySelector(".error-message");


    errorMessage.textContent = "";

}


/* =========================================
   SCROLL TO TOP
========================================= */

window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 400) {

            scrollTopButton.classList.add("show");

        } else {

            scrollTopButton.classList.remove("show");

        }

    }
);


scrollTopButton.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);