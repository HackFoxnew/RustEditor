// screenManager component

screenManager = {
	
	screens: {}, // lista de pantallas
  history: [], // historial de pantallas abiertas
  index: -1, // posicion en el historial
	
	
	// @addScreen(id) ~ añadir pantalla
	addScreen: function (id) {
		this.screens[id] = HTML.getElementById(id);
	},
	
	
	// @open(id) ~ mostrar pantalla
  open: function (id) {
  	let history = this.history; 
  	let $lastScreen = this.screens[history[this.index]]; // pantalla abierta
  	let $targetScreen = this.screens[id]; // pantalla a abrir

    if ($lastScreen) $lastScreen.style.display = "none";
    $targetScreen.style.display = "flex";
    $targetScreen.style.flexDirection = "column";
    
    history.push(id); // añadir esta pantalla al historial
    this.index++;
  },
  
  
  // @back(void) ~ retroceder a pantalla anterior
  back: function () {
    this.index -= 2;
    let id = this.history[this.index];
    history.pop();
    history.pop();
    this.open(id);
  },
	
	
	// @clearHistory(void) ~ limpiar historial
  clearHistory: function () {
  	let history = this.history;
  	while (history[0]) history.pop();
  },
	
};