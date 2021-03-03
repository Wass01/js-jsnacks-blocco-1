// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

var numero = parseInt(prompt("Inserisci un numero di 4 cifre:"));
var n = [];


if(numero <= 999 || numero >= 10000){
  console.log("Numero non è da 4 cifre");
} else {
  n.push(numero);
  var somma = n[0] + n[1] + n[2] + n[3];
  console.log(somma);
}
