let characters = ["tab"]

/*El id solo sera necesario cuando se puedan poner 
caracteres personalizados en la toolbar*/
//FIXED razon:Los Caracteres de espacio no se imprime correctamente 
function characterElection(character,id){
  if (character == characters[0]) {
    Editor.Write("  ")
  } 
}

