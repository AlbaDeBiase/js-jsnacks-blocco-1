/* Crea un array vuoto.
chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array. */

// crea un erray vuoto
var numeri = [];
console.log(numeri)
// chiedi per sei volte all'utente di inserire un numero
for (var i=0; i < 6; i++){
var numeroUtente = parseInt(prompt("numero da inserire"));
console.log("il numero inserito è = " + numeroUtente);

// verifico che sia dispari
if (!isNaN(numeroUtente)) {

 var resto = numeroUtente % 2;
   if(resto != 0) {
    numeri.push(numeroUtente);
   } else {

   }

} else  {
alert("non hai inserito un numero valido");
}
}
console.log(numeri);
// loinserisco nell'erray
