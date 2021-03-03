// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta,
// poi la parola più lunga.
var parola1 = prompt("Inserisci una parola:").trim();
var parola2 = prompt("Inserisci un'altra parola:").trim();

if (parola1.length < parola2.length){
  console.log(parola1, parola2);
} else {
  console.log(parola2, parola1);
}
