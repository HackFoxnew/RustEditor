// Main Screen

function initMainScreen () {
  
  // seleccionar elementos
  $modalCreation = HTML.getElementById("modal-creation");
  $modalAjust = HTML.getElementById("modal-ajust");
  $btnModalCreation = HTML.getElementById("btn-creation");
  $inputCreation = HTML.getElementById("input-modal-creation");
  
  
  // validar  // Este evento detecta cada ves que se modifica el input 
  $inputCreation.addEventListener("input", function () {
    let classList = $btnModalCreation.classList;
    classList.remove("button-disabled");

    //Se desactiva el boton 
    if (!/^[ a-zA-Z0-9]+$/.test($inputCreation.value)) {
      classList.add("button-disabled");
    } 
  });
  
  
  delete window.initMainScreen;
}