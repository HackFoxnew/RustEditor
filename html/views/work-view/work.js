// Workspace View

function initWorkView () {
  let $ul = document.getElementById("work-folder-list");
  $workListView = new ListView($ul);
  $workDirView = document.getElementById("work-dir-view");
  
  // navegar por el almacenamiento interno
  navigateFolders(internalFolder);
  
  initWorkView = null;
}



// navegar por las carpetas
function navigateFolders (dir) {
  droid.ShowProgress("Escaneando...");
  
  let files = [];
  
  // si no estamos en el directorio raiz, podemos retroceder
  if (dir != internalFolder) files.push("..");
  
  files = files
    .concat(droid.ListFolder(dir, null, null, "folders"))
    .concat(droid.ListFolder(dir, null, null, "files"));
  
  $workDirView.innerText = dir; // mostrar directorio actual
  
  // añadir cada direccion a la lista
  for (let file of files) {
    let basename = file;
    let absDir = Path.join(dir, file);
    let icon;
    
    if (droid.IsFolder(absDir)) icon = "folder-open";
    else icon = "file";
    
    let $item = $workListView.addItem(icon, basename);
    $item.dataset.dir = absDir;
    $item.addEventListener("click", OnClickFolder);
  }
  
  droid.HideProgress();

}


// al hacer click en un elemento de la lista
function OnClickFolder (event) {
  
  let $item = event.currentTarget;
  let basename = $item.dataset.content;
  let dir = $item.dataset.dir; // ruta
  
  // verificamos la ruta
  if (droid.IsFolder(dir)) {
      // ¡¡La ruta es una carpeta!!
      $workListView.removeAll(); // vaciar lista
      navigateFolders(dir); // navegar en la carpeta
  }
  else {
      // ¡¡La ruta es un archivo!!
      //...
      droid.ShowPopup("archivo " + basename);
  }
  
}