const sceltaUtente = prompt("Pari o dispari?").toLowerCase();
const numeroUtente = Number(prompt("Scrivi un nome da 1 a 5"));
const numeroPc = Math.floor(Math.random() * 5) + 1;
const somma = numeroUtente + numeroPc;
function gameLogs() {
    console.log(`Hai scelto: ${sceltaUtente}`);
    console.log(`Hai scelto: ${numeroUtente}`);
    console.log(`Il computer ha scelto: ${numeroPc}`);
    console.log(`La somma dei numeri è ${somma}, quindi ${risultato}`);
}

function pariOrDispari(numero) {
    let risultato;

    if(numero % 2 == 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }

     return risultato;
}

let risultato = pariOrDispari(somma);


if (sceltaUtente !== "pari" && sceltaUtente !== "dispari") {
    console.log("Controlla di aver inserito correttamente i dati (pari o dispari)");
    
} else if ( numeroUtente>5 || numeroUtente==0) {
    console.log("Controlla di aver inserito correttamente i dati (numero compreso tra 1 e 5)");

} else if (risultato == "pari" && sceltaUtente == "pari") {
    gameLogs();
    console.log("hai vinto");
} else if (risultato == "dispari" && sceltaUtente == "dispari"){
    gameLogs();
    console.log("hai vinto");
}  else {
    gameLogs();
    console.log("hai perso");
}

