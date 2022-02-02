//Model
let userScore = 0;
const userScore_span = document.getElementById('user-score');
let computerScore = 0;
const computerScore_span = document.getElementById('computer-score');
const userImage =  document.getElementById('left-image');
const computerImage = document.getElementById('right-image');
let textResult = document.getElementById('text-result');
const play_button = document.getElementById('start');
const playAgain_button = document.getElementById('play-again');
const choice_div = document.getElementById('choices');

const choices = ['rock', 'paper', 'scissors'];
let currentChoice = "";

// View

// when button is clicked, the user picture changes to the chosen images
function choice(choice){

    switch(choice){
        case 'rock':
            currentChoice = choices[0];
            userImage.src = 'img/rock.jpg';
            textResult.innerHTML = "You chose Rock" ;
            break;
        case 'paper':
            currentChoice = choices[1];
            userImage.src = 'img/paper.jpg';
            textResult.innerHTML = "You chose Paper" ;
            break;
        case 'scissors':
            currentChoice = choices[2];
            userImage.src = 'img/scissors.jpg';
            textResult.innerHTML = "You chose Scissors" ;
            break;    
        }
}

//changes the picture for the computer
function computerRandomChoice(){
    let randomNumber = Math.round(Math.random() * 2);
    computerImage.src = `img/${choices[randomNumber]}.jpg`
    return choices[randomNumber];
}

//makes the images empty when play again
function resetImage(){
    userImage.src = '';
    computerImage.src = '';
}

//display the new button
function displayNewButton(currentButton, newButton){

    // stores the CSS 'display' property of current button
    let displayValue = window.getComputedStyle(currentButton).getPropertyValue('display');

    // if the value from the CSS 'display' property is the same, turn off the current Button and display the new button
    if(displayValue == 'inline-block'){
        currentButton.style.display = 'none';
        newButton.style.display = 'inline-block';
    }
}



// Control

function play(){
    computerRandomChoice(); //generate a random image
    const computerChoice = computerRandomChoice();

    

    //draw state
    if (computerChoice == currentChoice){
        textResult.innerHTML = `It's a draw`
    }
    
    // win state
    else{
        winState(currentChoice, computerChoice);
    }

    // after the win state, disables the choice buttons
    choice_div.style.visibility = 'hidden';

    // displays "Play again" button
    displayNewButton(play_button, playAgain_button);
}

//resets the webpage
function playAgain(){
    textResult.innerHTML = 'Choose and click play';
    
    //displays the "Play" button
    displayNewButton(playAgain_button, play_button);

    // the choice buttons reappear 
    choice_div.style.visibility = 'visible';

    resetImage();
}


function winState(userChoice, computerChoice){

    if(userChoice == "rock"){
        if(computerChoice == "paper"){
            computerScore ++;
            textResult.innerHTML = `Computer Wins!`
            computerScore_span.innerHTML = computerScore; 
            
        }
        else{
            userScore ++;
            textResult.innerHTML = `User Wins!`
            userScore_span.innerHTML = userScore;  // computer picks scissors
        }
    
    }

    else if(userChoice == "paper"){
        if(computerChoice == "scissors"){
            computerScore ++;
            textResult.innerHTML = `Computer Wins!`
            computerScore_span.innerHTML = computerScore;
        }
        else{
            userScore ++;
            textResult.innerHTML = `User Wins!`
            userScore_span.innerHTML = userScore; // computer picks rock
        }

    }

    else if(userChoice == "scissors"){
        if(computerChoice == "rock"){
            computerScore ++;
            textResult.innerHTML = `Computer Wins!`
            computerScore_span.innerHTML = computerScore;
        }
        else{
            userScore ++;
            textResult.innerHTML = `User Wins!`
            userScore_span.innerHTML = userScore; // computer picks paper
        }

    }

    

}    

   

