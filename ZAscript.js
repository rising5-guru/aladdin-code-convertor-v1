const CodeDict = {
  'A': '1100;', 
  'B': '1011;', 
  'C': '1001;', 
  'D': '011;',
  'E': '0001;',
  'F': '001;',
  'G': '1;',
  'H': '000;',
  'I': '010;',
  'J': '1101;',
  'K': '0110;',
  'L': '111;',
  'M': '10;', 
  'N': '11;', 
  'O': '0100;',
  'P': '101;',
  'Q': '0111;',
  'R': '00;',
  'S': '0000;',
  'T': '110;', 
  'U': '0010;', 
  'V': '0;',
  'W': '100;',
  'X': '1010;',
  'Y': '1000;',
  'Z': '01;',
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