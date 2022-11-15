/*
 * DroidScript API
 * Dialogs
 */


// @ShowPopup() ~ mostrar popup
droid.ShowPopup = function (msg, opt) {
  this.task("ShowPopup$", msg, (opt||"Bottom") + ",Bottom");
}

// @Alert() ~ mostrar alerta de DroidScript
droid.Alert = function (msg, title, opt, hue) {
  this.task("Alert", msg, title, opt, hue);
}


// @ShowLoading() ~ mostrar pantalla cargando
droid.ShowProgress = function (msg, opt) {
  this.task("ShowProgress", msg, opt);
}

// @HiddenLoading() ~ ocultar pantalla cargando
droid.HideProgress = function () {
  this.task("HideProgress");
}