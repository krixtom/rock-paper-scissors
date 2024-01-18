const playBtn = document.getElementById('play-btn')



function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    const choice = choices[randomNumber]
    return choice
    
}

function getPlayerChoice(){
    const playerChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase()
    return playerChoice
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        alert('It is a tie!')
    } else if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock' ){
        alert('Player wins')
    } else {
        alert('Computer wins')
    }
    
}



playBtn.addEventListener('click', () => {
    playRound(getPlayerChoice(),getComputerChoice())
})