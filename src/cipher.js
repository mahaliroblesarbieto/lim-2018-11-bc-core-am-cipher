window.cipher = {
  encode: function(offset,string){
    newText=""
   //Creamos un bucle para obtener el valor ASCII de cada letra ingresada en el texto
     for (let i=0; i<string.length; i++){
       let originalTextAscii = string.charCodeAt(i);
   /*Ponemos una condicional para que cuando se reconozca el espacio cuyo código
   ASCII es 32, éste sea transformado nuevamente a espacio y se concatene como espacio*/
           if (originalTextAscii===32) {
         newText= newText + String.fromCharCode(originalTextAscii);
       } else if (originalTextAscii===165) {
         newText= newText + "Ó";
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
    newText=""
    //Creamos un bucle para obtener el valor ASCII de cada letra ingresada en el texto
      for (let i=0; i<string.length; i++){
        let originalTextAscii = string.charCodeAt(i);
    /*Ponemos una condicional para que cuando se reconozca el espacio cuyo código
    ASCII es 32, éste sea transformado nuevamente a espacio y se concatene como espacio*/
            if (originalTextAscii===32) {
          newText= newText + String.fromCharCode(originalTextAscii);
        } else if (originalTextAscii===224) {
          newText= newText + "Ñ";
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
