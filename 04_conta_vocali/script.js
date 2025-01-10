/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function numeroVocali(parola){
    const vocali = ['a','e','i','o','u'];
    let vocaliAttuali = 0

    for(let i = 0; i < word.length; i++) {
        const lettera = parola[i];

        if(vocali.includes(lettera)){
            vocaliAttuali++;
        }
    }
    return vocaliAttuali;
}
// Invoca la funzione qui e stampa il risultato in console

const conteggio = numeroVocali(word);
console.log('Vocali',conteggio);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)