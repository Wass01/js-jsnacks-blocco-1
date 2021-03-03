// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

var n = parseInt(prompt("Inserisci un numero:"));

for (var i = 0; i <= n + 1; i++) {
  n = --n;
  var risultato = n * n * n;
  console.log(risultato);
}
