"use strict";

document.querySelector("#btnMostrar").addEventListener("click", () => {

	document.querySelector(".container").classList.toggle("oculto");
});


// Punto de entrada para añadir un alumno
app.post("/crearAlumno", (request, response) => {

  const nombre = cleanseString(request.body.txtNombre);
  const email = cleanseString(request.body.txtEmail).toLowerCase();
  const clave = cleanseString(request.body.txtClave);
  const curso = cleanseString(request.body.txtCurso);
  
  console.log(`Añadir alumno ${nombre}, ${email}, ${curso}`);
});
