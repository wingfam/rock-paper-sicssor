function getComputerChoice() {
    // Use Math.random() to generate a random number between 0 and 1. Then multiply
    // it by the length of the array. Finally use Math.floor() to round down to the nearest integer
    // to get index of the array.
    const computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound() {
    let userScore = 0;
    let computerScore = 0;
    let round = 5;

    // Define a selections object if user's choice is weak or strong against computer's choice
    // This make using if else easier because I don't have to list every single cases.
    const selections = {
        Rock: { weakTo: "Paper", strongTo: "Scissors" },
        Paper: { weakTo: "Scissors", strongTo: "Rock" },
        Scissors: { weakTo: "Rock", strongTo: "Paper" },
    };

    for (i = 1; i <= round; i++) {
        let userSelection = capitalizeFirstChar( 
            prompt(
                "Round " +
                i.toString() +
                " | Type Rock or Paper or Sicssors (case-insensitive)."
            )
        ); 
        
        let computerSelection = capitalizeFirstChar(getComputerChoice()); 
        
        alert(
            "You chose " + userSelection + " the computer chose " + computerSelection
        ); 

        // Compare userSelection with computerSelection using selections object created earlier.
        // If any of userSelection is stronger than computerSelection, then you win one round.
        // If any of userSelection is weaker than computerSelection, then you lose one round.
        // Everything else will result in a tie.
        if (selections[userSelection].strongTo === computerSelection) {
            alert("You win! You get 1 score.");
            userScore += 1;
        } else if (selections[userSelection].weakTo === computerSelection) {
            alert("You lose! The computer get 1 score.");
            computerScore += 1;
        } else {
            alert("It's a tie. No one get a score.");
        }

        console.log("Your total score: " + userScore + "\nComputer total score: " + computerScore)
    }

    alert("Your total score: " + userScore + "\nComputer total score: " + computerScore)

    if (userScore > computerScore) {
        alert("You Won!")
    } else if (userScore < computerScore) {
        alert("You Lost!")
    } else {
        alert("You Tied With The Computer")
    }

    alert("Thank you for playing! Please refresh to play again.")
}

function displayPrompt() {
    let userInput = prompt(
        "Welcome to Rock-Paper-Sicssors! Do you want to play 5 rounds against the computer? (y/n)"
    );

    if (userInput == null) {
        displayPrompt();
    } else if (
        userInput.toLowerCase() === "y" ||
        userInput.toLowerCase() === "yes"
    ) {
        playRound();
    } else if (
        userInput.toLowerCase() === "n" ||
        userInput.toLowerCase() === "no"
    ) {
        console.log("Thank you for playing.\n");
        alert("Thank you for playing. Please refresh if you want to play again.");
    } else {
        alert("Please only type y or n");
        displayPrompt();
    }
}

function capitalizeFirstChar(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

displayPrompt();
