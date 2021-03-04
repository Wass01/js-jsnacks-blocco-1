// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var scatolaVuota = [];

for (var i = 0; i < 6; i++) {
  var numero = prompt("Inserisci un numero:");
  if (numero%2) {
    scatolaVuota.push(numero);
  }
}

console.log(scatolaVuota);
