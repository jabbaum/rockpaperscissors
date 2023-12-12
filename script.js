let scoreCard = {
    player: 0,
    computer: 0
};

let output = document.querySelector('.output');
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
console.log(rock);



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

function game(e) {
    let roundWinner = singleround(e.currentTarget.choice);
    if (roundWinner === 'Player') {
        scoreCard.player += 1;
    } else if (roundWinner === 'Computer') {
        scoreCard.computer +=1;
    } else if (roundWinner != 'Tie') {
        output.textContent = 'There was an Error!'
        return
    }

    if(scoreCard.player>=3) {
        output.textContent =`The game is over! You Win! The final Score was Player ${scoreCard.player} and Computer: ${scoreCard.computer}. If you would like to play again, select your hand signal choice!`;
        scoreCard.player = 0;
        scoreCard.computer = 0;
        return
    } else if (scoreCard.computer>=3) {
        output.textContent =`The game is over! You Lose! The computer wins! The final Score was Player ${scoreCard.player} and Computer: ${scoreCard.computer} If you would like to play again, select your hand signal choice!`;
        scoreCard.player = 0;
        scoreCard.computer = 0;
        return
    } else if (roundWinner === 'Tie'){
        output.textContent = `The last round was a tie! The Current Socre is Player: ${scoreCard.player} and Computer: ${scoreCard.computer}. Play Again By Clicking Your Choice!`;
    } else {
        output.textContent = `The Current Socre is Player: ${scoreCard.player} and Computer: ${scoreCard.computer}. Play Again By Clicking Your Choice!`;
        return
    }
}


rock.addEventListener('click', game,false);
rock.choice = 'rock';
paper.addEventListener('click', game);
paper.choice = 'paper';
scissors.addEventListener('click', game);
scissors.choice = 'scissors';

