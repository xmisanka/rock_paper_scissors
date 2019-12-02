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
let scoreCount = document.createElement('p');

let gameResult = document.querySelector('.gameResult');
let gResult = document.createElement('h3');

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
    } else {
        return 'It\'s a tie.';
    }
}

//disable buttons

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

//game winner

function whoWins(playerScore, computerScore) {
    if (playerScore === 5) {
        disableButtons();
        return 'You won the game! Reload the page to play again.';
    } else if (computerScore === 5) {
        disableButtons();
        return 'Computer won the game! Reload the page to play again.';
    } else {
        return 'Keep playing.'
    }
}

//display results

function displayResults() {
    let fResult = whoWins(playerScore, computerScore);
    scoreCount.textContent = `You: ${playerScore}  Computer: ${computerScore}`;
    score.appendChild(scoreCount);
    gResult.textContent = fResult;
    gameResult.appendChild(gResult);
}

//evaluating player selection

function evaluatePlayerSelection (playerSelection) {
    let computerSelection = computerPlay();
    let round = playRound(playerSelection, computerSelection);
    selected.textContent = `Computer choice: ${computerSelection}`;
    selection.appendChild(selected);
    roundResult.textContent = round;
    result.appendChild(roundResult);
    displayResults();
}


//event listeners for RPS playerSelection buttons

rockButton.addEventListener('click', () => {
    evaluatePlayerSelection('rock');
});

paperButton.addEventListener('click', () => {
    evaluatePlayerSelection('paper');
});

scissorsButton.addEventListener('click', () => {
    evaluatePlayerSelection('scissors');
});
