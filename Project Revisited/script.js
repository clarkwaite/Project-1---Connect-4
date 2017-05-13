
$(document).ready(function () {

var gameInfo = {
        blackPlayerName: "Player 1",
        redPlayerName: "Player 2",
        startingPlayer: "black", // this can be black or red if you want to alternate
        drawMessage: "This game is a draw.",
        winMessage: "The winner is: ",
        countToWin: 4,
    };
//array of arrays representing the game board. 
//Empty spaces will be 0, R will be red, and B will be black.

const board =[[0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]];
});

var activePlayer = gameInfo.startingPlayer;

