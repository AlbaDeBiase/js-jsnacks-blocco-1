// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.


// inserisci numero 1
var numero1 = parseInt(prompt("inserire un numero"));
// console.log(numero1);
// inserisci un altro numero
var numero2 = parseInt(prompt("inserire un altro numero"));
// console.log(numero2);

// se 1 è maggiore di 2
if (numero1 > numero2) {
console.log(numero1);
}
else if (numero1 < numero2){
console.log(numero2)
}
else {
console.log("sono uguali")
}
