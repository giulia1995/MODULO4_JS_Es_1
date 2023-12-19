//ES.1 Crea una funzione che controlli due numeri interi. Ritorna "true" se uno dei due è 50 o se la somma dei due è 50.

function controllaNumero(numero1, numero2) {
    // Verifica se uno dei due numeri è uguale a 50 o se la loro somma è 50
    return numero1 === 50 || numero2 === 50 || numero1 + numero2 === 50;
}

//console.log(controllaNumero(25, 50)); // Restituirà true perché uno dei numeri è 50
//console.log(controllaNumero(20, 30)); // Restituirà true perché la somma è 50
//console.log(controllaNumero(10, 15)); // Restituirà false perché nessuna delle condizioni è soddisfatta

//Es.2 Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

function rimuoviCaratterePosizione(stringa, posizione) {
    // Verifica se la posizione è valida
    if (posizione < 0 || posizione >= stringa.length) {
        console.log("Posizione non valida.");
        return stringa; // Restituisce la stringa originale se la posizione non è valida
    }

    // Converte la stringa in un array di caratteri
    let arrayCaratteri = stringa.split('');

    // Rimuove il carattere alla posizione specificata
    arrayCaratteri.splice(posizione, 1);

    // Unisce l'array di caratteri in una stringa e la restituisce
    return arrayCaratteri.join('');
}

// Esempio di utilizzo:
let stringaOriginale = "Ciao!";
let nuovaStringa = rimuoviCaratterePosizione(stringaOriginale, 7);
console.log(nuovaStringa); // Stampa "Ciao!" rimuovendo il carattere alla posizione 7

//Es.3 crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna "true" se rispecchiano queste condizioni, altrimenti ritorna "false".

function controllaIntervalli(numero1, numero2) {
    // Verifica se entrambi i numeri sono compresi tra 40 e 60 o tra 70 e 100
    const condizione1 = (numero1 >= 40 && numero1 <= 60) && (numero2 >= 40 && numero2 <= 60);
    const condizione2 = (numero1 >= 70 && numero1 <= 100) && (numero2 >= 70 && numero2 <= 100);

    // Ritorna true se almeno una delle condizioni è soddisfatta, altrimenti ritorna false
    return condizione1 || condizione2;
}

// Esempi di utilizzo:
console.log(controllaIntervalli(45, 55)); // Restituirà true perché entrambi i numeri sono tra 40 e 60
console.log(controllaIntervalli(80, 90)); // Restituirà true perché entrambi i numeri sono tra 70 e 100
console.log(controllaIntervalli(30, 50)); // Restituirà false perché il primo numero non è compreso tra 40 e 60
console.log(controllaIntervalli(75, 110)); // Restituirà false perché il secondo numero non è compreso tra 70 e 100


//Es.4 Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti ritorni "false".

function verificaNomeCitta(nomeCitta) {
    // Converte il nome della città in minuscolo per rendere la verifica non case-sensitive
    const nomeCittaMinuscolo = nomeCitta.toLowerCase();

    // Verifica se il nome della città inizia con "los" o "new"
    if (nomeCittaMinuscolo.startsWith("los") || nomeCittaMinuscolo.startsWith("new")) {
        return nomeCitta;
    } else {
        return false;
    }
}

// Esempi di utilizzo:
console.log(verificaNomeCitta("Los Angeles")); // Restituirà "Los Angeles" perché inizia con "Los"
console.log(verificaNomeCitta("New York")); // Restituirà "New York" perché inizia con "New"
console.log(verificaNomeCitta("San Francisco")); // Restituirà false perché non inizia né con "Los" né con "New"


//Es.5 Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.

function sommaArray(array) {
    // Verifica se l'array è vuoto
    if (array.length === 0) {
        console.log("L'array è vuoto.");
        return 0; // Restituisce 0 se l'array è vuoto
    }

    // Utilizza il metodo reduce per calcolare la somma degli elementi dell'array
    const somma = array.reduce((acc, valore) => acc + valore, 0);

    return somma;
}

// Esempi di utilizzo:
const array1 = [1, 2, 3, 4, 5];
console.log(sommaArray(array1)); // Restituirà 15 (1 + 2 + 3 + 4 + 5)

const array2 = [10, -5, 8, 2];
console.log(sommaArray(array2)); // Restituirà 15 (10 + (-5) + 8 + 2)

const arrayVuoto = [];
console.log(sommaArray(arrayVuoto)); // Stampa "L'array è vuoto." e restituirà 0

//Es.6 Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna "true", altrimenti ritorna "false".


function verificaArraySenzaUnoTre(array) {
    // Utilizza il metodo includes per verificare la presenza dei numeri 1 o 3 nell'array
    const contieneUnoTre = array.includes(1) || array.includes(3);

    // Ritorna true se l'array NON contiene né 1 né 3, altrimenti ritorna false
    return !contieneUnoTre;
}

// Esempi di utilizzo:
const arrayUno = [2, 4, 6, 8];
console.log(verificaArraySenzaUnoTre(arrayUno)); // Restituirà true perché l'array non contiene né 1 né 3

const arrayDue = [1, 5, 7, 9];
console.log(verificaArraySenzaUnoTre(arrayDue)); // Restituirà false perché l'array contiene il numero 1

const arraytre = [2, 3, 6, 8];
console.log(verificaArraySenzaUnoTre(arrayTre)); // Restituirà false perché l'array contiene il numero 3

//Es. 7 Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° -> ritorna "acuto"
// Angolo ottuso: tra i 90° e i 180° gradi -> ritorna "ottuso"
// Angolo retto: 90° -> ritorna "retto"
// Angolo piatto: ritorna "piatto"

function tipoAngolo(gradi) {
    if (gradi < 0 || gradi > 360) {
        console.log("I gradi devono essere compresi tra 0 e 360.");
        return undefined;
    }

    if (gradi < 90) {
        return "acuto";
    } else if (gradi === 90) {
        return "retto";
    } else if (gradi < 180) {
        return "ottuso";
    } else if (gradi === 180) {
        return "piatto";
    } else {
        console.log("L'angolo è maggiore di 180 gradi.");
        return undefined;
    }
}

// Esempi di utilizzo:
console.log(tipoAngolo(45)); // Restituirà "acuto"
console.log(tipoAngolo(90)); // Restituirà "retto"
console.log(tipoAngolo(120)); // Restituirà "ottuso"
console.log(tipoAngolo(180)); // Restituirà "piatto"
console.log(tipoAngolo(270)); // Stampa "L'angolo è maggiore di 180 gradi." e restituirà undefined


// Es.8 Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve ritornare "FIAT"
function creaAcronimo(frase) {
    // Dividi la frase in singole parole
    const parole = frase.split(' ');

    // Crea l'acronimo utilizzando la prima lettera di ciascuna parola
    const acronimo = parole.map(parola => parola[0].toUpperCase()).join('');

    return acronimo;
}

// Esempio di utilizzo:
const fraseEsempio = "Fabbrica Italiana Automobili Torino";
console.log(creaAcronimo(fraseEsempio)); // Restituirà "FIAT"
