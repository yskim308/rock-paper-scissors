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
    let playerSelection, computerSelection, roundResult; 
    let wins = 0; 
    let losses =0; 
    const buttons = document.querySelectorAll('button'); 
    buttons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            playerSelection = (button.id); 
            computerSelection = getComputerChoice(); 
            roundResult = playRound(playerSelection, computerSelection); 
            const display = document.querySelector('#computerSelection'); 
            display.textContent = "the computer chose " + computerSelection + "! " +
            roundResult;
            console.log(roundResult.slice(0, 5));

            if (roundResult.slice(0, 5) == "you w") {
                wins += 1; 
                const winContent = document.querySelector('#wins');
                winContent.textContent = "wins: " + wins;
            }
            else if (roundResult.slice(0, 5) == "you l"){
                losses += 1; 
                const lossCOntent = document.querySelector('#losses'); 
                lossCOntent.textContent = "losses: " + losses; 
            }


            if (wins == 5){
                wins = 0; 
                losses = 0; 
                alert("You won five times, you win! Count will restart");
                const lossCOntent = document.querySelector('#losses'); 
                lossCOntent.textContent = "losses: " + losses; 
                const winContent = document.querySelector('#wins');
                winContent.textContent = "wins: " + wins;
                display.textContent = "click a button!";
            }
            else if (losses == 5){
                wins = 0; 
                losses =0;
                alert("you lost five times, you lose! Count will restart");
                const lossCOntent = document.querySelector('#losses'); 
                lossCOntent.textContent = "losses: " + losses; 
                const winContent = document.querySelector('#wins');
                winContent.textContent = "wins: " + wins;
                display.textContent = "click a button!";
            }

        })
    })



}

game(); 