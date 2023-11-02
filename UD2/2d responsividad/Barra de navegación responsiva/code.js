"use strict;"

const menú = document.querySelector("#nav_list");
document.querySelector(".fa-bars").addEventListener("click", e=>{ 
  menú.classList.toggle("menu-visible");
});