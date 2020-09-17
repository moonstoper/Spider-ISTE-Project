const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li");
const bar = document.querySelector(".bar");
const navbar = document.querySelector("nav");
const logo = document.querySelector(".logo");
const scroller = document.querySelector(".onscroll");
burger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  burger.classList.toggle("cross");
  navbar.classList.toggle("open");
  bar.classList.toggle("open");
  logo.classList.toggle("open");
  scroller.classList.toggle("reverse");
});
