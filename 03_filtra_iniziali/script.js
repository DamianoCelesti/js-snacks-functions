/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtro(parole, lettera) {
    const paroleFiltrate = [];
    for (let i = 0; i < parole.length; i++) {
        const lettereFiltrate = parole[i];

        if (lettera === lettereFiltrate[0]) {
            paroleFiltrate.push(lettereFiltrate);
        }
    }
    return paroleFiltrate;
}
// Invoca la funzione qui e stampa il risultato in console
console.log(filtro(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]