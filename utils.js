// utils.js
const { mostrarTextoConcatenado } = require('./config');

function procesarTexto(cadena1, cadena2) {
  if (mostrarTextoConcatenado) {
    return cadena1 + cadena2;
  } else {
    return (cadena1 + cadena2).length;
  }
}

module.exports = { procesarTexto };
