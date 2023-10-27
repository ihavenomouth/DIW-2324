"use strict";

/////////////////////
// FUNCTIONS
/////////////////////


/////////////////////
// MAIN
/////////////////////

// 1.- Creamos el objeto IntersectionObserver

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });

});

//2.- Recuperamos los elementos que queremos observar
const hiddenElements = document.querySelectorAll(".hidden");

//3.- hacemos que el objserver les
hiddenElements.forEach(el => observer.observe(el));