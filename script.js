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
const difficult = document.getElementById('framework');

let control = false;

// Evento al momento del click sul bottone "inizia"
buttonStart.addEventListener('click', function(){
    
    // Svuotamento della griglia
    document.getElementById('grid-container').innerHTML = '';
    let control = false;

    // Ciclo per l'inserimento dei quadrati nella griglia con relativo numero crescente
    if(difficult.value == 0){

    // Creazione di 16 numeri random in cui si trovano le bombe
    let randomList = generateUniqueRandomNumber(1, 100);
    console.log('Le bombe si trovano nelle caselle: ' + randomList);

        for (let i = 1; i <= 100; i++) {
            const newSquare = createNewSquare();

            // ** Comando per far apparire i numeri in ordine crescente nella cella
            // newSquare.innerHTML = i;

            // aggiunta classi al nuovo quadrato ad ogni click
            newSquare.addEventListener('click', function(){
                if(control === false){
                    newSquare.classList.toggle('active');
                    if (randomList.includes(i)){
                        newSquare.classList.remove('active');
                        newSquare.classList.add('bomb');
                        control = true;
                        alert('BOOM! HAI PERSO! - Punti: ' + document.querySelectorAll(".active").length);
                    }
                }
            })
            
            gridContainer.append(newSquare);    
        }
    } else if (difficult.value == 1){

    // Creazione di 16 numeri random in cui si trovano le bombe
    let randomList = generateUniqueRandomNumber(1, 81);
    console.log('Le bombe si trovano nelle caselle: ' + randomList);

        for (let i = 1; i <= 81; i++) {
            const newSquare = createNewSquare();
            newSquare.classList.add('medium');
            
            // newSquare.innerHTML = i;

            // aggiunta classi al nuovo quadrato ad ogni click
            newSquare.addEventListener('click', function(){
                if(control === false){
                    newSquare.classList.toggle('active');
                    if (randomList.includes(i)){
                        newSquare.classList.remove('active');
                        newSquare.classList.add('bomb');
                        control = true;
                        alert('BOOM! HAI PERSO! - Punti: ' + document.querySelectorAll(".active").length);
                    }
                }
            })
            
            gridContainer.append(newSquare); 
        }
    } else if (difficult.value == 2){

    // Creazione di 16 numeri random in cui si trovano le bombe
    let randomList = generateUniqueRandomNumber(1, 49);
    console.log('Le bombe si trovano nelle caselle: ' + randomList);

        for (let i = 1; i <= 49; i++) {
            const newSquare = createNewSquare();
            newSquare.classList.add('hard');
            
            // newSquare.innerHTML = i;

            // aggiunta classi al nuovo quadrato ad ogni click
            newSquare.addEventListener('click', function(){
                if(control === false){
                    newSquare.classList.toggle('active');
                    if (randomList.includes(i)){
                        newSquare.classList.remove('active');
                        newSquare.classList.add('bomb');
                        control = true;
                        alert('BOOM! HAI PERSO! - Punti: ' + document.querySelectorAll(".active").length);
                    }
                }
            })

            gridContainer.append(newSquare); 
        }            
    }
});


// funzione: prende blacklist, prende il valore minimo e il valore massimo inclusi: restituisce 16 numeri randomici
function generateUniqueRandomNumber(min, max){
    let blackList = [];
    while ( blackList.length < 16 ){
        let randomNumber = Math.round(Math.random() * (max - min) + min);
        if ( blackList.includes(randomNumber) === false ){
        blackList.push(randomNumber);
        }
    }
    return blackList;
}




