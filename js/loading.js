let loader = document.querySelector(".loader");
let loaded = document.querySelectorAll(".loaded");
console.log(loaded);
window.onload = loadnaim;
function loadnaim(){
    setTimeout(function(){
        loader.classList.add("close");
        loaded.forEach(load => {
            load.classList.add("open");
        });
    })
}