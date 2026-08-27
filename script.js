// ================= MOBILE NAVIGATION =================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");


// Open / Close Mobile Menu

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Close menu after clicking a navigation link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

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


    // Basic validation

    if (name === "") {

        alert("Please enter your name.");

        return;
    }


    if (email === "") {

        alert("Please enter your email.");

        return;
    }


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


    // Clear form

    contactForm.reset();

});