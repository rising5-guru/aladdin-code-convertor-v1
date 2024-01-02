const CodeDict = {
'A': '0011;', 
'B': '0100;', 
'C': '0110;', 
'D': '100;',
'E': '1110;',
'F': '110;',
'G': '0;',
'H': '111;',
'I': '101;',
'J': '0010;',
'K': '1001;',
'L': '000;',
'M': '01;', 
'N': '00;', 
'O': '1011;',
'P': '010;',
'Q': '1000;',
'R': '11;',
'S': '1111;',
'T': '001;', 
'U': '1101;', 
'V': '1;',
'W': '011;',
'X': '0101;',
'Y': '0111;',
'Z': '10;',
  '1': '01111;','2': '00111;', 
  '3': '00011;','4': '00001;',
  '5': '00000;','6': '10000;', 
  '7': '11000;','8': '11100;', 
  '9': '11110;','0': '11111;', 
  ' ': ':'
};

// Function to encode text to Morse code
function encode() {
  const inputText = document.getElementById('inputText').value.toUpperCase();
  let outputText = '';

  for (let i = 0; i < inputText.length; i++) {
    const char = inputText[i];
    if (CodeDict[char]) {
      outputText += CodeDict[char] + ' ';
    } else {
      outputText += ' ';
    }
  }

  document.getElementById('outputText').value = outputText.trim();
}

// Function to decode Morse code to text
function decode() {
  const inputText = document.getElementById('inputText').value.trim();
  const CodeArray = inputText.split(' ');
  let outputText = '';

  for (let i = 0; i < CodeArray.length; i++) {
    const code = CodeArray[i];
    if (code === '/') {
      outputText += ' ';
    } else {
      const char = Object.keys(CodeDict).find(key => CodeDict[key] === code);
      outputText += char || '';
    }
  }

  document.getElementById('outputText').value = outputText;
}

function pasteText(textAreaId) {
  const textArea = document.getElementById(textAreaId);
  navigator.clipboard.readText().then(clipText => {
    textArea.value = clipText;
  });
}

function copyAll(textAreaId) {
  const textArea = document.getElementById(textAreaId);
  textArea.select();
  document.execCommand('copy');
  // Optionally, you can provide user feedback that the text has been copied
  alert('Text copied to clipboard!');
}