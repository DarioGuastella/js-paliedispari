// faccio inserire una parola
const parolaInserita = prompt("Inserisci una parola");

// inverto l'ordine delle lettere

let parolaInvertita = "";
for (let i = parolaInserita.length - 1; i >= 0; i--){
    parolaInvertita += parolaInserita[i];
}

// Creo funzione per controllare se le due parole sono uguali

function confrontoParole(parola1, parola2) {
    let risultato;
    
    if(parola1 == parola2) {
        risultato = "palindroma";
    } else {
        risultato = "non palindroma";
    }
    
    return risultato;
}
// do il risultato del controllo
let risultato = confrontoParole(parolaInserita, parolaInvertita);
if (risultato == "palindroma") {
    document.getElementById("result").innerHTML = "La tua parola è un palindromo";    
} else {
    document.getElementById("result").innerHTML = "La tua parola non è un palindromo";
    
}