// Il software deve richiedere per 5 volte all'utente di inserire un numero.
 // Il programma stampa la somma di tutti i numeri inseriti.
//
// var somma=0;
//
// for (var i=0; i < 5; i++){
// numeroUtente = parseInt(prompt("numero da inserire" + (i + 1)));
// console.log("il" + (i+1) + " numero inserito è:" + numeroUtente)
// somma= somma + numeroUtente;
//
//  }
// console.log("la somma dei 5 numeri inseriti è:" + somma);

// correzione
var numeroUtente;
var tuttiNumeri = [];
for (var i = 0; i < 5; i++) {
numeroUtente = parseInt(prompt("inserisci un numero"));
    // console.log(numeroUtente);
// inserisco il numero digitato dall'utente nell erray
tuttiNumeri.push(numeroUtente);

}
// alla fine del ciclo ho un erray completo con tutti i numeri inseriti dall'utente
console.log(tuttiNumeri);
// leggo tutti i numeri dell'erray
// leggo tutti i numeri uno alla volta
var somma=0;
for (var i = 0; i < tuttiNumeri.length; i++) {
    console.log(tuttiNumeri[i]);
var numeroCorrente = tuttiNumeri[i];
console.log ("numero in posizione i = " + i +" : " + numeroCorrente);
// accumulo la somma di quello che ho letto finora
somma= numeroCorrente + somma;
}
console.log(somma);
