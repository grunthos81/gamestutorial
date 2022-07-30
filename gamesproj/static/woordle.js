
var CURRENT_SQUARE = 1;
var CURRENT_WORD = "";
var CHOSEN_WORD = "";
var WORD_LIST = [];
var GAMEOVER = false;
var ATTEMPTS = 0;

function addletter(letter){
    if (CURRENT_WORD.length < 5 && !(GAMEOVER))
    {
        CURRENT_WORD += letter;
        document.getElementById(CURRENT_SQUARE).innerHTML = letter;
        CURRENT_SQUARE += 1; 
    }
}

function del(){
    if (!(GAMEOVER)){
    if (CURRENT_WORD != ""){
        CURRENT_WORD = CURRENT_WORD.slice(0,-1);
        CURRENT_SQUARE -= 1; 
        document.getElementById(CURRENT_SQUARE).innerHTML = "";
    } 
}
}

function enter(){
    if (GAMEOVER){
        document.getElementById("message").innerHTML = "Game over! The correct word is " + CHOSEN_WORD;
    }
    
    else if (CURRENT_WORD.length < 5){
        document.getElementById("message").innerHTML = "Not enough letters!";
    }
    else if (!(WORD_LIST.includes(CURRENT_WORD)))
    {
        document.getElementById("message").innerHTML = "That word is not in our dictionary";
    }
    else if (CHOSEN_WORD == CURRENT_WORD){
        GAMEOVER = true;
        evaluate();
        document.getElementById("message").innerHTML = "You Win!";
    }
    else{
         evaluate();
         ATTEMPTS += 1
         if (ATTEMPTS > 5){
            document.getElementById("message").innerHTML = "Game over! The correct word is " + CHOSEN_WORD;
            GAMEOVER = true; 
         }
         else{
            document.getElementById("message").innerHTML = "Keep Going!";
            CURRENT_WORD = "";
         }

    }
}

function evaluate(){
        start_val = CURRENT_SQUARE - 5;
        for (let i = 0; i < 5; i++){
            const labelelem = document.getElementById(start_val + i);
            const buttonelem = document.getElementById(CURRENT_WORD.charAt(i));
           if (CURRENT_WORD.charAt(i) == CHOSEN_WORD.charAt(i)){
              labelelem.style.background = 'green';
              buttonelem.style.background = 'green';
                }
            else if (CHOSEN_WORD.includes(CURRENT_WORD.charAt(i))){
                labelelem.style.background = 'yellow';
                buttonelem.style.background = 'yellow';
            }
            else{
                labelelem.style.background = 'grey';
                buttonelem.style.background = 'grey';
            }
              }
        }

function setup(word, wordlist){
    CHOSEN_WORD = word; 
    
    WORD_LIST = wordlist; 
}







