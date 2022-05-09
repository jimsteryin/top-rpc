function computerPlay(){
    //Generate random integer 1-3
    let rand = Math.floor(Math.random() * 3);

    //return R/P/C based on random integer
    switch (rand){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    //nested if statements for each playerSelection
    let result;
    let winner;
    if(playerSelection.toLowerCase() === computerSelection){
        result = "Tie! Both chose " + computerSelection + ".";
    }
    else{
        if(playerSelection.toLowerCase() === "rock"){
            switch(computerSelection){
                case "paper":
                    result = "You Lose! Paper beats Rock";
                    winner = "computer";
                case "scissors":
                    result = "You Win! Rock beats Scissors";
                    winner = "player";
            }
        }
        else if(playerSelection.toLowerCase() === "paper"){
            switch(computerSelection){
                case "rock":
                    result = "You Win! Paper beats Rock";
                    winner = "player"
                case "scissors":
                    result = "You Lose! Scissors Beats Rock";
                    winner = "computer";
            }
        }
        else{
            switch(computerSelection){
                case "rock":
                    result = "You Lose! Rock beats Scissors";
                    winner = "computer";
                case "paper":
                    result = "You Win! Scissors beats Paper";
                    winner = "player";
            }
        }
    }
    console.log(result);
    return winner;
}

function game(){
    let playerWin = 0;
    let computerWin = 0;
    let ties = 0;
    let player;
    let winner;


    for(let i = 0; i < 5; i++){
        let invalid = true;
        while(invalid){
            player = prompt("Rock Paper or Scissors");
            if(player.toLowerCase() === "rock" || player.toLowerCase() === "paper" || player.toLowerCase() === "scissors"){
                invalid = false;
            }
            else {
                invalid = true;
            }
        }

        winner = playRound(player, computerPlay());
        if(winner === "player"){
            playerWin++;
        }
        else if(winner === "computer"){
            computerWin++;
        }
        else{
            ties++;
        }

        console.log(playerWin, computerWin, ties);
    }
    return;
}