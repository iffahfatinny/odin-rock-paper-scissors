let playerWin = 0;
let computerWin = 0;
function myFunction(test){
    // console.log(test);
    var newResult = test;
    document.getElementById("yourChoice").innerHTML = newResult;
    playRound(test, getComputerChoice());
    return test;
}

function getComputerChoice(){
    var num = Math.floor(Math.random()*3);
    var result;
    if(num === 0){
        // console.log("rock");
        // document.getElementById("computerChoice").innerHTML = "rock";
        result = "rock";
    }
    else if(num === 1){
        // console.log("paper");
        // document.getElementById("computerChoice").innerHTML = "paper";
        result = "paper";
    }
    else{
        // console.log("scissors");
        // document.getElementById("computerChoice").innerHTML = "scissors";
        result = "scissors";
    }
    document.getElementById("computerChoice").innerHTML = result;
    return result;
}
const playerSelection = myFunction();
function playRound(playerSelection, computerSelection){
    console.log("playerSelection")
    console.log(playerSelection);
    console.log(computerSelection);
    if(playerSelection === computerSelection){
        // alert("tie");
    }else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock"){
        // alert("you won");
        playerWin++;
        // console.log(playerWin);
        document.getElementById("playerScore").innerHTML = playerWin;
    }
    else if(playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "rock"){
        // alert("you lose");
        computerWin++;
        // console.log(computerWin);
        document.getElementById("computerScore").innerHTML = computerWin;
    }
    game();
}

function game(){
    if(playerWin === 5){
        // document.getElementsById("buttonChoice").disabled = true;
        
        // button.disabled = true;
        alert("you won! congratulations! Please reload to play again~");
        
        document.querySelectorAll(".button").forEach(e => e.disabled = true)
    }
    else if(computerWin === 5){
        // document.getElementsById("buttonChoice").disabled = true;
        alert("congratulations! computer won! Please reload to play again~");
        document.querySelectorAll(".button").forEach(e => e.disabled = true)
    }
}