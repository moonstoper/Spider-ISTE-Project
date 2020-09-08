const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li");
const bar = document.querySelector(".bar");
const navbar = document.querySelector("nav");
const logo = document.querySelector(".logo");

burger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  burger.classList.toggle("cross");
  navbar.classList.toggle("open");
  bar.classList.toggle("open");
  // links.forEach((link) => {
  //   link.classList.toggle("fade");
  // });
  logo.classList.toggle("open");
});
