let scoreCard = {
    player: 0,
    computer: 0
};

let output = document.querySelector('.output');



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

function singleround(pChoice, cChoice = getComputerChoice()) {

    const playerChoice = pChoice.toLowerCase();
    const computerChoice = cChoice.toLowerCase();

    let winnerOutput = `${playerChoice} beats ${computerChoice}!`
    if (playerChoice === computerChoice) {
          return `Tie`
    } else if(playerChoice ==='paper' && computerChoice === 'rock' || playerChoice ==='rock' && computerChoice === 'scissors' || playerChoice ==='scissors' && computerChoice === 'paper') {
        return 'Player';
    } else {
        return `Computer`;
    }
}

function game(pChoice, singleround) {
    let roundWinner = singleround(pChoice);
    if (roundWinner === 'Player') {
        scoreCard.player += 1;
    } else if (roundWinner === 'Computer') {
        scoreCard.computer +=1;
    } else if (roundWinner != 'Tie') {
        output.textContent = 'There was an Error!'
        return
    }

    if(scoreCard.player>=3) {
        output.textContent =`The game is over! You Win!`;
        return
    } else if (scoreCard.computer>=3) {
        output.textContent =`The game is over! You Lose! The computer wins!`;
        return
    } else if(scoreCard.player>=3) {
        output.textContent =`The game is over! You Win!`;
        return
    } else if (scoreCard.computer>=3) {
        output.textContent =`The game is over! You Lose! The computer wins!`;
        return
    } else if (roundWinner === 'Tie'){
        output.textContent = `The last round was a tie! The Current Socre is Player: ${scoreCard.player} and Computer: ${scoreCard.computer}. Play Again By Clicking Your Choice!`;
    } else {
        output.textContent = `The Current Socre is Player: ${scoreCard.player} and Computer: ${scoreCard.computer}. Play Again By Clicking Your Choice!`;
        return
    }
}


let btn = document.querySelector('button');
btn.addEventListener('click', startGame);

function startGame() {
    btn.style.cssText = `display: none`;
    game();
}




