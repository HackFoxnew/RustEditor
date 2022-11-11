let comandos = ["[core]"]
let $editorInput = null;

function Writing(){
  $editorInput = document.querySelector(".editor > .frame-input");
  $editorInput.addEventListener("keydown", (event) => {
    autocomplete(event);
    
  });

}

function autocomplete(event) {
  //Value remplazar por un comando de commands-editor.js
  const value = $editorInput.value;
  const results = comandos.filter((comandos) => {
  return comandos.name.common.toLowerCase().startsWith(value.toLowerCase());
  })
  
  resultsElem.innerHTML = results.map((result, index) => {
    const isSelected = index === 0;
    return `
          <li
            id='autocomplete-result-${index}'
            class='autocomplete-result${isSelected ? ' selected' : ''}'
            role='option'
            ${isSelected ? "aria-selected='true'" : ''}
          >
            ${result.name.common}
          </li>
        `
  }).join('');
  //DISCOMPLIT esta clase se le debe poner al cuadro de autocompletado 
  resultsElem.classList.remove('hidden');
}

//La lógica de esto es para una lista por eso el LI
function handleResultClick() {
  if (event.target && event.target.nodeName === 'LI') {
    selectItem(event.target)
  }
}

//Opciones de accesibilidad
function handleResultKeyDown(event) {
  const { key } = event;
  switch (key) {
    case "Backspace":
      return;
     case "Escape":
       hideResults();
       $editorInput.value = "";
      return;
     default:
      selectFirstResult();
  }
}

function selectFirstResult() {
  const value = $editorInput.value;
  const autocompleteValue = resultsElem.querySelector(".selected");
  if (!value || !autocompleteValue) {
    return;
  }
  if (value !== autocompleteValue.innerText) {
    $editorInput.value = autocompleteValue.innerText;
    $editorInput.setSelectionRange(
      value.length,
      autocompleteValue.innerText.length
    );
  }
}

function selectItem(node) {
  if (node) {
    $editorInput.value = node.innerText;
    hideResults();
  }
}

function hideResults() {
  this.resultsElem.innerHTML = '';
  this.resultsElem.classList.add('hidden');
}


Writing()
