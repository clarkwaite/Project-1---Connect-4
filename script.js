
$(document).ready(function () {

    //game board creation
    //code assistance from http://stackoverflow.com/questions/2984077/jquery-dynamically-genearate-element-id-in-a-loop
    function createGameBoard() {
        for (var i = 1; i <= 42; i++) {
            var divToAppend = $('#game-board');
            divToAppend.append($('<div/>', {
                id: 'n' + i,
                class: 'emptyCircle'
            }));
        }
    }
    createGameBoard();

    //on-click functionality
     var playerNumber = 1;
    $('.emptyCircle').on('click', function (event) {
        var target = (event.target.classList[1]);
        if (playerNumber === 1 && target !== 'redCircle') {
            $(event.target).addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            console.log('black');
        } else if (playerNumber === 2 && target !== 'blackCircle') {
            $(event.target).addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;
            console.log('red');
     } 
    })
var firstColumn = ['#n36','#n29','#n22','#n15','#n8','#n1'];



});