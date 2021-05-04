// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.


// 1. creo una funzione per generare un numero random che mi servirà per scegliere una posizione random nell'array dei nomi e dei cognomi.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 2. creo la funzione per generare un nome completo partendo da due liste di nomi e cognomi. All'interno della variabile locale dico: il nome dovrà essere scelto nell'array dei nomi attraverso la funzione getRandomInt() che percorrerà dalla posizione 0 fino a fine array e sceglierà un nome. Do le stesse istruzioni per scegliere il cognome ed infine "return name" cioè il nome completo.
function randomNomiCognomi(nom, cog) {

    var name = nom[getRandomInt(0, nom.length)] + ' ' + cog[getRandomInt(0, cog.length)];
    return name;
}

// 3. creo la lista dei nomi
var nomi = ["Alberto", "Gina", "Giuseppe", "Sabrina", "Paola", "Mattia", "Pippo", "Tarquinio", "Mefistofele", "Carlo", "Settimio", "Bruno", "Lillo", "Teresa", "Paola", "Francesca"];

// 4. creo la lista dei cognomi
var cognomi = ["Bianchi", "Rossi", "Neri", "Verdi", "Laureti", "Rossetti", "Bezos", "Gaglianoni", "Pizzoccheri", "Rincalzi", "Proteina", "Attributi"];

// 5. creo la lista degli invitati da stampare in pagina con un ciclo for
for (i = 0; i < 10; i++) {
    var nomeCompleto = randomNomiCognomi(nomi, cognomi);
    document.getElementById("invitati").innerHTML += "<li>" + nomeCompleto + "</li>";
}

