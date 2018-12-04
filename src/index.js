const originalText  = document.getElementById("enter-text");
const secretCode  = document.getElementById("secret-code");
const buttonCipher  = document.getElementById('button-cipher');
const buttonDescipher = document.getElementById('button-descipher');
buttonCipher.addEventListener('click', hideMessage );
 //La función hideMessage sirve para mostrar el texto cifrado en el textarea
 function hideMessage(){
    const originalTextValue = originalText.value.toUpperCase();
    const secretCodeValue = parseInt(secretCode.value);
    let newText = cipher.encode(secretCodeValue, originalTextValue);
    document.getElementById("cipher-and-descipher-text").value = newText;
  }
buttonDescipher.addEventListener('click', discoverMessage)
 //La funcion discoverMessage sirve para mostrar el texto descifrado en el textarea
 function discoverMessage(){
   const originalTextValue = originalText.value.toUpperCase();
   const secretCodeValue = parseInt(secretCode.value);
   let newText = cipher.decode(secretCodeValue, originalTextValue);
   document.getElementById("cipher-and-descipher-text").value = newText;
 }
//Agregamos la función recargar página
document.getElementById('restart').addEventListener('click',() => {
  location.reload();
});
