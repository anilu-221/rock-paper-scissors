function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *  3);
    if(randomNumber == 0) {
        return 'Rock';
    } else if(randomNumber == 1) {
        return 'Paper';
    } else{
        return 'Scissors';
    }
}

function playOneRound(userChoice, computerChoice) {
    userChoice = userChoice.toUpperCase();
    computerChoice = computerChoice .toUpperCase();

    if(userChoice === computerChoice){ //Tie
        return 'Tie';
    } else if(userChoice === 'ROCK' && computerChoice === 'PAPER'){ //User chooses ROCK
        return 'Computer';
    } else if(userChoice === 'ROCK' && computerChoice === 'SCISSORS'){
        return 'User';
    } else if(userChoice === 'PAPER' && computerChoice === 'SCISSORS'){ //User chooses Paper
        return 'Computer';
    } else if(userChoice === 'PAPER' && computerChoice === 'ROCK'){
        return 'User';
    } else if(userChoice === 'SCISSORS' && computerChoice === 'ROCK'){ //User chooses Scissors
        return 'Computer';
    } else if(userChoice === 'SCISSORS' && computerChoice === 'PAPER'){
        return 'User';
    }
}



function playRockPaperScissors(numberOfGames) {
    let userScore = 0;
    let computerScore = 0;

    while (userScore != numberOfGames && computerScore != numberOfGames){
        let userChoice = prompt("Choose your weapon:");
        let winner = playOneRound(userChoice, getComputerChoice());
        if(winner === 'User'){
            userScore++;
        } else if(winner === 'Computer'){
            computerScore++;
        }
        console.log(winner);
        console.log('User: ' + userScore);
        console.log('computer: ' + computerScore);
    }

    if(userScore === numberOfGames){
        console.log('User WINS everything');
    } 

    if(computerScore === numberOfGames){
        console.log('Computer WINS everything');
    } 
}

playRockPaperScissors(1);