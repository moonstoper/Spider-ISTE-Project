let qen = document.querySelector(".en");
let qhn = document.querySelector(".hn");
//let 
let sec = document.querySelector(".blquote p");
var description = new Array ();
description[0] = "When life itself seems lunatic, who knows where madness lies?";
description[1] = "I must not fear. Fear is the mind killer. Fear is the liitle death that brings total obilteration";
description[2] = "Even the smallest person can change the course of the future";
description[3] = "Love doesn’t just sit there, like a stone, it has to be made, like bread; remade all the time, made new";
description[4]=" I am not afraid of storms, for I am learning how to sail my ship"
var auth = new Array();
var x = Math.floor(description.length * Math.random());
var qoutes = document.createTextNode(description[x]);
sec.appendChild(qoutes);

qen.addEventListener("click", () => {
    
    sec.removeChild(qoutes);
    var qoutes = document.createTextNode(description[x]);
    sec.appendChild(qoutes);
    
    
    
  });
qhn.addEventListener("click", () => {
    
    sec.removeChild(qoutes);
    var qoutes = document.createTextNode("description[x]");
    sec.appendChild(qoutes);
   
    
  });