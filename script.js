
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
    var playerNumber = 1;

$('#row1').on('click', function () { 
    var firstColumn = [$('#n36'),$('#n29'),$('#n22'),$('#n15'),$('#n8'),$('#n1')];
  for (var i = 0; i < firstColumn.length; i++) {
      if (firstColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
         firstColumn[i].addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            console.log('black');
            break
      } else if (firstColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) { 
         firstColumn[i].addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;
            console.log('red');
            break
      }
  }
})
$('#row2').on('click', function () { 
    var secondColumn = [$('#n37'),$('#n30'),$('#n23'),$('#n16'),$('#n9'),$('#n2')];
  for (var i = 0; i < secondColumn.length; i++) {
      if (secondColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
         secondColumn[i].addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            console.log('black');
            break
      } else if (secondColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) { 
         secondColumn[i].addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;
            console.log('red');
            break
      }
  }
})
$('#row3').on('click', function () { 
    var thirdColumn = [$('#n38'),$('#n31'),$('#n24'),$('#n17'),$('#n10'),$('#n3')];
  for (var i = 0; i < thirdColumn.length; i++) {
      if (thirdColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
         thirdColumn[i].addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            console.log('black');
            break
      } else if (thirdColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) { 
         thirdColumn[i].addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;
            console.log('red');
            break
      }
  }
})
$('#row4').on('click', function () { 
    var fourthColumn = [$('#n39'),$('#n32'),$('#n25'),$('#n18'),$('#n11'),$('#n4')];
  for (var i = 0; i < fourthColumn.length; i++) {
      if (fourthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
         fourthColumn[i].addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            console.log('black');
            break
      } else if (fourthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) { 
         fourthColumn[i].addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;
            console.log('red');
            break
      }
  }
})
$('#row5').on('click', function () { 
    var fifthColumn = [$('#n40'),$('#n33'),$('#n26'),$('#n19'),$('#n12'),$('#n5')];
  for (var i = 0; i < fifthColumn.length; i++) {
      if (fifthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
         fifthColumn[i].addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            console.log('black');
            break
      } else if (fifthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) { 
         fifthColumn[i].addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;
            console.log('red');
            break
      }
  }
})
$('#row6').on('click', function () { 
    var sixthColumn = [$('#n41'),$('#n34'),$('#n27'),$('#n20'),$('#n13'),$('#n6')];
  for (var i = 0; i < sixthColumn.length; i++) {
      if (sixthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
         sixthColumn[i].addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            console.log('black');
            break
      } else if (sixthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) { 
         sixthColumn[i].addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;
            console.log('red');
            break
      }
  }
})
$('#row7').on('click', function () { 
    var seventhColumn = [$('#n42'),$('#n35'),$('#n28'),$('#n21'),$('#n14'),$('#n7')];
  for (var i = 0; i < seventhColumn.length; i++) {
      if (seventhColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
         seventhColumn[i].addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            console.log('black');
            break
      } else if (seventhColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) { 
         seventhColumn[i].addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;
            console.log('red');
            break
      }
  }
})
    //event.target.what you need to happen

});