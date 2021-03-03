// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

var numero = prompt("Inserisci un numero di 4 cifre:");
var somma = 0;
var arrayNumero = Array.from(numero);

if(numero <= 999 || numero >= 10000){
  console.log("Il numero non è da 4 cifre");
} else {
  for (var i = 0; i < arrayNumero.length; i++) {
    somma += parseInt(arrayNumero[i]);
  }
}

console.log(somma);
