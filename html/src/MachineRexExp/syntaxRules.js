
/*
 * Array[0] => RegExp de búsqueda
 * Array[1] => RegExp para ignorar cadena de la busqueda
 */
let _afterProperty = /^\: */;
let syntax = {
  COMMENT: [
    /(&#47;){2}(.*?)(\n|$)/g, 
    /\n$/
  ],
  
  HEADER: [
    /(^|\n)\[(.*?)\]/g, 
    /(\[)|(\]$)/g
  ],
  
  // tipos de datos 
  STRING: [
    /\:(&nbsp;)*&#34;(.*?)&#34;/g, 
    _afterProperty
  ],
  
  NUMBER: [
    /\:(&nbsp;)*([0-9]+(\.[0-9]+){0,1})/g,
    _afterProperty
  ],
  
  BOOLEAN: [
    /\:(&nbsp;)*(true|false)/g,
    _afterProperty
  ],
  
  HEX: [
    /\:(&nbsp;)*&#35;([0-9a-fA-F]{3,8})/g, 
    _afterProperty
  ],
  
  // propiedad
  //PROPERTY: [
  //  /(^|\n)(.+?)\:/g,
  //  null,
  //],

};


// convertir string a DocumentFragment con resaltado
function textToSyntax (text) {
  let input = tagsToEntities(text);
  let output = input;
  let replaceList = [];
  
  // buclear cada token
  for (let tokenType in syntax) {
    let arg = syntax[tokenType];
    let regSearch = arg[0];
    let regIgnore = arg[1];
    
    let matches = input.match(regSearch);
    
    // buclear coincidencias
    if (matches) for (let match of matches) {
      let replace = match;
      if (arg[1]) replace = replace.replace(regIgnore, "");
      
      replaceList.push({
        target: match,
        replace: match.replace(replace, "<span class='token-" + tokenType + "'>" + replace + "</span>")
      })
    }
    
  }
  
  // reemplazar
  for (let i of replaceList) 
      output = output.replace(i.target, i.replace);
    
  return output.replace(/\n/g, "<br>");
}

// convertir letra a entidad html
function charToEntity (char) {
  return (char.match(/[a-z0-9\s]+/i)) ? char : "&#" + char.charCodeAt(0) + ";";
}

// convertir texto a entidades html
function stringToEntities (str) {
  return str.replace(/./gm, charToEntity);
}

// convertir las etiquetas del texto a entidades html
function tagsToEntities (str) {
  return str.replace(/\#| |\>|\"|\/|\</g, function(s){
    if (s === " ") return "&nbsp;";
    
    return "&#" + s.charCodeAt(0) + ";";
  });
}