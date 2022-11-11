// Editor Screen

function initEditorScreen () {
  // selecionar elementos
  $editorLines = HTML.querySelector(".editor > .frame-lines");
  $editorInput = HTML.querySelector(".editor > .frame-input");
  $editorInput.innerHTML = ""; // limpiar editor
  $editorLines.innerText = "1\n"; // numero inicial
  
  // obtener tamaño de linea
  let normalLineHeight = getCSSProperty($editorInput, "line-height");
      normalLineHeight = parseFloat(normalLineHeight);
  
  
  // evento al escribir en el editor
  $editorInput.addEventListener("input", function () {
    
    /* 
     * ¿Cómo saber la cantidad de líneas escritas?
     * los elementos dentro del textarea nos lo dirá.
     */
    let lines = $editorInput.childNodes;
    $editorLines.innerText = "";
    
    // buclear cada línea
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
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
   
    /* @FIXME
    
    let selection = window.getSelection();
    console.log(selection.getRangeAt(0))
    $editor.innerHTML = textToSyntax(
      syntaxToText($editor.outerHTML)
    );
    
    */
    
    
    
  });
  
  
  
  
  delete window.initEditorScreen;
}
