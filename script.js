'use strict';

const number = document.querySelector('.number');
const labelScore = document.querySelector('.score');

const getSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

let secretNumber = getSecretNumber();

let score = 20;
let highscore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const decreaseScore = () => {
  score--;
  labelScore.textContent = score;
};

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const disableButton = () => (checkBtn.disabled = true);

const activateButton = () => (checkBtn.disabled = false);

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there's no input
  if (!guess) {
    displayMessage('No number!');
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct number!');
    number.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';

    number.style.width = '30rem';
    disableButton();
  }

  // When guess is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      decreaseScore();
    } else {
      displayMessage('You lost the game!');
      labelScore.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  labelScore.textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  number.textContent = '?';
  number.style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = getSecretNumber();
  activateButton();
});
