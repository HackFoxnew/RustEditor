cfg.Light;


// función de llamada principal
function OnStart () {
  
  app.SetOnShowKeyboard(OnKeyboard);
  app.SetOrientation("Portrait");
  
  // elementos
  layout = app.CreateLayout("Linear", "FillXY");
  viewApp = app.CreateWebView(1, 1);
  viewApp.LoadUrl("html/index.html");
   
  // agregar a la aplicación 
  layout.AddChild(viewApp);
  app.AddLayout(layout);
  
}


// ajuste de teclado
function OnKeyboard (show) {
  if (show) {
    let width = app.GetScreenWidth();
    let height = app.GetDisplayHeight() - app.GetKeyboardHeight();
    viewApp.SetSize(width, height, "px");
  } 
  else viewApp.SetSize(1, 1);
}