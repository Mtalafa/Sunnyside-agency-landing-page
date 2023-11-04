const btnNav = document.querySelector(".mobile-nav-btn");
const header = document.querySelector(".header");

const toggleNav = () => {
  header.classList.toggle("nav-open");
};

btnNav.addEventListener("click", toggleNav);
