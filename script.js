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

function singleround(pChoice, cChoice) {
    let playerChoice = pChoice.toLowerCase();
    let computerChoice = cChoice.toLowerCase();
    let winnerOutput = `${playerChoice} beats ${computerChoice}!`
    if (playerChoice === computerChoice) {
        return `Both you and the computer chose ${computerChoice} so, the round is a tie.`
    } else if(playerChoice ==='paper' && computerChoice === 'rock' || playerChoice ==='rock' && computerChoice === 'scissors' || playerChoice ==='scissors' && computerChoice === 'paper') {
        return `You Win! ` + winnerOutput; 
    } else {
        return `Sorry, you lose because the computer chose ${computerChoice} and that beats ${playerChoice}!`;
    }
}