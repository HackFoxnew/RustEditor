/* App main */
let $mainScreen,
    $modalCreation,
    $inputCreation,
    $btnModalCreation,
    $btnCloseModalCreation;


// evento de inicio
function OnStart () {

  $mainScreen = document.getElementById("main-screen");
  $modalCreation = document.getElementById("modal-creation");
  $btnModalCreation = document.getElementById("btn-creation");
  $inputCreation = document.getElementById("input-modal-creation");
  
  // validar
  $inputCreation.addEventListener("input", function InpButon() {
    let classList = $btnModalCreation.classList;
    classList.remove("button-disabled");
    
    if (!/^[ a-zA-Z0-9]+$/.test($inputCreation.value)) {
      classList.add("button-disabled");
    } 

  })

}