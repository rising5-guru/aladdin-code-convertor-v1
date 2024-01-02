const CodeDict = {
  'A': '10;', 
  'B': '0111;', 
  'C': '0101;', 
  'D': '011;',
  'E': '1;',
  'F': '1101;',
  'G': '001;',
  'H': '1111;',
  'I': '11;',
  'J': '1000;',
  'K': '010;',
  'L': '1011;',
  'M': '00;', 
  'N': '01;', 
  'O': '000;',
  'P': '1001;',
  'Q': '0010;',
  'R': '101;',
  'S': '111;',
  'T': '0;', 
  'U': '110;', 
  'V': '1110;',
  'W': '100;',
  'X': '0110;',
  'Y': '0100;',
  'Z': '0011;',
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