/*Creamos tres constantes, una en donde se va guardar el texto que ingrese el
 usuario, otra  enla que se va guardar el numero de codigo secreto y otra en la
 que se va guardar el nuevo texto*/
let originalText;
let secretCode;
let newText;
//Creamos una funcion que se tiene que ejecutar al presionar el botón cifrar
function cifrar(){
newText="";
//Estamos obteniendo en la constante el elemento que se ingreso en el input "ingresartexto"
  originalText = document.getElementById("ingresartexto");
//Estamos obteniendo el valor del elemento que se ingreso en el input "ingresartexto"
  const originalTextValue = originalText.value;
//Estamos obteniendo en la constante el elemento que se ingreso en el input "codigosecreto"
  secretCode = document.getElementById("codigosecreto");
//Estamos obteniendo el valor del elemento que se ingreso en el input "codigosecreto"
  const secretCodeValue = parseInt(secretCode.value);
//Creamos un bucle para obtener el valor ASCII de cada letra ingresada en el texto
  for (let i=0; i<originalTextValue.length; i++){
    let originalTextAscii = originalTextValue.charCodeAt(i);
/*Obtener en una nueva variable el codigo ASCII de la nueva letra que se obtiene
al realizar el desplazamiento*/
let newTextAscii   = (((originalTextAscii - 65) + secretCodeValue)% 26)+65;
//Obtener el nuevo texto y vamos concatenando las letras
    newText= newText + String.fromCharCode(newTextAscii);
  }
  //Mostrar el nuevo texto en el input
    document.getElementById("mensajecifradoydescifrado").value = newText;
}

//Creamos una funcion que se tiene que ejecutar al presionar el botón descifrar
function descifrar(){
newText="";
//Estamos obteniendo en la constante el elemento que se ingreso en el input "ingresartexto"
  originalText = document.getElementById("ingresartexto");
//Estamos obteniendo el valor del elemento que se ingreso en el input "ingresartexto"
  const originalTextValue = originalText.value;
//Estamos obteniendo en la constante el elemento que se ingreso en el input "codigosecreto"
  secretCode = document.getElementById("codigosecreto");
//Estamos obteniendo el valor del elemento que se ingreso en el input "codigosecreto"
  const secretCodeValue = parseInt(secretCode.value);
//Creamos un bucle para obtener el valor ASCII de cada letra ingresada en el texto
  for (let i=0; i<originalTextValue.length; i++){
    let originalTextAscii = originalTextValue.charCodeAt(i);
/*Obtener en una nueva variable el codigo ASCII de la nueva letra que se obtiene
al realizar el desplazamiento*/
let newTextAscii   = (((originalTextAscii - 65) - secretCodeValue)% 26)+65;
//Obtener el nuevo texto y vamos concatenando las letras
    newText= newText + String.fromCharCode(newTextAscii);
  }
  //Mostrar el nuevo texto en el input
    document.getElementById("mensajecifradoydescifrado").value = newText;
}
