let scoreCard = {
    player: 0,
    computer: 0
};
function getComputerChoice() {
    let num = Math.floor(
        (Math.random()*100)
        );
    let computerChoice = null;
    if (num<=33) {
        computerChoice = 'Rock';
    } else if (num>=33 && num<= 66) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

function singleround(pChoice = window.prompt("choose Rock, Paper, or Scissors!"), cChoice = getComputerChoice()) {
    const playerChoice = pChoice.toLowerCase();
    const computerChoice = cChoice.toLowerCase();

    let winnerOutput = `${playerChoice} beats ${computerChoice}!`
    if (playerChoice === computerChoice) {
        return `Both you and the computer chose ${computerChoice} so, the round is a tie. ${singleround()}`
    } else if(playerChoice ==='paper' && computerChoice === 'rock' || playerChoice ==='rock' && computerChoice === 'scissors' || playerChoice ==='scissors' && computerChoice === 'paper') {
        scoreCard.player = scoreCard.player +1;
        return `You Win! ` + winnerOutput; 
    } else {
        scoreCard.computer = scoreCard.computer +1;
        return `Sorry, you lose because the computer chose ${computerChoice} and that beats ${playerChoice}!`;
    }
}

function game() {
    for(let i=0; i<5; i++) {
        console.log(singleround());
        if(scoreCard.player>=3) {
            console.log(`The game is over! You Win!`);
            return
        } else if (scoreCard.computer>=3) {
            console.log(`The game is over! You Lose! The computer wins!`);
            return
        }
    }
}