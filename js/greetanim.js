const textarray = ["डेवलपर हूं.","डिजाइनर हूं."];
const typingdelay = 200;
const erasing = 100;
const newTextDelay = 2000;
let index = 0;
let charindex = 0;
const typesection = document.querySelector(".type-text");
const typecursor = document.querySelector(".type-cursor");
function type() {
  if (charindex < textarray[index].length) {
      if(!typecursor.classList.contains("typing")) typecursor.classList.add("typing");
    typesection.textContent += textarray[index].charAt(charindex);
    charindex++;
    setTimeout(type, typingdelay);
  } else {
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
