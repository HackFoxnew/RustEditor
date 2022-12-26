// viewManager component

viewManager = {

  views: {}, // lista de pantallas
  history: [], // historial de pantallas abiertas
  index: -1,   // posicion en el historial


  // @add(id) ~ añadir pantalla
  add: function (id) {
    this.views[id] = HTML.getElementById(id);
  },


  // @open(id) ~ mostrar pantalla
  open: function (id) {
    let history = this.history;
    let $lastView = this.views[history[this.index]]; // pantalla abierta
    let $targetView = this.views[id]; // pantalla a abrir

    if ($lastView) $lastView.classList.remove("view-visible");
    $targetView.classList.add("view-visible");

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