
const mobile_nav = document.querySelector('.mobile-navbar-btn');
const nav_navbar = document.querySelector(".navbar");

const toggleNavbar = () => {
    nav_navbar.classList.toggle("active")
}


mobile_nav.addEventListener("click", () => toggleNavbar());