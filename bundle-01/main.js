/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 1 - Esegue un ciclo for che stamperà in console i per 5 volte
// 2 - Si, '>' 
// 3 - No 


// ESERCIZIO 2
function addIfEven(num, risultato) {
    if (num % 2 === 0) {
        num = num + 5;
    }
    return num;
}


// 1 - funzione che verifica se un numero è divisibile per 2, in caso la risposta fosse positiva lo somma col numero 5, restituendo il numero iniziale +5 
// 2 - Si con un solo '=' non si può verificare la condizione
// 3 - si, il return nella condizione 


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// 1 - funzione che che mostrerà in console per 5 volte l'indice
// 2 - Si, ',' anziché ';'
// 3 - No 

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    
    let evenNumbers = [];
    

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
        return evenNumbers;
    }
}

displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 1 - funzione che che stamperà solamente i numeri pari di un array di numeri
// 2 - Si, '=', ';', 'lrngth -1', creazione costante che contenga il numero daa pushare
// 3 - Si, il push non dev'essere dell'indice ma del numero divisibile