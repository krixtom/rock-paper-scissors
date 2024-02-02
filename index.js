const selectionBtns = document.querySelectorAll('button')
const player = document.querySelector('.player')
const computer = document.querySelector('.computer')
const message = document.querySelector('.result-container')

let playerScore = 0
let computerScore = 0


function updateScore(winner) {
    winner++
    return winner

}


selectionBtns.forEach((btn) =>  {
    let playerSelection = ''
    btn.addEventListener('click', (e) => {
        playerSelection = e.target.textContent.toLowerCase()
        playRound(playerSelection, getComputerChoice())
    })




})



function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    const choice = choices[randomNumber]
    return choice
    
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log('It is a tie!')
    } else if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock' ){
        playerScore = updateScore(playerScore)
        player.textContent = `Player: ${playerScore}`
        if(playerScore === 5) {
            message.innerHTML = `<p>Player Wins!</p>`
        
        }
        
    } else {
        computerScore = updateScore(computerScore)
        computer.textContent = `Computer: ${computerScore}`
        if(computerScore === 5) {
            message.innerHTML = `<p>Computer Wins!</p>`
        
        }


    }
    
}





