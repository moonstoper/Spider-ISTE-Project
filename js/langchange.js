let btnen = document.querySelector(".en");
let btnhn = document.querySelector(".hn");
let eng = document.querySelectorAll(".eng");
let hindi = document.querySelectorAll(".hindi");
btnen.addEventListener("click",()=>{
    eng.forEach(engL => {
        engL.classList.toggle("close");
    });
    hindi.forEach(hindiL => {
       hindiL.classList.toggle("close");
    });
})

btnhn.addEventListener("click",()=>{
    eng.forEach(engL => {
        engL.classList.toggle("close");
    });
    hindi.forEach(hindiL => {
       hindiL.classList.toggle("close");
    });
})
