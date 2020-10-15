 // L’utente inserisce due parole in successione, con due prompt.


var parola1 = prompt("parola1");
// console.log(parola1);

var parola2 = prompt("parola2");
// console.log(parola2);

var lunghezza1 = parola1.length;
var lunghezza2 = parola2.length;
// console.log("lunghezza1 = " + lunghezza1)
// console.log("lunghezza2 = " + lunghezza2)

// Il software stampa prima la parola più corta, poi la parola più lunga.

if (lunghezza1 > lunghezza2) {
console.log(parola1);

}

else if (lunghezza2 > lunghezza1) {
console.log(parola2);

}
else {
console.log(parola1);
console.log(parola2);
}
