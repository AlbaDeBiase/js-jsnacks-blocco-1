// Il software deve richiedere per 5 volte all'utente di inserire un numero.
 // Il programma stampa la somma di tutti i numeri inseriti.

var somma=0;

for (var i=0; i < 5; i++){
numeroUtente = parseInt(prompt("numero da inserire" + (i + 1)));
console.log("il" + (i+1) + " numero inserito è:" + numeroUtente)
somma= somma + numeroUtente;

 }
console.log("la somma dei 5 numeri inseriti è:" + somma);
