HTML = document;


/* App main */
let $mainScreen,
    $modalCreation,
    $inputCreation,
    $btnModalCreation,
    $btnCloseModalCreation;


// evento de inicio
function OnStart () {
  
  // selecionado elementos 
  $mainScreen = HTML.getElementById("main-screen");
  $modalCreation = HTML.getElementById("modal-creation");
  $btnModalCreation = HTML.getElementById("btn-creation");
  $inputCreation = HTML.getElementById("input-modal-creation");
  
  // validar  //Este evento detecta cada ves que se modifica el input 
  $inputCreation.addEventListener("input", function InpButon() {
    
    let classList = $btnModalCreation.classList;
    classList.remove("button-disabled");
    
    //Se desactiva el boton 
    if (!/^[ a-zA-Z0-9]+$/.test($inputCreation.value)) {
      classList.add("button-disabled");
    } 

  })
  
  

}


function Ajust(){
  const AjustModal = HTML.getElementById("AjustModal")
  
  
  AjustModal.showModal();
  
  
}

