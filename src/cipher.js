window.cipher = {
  /*La función encode sirve para obtener una nueva frase, contiene dos parámetros,
  offset es el numero de desplazamiento y string es el texto que ingresa el usuario*/
  encode: function  (offset,string) {
    let newText = "";
    for (let i  = 0; i  <  string.length; i++){
       const originalTextAscii  = string.charCodeAt(i);
       if (originalTextAscii  === 32) {
         newText  = newText + String.fromCharCode(originalTextAscii);
       } else if (originalTextAscii === 209) {
         newText  = newText + "Ñ";
       } else if (originalTextAscii === 59) {
         newText  = newText + ";";
       } else if (originalTextAscii === 44) {
         newText  = newText + ",";
       } else if (originalTextAscii === 46) {
         newText= newText + ".";
       } else if (originalTextAscii === 191) {
         newText= newText + "¿";
       } else if (originalTextAscii === 63) {
         newText= newText + "?";
       } else if (originalTextAscii === 193) {
         newText= newText + "Á";
       } else if (originalTextAscii === 201) {
         newText= newText + "É";
       } else if (originalTextAscii === 205) {
         newText= newText + "Í";
       } else if (originalTextAscii === 211) {
         newText= newText + "Ó";
       } else if (originalTextAscii === 218) {
         newText= newText + "Ú";
       } else if (originalTextAscii === 10) {
          newText= newText + "\n";
       } else if (originalTextAscii === 161) {
          newText= newText + "¡";
        } else if (originalTextAscii  === 33) {
           newText= newText + "!";
        } else if (originalTextAscii  === 40) {
           newText= newText + "(";
        } else if (originalTextAscii  === 41) {
           newText= newText + ")";
        } else if (originalTextAscii  === 34) {
           newText= newText + "\"";
        } else if (originalTextAscii  === 58) {
           newText= newText + ":";
        } else if (originalTextAscii  === 42) {
           newText= newText + "*";
       }else{
             let newTextAscii  =  (((originalTextAscii - 65) + offset)% 26)+65;
                 newText= newText + String.fromCharCode(newTextAscii);
           }
     }
     return newText;
 },
 /*La función decode sirve para obtener la frase inicial queingresó el usuario,
 contiene dos parámetros, offset es el numero de desplazamiento y string es el
 texto oculto o cifrado que ingresa el usuario*/
  decode: function(offset,string) {
    let newText = "";
      for (let i  = 0; i < string.length; i++){
        const originalTextAscii = string.charCodeAt(i);
            if (originalTextAscii === 32) {
          newText = newText + String.fromCharCode(originalTextAscii);
        } else if (originalTextAscii  === 209) {
          newText = newText + "Ñ";
        } else if (originalTextAscii  === 59) {
          newText = newText + ";";
        } else if (originalTextAscii  === 44) {
          newText = newText + ",";
        } else if (originalTextAscii  === 46) {
          newText = newText + ".";
        } else if (originalTextAscii  === 191) {
          newText = newText + "¿";
        } else if (originalTextAscii  === 63) {
          newText = newText + "?";
        } else if (originalTextAscii  === 193) {
          newText = newText + "Á";
        } else if (originalTextAscii  === 201) {
          newText = newText + "É";
        } else if (originalTextAscii  === 205) {
          newText = newText + "Í";
        } else if (originalTextAscii  === 211) {
          newText = newText + "Ó";
        } else if (originalTextAscii  === 218) {
          newText = newText + "Ú";
        } else if (originalTextAscii  === 10) {
           newText  = newText + "\n";
        } else if (originalTextAscii  === 161) {
           newText  = newText + "¡";
        } else if (originalTextAscii  === 33) {
            newText = newText + "!";
        } else if (originalTextAscii  === 40) {
             newText  = newText + "(";
        } else if (originalTextAscii  === 41) {
             newText  = newText + ")";
        } else if (originalTextAscii  === 34) {
             newText  = newText + "\"";
        } else if (originalTextAscii  === 58) {
             newText  = newText + ":";
        } else if (originalTextAscii  === 42) {
             newText  = newText + "*";
          }else{
              let newTextAscii   = (((originalTextAscii + 65) - offset)% 26)+65;
                  newText = newText + String.fromCharCode(newTextAscii);
            }
      }
      return newText;
  },
};
