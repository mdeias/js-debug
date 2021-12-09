/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    console.log('costante età' , myAge);
    let message = '';
    

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
        return message;
    } else {
        message = 'Hai più di 18 anni!';
        return message;
    }
}
checkAge();

// 1- Verifica che l'utente sia maggiorenne
// 2- const anziché let nella variabile message
// 3- return una volta verificate le condizioni

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// 1- conta le stringhe presenti nell'array
// 2- 'lenght' anziché 'length'
// 3- No

// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero') *1;
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// 1- Somma tra il numero 12 e il numero inserito dall'utente
// 2- moltiplicare +1 il prompt, in caso contrario viene letto come stringa
// 3- no

// ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');
    

//     let grantAccess = false;
    

//     if (addresses.includes(userEmail)) {
//         grantAccess = true;
        
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// 1- Verifica che l'email dell'utente sia presente nell'array di stringhe
// 2- 'false' non dev'essere una stringa
// 3- no

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
            grantAccess = true;            
            
        }
        
      }

        if (grantAccess) {
            console.log('Accesso consentito!');
        }else {
            console.log('Accesso negato!');
        }
    }
}    
checkAccessImproved();

// 1- verifica che la mail sia presente e controlla che abbia più di 5 lettere
// 2- True non è una stringa
// 3- No





























