// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var invitati = ["Wassim", "Davide", "Marco", "Alessandro", "Luca", "Filippo"];
var nome = prompt("Come ti chiami?");
var condizione = false;

for (var i = 0; i < invitati.length; i++) {
  if(invitati[i] === nome){
    condizione = true;
  }
}

if (condizione) {
  console.log("Il tuo nome è tra gli invitati");
} else {
  console.log("Non sei stato invitato");
}
