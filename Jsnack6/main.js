// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

var n = parseInt(prompt("Inserisci un numero:"));

for (var i = 0; i <= n ; i++) {
  var risultato = Math.pow(i, 3);
  console.log(risultato);
}
