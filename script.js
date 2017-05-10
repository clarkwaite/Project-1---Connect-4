
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
    $(".emptyCircle")
        .css("height", '55px')
        .css('width', '55px')
        .css('margin-top', -1)
        .css('margin-bottom', -4)
        .css('border', 'solid black 3px')
        .css('border-radius', '50%')
        .css('display', 'inline-block')
        .css('background-color', 'white')

    //on-click functionality
     var blackCount = 0;
    $('.emptyCircle').on('click', function (event) {
        var target = (event.target.classList[1]);
        if (blackCount === 0 && target !== 'redCircle') {
            $(event.target).addClass('blackCircle');
            blackCount += 1;
            console.log('black');
        } else if
            (blackCount === 1 && target !== 'blackCircle') {
            $(event.target).addClass('redCircle');
            blackCount -= 1;
            console.log('red');
        } 
    })
});