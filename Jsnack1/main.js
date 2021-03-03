// L’utente inserisce due numeri in successione,
// con due prompt.
// Il software stampa il maggiore

var numero1 = parseInt (prompt("Inserisci un numero:"));
var numero2 = parseInt (prompt("Inserisci un secondo numero:"));

console.log(numero1, numero2);

if (numero1 > numero2) {
  console.log(numero1);
} else {
  console.log(numero2);
}
