//Estamos obteniendo en la constante el elemento que se ingreso en el input "ingresartexto"
let originalText = document.getElementById("enter-text");
//Estamos obteniendo en la constante el elemento que se ingreso en el input "codigosecreto"
let secretCode = document.getElementById("secret-code");
//Creamos la variable newtex en donde aparecera el texto nuevo y para ello le damos el valor de cadena vacia
let newText="";
//Creamos una constante en la que se va obtener el elemento con id buttoncipher
const buttonCipher=document.getElementById('button-cipher');
//Creamos una constante en la que se va obtener el elemento con id buttondescipher
const buttonDescipher=document.getElementById('button-descipher');
//Agregamos la función hideMessage que se tiene que ejecutar al presionar el botón cifrar
 buttonCipher.addEventListener('click', hideMessage );
 //Creamos la funcion hideMessage
 function hideMessage(){
   /*Estamos obteniendo el valor del elemento que se ingreso en el input
   "ingresartexto" y también en caso que el usuario ingrese el texto en minuscula, internammente
   se convertira en mayuscula*/
   const originalTextValue = originalText.value.toUpperCase();
   /*Estamos obteniendo el valor del elemento que se ingreso en el input
   "codigosecreto" y tambien lo estamos convirtiendo en variable number*/
   const secretCodeValue = parseInt(secretCode.value);
   /*La variable newText va tener el valor que se obtenga despues de ejecutar
   la funcion encode que se encuentra dentro del objeto window.cipher */
   let newText = cipher.encode(secretCodeValue, originalTextValue);
   //Mostrar el nuevo texto en el input
  return  document.getElementById("cipher-and-descipher-text").value = newText;
 };


//Agregamos la funcion discoverMessage que se tiene que ejecutar al presionar el botón descifrar
 buttonDescipher.addEventListener('click', discoverMessage)
 //Creamos la funcion discoverMessage
 function discoverMessage(){
  /*Estamos obteniendo el valor del elemento que se ingreso en el input
  "ingresartexto" y también en caso que el usuario ingrese el texto en minuscula, internammente
  se convertira en mayuscula*/
    const originalTextValue = originalText.value.toUpperCase();
  /*Estamos obteniendo el valor del elemento que se ingreso en el input
  "codigosecreto" y tambien lo estamos convirtiendo en variable number*/
    const secretCodeValue = parseInt(secretCode.value);
    /*La variable newText va tener el valor que se obtenga despues de ejecutar
    la funcion encode que se encuentra dentro del objeto window.cipher */
    let newText = cipher.decode(secretCodeValue, originalTextValue);
  //Mostrar el nuevo texto en el input
  return document.getElementById("cipher-and-descipher-text").value = newText;
};
