// ================= MOBILE NAVIGATION =================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");


// Open and close mobile menu

menuBtn.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    const icon = menuBtn.querySelector("i");

    if (isOpen) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    // Name validation

    if (name === "") {

        alert("Please enter your name.");

        return;
    }


    // Email validation

    if (email === "") {

        alert("Please enter your email.");

        return;
    }


    // Message validation

    if (message === "") {

        alert("Please enter your message.");

        return;
    }


    // Success message

    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted successfully."
    );


    // Reset form

    contactForm.reset();

});