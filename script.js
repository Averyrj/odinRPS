const r = 'Rock'
const p = 'Paper'
const s = 'Scissors'
let playerScore = 0;
let computerScore = 0;
const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorsbtn = document.getElementById('scissors');

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
const computerSelection = computerPlay();
const playerSelection = 'Rock'
console.log(computerSelection)
console.log(playerSelection)
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === p && computerSelection === r || playerSelection === s && computerSelection === p) {
        playerScore++
        return "Player wins"

    } else if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === p && computerSelection === s || playerSelection === s && computerSelection === r) {
        computerScore++
        return "Player loses"
    }
    else (playerSelection === computerSelection); {
        return "Tie"
    };
}
const roundResult = playRound(playerSelection, computerSelection)
console.log(roundResult)
console.log(playerScore)
function game() {
    if (playerScore === 5) {
        return "Player wins, end of game"
    }
    else if (computerScore === 5) {
        return "Computer wins, end of game"
    }
}
rockbtn.addEventListener('click', () => {
    alert("Hello World");
});