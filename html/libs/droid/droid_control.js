/*
 * DroidScript API
 * Application Control
 */

// @EnableBackKey() ~ activar/desactivar funcion por defecto de la tecla Back
droid.EnableBackKey = function (enabled) {
  this.task("EnableBackKey", enabled);
}

// @Exit() ~ salir de aplicación
droid.Exit = function (killApp) {
  this.task("Exit", killApp);
};