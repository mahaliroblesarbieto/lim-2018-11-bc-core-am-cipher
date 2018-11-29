window.cipher = {
  encode: function(offset,string){
    let newText="";

   //Creamos un bucle para obtener el valor ASCII de cada letra ingresada en el texto
     for (let i=0; i<string.length; i++){
       let originalTextAscii = string.charCodeAt(i);

   /*Ponemos una condicional para que cuando se reconozca el espacio cuyo código
   ASCII es 32, éste sea transformado nuevamente a espacio y se concatene como espacio*/
           if (originalTextAscii===32) {
         newText= newText + String.fromCharCode(originalTextAscii);
       } else if (originalTextAscii===209) {
         newText= newText + "Ñ";
       } else if (originalTextAscii===59) {
         newText= newText + ";";
       } else if (originalTextAscii===44) {
         newText= newText + ",";
       } else if (originalTextAscii===46) {
         newText= newText + ".";
       } else if (originalTextAscii===191) {
         newText= newText + "¿";
       } else if (originalTextAscii===63) {
         newText= newText + "?";
       } else if (originalTextAscii===193) {
         newText= newText + "Á";
       } else if (originalTextAscii===201) {
         newText= newText + "É";
       } else if (originalTextAscii===205) {
         newText= newText + "Í";
       } else if (originalTextAscii===211) {
         newText= newText + "Ó";
       } else if (originalTextAscii===218) {
         newText= newText + "Ú";
       } else if (originalTextAscii===10) {
          newText= newText + "\n";
       } else if (originalTextAscii===161) {
          newText= newText + "¡";
        } else if (originalTextAscii===33) {
           newText= newText + "!";
        } else if (originalTextAscii===40) {
           newText= newText + "(";
        } else if (originalTextAscii===41) {
           newText= newText + ")";
        } else if (originalTextAscii===34) {
           newText= newText + "\"";
        } else if (originalTextAscii===58) {
           newText= newText + ":";
        } else if (originalTextAscii===42) {
           newText= newText + "*";
       }else{
             /*En caso no sea espacio, obtenemos en una nueva variable el codigo
             ASCII de la nueva letra que se obtiene al realizar el desplazamiento*/
             let newTextAscii   = (((originalTextAscii - 65) + offset)% 26)+65;
             //Obtener el nuevo texto y vamos concatenando las letras
                 newText= newText + String.fromCharCode(newTextAscii);
           }
     }


     return newText;
 },

  decode: function(offset,string){
    let newText=""
    //Creamos un bucle para obtener el valor ASCII de cada letra ingresada en el texto
      for (let i=0; i<string.length; i++){
        let originalTextAscii = string.charCodeAt(i);
    /*Ponemos una condicional para que cuando se reconozca el espacio cuyo código
    ASCII es 32, éste sea transformado nuevamente a espacio y se concatene como espacio*/
            if (originalTextAscii===32) {
          newText= newText + String.fromCharCode(originalTextAscii);
        } else if (originalTextAscii===209) {
          newText= newText + "Ñ";
        } else if (originalTextAscii===59) {
          newText= newText + ";";
        } else if (originalTextAscii===44) {
          newText= newText + ",";
        } else if (originalTextAscii===46) {
          newText= newText + ".";
        } else if (originalTextAscii===191) {
          newText= newText + "¿";
        } else if (originalTextAscii===63) {
          newText= newText + "?";
        } else if (originalTextAscii===193) {
          newText= newText + "Á";
        } else if (originalTextAscii===201) {
          newText= newText + "É";
        } else if (originalTextAscii===205) {
          newText= newText + "Í";
        } else if (originalTextAscii===211) {
          newText= newText + "Ó";
        } else if (originalTextAscii===218) {
          newText= newText + "Ú";
        } else if (originalTextAscii===10) {
           newText= newText + "\n";
        } else if (originalTextAscii===161) {
           newText= newText + "¡";
        } else if (originalTextAscii===33) {
            newText= newText + "!";
        } else if (originalTextAscii===40) {
             newText= newText + "(";
        } else if (originalTextAscii===41) {
             newText= newText + ")";
        } else if (originalTextAscii===34) {
             newText= newText + "\"";
        } else if (originalTextAscii===58) {
             newText= newText + ":";
        } else if (originalTextAscii===42) {
             newText= newText + "*";
          }else{
              /*En caso no sea espacio, obtenemos en una nueva variable el codigo
              ASCII de la nueva letra que se obtiene al realizar el desplazamiento*/
              let newTextAscii   = (((originalTextAscii + 65) - offset)% 26)+65;
              //Obtener el nuevo texto y vamos concatenando las letras
                  newText= newText + String.fromCharCode(newTextAscii);
            }
      }
      return newText;

  },

};
