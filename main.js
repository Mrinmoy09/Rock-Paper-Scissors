/*
Rules of rock paper sciorrs

we will have two player - 
    1.Computer
    2.User

    for computer:
    arr= ["rock","paper","scissors"]
    index = Math.floor(Math.random() * 3);
    arr[index]

    for user:
    there will be input field to select whatever they want

    case 1: rock == rock -> tie
    case 2: rock == paper -> w-rock
    case 3: rock == scissors -> w- rock
    case 4: paper == paper -> tie
    case 5: paper == scissors -> w-> scissors
    case 6: scissors == scissors -> tie

*/

let playerScore = 0;
let computerScore = 0;

function getComputerChoice (){
    const arr = ["Rock", "Paper", "Scissors"]
    let randomIndex = Math.floor(Math.random() * 3);
    const selctedIndex = arr[randomIndex];
    return selctedIndex;
}



function playRound(playerSelection, computerSelection) {
    //playerSelection should be case insensitive
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    if(playerChoice === computerChoice){
        return "It's a Tie";
    }
    else if(playerChoice === "rock" && computerChoice === "paper" 
        || playerChoice === "rock" && computerChoice === "scissors" 
        || playerChoice === "scissors" && computerChoice === "paper" )
        {
        playerScore++;
        return "You win " + `${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
        
        }
    else{
        computerScore++;
        return "You lose! " + `${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
        
    }
  }



function game(){
     for(let i=0; i<5; i++){
        const playerSelection = prompt("Select your choice:Rock,Paper or Scissors" , '').toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
    }

    console.log("Game Over");
    console.log("playerScore",playerScore);
    console.log("computerScore",computerScore);

    if(playerScore>computerScore){
        return "You are the winner";
    }
    else if(playerScore === computerScore){
        return "It's a tie";
    }
    else{
        return "You lost the game";
    }
}

console.log(game());