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
/*
console.log(syntaxToText(
  "hola"
))*/

function syntaxToText (text) {
  return text
    .replace(/\<br\>/g, "\n")
    .replace(/\<(.+?)\>/g, "");
}

function textToSyntax (text) {
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
    if (matches) for (let match of matches) {
      charIndex = input.indexOf(match, endCharIndex);
      endCharIndex = charIndex + match.length;
      
      let parsedMatch = stringToEntities(match);
      let replace = match;
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
    
  return output.replace(/\n/g, "<br>");
}

function charToEntity (char) {
  return (char.match(/[a-z0-9\s]+/i)) ? char : "&#" + char.charCodeAt(0) + ";";
};

function stringToEntities (str) {
  return str.replace(/./gm, charToEntity);
}
