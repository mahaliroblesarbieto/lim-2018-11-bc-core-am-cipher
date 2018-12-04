const originalText  = document.getElementById("enter-text");
const secretCode  = document.getElementById("secret-code");
 //Se agrega al boton cipher una función que sirve para mostrar el texto cifrado en el textarea
document.getElementById('button-cipher').addEventListener('click', () => {
    const originalTextValue = originalText.value.toUpperCase();
    const secretCodeValue = parseInt(secretCode.value);
    let newText = cipher.encode(secretCodeValue, originalTextValue);
    document.getElementById("cipher-and-descipher-text").value = newText;
});
   //Se agrega al boton descipher unaa funcion que sirve para mostrar el texto descifrado en el textarea
document.getElementById('button-descipher').addEventListener('click', () => {
   const originalTextValue = originalText.value.toUpperCase();
   const secretCodeValue = parseInt(secretCode.value);
   let newText = cipher.decode(secretCodeValue, originalTextValue);
   document.getElementById("cipher-and-descipher-text").value = newText;
});
//Agregamos la función recargar página
document.getElementById('restart').addEventListener('click',() => {
  location.reload();
});
