function iniWorker(){
   d = document;
   //Fixed no coje los eventos 
  const MenuCarpetas = d.querySelector(".menu-carpetas-espacio-trabajo");
  
  //Todos los hijos de MenuCarpetas heredan el evento 
  MenuCarpetas.addEventListener("click",ingresar())
  
  MenuCarpetas.addEventListener("dblclick",function menuAbrir(){
    const MenuGestionWorker = document.getElementById("MenuGestionWorker");
   
   MenuGestionWorker.close()
  })
    
  
  
}

function ingresar(){
  //Borrar hijos de MenuCarpetas
  
  
  
  //Crear hijos nuevos de menu carpetas
  
  
  if(type != "carpeta"){
    //Cargar texto
    
    
    //Abrir editór
    
    
    //Escribir texto
  }
}



function SelectionMenu(){
   const MenuGestionWorker = document.getElementById("MenuGestionWorker");
   
   MenuGestionWorker.show()
}

