// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
// Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Bonus:
// Gestire l'inserimento dei numeri tramite 5 input diversi.



// funzione per numeri casuali
// variabile di output
// setTimeot di 10sec
// creazione 5 prompt
// controllo dei numeri
// risultato in output con variabile

//---BONUS---
// creazione 5 input e variabili
// display block 5 input


// variabile di output
let outputRandomEl = document.getElementById("random-numbers");

//variabile button
let btnStartEl = document.getElementById("start");







btnStartEl.addEventListener('click', function() {

    setTimeout(disappear, 3000);
    
    outputRandomEl.innerText = " ";
    
    let numbersList = [];

    for(let i = 0; i < 5; i++){

        numbersList.push(randomNumbersBetween(1,10));

    }
    
    outputRandomEl.innerText = numbersList;

})







//--------------------------------
//FUNZIONI
//--------------------------------

// funzione per numeri casuali
function randomNumbersBetween(min, max){

    let random = Math.floor(Math.random() * (max - min) + min);

    return random;
}


function disappear(){
    outputRandomEl.innerText = " ";
}