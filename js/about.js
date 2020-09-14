const div = document.querySelector(".about");
const title = document.querySelector(".about-head");
const titlebf = document.querySelector(".about-head div");
let options = {
  root: null,
  rootMargin: "-30%",
};
observer = new IntersectionObserver(function (entries, observer) {
 
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      title.classList.remove("onvisible")
      titlebf.classList.remove("about-back")
      
    } else {
        console.log(entries);
        title.classList.add("onvisible")
        titlebf.classList.add("about-back")
    }
  });
}, options);
observer.observe(title);
