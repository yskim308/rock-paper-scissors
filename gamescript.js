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
    for (let i = 0; i < 5; i++){
        console.log("round: " + i);
        playerSelection = prompt("choose rock, paper, or scissors");
        computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
    }
}