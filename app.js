//Variables
const weapons = document.querySelectorAll('button');
let userScore = 0;
let computerScore = 0;


//Event Listeners
weapons.forEach(weapon => weapon.addEventListener('click', playRound));

//Functions
function playRound(){
    let userChoice = (this.getAttribute('data-weapon')).toUpperCase();
    let machineChoice = 'ROCK';
    let userScoreHTML = document.querySelector('#user-score');
    let computerScoreHTML = document.querySelector('#computer-score');

    if(userChoice === machineChoice){ 
        return 'Tie';
    } else if(userChoice === 'ROCK' && machineChoice === 'PAPER'){ 
        computerScore += 1;
        playLoseSound();
    } else if(userChoice === 'ROCK' && machineChoice === 'SCISSORS'){
        userScore += 1;
        playWinSound();
    } else if(userChoice === 'PAPER' && machineChoice === 'SCISSORS'){ 
        computerScore += 1;
        playLoseSound();
    } else if(userChoice === 'PAPER' && machineChoice === 'ROCK'){
        userScore += 1;
        playWinSound();
    } else if(userChoice === 'SCISSORS' && machineChoice === 'ROCK'){ 
        computerScore += 1;
        playLoseSound();
    } else if(userChoice === 'SCISSORS' && machineChoice === 'PAPER'){
        userScore += 1;
        playWinSound();
    }

    userScoreHTML.textContent = userScore;
    computerScoreHTML.textContent = computerScore;
}

function playWinSound(){
    document.querySelector('audio[data-sound="win"]').currentTime = 0;
    document.querySelector('audio[data-sound="win"]').play();
}

function playLoseSound(){
    document.querySelector('audio[data-sound="lose"]').currentTime = 0;
    document.querySelector('audio[data-sound="lose"]').play(); 
}