HTML = document;


/* App main */


// evento de inicio
function OnStart () {
	
  // gestionar pantallas
  screenManager.addScreen("main-screen");
  screenManager.addScreen("editor-screen");
  screenManager.open("editor-screen"); // mostrar pantalla
  
  // selecionado elementos
  // editor 
  $editorLines = HTML.querySelector(".editor > .frame-lines");
  $editorInput = HTML.querySelector(".editor > .frame-input");
  
  // pantalla principal
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
  
  // escribir lineas
  for (let i = 1; i <= 11; i++) {
    $editorLines.innerText += i + "\n";
  }
  
  /* 
  #FIXME
  
  
  $editorInput.innerHTML = "";
  $editorInput.addEventListener("input", function(){
    let selection = window.getSelection();
    console.log(selection.getRangeAt(0))
    $editor.innerHTML = textToSyntax(
      syntaxToText($editor.outerHTML)
    );
  });
  */
}