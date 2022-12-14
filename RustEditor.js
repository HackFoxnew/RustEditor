   cfg.Light;


// función de llamada principal
function OnStart () {
  
  app.SetOnShowKeyboard(OnKeyboard);
  //app.SetOrientation("Portrait");
 
  // elementos
  layout = app.CreateLayout("Linear", "FillXY");
  viewApp = app.CreateWebView(1, 1);
  viewApp.LoadUrl("html/index.html");
  app.ShowProgress("Espere un momento...");
   
  // agregar a la aplicación 
  layout.AddChild(viewApp);
  app.AddLayout(layout);
  
}

// evento al rotar pantalla
function OnConfig () {
  let show = app.IsKeyboardShown();
  OnKeyboard(show);
}

// evento al mostrar teclado
function OnKeyboard (show) {
  if (show) {
    let width = app.GetScreenWidth();
    let height = app.GetDisplayHeight() - app.GetKeyboardHeight();
    viewApp.SetSize(width, height, "px");
  } 
  else viewApp.SetSize(1, 1);
}