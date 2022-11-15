HTML = document;


/* App main */


// evento de inicio
function OnStart () {
	
	// inicializar sistema de DroidScript
	droid.start();
	droid.task("SetOnError", "OnError");
	
	
  // gestionar pantallas
  screenManager.addScreen("main-screen");
  screenManager.addScreen("work-screen")
  screenManager.addScreen("editor-screen");
  screenManager.open("work-screen"); // mostrar pantalla
  
  // inicializar pantallas
  initMainScreen();
  initWorkScreen();
  initEditorScreen();
  
  // ocultar cargando
  droid.HideProgress();
}

// evento al ocurrir un error
function OnError(error, line, file) {
  droid.Alert(error, file + "::" + line);
}
