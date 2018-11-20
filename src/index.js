//Estamos obteniendo en la constante el elemento que se ingreso en el input "ingresartexto"
let originalText = document.getElementById("enter-text");
//Estamos obteniendo en la constante el elemento que se ingreso en el input "codigosecreto"
let secretCode = document.getElementById("secret-code");
//Creamosla variable newtex en donde aparecera el texto nuevo y para ello le damos el valor de cadena vacia
let newText="";
//Creamos una constante en la que se va obtener el elemento con id buttoncipher
const buttonCipher=document.getElementById('button-cipher');
//Creamos una constante en la que se va obtener el elemento con id buttondescipher
const buttonDescipher=document.getElementById('button-descipher');
/*Estamos obteniendo el valor del elemento que se ingreso en el input
"ingresartexto" y también en caso que el usuario ingrese el texto en minuscula, internammente
se convertira en mayuscula*/

//Agregamos una funcion que se tiene que ejecutar al presionar el botón cifrar
 buttonCipher.addEventListener('click', cifrar );

 function encode (secretCodeValue,originalTextValue) {
  //Creamos un bucle para obtener el valor ASCII de cada letra ingresada en el texto
    for (let i=0; i<originalTextValue.length; i++){
      let originalTextAscii = originalTextValue.charCodeAt(i);
  /*Ponemos una condicional para que cuando se reconozca el espacio cuyo código
  ASCII es 32, éste sea transformado nuevamente a espacio y se concatene como espacio*/
          if (originalTextAscii===32) {
        newText= newText + String.fromCharCode(originalTextAscii);
          }else{
            /*En caso no sea espacio, obtenemos en una nueva variable el codigo
            ASCII de la nueva letra que se obtiene al realizar el desplazamiento*/
            let newTextAscii   = (((originalTextAscii - 65) + secretCodeValue)% 26)+65;
            //Obtener el nuevo texto y vamos concatenando las letras
                newText= newText + String.fromCharCode(newTextAscii);
          }
    }
    return newText;
}
//Creamos la funcion Cipher
function cifrar(){
  const originalTextValue = originalText.value.toUpperCase();
  /*Estamos obteniendo el valor del elemento que se ingreso en el input
  "codigosecreto" y tambien lo estamos convirtiendo en variable number*/
  const secretCodeValue = parseInt(secretCode.value);
  debugger
  let newText = cipher.encode(secretCodeValue, originalTextValue);
  //Mostrar el nuevo texto en el input
    document.getElementById("cipher-and-descipher-text").value = newText;
};

//Agregamos una funcion que se tiene que ejecutar al presionar el botón descifrar
 buttonDescipher.addEventListener('click', descipher)
 //Creamos la funcion buttonDescipher
 function descipher(){
  /*Estamos obteniendo el valor del elemento que se ingreso en el input
  "ingresartexto" y también en caso que el usuario ingrese el texto en minuscula, internammente
  se convertira en mayuscula*/
    const originalTextValue = originalText.value.toUpperCase();
  /*Estamos obteniendo el valor del elemento que se ingreso en el input
  "codigosecreto" y tambien lo estamos convirtiendo en variable number*/
    const secretCodeValue = parseInt(secretCode.value);
//Creamos un bucle para obtener el valor ASCII de cada letra ingresada en el texto ABC DE
  for (let i=0; i<originalTextValue.length; i++){
    let originalTextAscii = originalTextValue.charCodeAt(i);
/*Ponemos una condicional para que cuando se reconozca el espacio cuyo código
ASCII es 32, éste sea transformado nuevamente a espacio y se concatene como espacio*/
        if (originalTextAscii===32) {
      newText= newText + String.fromCharCode(originalTextAscii);
    }else{
          /*En caso no sea espacio, obtenemos en una nueva variable el codigo
          ASCII de la nueva letra que se obtiene al realizar el desplazamiento*/
          let newTextAscii   = (((originalTextAscii + 65) -  secretCodeValue)% 26)+65;
          //Obtener el nuevo texto y vamos concatenando las letras
              newText= newText + String.fromCharCode(newTextAscii);
        }
  }
  //Mostrar el nuevo texto en el input
    return document.getElementById("cipher-and-descipher-text").value = newText;
};
