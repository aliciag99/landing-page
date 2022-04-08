import '/css/style.css'

let boton = document.getElementById ("accionar");

boton.addEventListener ("click", function () {
  document.getElementById("roadmap").classList.add("espacio");
  document.getElementById("desplegable").classList.toggle("mostrar");
});

window.onclick = function(event) {
  if (!event.target.matches('.boton')) {
    let desplegar = document.getElementsByClassName("mostrar");
    let i;
    for (i = 0; i < desplegar.length; i++) {
      let abrir = desplegar[i];
      if (abrir.classList.contains('mostrar')) {
        abrir.classList.remove('mostrar');
      }
    }
  }
}
