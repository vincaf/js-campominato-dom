// Creo la variabile di collegamento al div nell'html che fa da contenitore per i quadrati
const gridContainer = document.getElementById('grid-container');

// Funzione per la creazione di nuovi quadrati
function createNewSquare(){
    const currentSquare = document.createElement('div');
    currentSquare.classList.add('square');
    return currentSquare;
}

// Creo la variabile di collegamento al bottone nell'html
let buttonStart = document.getElementById('button-start');

// Variabile per recuperare il value del select della difficoltà nell'html
const difficult = document.getElementById('framework')

// Evento al momento del click sul bottone "inizia"
buttonStart.addEventListener('click', function(){
    
    // Svuotamento della griglia
    document.getElementById('grid-container').innerHTML = '';

    // Ciclo per l'inserimento dei quadrati nella griglia con relativo numero crescente
    if(difficult.value == 0){
        for (let i = 1; i <= 100; i++) {
            const newSquare = createNewSquare();

            // ** Comando per far apparire i numeri in ordine crescente nella cella
            newSquare.innerHTML = i;

            // aggiunta classi al nuovo quadrato ad ogni click
            newSquare.addEventListener('click', function(){
                newSquare.classList.toggle('active');
            })

            gridContainer.append(newSquare);    
        }
    } else if (difficult.value == 1){
        for (let i = 1; i <= 81; i++) {
            const newSquare = createNewSquare();
            newSquare.classList.add('medium');
            newSquare.innerHTML = i;
            // aggiunta classi al nuovo quadrato ad ogni click
            newSquare.addEventListener('click', function(){
                newSquare.classList.toggle('active');
            })

            gridContainer.append(newSquare); 
        }
    } else if (difficult.value == 2){
        for (let i = 1; i <= 49; i++) {
            const newSquare = createNewSquare();
            newSquare.classList.add('hard');
            newSquare.innerHTML = i;
            // aggiunta classi al nuovo quadrato ad ogni click
            newSquare.addEventListener('click', function(){
                newSquare.classList.toggle('active');
            })

            gridContainer.append(newSquare); 
        }            
    }
});


let currentBlackList = [];
let randomList = generateUniqueRandomNumber(currentBlackList, 1, 100);
console.log(randomList);

// funzione: prende blacklist, prende il valore minimo, il valore massimo inclusi e restituisce numero randomico
function generateUniqueRandomNumber(blackList, min, max){
        for (let i = 0; i < 16; i++) {
        let randomNumber;

        let isNumValid = false;
        
        while ( isNumValid === false){
            randomNumber = Math.floor(Math.random() * ((max + 1) - min) + min);
            if(blackList.includes(randomNumber) === false){
                isNumValid = true;
            }
        }

        blackList.push(randomNumber);
        }
}




