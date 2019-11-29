let playerScore = 0;
let computerScore = 0;

let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');

let selection = document.querySelector('.selection');
let selected = document.createElement('p');

let result = document.querySelector('.result');
let roundResult = document.createElement('p');

let score = document.querySelector('.score');
let scoreCount = document.createElement('p')

// computerSelection - what the computer picks

function computerPlay() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber > 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// who wins the round, computer or human?

function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return 'You win. Rock beats scissors.';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return 'You lose. Paper beats rock.';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return 'You win. Paper beats rock.';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return 'You lose. Scissors beat paper.';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return 'You win. Scissors beat paper.';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return 'You lose. Rock beats scissors.';
    } else if (playerSelection === computerSelection) {
        return 'It\'s a tie.'
    } else {
        return 'Choose valid value to play.'
    }
}

//final score

function whoWins(playerScore, computerScore) {
    if (playerScore < computerScore) {
        return 'You lose the game.';
    } else if (playerScore > computerScore) {
        return 'You win the game.';
    } else {
        return 'The game is a tie.';
    }
}

// event listeners for RPS playerSelection buttons

rockButton.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = computerPlay();
    let round = playRound(playerSelection, computerSelection);
    selected.textContent = 'Computer choice: ' + `${computerSelection}`;
    selection.appendChild(selected);
    roundResult.textContent = `${round}`;
    result.appendChild(roundResult);
    scoreCount.textContent = 'You: ' + `${playerScore}` + '   ' + 'Computer: ' + `${computerScore}`;
    score.appendChild(scoreCount); 
});

paperButton.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = computerPlay();
    let round = playRound(playerSelection, computerSelection);
    selected.textContent = 'Computer choice: ' + `${computerSelection}`;
    selection.appendChild(selected)
    roundResult.textContent = `${round}`;
    result.appendChild(roundResult);
    scoreCount.textContent = 'You: ' + `${playerScore}` + '   ' + 'Computer: ' + `${computerScore}`;
    score.appendChild(scoreCount); 
});

scissorsButton.addEventListener('click', () => {
    let playerSelection = 'scissors';
    let computerSelection = computerPlay();
    let round = playRound(playerSelection, computerSelection);
    selected.textContent = 'Computer choice: ' + `${computerSelection}`;
    selection.appendChild(selected);
    roundResult.textContent = `${round}`;
    result.appendChild(roundResult);
    scoreCount.textContent = 'You: ' + `${playerScore}` + '   ' + 'Computer: ' + `${computerScore}`;
    score.appendChild(scoreCount); 
})

