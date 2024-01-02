const CodeDict = {
  'A': '01;', 
  'B': '1000;', 
  'C': '1010;', 
  'D': '100;',
  'E': '0;',
  'F': '0010;',
  'G': '110;',
  'H': '0000;',
  'I': '00;',
  'J': '0111;',
  'K': '101;',
  'L': '0100;',
  'M': '11;', 
  'N': '10;', 
  'O': '111;',
  'P': '0110;',
  'Q': '1101;',
  'R': '010;',
  'S': '000;',
  'T': '1;', 
  'U': '001;', 
  'V': '0001;',
  'W': '011;',
  'X': '1001;',
  'Y': '1011;',
  'Z': '1100;',
  '1': '01111;','2': '00111;', 
  '3': '00011;','4': '00001;',
  '5': '00000;','6': '10000;', 
  '7': '11000;','8': '11100;', 
  '9': '11110;','0': '11111;', 
  ' ': ':'
};
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

  alert('Text copied to clipboard!');
}