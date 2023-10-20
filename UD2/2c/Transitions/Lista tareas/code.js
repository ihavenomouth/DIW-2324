"use strict";

/////////////////////
// FUNCTIONS
/////////////////////


/////////////////////
// MAIN
/////////////////////

//Objeto vacío



// class Persona {
// 	constructor(nombre, edad) {
// 		this.nombre = nombre;
// 		this.edad = edad;
// 		this.saludar = function () {
// 			return `Hola, soy ${nombre} y tengo ${edad} años)`;
// 		};
// 		this.estado = "inactivo";
// 	}
// }

// function Alumno(nombre, edad, curso){
// 	this.curso = "2º DAW";
// 	Persona.call(this, nombre, edad);
// 	this.saludar=function(){
// 		return `Hola, soy ${this.nombre}, estoy en ${this.curso} y mi estado es ${this.estado}`;
// 	}

// }
// Alumno.prototype = Persona;

// let p1 = new Persona("Javier", 42);
// console.log(p1.saludar());

// let a1 = new Alumno("Juan", 23);
// console.log(a1)
// console.log(a1.saludar());

document.querySelectorAll(".lista-tareas-item").forEach(
	item => {
		item.addEventListener("click", () => {
			item.classList.toggle("lista-tareas-item-completado");
		});

	}
);

