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
    let playerSelection = "";
    let computerSelection = "";
    let buttonPressed = false; 
    const buttons = document.querySelectorAll('button'); 
    buttons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            playerSelection = (button.id); 
            computerSelection = getComputerChoice(); 
            const display = document.querySelector('#computerSelection'); 
            display.textContent = "the computer chose " + computerSelection + "! " +
            playRound(playerSelection, computerSelection);
        })
    })



}

game(); 