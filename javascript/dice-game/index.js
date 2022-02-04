'use strict'

// SECTION variable declarations
const player = {
    player1: document.querySelector('.player--1'),
    player2: document.querySelector('.player--2')
};
const title = {
    player1: document.querySelector('.title--1 span'),
    player2: document.querySelector('.title--2 span')
};
const score = {
    player1: document.querySelector('.score--1'),
    player2: document.querySelector('.score--2')
};
const currentScore = {
    player1: document.querySelector('.current-score--1 span'),
    player2: document.querySelector('.current-score--2 span'),
};
const dice = document.querySelector('.dice');
const diceBox = document.querySelector('.dice-box figure');
const btnReload = document.querySelector('.btn-reload');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
let activePlayer = 1;

// SECTION function declarations
    //SUB-SECTION  utility functions
const randomRoll = function () {
    return Math.ceil(Math.random()*6)
}

const changePlayer = function () {
    activePlayer = activePlayer === 1 ? 2 : 1;
    player.player1.classList.toggle('active');
    player.player2.classList.toggle('active');
}

const changeDiceImg = function (n) {
    dice.setAttribute('src', `./img/dice-${n}.png`);
    //transition - dice roll
    if (diceBox.getAttribute('style') === 'transform: rotate(360deg);') {
        diceBox.style.transform = 'rotate(0deg)'
    } else {
        diceBox.style.transform = 'rotate(360deg)'
    }
}

const playerWon = function () {
    player['player' + activePlayer].classList.add('won');
    btnHold.setAttribute('disabled', 'true');
    btnRoll.setAttribute('disabled', 'true');
}

    //SUB-SECTION  event handler functions
const reload = function () {
    for (let i=1; i<=2; i++) {
        score['player' + i].textContent = '0';
        currentScore['player' + i].textContent = '0';
        if (player['player' + i].classList.contains('won')) {
            player['player' + i].classList.remove('won');
        }
    }
    btnHold.removeAttribute('disabled');
    btnRoll.removeAttribute('disabled');
    if (activePlayer === 2) {
        activePlayer = 1;
        player.player1.classList.toggle('active');
        player.player2.classList.toggle('active');
    }
    changeDiceImg(1);
}

const roll = function () {
    let diceNo = randomRoll();

    if (diceNo !== 1) {
        currentScore['player' + activePlayer].textContent = Number(currentScore['player' + activePlayer].textContent) + diceNo;
        changeDiceImg(diceNo);
    } else {
        currentScore['player' + activePlayer].textContent = 0;
        changeDiceImg(diceNo);
        changePlayer();
    }
}

const hold = function () {
    score['player' + activePlayer].textContent = Number(score['player' + activePlayer].textContent) + 
                                             Number(currentScore['player' + activePlayer].textContent);
    currentScore['player' + activePlayer].textContent = 0;
    if (Number(score['player' + activePlayer].textContent) >= 10) {
        playerWon();
    } else {
        changePlayer();
    }
}

// SECTION event listeners
document.querySelector('.btn-reload').addEventListener('click', reload);
document.querySelector('.btn-roll').addEventListener('click', roll);
document.querySelector('.btn-hold').addEventListener('click', hold);

//SECTION implementing game info overlay
const btnInfo = document.querySelector('.game-info-btn');
const info = document.querySelector('.game-info');
btnInfo.addEventListener('click', function () {
    info.classList.toggle('hidden');
    if (btnInfo.textContent === "i") {
        btnInfo.textContent = "X";
    } else {
        btnInfo.textContent = 'i';
    }
});