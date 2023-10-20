"use strict";

/////////////////////
// FUNCTIONS
/////////////////////


/////////////////////
// MAIN
/////////////////////


document.querySelectorAll(".información-extra-card > button").forEach(
	b => {
		b.addEventListener("click", (e) => {
			b.classList.toggle("visible");
			b.nextElementSibling.classList.toggle("visible");
		});

	}
);

