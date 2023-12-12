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
        
        return `Both you and the computer chose ${computerChoice} so, the round is a tie. ${singleround()}`
    } else if(playerChoice ==='paper' && computerChoice === 'rock' || playerChoice ==='rock' && computerChoice === 'scissors' || playerChoice ==='scissors' && computerChoice === 'paper') {
        scoreCard.player = scoreCard.player +1;
        console.log(`The current score is: Player: ${scoreCard.player} Computer: ${scoreCard.computer}`);
        return `You Win! ` + winnerOutput; 
    } else {
        scoreCard.computer = scoreCard.computer +1;
        console.log(`The current score is: Player: ${scoreCard.player} Computer: ${scoreCard.computer}`);
        return `Sorry, you lose because the computer chose ${computerChoice} and that beats ${playerChoice}!`;
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
    } else {
        singleround();
        if(scoreCard.player>=3) {
            output.textContent =`The game is over! You Win!`;
            return
        } else if (scoreCard.computer>=3) {
            output.textContent =`The game is over! You Lose! The computer wins!`;
            return
        } else {
            output.textContent = `The Current Socre is Player: ${scoreCard.player} and Computer: ${scoreCard.computer}. Play Again By Clicking Your Choice!`;
            return
        }

    }
}


let btn = document.querySelector('button');
btn.addEventListener('click', startGame);

function startGame() {
    btn.style.cssText = `display: none`;
    game();
}




