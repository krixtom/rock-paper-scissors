function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    const choice = choices[randomNumber]
    return choice

}
console.log('hi')