HTML = document;


/* App main */


// evento de inicio
function OnStart () {
	
	// inicializar sistema de DroidScript
	droid.start();
	
  // gestionar pantallas
  screenManager.addScreen("main-screen");
  screenManager.addScreen("editor-screen");
  screenManager.open("editor-screen"); // mostrar pantalla
  
  // inicializar pantallas
  initMainScreen();
  initEditorScreen();
  
}