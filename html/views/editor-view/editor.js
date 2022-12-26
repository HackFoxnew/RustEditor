// Editor Screen


// @Init: inicializar pantalla de editor
function initEditorView () {
  
  // selecionar elementos
  $editor = HTML.querySelector(".editor");
  $editorLines = HTML.querySelector(".editor > .frame-lines");
  $editorInput = HTML.querySelector(".editor > .frame-input");
  $editorHighlight = HTML.querySelector(".editor > .frame-highlight");
  
  $editorInput.innerHTML = ""; // limpiar editor
  $editorLines.innerText = "1\n"; // numero inicial
  $editorLines.style.maxWidth = $editorLines.clientWidth + "px";
  
  onEditorInput();
  
  // obtener tamaño de línea
  let lineHeight = getCSSProperty($editorInput, "line-height");
      lineHeight = parseFloat(lineHeight);
  $editorInput._lineHeight = lineHeight;
  
  
  // evento al escribir en el editor
  $editorInput.addEventListener("input", onEditorInput);
  
  
  // al hacer scroll en el editor
  $editor.addEventListener("scroll", renderHighlight);
  
  
  // al hacer click en el editor
  $editor.addEventListener("click", function(event){
    let target = event.target;
    if (target.className !== $editorInput.className) $editorInput.focus();
  });
  
  
  initEditorView = null;
}


// @Event: escribir en el editor
function onEditorInput () {
  /* 
   * ¿Cómo saber la cantidad de líneas escritas?
   * los elementos dentro del textarea nos lo dirá.
   */
  let lines = $editorInput.value.split("\n");
  $editorInput._lines = lines;
    
  
  // renderizar de manera asíncrona
  setTimeout(renderHighlight, 0);
  setTimeout(renderEditorInput, 0);
  setTimeout(renderEditorLines, 0);
}



// @void ~ Renderizar numeros de lineas de editor
function renderEditorLines () {
  let lines = $editorInput._lines;
  let linesNumbers = "";
  for (let i = 0; i < lines.length; i++) {
    linesNumbers += i + 1 + "\n"; // añadir número
  }
  $editorLines.innerText = linesNumbers;
}



// @void ~ Redimensionar textarea
function renderEditorInput () {
  let lines = $editorInput._lines;
  $editorInput.rows = lines.length;
}



// @void ~ Actualizar resaltado
function renderHighlight () {
  $editorHighlight.innerHTML = textToSyntax(
    $editorInput.value
  );
  
  // posicionar area de resaltado
  $editorHighlight.style.left = $editorInput.offsetLeft + "px";
  $editorHighlight.style.top = 
    $editorInput.offsetTop -
    $editor.scrollTo/2 + "px";
  
}