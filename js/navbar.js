const nav = document.querySelector(".onscroll");

window.onscroll = function () {
  if (
    window.pageYOffset > 150
  ) {
    nav.classList.add("scroll");
  }
  else{
      nav.classList.remove("scroll");
  }
};
