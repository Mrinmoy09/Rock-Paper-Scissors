let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    const selectedIndex = arr[randomIndex];
    return selectedIndex;
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        computerScore++;
        playerScore++;
        return "It's a Tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    }
}

function updateResults(result) {
    document.getElementById("result").innerHTML = result;
    document.getElementById("score").innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;

    roundsPlayed++;
    if (roundsPlayed === 5) {
        endGame();
    }
}

function endGame() {
    if (playerScore > computerScore) {
        document.getElementById("finalScore").innerHTML = "You are the winner! Congrats";
    } else {
        document.getElementById("finalScore").innerHTML = "You lost! Better luck next time.";
    }

    // Show the "Start Again" button
    document.getElementById("startAgain").style.display = "block";
    
}

window.onload = function () {
    document.getElementById("rock").addEventListener("click", function () {
        const computerChoice = getComputerChoice();
        const result = playRound("rock", computerChoice);
        updateResults(result);
    });

    document.getElementById("paper").addEventListener("click", function () {
        const computerChoice = getComputerChoice();
        const result = playRound("paper", computerChoice);
        updateResults(result);
    });

    document.getElementById("scissors").addEventListener("click", function () {
        const computerChoice = getComputerChoice();
        const result = playRound("scissors", computerChoice);
        updateResults(result);
    });

    document.getElementById("startAgain").addEventListener("click", function () {
        // Hide the "Start Again" button
        document.getElementById("startAgain").style.display = "none";

        // Reset scores and roundsPlayed for a new game
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0;

        // Clear previous results
        document.getElementById("result").innerHTML = "";
        document.getElementById("score").innerHTML = "";
        document.getElementById("finalScore").innerHTML = "";
    });
};

