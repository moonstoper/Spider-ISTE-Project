const textarray = ["developer.","designer."];
const typingdelay = 200;
const erasing = 100;
const newTextDelay = 4000;
let index = 0;
let charindex = 0;
const typesection = document.querySelector(".type-text");
const typecursor = document.querySelector(".type-cursor");
const header1 = document.querySelector(".greetimage1");
const header2 = document.querySelector(".greetimage2");
function type() {
  if (charindex < textarray[index].length) {
      if(!typecursor.classList.contains("typing")) typecursor.classList.add("typing");
    typesection.textContent += textarray[index].charAt(charindex);
    charindex++;
    setTimeout(type, typingdelay);
  } else {
      header1.classList.toggle("blockd");
      header2.classList.toggle("blockd");
      typecursor.classList.remove("typing")
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charindex > 0) {
    typesection.textContent = textarray[index].substring(0, charindex - 1);
    charindex--;
    setTimeout(erase, erasing);
  } else {
    index++;
    if (index >= textarray.length) index = 0;
    setTimeout(type, typingdelay + 1100);
  }
}

window.addEventListener("load", function () {
  if(textarray.length) this.setTimeout(type, newTextDelay + 250);
  
});