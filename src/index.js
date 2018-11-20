//Estamos obteniendo en la constante el elemento que se ingreso en el input "ingresartexto"
let originalText = document.getElementById("enter-text");
//Estamos obteniendo en la constante el elemento que se ingreso en el input "codigosecreto"
let secretCode = document.getElementById("secret-code");
//A la constante newText le damos el valor de cadena vacia
let newText="";
//Creamos una funcion que se tiene que ejecutar al presionar el botón cifrar
 document.getElementById('button-cipher').addEventListener('click', () => {
  /*Estamos obteniendo el valor del elemento que se ingreso en el input
  "ingresartexto" y también en caso que el usuario ingrese el texto en minuscula, internammente
  se convertira en mayuscula*/
    const originalTextValue = originalText.value.toUpperCase();
  /*Estamos obteniendo el valor del elemento que se ingreso en el input
  "codigosecreto" y tambien lo estamos convirtiendo en variable number*/
    const secretCodeValue = parseInt(secretCode.value);
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
  //Mostrar el nuevo texto en el input
    document.getElementById("cipher-and-descipher-text").value = newText;
});

//Creamos una funcion que se tiene que ejecutar al presionar el botón descifrar
 document.getElementById('button-descipher').addEventListener('click', () => {
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
    document.getElementById("cipher-and-descipher-text").value = newText;
});
