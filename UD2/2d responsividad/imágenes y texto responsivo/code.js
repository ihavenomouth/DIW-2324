"use strict";




const ocultarContenido = (ev) =>{
  if( ev.propertyName === "grid-template-rows" ){
    let divOcultable = ev.currentTarget;
    divOcultable.classList.add("oculto");

    // Si está cerrado el contenido, se muestra el mensaje en la división de mensajes
    if( divOcultable.classList.contains("is-closed") ){
      document.querySelector("#mensajes").innerHTML=`<p>El <a  href="#">contenido</a> está oculto.</p>`;
      document.querySelector("#mensajes a").addEventListener("click", ()=>{
        divOcultable.classList.remove("oculto");
        divOcultable.classList.remove("is-closed");
        document.querySelector("#mensajes").innerHTML="";
	});
    }
  }
}


document.querySelectorAll(".ocultable").forEach( elem=>{
  elem.addEventListener("click", ()=>{
	elem.classList.add("is-closed");
  });
  elem.addEventListener("transitionend", ocultarContenido);
});