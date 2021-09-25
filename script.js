'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'correct number'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10
// document.querySelector('.guess').value = 1



 


let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0



const displayMessage = function(message) {
  document.querySelector('.message').textContent = message
}
const backgroundColorWhilePlaying = function(color) {
  document.querySelector('body').style.backgroundColor = color
}
const squareAroundNumber = function(width) {
  document.querySelector('.number').style.width = width
}
const numberToGuess = function(secretNumber) {
  document.querySelector('.number').textContent = secretNumber
}
const defaultScore = function(score) {
  document.querySelector('.score').textContent = score
}


document.querySelector('.check').addEventListener('click', function() {
  const guess =  Number(document.querySelector('.guess').value)

  // when theres no input
  if(!guess) {
    
    displayMessage('⛔ No Number!')

    // When player wins
  } else if (guess === secretNumber) {

    displayMessage()
    numberToGuess(secretNumber)
    backgroundColorWhilePlaying('#60b347')
    squareAroundNumber('30rem')
    
    if(score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
    // guess is wrong
  } else if(guess !== secretNumber) {

    if(score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '👇 Too low!')
      score--
      defaultScore(score)
  } else {
    displayMessage('🤯 You Lost!')
    defaultScore(0)
   }

  }
})


document.querySelector('.again').addEventListener('click', function() {
  
  secretNumber = Math.trunc(Math.random() * 20) + 1
  score = 20

  defaultScore(score)
  displayMessage('Start Guessing...')
  numberToGuess('?')
  squareAroundNumber('15rem')
  backgroundColorWhilePlaying('#222')
  document.querySelector('.guess').value = ''
})
