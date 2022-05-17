const r = 'Rock'
const p = 'Paper'
const s = 'Scissors'
let playerScore = 0;
let computerScore = 0;

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
const result = playRound(playerSelection, computerSelection)
console.log(result)
console.log(playerScore)
function game() {
    for (let i = 0; i < 5; i++) {
        // your code here!
    }
}