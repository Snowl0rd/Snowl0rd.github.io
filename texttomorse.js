// функция, которая вызывается при нажатии кнопки "Перевести"
function translateText() {
    // получить текст, который нужно перевести
    let inputText = document.getElementById("inputText").value;
  
    // перевести текст в азбуку Морзе
    let morseText = russianToMorse(inputText);
  
    // вывести результат перевода на экран
    document.getElementById("result").innerHTML = morseText;
  }
  
  // функция для перевода русского текста в азбуку Морзе
  function russianToMorse(text) {
    let morseAlphabet = {
      "а": ".-",
      "б": "-...",
      "в": ".--",
      "г": "--.",
      "д": "-..",
      "е": ".",
      "ж": "...-",
      "з": "--..",
      "и": "..",
      "й": ".---",
      "к": "-.-",
      "л": ".-..",
      "м": "--",
      "н": "-.",
      "о": "---",
      "п": ".--.",
      "р": ".-.",
      "с": "...",
      "т": "-",
      "у": "..-",
      "ф": "..-.",
      "х": "....",
      "ц": "-.-.",
      "ч": "---.",
      "ш": "----",
      "щ": "--.-",
      "ъ": ".--.-.",
      "ы": "-.--",
      "ь": "-..-",
      "э": "..-..",
      "ю": "..--",
      "я": ".-.-",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      "!": "-.-.--",
      "-": "-....-",
      "/": "-..-.",
      "@": ".--.-.",
      "(": "-.--.",
      ")": "-.--.-",
      " ": " "
    };
  
    let morseCode = "";
    let letters = text.toLowerCase().split("");
  
    for (let i = 0; i &lt; letters.length; i++) {
      let letter = letters[i];
      if (morseAlphabet[letter]) {
        morseCode += morseAlphabet[letter] + " ";
      }
    }
  
    return morseCode.trim();
  }