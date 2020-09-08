const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelector(".navlinks li");
const bar = document.querySelector(".bar");
const navbar = document.querySelector("nav");

burger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  burger.classList.toggle("cross");
  navbar.classList.toggle("open");
  bar.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
