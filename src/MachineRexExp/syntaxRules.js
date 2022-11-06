// #TODO tokens rules
/*
 * Array[0] => RegExp de búsqueda
 * Array[1] => RegExp para ignorar cadena de la busqueda
 */
let syntax = {
  STRING: [
    /\"(.*?)\"/g, 
    null
  ],
  HEAD: [
    /\[(.*?)\]/g, 
    /(^\[)|(\]$)/g
  ],
  COMMENT: [
    /\#(.*?)\n/g, 
    /\n$/
  ],
};

e(`
# comentario
[encabezado]
var: "wiii"
`)

function e (text) {
  let input = text;
  let output = text;
  let replaceList = [];
  
  // buclear cada token
  for (let tokenType in syntax) {
    let arg = syntax[tokenType];
    let regSearch = arg[0];
    let regIgnore = arg[1];
    
    let matches = input.match(regSearch);
    let charIndex = -1;
    let endCharIndex = -1;
    
    // buclear coincidencias
    for (let match of matches) {
      charIndex = input.indexOf(match, endCharIndex);
      endCharIndex = charIndex + match.length;
      
      let parsedMatch = stringToEntities(match);
      let replace = atch;
      if (arg[1]) replace = replace.replace(regIgnore, "");
      
      replaceList.push({
        target: match,
        replace: match.replace(replace, "<span class='token-" + tokenType + "'>" + stringToEntities(replace) + "</span>")
      })
    }
    
  }
  
  // reemplazar
  for (let i of replaceList) 
      output = output.replace(i.target, i.replace);
    
  output = output.replace(/\n/g, "<br>");
  console.log(input);
  console.log(output);
}

function charToEntity (char) {
  return (char.match(/[a-z0-9\s]+/i)) ? char : "&#" + char.charCodeAt(0) + ";";
};

function stringToEntities (str) {
  return str.replace(/./gm, charToEntity);
}