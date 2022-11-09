// Editor Screen

function initEditorScreen () {
  // selecionar elementos
  $editorLines = HTML.querySelector(".editor > .frame-lines");
  $editorInput = HTML.querySelector(".editor > .frame-input");
  
  // escribir lineas
  for (let i = 1; i <= 11; i++) {
    $editorLines.innerText += i + "\n";
  }
  
  /* #FIXME
  
  $editorInput.innerHTML = "";
  $editorInput.addEventListener("input", function(){
    let selection = window.getSelection();
    console.log(selection.getRangeAt(0))
    $editor.innerHTML = textToSyntax(
      syntaxToText($editor.outerHTML)
    );
  });
  */
  
  delete window.initEditorScreen;
}