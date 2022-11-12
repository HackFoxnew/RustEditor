// Editor Screen

function initEditorScreen () {
  // selecionar elementos
  $editorLines = HTML.querySelector(".editor > .frame-lines");
  $editorInput = HTML.querySelector(".editor > .frame-input");
  $editorHighlight = HTML.querySelector(".editor > .frame-highlight");
 
  $editorInput.innerHTML = ""; // limpiar editor
  $editorLines.innerText = "1\n"; // numero inicial
  $editorLines.style.maxWidth = $editorLines.clientWidth + "px";
  
  // posicionar area de resaltado
  $editorHighlight.style.left = $editorInput.offsetLeft + "px";
  $editorHighlight.style.top = $editorInput.offsetTop + "px";
  
  // obtener tamaño de linea
  let normalLineHeight = getCSSProperty($editorInput, "line-height");
      normalLineHeight = parseFloat(normalLineHeight);
  
  
  // evento al escribir en el editor
  $editorInput.addEventListener("input", onEditorInput);
  
  
  
  delete window.initEditorScreen;


}


function onEditorInput () {
  /* 
   * ¿Cómo saber la cantidad de líneas escritas?
   * los elementos dentro del textarea nos lo dirá.
   */
  let lines = $editorInput.value.split("\n");
  $editorLines.innerText = "";
    
  // buclear cada línea
  for (let i = 0; i < lines.length; i++) {

    $editorLines.innerText += i + 1 + "\n"; // añadir número
     
    /* @FIXME
    let lineHeight = line.getBoundingClientRect().height;
    
    // si la altura del div es mayor a la altura
    // original de línea, entonces se insertan los
    // saltos correspondientes en $editorLines
       
    let thisCountLines = lineHeight / normalLineHeight;
    console.log(thisCountLines);
    if (thisCountLines >= 1) {
      for (let i = 0; i < thisCountLines; i++) {
        $editorLines.innerText += "\n";
      }
    }
    */
  }
  setTimeout(function(){
    $editorHighlight.innerHTML = textToSyntax(
      $editorInput.value
    );
  }, 0);
  
}

// window.userSelection ~ retorna la seleccion de usuario actual
Object.defineProperty(window, 
  "userSelection", {
    get () {return window.getSelection()}
  }
);