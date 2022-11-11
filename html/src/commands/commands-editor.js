//Que le paso a la var HTML :( 
$editorInput = document.querySelector(".editor > .frame-input");

Editor = {
  Write: function(text){
    let nodoText = document.createTextNode(text);
    $editorInput.appendChild(nodoText)
  }
}

