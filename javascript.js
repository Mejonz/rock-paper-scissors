/*math.random() to generate Number
Multiply that  number by 9??
1-3 is rock, 4-6 is paper, 7-9 is scissors*/



//console.log(getComputerChoice());



//getHumanChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    //let a = 0;
    function getComputerChoice() {
        a = Math.random() * 9;
        if (a > 0 && a <= 3) {
            return "rock";
        }
        else if (a > 3 && a <= 6) {
            return "paper";
        } 
        else if (a > 6 && a <= 9) {
            return "scissors";
        }
    
}
    //let userInput = "";
    function getHumanChoice() {
    userInput = prompt("Please enter 'rock', 'paper' or 'scissors'");
   return userInput.toLowerCase();
}

    function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("It's a draw! rock vs rock");
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! rock loses to paper!");
        computerScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! rock beats scissors!");
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("It's a draw! paper vs paper!");
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! paper loses to scissors!");
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! paper beats rock!");
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("It's a draw! scissors vs scissors!");
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! scissors beats paper!");
        humanScore++;
    }
    else {
        console.log("You lose! scissors loses to rock!");
        computerScore++;
    }
}

    //playRound("scissors", "paper");
    //console.log(computerScore);
    //console.log(humanScore);

   

  



    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);


    if (humanScore > computerScore) {
        console.log("Game over! You win!");
    }
    else if (humanScore < computerScore) {
        console.log("Game over! You lose!");
    }
    else {
        console.log("Game over! Its a draw!");
    }
}

playGame();
