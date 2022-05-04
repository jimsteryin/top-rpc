function computerPlay(){
    //Generate random integer 1-3
    let rand = Math.floor(Math.random() * 3);

    //return R/P/C based on random integer
    switch (rand){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function play(playerSelection, computerSelection) {
    //nested if statements for each playerSelection
    let result;
    if(playerSelection.toLowerCase() === computerSelection){
        result = "Tie! Both chose " + computerSelection + ".";
    }
    if(playerSelection.toLowerCase() === "rock"){
        switch(computerSelection){
            case "paper":
                result = "You Lose! Paper beats Rock";
            case "scissors":
                result = "You Win! Rock beats Scissors";
        }
    }
    else if(playerSelection.toLowerCase() === "paper"){
        switch(computerSelection){
            case "rock":
                result = "You Win! Paper beats Rock";
            case "scissors":
                result = "You Lose! Scissors Beats Rock";
        }
    }
    else{
        switch(computerSelection){
            case "rock":
                result = "You Lose! Rock beats Scissors";
            case "paper":
                result = "You Win! Scissors beats Paper";
        }
    }
    return result;
}