const sceltaUtente = prompt("Pari o dispari?").toLowerCase();
const numeroUtente = Number(prompt("Scrivi un nome da 1 a 5"));
const numeroPc = Math.floor(Math.random() * 5) + 1;
const somma = numeroUtente + numeroPc;
console.log(`Hai scelto: ${sceltaUtente}`)
console.log(`Hai scelto: ${numeroUtente}`)
console.log(`Il computer ha scelto: ${numeroPc}`)

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
console.log(`La somma dei numeri è ${somma}, quindi ${risultato}`);

if (risultato == "pari" && sceltaUtente == "pari") {
    console.log("hai vinto");
} else if (risultato == "dispari" && sceltaUtente == "dispari"){
    console.log("hai vinto");
} else {
    console.log("hai perso");
}

