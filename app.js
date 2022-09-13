//Variables
const weapons = document.querySelectorAll('button');
const playAgain = document.querySelectorAll('.play-again');

//Event Listeners
weapons.forEach(weapon => weapon.addEventListener('click', playRound));
playAgain.forEach(playAgain => playAgain.addEventListener('click', function(){
    location.reload();
}));

//Functions
function getMachineChoice(){
    let randomNumber = Math.floor(Math.random() *  3);
    if(randomNumber == 0) {
        return 'rock';
    } else if(randomNumber == 1) {
        return 'paper';
    } else{
        return 'scissors';
    }
}

function playRound(){
    let userChoice = (this.getAttribute('data-weapon')).toLowerCase();
    let machineChoice = getMachineChoice();
    displayChoices(userChoice, machineChoice);

    if(userChoice === machineChoice){ 
        playSound('tie');
        addHistoryRow(userChoice, machineChoice, 'tie');
    } else if(userChoice === 'rock' && machineChoice === 'paper'){ 
        addScores(0, 1);
        playSound('lose');
        addHistoryRow(userChoice, machineChoice, 'machine');
    } else if(userChoice === 'rock' && machineChoice === 'scissors'){
        addScores(1, 0);
        playSound('win');
        addHistoryRow(userChoice, machineChoice, 'user');
    } else if(userChoice === 'paper' && machineChoice === 'scissors'){ 
        addScores(0, 1);
        playSound('lose');
        addHistoryRow(userChoice, machineChoice, 'machine');
    } else if(userChoice === 'paper' && machineChoice === 'rock'){
        addScores(1, 0);
        playSound('win');
        addHistoryRow(userChoice, machineChoice, 'user');
    } else if(userChoice === 'scissors' && machineChoice === 'rock'){ 
        addScores(0, 1);
        playSound('lose');
        addHistoryRow(userChoice, machineChoice, 'machine');
    } else if(userChoice === 'scissors' && machineChoice === 'paper'){
        addScores(1, 0);
        playSound('win');
        addHistoryRow(userChoice, machineChoice, 'user');
    }


}

function addScores(user, machine){
    let userScoreHTML = document.querySelector('#user-score');
    let computerScoreHTML = document.querySelector('#computer-score');
    userScoreHTML.textContent = parseInt(userScoreHTML.textContent) + user;
    computerScoreHTML.textContent = parseInt(computerScoreHTML.textContent ) + machine;

    if(userScoreHTML.textContent == 3){
        console.log('user wins');
        playSound('win-battle');
        document.querySelector('#win-container').classList.remove('d-none');
    }

    if(computerScoreHTML.textContent == 3){
        console.log('machine wins');
        playSound('lose-battle');
        document.querySelector('#lose-container').classList.remove('d-none');
    }
}

function addHistoryRow(user, machine, winner){
    const table = document.querySelector('#history-table');
    let tableRow = document.createElement('tr');

    if(winner === 'user'){
        tableRow.innerHTML = `
        <td>${user}</td>
        <td>${machine}</td>
        `;
        tableRow.classList.add('tr-win');
    } else if(winner === 'machine'){
        tableRow.innerHTML = `
        <td>${user}</td>
        <td>${machine}</td>
        `;
        tableRow.classList.add('tr-lose');
    }else{
        tableRow.innerHTML = `
        <td>${user}</td>
        <td>${machine}</td>
        `;
    }

    table.appendChild(tableRow);
}

function displayChoices(user, machine){
    let userImageDiv = document.querySelector('#user-img-weapon');
    let machineImageDiv = document.querySelector('#machine-img-weapon');

    if(user === 'rock'){
        userImageDiv.innerHTML = `
            <img class="weapon-img-sm" src="img/rock.png" alt="Rock">
        `;
    }else if(user === 'paper'){
        userImageDiv.innerHTML = `
            <img class="weapon-img-sm" src="img/paper.png" alt="Paper">
        `;
    }else if(user === 'scissors'){
        userImageDiv.innerHTML = `
            <img class="weapon-img-sm" src="img/scissors.png" alt="Scissors">
        `;
    }

    if(machine === 'rock'){
        machineImageDiv.innerHTML = `
            <img class="weapon-img-sm" src="img/rock.png" alt="Rock">
        `;
    }else if(machine === 'paper'){
        machineImageDiv.innerHTML = `
            <img class="weapon-img-sm" src="img/paper.png" alt="Paper">
        `;
    }else if(machine === 'scissors'){
        machineImageDiv.innerHTML = `
            <img class="weapon-img-sm" src="img/scissors.png" alt="Scissors">
        `;
    }
}

function playSound(sound){
    document.querySelector(`audio[data-sound="${sound}"]`).currentTime = 0;
    document.querySelector(`audio[data-sound="${sound}"]`).play(); 
}