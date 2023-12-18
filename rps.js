function getComputerChoice() {
    let rps = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * rps.length);
    let randomString = rps[randomIndex]
    return(randomString);
}

let playerScore = 0;
let computerScore = 0;

function playGame(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == 'paper') {
        computerScore++;
        return('You lose!')
        console.log("You lose!")
    } else if (playerSelection == "rock" && computerSelection == 'scissors') {
        playerScore++;
        return("You win!")
        console.log("You win!")
    } else if (playerSelection == "paper" && computerSelection == 'rock') {
        playerScore++;
        return("You win!")
        console.log("You win!")
    } else if (playerSelection == "paper" && computerSelection == 'scissors') {
        computerScore++;
        return("You lose!") 
        console.log("You lose!")
    } else if (playerSelection == "scissors" && computerSelection == 'rock') {
        computerScore++;
        return("You lose!")
        console.log("You lose!")
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return("You win!")
        console.log("You win!")
    } else {
        return("You tied! Try again.")
    }
}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("make your selection!")
        console.log('Computer chose:', computerSelection);
        playGame(playerSelection, computerSelection)
        console.log("Computer Score", computerScore);
        console.log("Player Score:", playerScore);
        
    }


}



game();
