// faccio inserire una parola
const parolaInserita = prompt("Inserisci una parola");


// scompongo lettera per lettera la parola
let arrayOriginale = [];
for (let i = 0; i < parolaInserita.length; i++) {
    letter = parolaInserita[i];
    arrayOriginale.push(letter);
}
const parolaOriginale = arrayOriginale.toString();

// inverto l'ordine delle lettere

const lettereInvertite = arrayOriginale.toReversed();
let parolaInvertita = lettereInvertite.toString();


// controllo se le due parole sono uguali

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
let risultato = confrontoParole(parolaOriginale, parolaInvertita);
if (risultato == "palindroma") {
    document.getElementById("result").innerHTML = "La tua parola è un palindromo";    
} else {
    document.getElementById("result").innerHTML = "La tua parola non è un palindromo";
    
}