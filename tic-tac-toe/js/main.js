import Player from "./Player.js";

/**
 * To start:
 * Check index.html, make sure the board with fields are created with correct classnames
 * The board should be 3x3 fields
 * Add correct classes
 */



const players = [];
let currentPlayer = 0; // This is the index of the array of the currentplayer
const fields = document.querySelectorAll('.board > .field');
const resetButton = document.querySelector(".reset-btn");

const playerOneName = document.querySelector('.player-one-name');
const playerTwoName = document.querySelector('.player-two-name');
const playerOneSymbol = document.querySelector('.player-one-symbol');
const playerTwoSymbol = document.querySelector('.player-two-symbol');
const gameStatus = document.querySelector('.game-status');


//Create two players aligned with the Player class
//const playerOne = ...
const playerOne = new Player("Alaa", "X");
//const playerTwo = ...
const playerTwo = new Player("ALi", "O");
//Add both players to the players array
players.push(playerOne);
players.push(playerTwo);
playerOneName.textContent = players[0].name;
playerOneSymbol.textContent = players[0].symbol;
playerTwoSymbol.textContent = players[1].symbol;
playerTwoName.textContent = players[1].name;
console.log(players);


/**
 * Assignment
 * Make a loop thru all the fields and add a click event. 
 * Connect the addSymbolToField function in the eventHandler
 */
//for ...
for (let i = 0; i < fields.length; i++) {
    fields[i].addEventListener('click', function () {
        addSymbolToField(this);
        checkWinner();


    })

}


/**
 * Assignment 
 * Give body to the reset function (the function exists below)
 */
resetButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", status);



function addSymbolToField(field) {
    const fieldContent = field.textContent;
    if (fieldContent === 'X' || fieldContent === 'O') {
        alert('This field can not be used');
    }

    /**
     * Assignment
     * Add the current player symbol to the field textContent
     * What more needs to be done here? Make a short todolist
     */
    field.textContent = players[currentPlayer].symbol;
    currentPlayer++;
    if (currentPlayer > 1) {
        currentPlayer = 0;
    }


}
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function checkWinner() {
    /**
     * Assignment
     * Add an algorithm to check if someone has three in a row
     * Try to use Internet - if not found the teacher will give you one
     * Also make sure you check for a draw (gelijkspel)
     * Again what more needs to be done, make a short todolist
     */
    for (let i = 0; i < winningConditions.length; i++) {
        const winline = winningConditions[i];
        let winX = true;
        let winO = true;
        for (let j = 0; j < winline.length; j++) {
            const fieldIndex = winline[j];
            const field = fields[fieldIndex].textContent.toLowerCase();
            if (field === "x") {
                winO = false;
            }
            else if (field === "o") {
                winX = false;
            }
            else {
                winO = winX = false;
            }
        }
        if (winX) {
            alert("X IS winner")
            addPointsPlayerOne();
            gameStatus.textContent = "";
            const p = document.createElement("p");
            p.textContent += players[0].name + " " + players[0].symbol + " " + "Win!" + " " + "score of player " + players[0].getPoints();
            gameStatus.append(p);
            setTimeout(resetGame, 2000);
            status();
        }
        else if (winO) {
            alert("O Is winner");
            addPointsPlayerTwo();
            gameStatus.textContent += "";
            const p = document.createElement("p");
            p.textContent += players[1].name + " " + players[1].symbol + " " + "Win!" + " " + "score of player " + players[1].getPoints();
            gameStatus.append(p);
            setTimeout(resetGame, 2000);
            status();
        }
        else if ((fields[0].textContent == 'X' || fields[0].textContent == 'O') && (fields[1].textContent == 'X'
            || fields[1].textContent == 'O') && (fields[2].textContent == 'X' || fields[2].textContent == 'O') &&
            (fields[3].textContent == 'X' || fields[3].textContent == 'O') && (fields[4].textContent == 'X' ||
                fields[4].textContent == 'O') && (fields[5].textContent == 'X' || fields[5].textContent == 'O') &&
            (fields[6].textContent == 'X' || fields[6].textContent == 'O') && (fields[7].textContent == 'X' ||
                fields[7].textContent == 'O') && (fields[8].textContent == 'X' || fields[8].textContent == 'O')) {
            gameStatus.textContent = "";
            const p = document.createElement("p");
            p.textContent = "Draw";
            gameStatus.append(p);
            setTimeout(resetGame, 2000);
            status();
        }

    }

}

function resetGame() {
    /**
     * Assignment
     * Make sure this works (all fields empty, reset data if needed)
     */
    console.log("Resetting the game");
    for (let i = 0; i < fields.length; i++) {
        fields[i].textContent = "";
    }

}
function status() {
    setTimeout(function () { gameStatus.textContent = ""; }, 10000);
}

function addPointsPlayerOne() {
    console.log(" score of player 1");
    players[0].addPoints();

}
function addPointsPlayerTwo() {
    console.log(" score of player 2");
    players[1].addPoints();
}


