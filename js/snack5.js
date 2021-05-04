// Snack #5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.

// 1. creo la funzione per capire quali numeri sono dispari
function isOdd(num) {
    if (num % 2 == 1) {
        return num;
    }
}

// 2. creo un array vuoto
var arrayVuoto = [];

// 3. creo un ciclo for per chiedere all'utente 6 numeri ed attraverso la funzione isOdd() capire quali tra i numeri inseriti siano dispari, per poi pusharli nell'array vuoto creato in precedenza
for (i = 0; i < 6; i++) {
    var numero = parseInt(prompt("Inserisci il " + (i + 1) + "°" + " numero"));
    console.log(numero);

    if (isOdd(numero)) {
        arrayVuoto.push(numero);
    }
}
console.log(arrayVuoto);

