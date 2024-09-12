/*====================================== Toogle icon navbar===========================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}



/*======================================scroll section active link===========================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(se => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top, offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });
    /*======================================sticky navbar===========================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*====================================== remove Toogle icon & navbar===========================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


/*====================================== scroll revel===========================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content,heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services, .portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p,.about-contant', { origin: 'right' });


/*====================================== typed js setup===========================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Mentor and Coordinator'],
    typeSpeed: 50,  // Reduced typing speed
    backSpeed: 40,  // Reduced backspacing speed
    backDelay: 1000, // Increased delay before backspacing
    loop: true,
});

function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission

    let params = {
        name: document.getElementById("from_name").value,
        email: document.getElementById("from_email").value,
        subject: document.getElementById("subject").value,
        contact_number: document.getElementById("contact_number").value, // Use the correct key
        message: document.getElementById("message").value, // Match the 'name' attribute in HTML
    };

    emailjs.send("service_1ra6f5o", "template_5ninzf6", params)
        .then(function (response) {
            alert("Email sent successfully!");
        }, function (error) {
            alert("Failed to send email. Please try again.");
        });
}
