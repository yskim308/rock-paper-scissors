function getComputerChoice(){
    const randomInt = Math.floor(Math.random()*3); 
    if (randomInt == 0) {return "rock";}
    if (randomInt == 1) {return "paper";}
    if (randomInt == 2) {return "scissors";}
}

function playRound(playerSelection, computerSelection){
    const selection = playerSelection.toLowerCase(); 
    switch (selection){
        case 'rock': 
            if (computerSelection == 'paper') {return "you lose! paper beats rock";}
            if (computerSelection == 'scissors') {return "you win! rock beats scissors";}
            if (computerSelection == 'rock') {return "tie";}

        case 'scissors':
            if (computerSelection == 'paper') {return "you win! paper beats scissors";}
            if (computerSelection == 'scissors') {return "tie";}
            if (computerSelection == 'rock') {return "you lose! rock beats scissors!"}

        case 'paper': 
            if (computerSelection == 'paper') {return "tie";}
            if (computerSelection == 'scissors') {return "you lose! scissors beats paper";}
            if (computerSelection == 'rock') {return "you win! paper beats rock";}
    }
}

function game(){
    let playerScore = 0; 
    for (let i = 0; i < 5;){
        console.log("round: " + (i+1));
        const playerSelection = prompt("choose rock, paper, or scissors");
        const check = playerSelection.toLowerCase(); 
        if (check != 'rock' && check != 'paper' && check != 'scissors'){
            console.warn("please enter either rock, paper, or scissors!")
            continue; 
        }
        let computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        if (result.slice(0,3) == 'tie') 
        {
            console.log("you tied! replaying round: " + (i+1))
            continue; 
        }
        
        if (result.slice(0,7) == "you win") {
            playerScore ++;
        } 
        console.log("the computer chose " + computerSelection + ", " + result); 
        i++; 

    }
    console.log("after 5 rounds, your score is : " + playerScore); 
    if (playerScore >= 3) {
        console.log("you have " + playerScore + " wins out of five, you are the winner!");}
    else {
        console.log("you have " + playerScore + " wins out of five, you are the loser!");}
}

game(); 