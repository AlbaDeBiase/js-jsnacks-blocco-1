/* Crea un array vuoto.
chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array. */

// crea un erray vuoto
var numeri = [];
console.log(numeri)
// chiedi per sei volte all'utente di inserire un numero
for (var i=0; i < 6; i++){
numeroUtente = parseInt(prompt("numero da inserire" + (i + 1)));
console.log("il" + (i+1) + " numero inserito è:" + numeroUtente)

// verifico che sia dispari
 var resto = numeroUtente % 2; // es: 4 % 2 = 4 modulo 2 = 4/2 e prendi il resto! = 0
   if(resto != 0) {
       console.log(resto);
   }
}
// loinserisco nell'erray
numeri.push(resto)
