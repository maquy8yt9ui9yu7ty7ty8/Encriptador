function encrypt() {
  const inputText = document.getElementById("inputText").value;
  let encryptedText = "";
  for (let char of inputText) {
    encryptedText += String.fromCharCode(char.charCodeAt(0) + 3);
  }
  document.getElementById("outputText").textContent = encryptedText;
}

function decrypt() {
  const inputText = document.getElementById("inputText").value;
  let decryptedText = "";
  for (let char of inputText) {
    decryptedText += String.fromCharCode(char.charCodeAt(0) - 3);
  }
  document.getElementById("outputText").textContent = decryptedText;
}

function copyText() {
  const outputText = document.getElementById("outputText");
  const range = document.createRange();
  range.selectNode(outputText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Texto copiado al portapapeles");
}
