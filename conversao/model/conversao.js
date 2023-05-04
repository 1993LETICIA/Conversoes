// Conversão decimal para binário
function converterDecimalParaBinario() {
  let decimal = parseInt(document.getElementById("decimal").value);
  let binario = "";
  let resto;

  while (decimal > 0) {
    resto = decimal % 2;
    binario = resto + binario;
    decimal = (decimal - resto) / 2;
  }

  document.getElementById("resultadoBinario").innerHTML = binario;
}


// Conversão decimal para hexadecimal

function converterBinarioParaHexadecimal() {
  let binario = document.getElementById("binarioHexa").value;
  let decimal = 0;
  let potencia = 0;

  for (let i = binario.length - 1; i >= 0; i--) {
    decimal += binario[i] * (2 ** potencia);
    potencia++;
  }

  let hexadecimal = "";
  let resto;
  while (decimal > 0) {
    resto = decimal % 16;
    if (resto < 10) {
      hexadecimal = resto + hexadecimal;
    } else {
      switch(resto) {
        case 10:
          hexadecimal = "A" + hexadecimal;
          break;
        case 11:
          hexadecimal = "B" + hexadecimal;
          break;
        case 12:
          hexadecimal = "C" + hexadecimal;
          break;
        case 13:
          hexadecimal = "D" + hexadecimal;
          break;
        case 14:
          hexadecimal = "E" + hexadecimal;
          break;
        case 15:
          hexadecimal = "F" + hexadecimal;
          break;
      }
    }
    decimal = (decimal - resto) / 16;
  }
  document.getElementById("resultadoHexadecimal").innerHTML = hexadecimal;
}


     
// Conversão binário para decimal
function converterBinarioParaDecimal() {
  let binario = document.getElementById("binario").value;
decimal = 0;
potencia = 0;

for (let i = binario.length - 1; i >= 0; i--) {
  decimal += binario[i] * (2 ** potencia);
  potencia++;
}
document.getElementById("resultadoDecimal").innerHTML = decimal;
}


// Conversão binário para hexadecimal
function converterBinarioParaHexadecimal() {
  let binario = document.getElementById("binarioHexa").value;

decimal = 0;
potencia = 0;

for (let i = binario.length - 1; i >= 0; i--) {
  decimal += binario[i] * (2 ** potencia);
  potencia++;
}

hexadecimal = "";
while (decimal > 0) {
  resto = decimal % 16;
  if (resto < 10) {
    hexadecimal = resto + hexadecimal;
  } else {
    switch(resto) {
      case 10:
        hexadecimal = "A" + hexadecimal;
        break;
      case 11:
        hexadecimal = "B" + hexadecimal;
        break;
      case 12:
        hexadecimal = "C" + hexadecimal;
        break;
      case 13:
        hexadecimal = "D" + hexadecimal;
        break;
      case 14:
        hexadecimal = "E" + hexadecimal;
        break;
      case 15:
        hexadecimal = "F" + hexadecimal;
        break;
    }
  }
  decimal = (decimal - resto) / 16;
}
document.getElementById("resultadoHexadecimal").innerHTML = hexadecimal;

}



function converterHexadecimalParaBinario() {
  let hexadecimal = document.getElementById("hexadecimal").value;
  let binario = "";
  
  for (let i = 0; i < hexadecimal.length; i++) {
    switch(hexadecimal[i]) {
      case "0":
        binario += "0000";
        break;
      case "1":
        binario += "0001";
        break;
      case "2":
        binario += "0010";
        break;
      case "3":
        binario += "0011";
        break;
      case "4":
        binario += "0100";
        break;
      case "5":
        binario += "0101";
        break;
      case "6":
        binario += "0110";
        break;
      case "7":
        binario += "0111";
        break;
      case "8":
        binario += "1000";
        break;
      case "9":
        binario += "1001";
        break;
      case "A":
        binario += "1010";
        break;
      case "B":
        binario += "1011";
        break;
      case "C":
        binario += "1100";
        break;
      case "D":
        binario += "1101";
        break;
      case "E":
        binario += "1110";
        break;
      case "F":
        binario += "1111";
        break;
    }
  }
  
  document.getElementById("resultadoHexadecimalBinario").innerHTML = binario;
}

function converterHexadecimalParaDecimal() {
  let hexadecimal = document.getElementById("hexadecimalDeci").value;
  let decimal = 0;
  let potencia = 0;

  for (let i = hexadecimal.length - 1; i >= 0; i--) {
    let valor = 0;
    switch(hexadecimal[i]) {
      case "0":
        valor = 0;
        break;
      case "1":
        valor = 1;
        break;
      case "2":
        valor = 2;
        break;
      case "3":
        valor = 3;
        break;
      case "4":
        valor = 4;
        break;
      case "5":
        valor = 5;
        break;
      case "6":
        valor = 6;
        break;
      case "7":
        valor = 7;
        break;
      case "8":
        valor = 8;
        break;
      case "9":
        valor = 9;
        break;
      case "A":
        valor = 10;
        break;
      case "B":
        valor = 11;
        break;
      case "C":
        valor = 12;
        break;
      case "D":
        valor = 13;
        break;
      case "E":
        valor = 14;
        break;
      case "F":
        valor = 15;
        break;
    }
    decimal += valor * (16 ** potencia);
    potencia++;
  }

  document.getElementById("resultadoHexadecimalDecimal").innerHTML = decimal;
}



const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menu.classList.add('open');
    menuOpen = true;
  } else {
    menu.classList.remove('open');
    menuOpen = false;
  }
});

