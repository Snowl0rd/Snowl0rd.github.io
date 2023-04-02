(function(){

    "use strict";
    
    window.CeasarsCipher = function(input){
        var alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".toLowerCase(),
              shiftAmount,
          shiftedAlphabet = "",
          OUTPUT = "",
          STRING,
          otherCharacters = '-=~\"\'#$%&*^:<>?/!{(|)}.1234567890\, '
      if(typeof input === "object"){
          shiftAmount = input.shift;
        STRING = input.msg.toLowerCase();
      } else {
          return;
      }
      if(typeof STRING === "string" || typeof (STRING+"") === "string"){
           shiftedAlphabet = alphabet.slice(shiftAmount);
        shiftedAlphabet += alphabet.slice(0, shiftAmount);
        shiftedAlphabet += otherCharacters;
        alphabet += otherCharacters;
        
        for(var i = 0; i < STRING.length; i++){
            var numberd = alphabet.indexOf( STRING[i] )
            
          OUTPUT += shiftedAlphabet[numberd];
        }
      } else {
        return;
      };
      
      return OUTPUT;
      
    };
    })();
    
    
    document.getElementById("message").addEventListener("input", function(){
        var itsValue = this.value;
      document.getElementById("output").textContent = CeasarsCipher({
          msg: itsValue,
        shift: document.getElementById("shift").value
      });
    });
    document.getElementById("shift").addEventListener("keyup", function(){
        var itsValue = this.value;
      document.getElementById("output").textContent = CeasarsCipher({
          msg: document.getElementById("message").value,
        shift: itsValue
      })
    });
    
    document.getElementById("output").textContent = CeasarsCipher({
          msg: document.getElementById("message").value,
        shift: document.getElementById("shift").value
      });