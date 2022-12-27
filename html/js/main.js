HTML = document;


/* App main */


// evento de inicio
function OnStart () {

  // inicializar sistema de DroidScript
  droid.start();
  droid.task("SetOnError", "OnError");
  
  internalFolder = droid.GetInternalFolder();
  externalFolder = droid.GetExternalFolder();


  // gestionar pantallas
  viewManager.add("main-view");
  viewManager.add("work-view")
  viewManager.add("editor-view");
  viewManager.open("main-view"); // mostrar pantalla

  // inicializar pantallas
  initMainView();
  initWorkView();
  initEditorView();

  // ocultar cargando
  droid.HideProgress();
}

// evento al ocurrir un error
function OnError(error, line, file) {
  droid.Alert(error, file + "::" + line);
}
