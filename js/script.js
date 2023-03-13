// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
// Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Bonus:
// Gestire l'inserimento dei numeri tramite 5 input diversi.



// funzione per numeri casuali (numero casuale)
// funzione per numero della lunghezza dell'array 
// -numero casuale creato un tot di volte deciso dalla funzione e pushato in un array
// variabile di output per l'array finito di numeri casuali
// setTimeot di 10sec
// -creare una funzione che faccia sparire i numeri dell'array random creato
// -tramite display: none / tramite azzeramento del contenuto della memoria dell'array
// creazione 5 prompt---
// controllo dei numeri
// -tutti i numeri inseriti tramite input dell'user vengono inseriti in un array
// -tramite la comparazione di questo array e di quello di numeri random capire quali sono giusti
// {?}dovendo ciclare l'array per il controllo, usare for 
// {?}for( let i = 0; i < randomArray.length; i++)
// -?SE !randomArray.includes(userArray(i)) / (randomArray == userArray)
//   -continua /stampa in pagina
// :?ALTRIMENTI 
//   -stampare in pagina (i)
// risultato in output con variabile

//---BONUS---
// creazione 5 input e variabili
// display block 5 input


// trovare un modo per svuotare l'array di input quando ricomincia il gioco

// variabile di output
let outputRandomEl = document.getElementById("random-numbers");

//variabile button start
let btnStartEl = document.getElementById("start");

//variabile button check
let btnCheckEl = document.getElementById("check");

// creazione 5 input e variabili
// let firstEl = document.getElementById("first");
// let secondEl = document.getElementById("second");
// let thirdEl = document.getElementById("third");
// let fourthEl = document.getElementById("fourth");
// let fifthEl = document.getElementById("fifth");

//variabile array numeri random
let secretNumbers;


//variabile output risultato
let resultEl = document.getElementById("result");

//variabile contenitore input
let inputContainerEl = document.getElementById("input");



btnStartEl.addEventListener('click', function() {
    
    startGame();
    setTimeout(disappear, 3000);

    secretNumbers = totalNumbers(5);
    outputRandomEl.innerText = " ";
    
    // stampa in pagina l'array random
    outputRandomEl.innerText = secretNumbers;
    

})

btnCheckEl.addEventListener('click', function(){


    //array degli input
    let userInputs = [
        parseInt(document.getElementById("first").value), 
        parseInt(document.getElementById("second").value),
        parseInt(document.getElementById("third").value),
        parseInt(document.getElementById("fourth").value),
        parseInt(document.getElementById("fifth").value)
    ];
    
    let sameNumbers = [];

    for( let i = 0 ; i < secretNumbers.length; i++){

        
        if(userInputs[i] == secretNumbers[i]){
            
            
            sameNumbers.push(secretNumbers[i]);

        }

    }
    resultEl.innerHTML = `Hai indovinato ${sameNumbers.length} numeri: ${sameNumbers}`

    //acquisizione dei numeri negli input
    console.log(userInputs);

    console.log(secretNumbers);

})





//--------------------------------
//FUNZIONI
//--------------------------------

// funzione per numeri casuali
function randomNumbersBetween(min, max){

    let random = Math.floor(Math.random() * (max - min) + min);

    return random;
}



// funzione numero totale dei numeri nell'array
function totalNumbers(quantity){

    let numbersList = [];

    for(let i = 0; i < quantity; i++){

        numbersList.push(randomNumbersBetween(1,10));

    }

    return numbersList;
}


//funzione per far sparire i numeri e apparire gli input
function disappear(){
    outputRandomEl.innerText = "";
    inputContainerEl.style.display = "block";
}

function startGame(){

    resultEl.innerText = "";
    
    if(inputContainerEl.style.display != "none"){
        
        inputContainerEl.style.display = "none";
    }

}