HTML = document;


/* App main */


// evento de inicio
function OnStart () {
	
	// inicializar sistema de DroidScript
	droid.start();
	
  // gestionar pantallas
  screenManager.addScreen("main-screen");
  screenManager.addScreen("editor-screen");
  screenManager.addScreen("screen-espacio-trabajo")
  screenManager.open("screen-espacio-trabajo"); // mostrar pantalla
  
  // inicializar pantallas
  initMainScreen();
  initEditorScreen();
  
}
