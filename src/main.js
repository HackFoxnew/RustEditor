/* App main */

function OnStart () {
  const $VC = document.getElementById("Ventana_Creacion");

const $Creacion = document.getElementById('Creacion');

const $BtnSalir = document.getElementById('Salir_Creacion');

const $Input_Enlaze = document.getElementById('inputEnlaze');

const $Form = document.getElementById('form');

$Creacion.addEventListener("click",()=>{
  $VC.showModal()
})

function CerrarModal(){
  $VC.close()
}

$Input_Enlaze.addEventListener("input",function InpButon(){
  
  let noValido = /\s/;

  
  if ($Input_Enlaze.value == "" || $Input_Enlaze.value == null || $Input_Enlaze == undefined || noValido.test(innerHeight.value)) {
    
    
    
    return false; 
  }
  
  else{
    let a = document.createElement("a");
    let textA = document.createTextNode("Crear")
    a.classList.add("Enlazes")
    a.appendChild(textA)
    $Form.appendChild(a)
  }
  
})

}
