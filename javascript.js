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

    if(playerSelection.lower() === "rock"){
        switch(computerSelection){
            case "rock":
            case "paper":
            case "scissors":
        }
    }
    else if(playerSelection.lower() === "paper"){
        switch(computerSelection){
            case "rock":
            case "paper":
            case "scissors":
        }
    }
    else{
        switch(computerSelection){
            case "rock":
            case "paper":
            case "scissors":
        }
    }

}