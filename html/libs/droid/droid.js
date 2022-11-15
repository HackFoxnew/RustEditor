/*
 * DroidScript API
 */


droid = {
  isStarted: false,
  
  
  // @droid.task() ~ solitar tarea
  task (task, ...params) {
    let request = "App." + task.replace("$", "") + "(";
    
    // si el primer parámetro no require \f
    let i = 0;
    if (task.indexOf("$") != -1) request += params[i++];
    
    // insertar parámetros en solicitud
    for (i; i < params.length; i++)
        request += "\f" + params[i];
    
    // solicitar tarea
    return prompt("#", request);
  },
  
  
  // @droid.start() ~ inicializar api
  start () {
    prompt("#", "_Init");
    prompt("#","_Start");
    this.isStarted = true;
  },
  
  
  // obtener nombre de función para callbacks
  getCbName (fn) { 
    if (fn) {
      // si es global
      let name = fn.name;
      if (window[name]) return name;
    
      // si no tiene identificador o es local
      name = "" + this.Hash(fn.toString());
      _cbMap[name] = function () {
        // por si está en algún contexto
        if (fn._ctx) fn._ctx.source = this; 
        fn.apply(fn._ctx, arguments);
      };
      return "_cbMap['" + name + "']";
    }
  
    return null;
  },
};


// @Hash() ~ crear Hash numérico
droid.Hash = function (str) {
  let hash = 5381;
  let i = str.length; 
  while (i) { 
    i--;
    hash = ( hash * 33 ) ^ str.charCodeAt(i); 
  } 
  return hash>>>0; 
};


// variables globales
_cbMap = []; //lista de callbacks