const r = 'Rock'
const p = 'Paper'
const s = 'Scissors'
let playerScore = 0;
let computerScore = 0;
const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorsbtn = document.getElementById('scissors');
const resetbtn = document.getElementById('reset');
const playerScore_span = document.getElementById('playerScore');
const computerScore_span = document.getElementById('computerScore');


function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return r
        case 1:
            return p
        case 2:
            return s
    }
}
rockbtn.addEventListener('click', () => {
    playRound(r);
});
paperbtn.addEventListener('click', () => {
    playRound(p);
});
scissorsbtn.addEventListener('click', () => {
    playRound(s);
});
resetbtn.addEventListener('click', () => {
    reset();
});
function playRound(playerSelection) {
    const computerSelection = computerPlay();
    console.log(computerSelection);
    console.log(playerSelection);
    if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === p && computerSelection === r || playerSelection === s && computerSelection === p) {
        playerScore++;
        updateScore();
        return "Player wins"

    } else if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === p && computerSelection === s || playerSelection === s && computerSelection === r) {
        computerScore++
        updateScore();
        return "Player loses"
    }
    else (playerSelection === computerSelection); {
        return "Tie"
    };
}
function updateScore() {
    playerScore_span.innerText = playerScore;
    computerScore_span.innerText = computerScore;
};
function reset() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
}

console.log(playerScore)
function game() {
    if (playerScore === 5) {
        return "Player wins, end of game"
    }
    else if (computerScore === 5) {
        return "Computer wins, end of game"
    }
}
