
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

//check for win

var con1 = [$('#n36'),$('#n29'),$('#n22'),$('#n15'),$('#n8'),$('#n1')];
var con2 = [$('#n37'),$('#n30'),$('#n23'),$('#n16'),$('#n9'),$('#n2')];
var con3 = [$('#n38'),$('#n31'),$('#n24'),$('#n17'),$('#n10'),$('#n3')];
var con4 = [$('#n39'),$('#n32'),$('#n25'),$('#n18'),$('#n11'),$('#n4')];
var con5 = [$('#n40'),$('#n33'),$('#n26'),$('#n19'),$('#n12'),$('#n5')];
var con6 = [$('#n41'),$('#n34'),$('#n27'),$('#n20'),$('#n13'),$('#n6')];
var con7 = [$('#n41'),$('#n34'),$('#n27'),$('#n20'),$('#n13'),$('#n6')];
var con8 = [$('#n42'),$('#n35'),$('#n28'),$('#n21'),$('#n14'),$('#n7')];
var con9 = [$('#n1'),$('#n2'),$('#n3'),$('#n4'),$('#n5'),$('#n6'),$('#n7')];
var con10 = [$('#n8'),$('#n9'),$('#n10'),$('#n11'),$('#n12'),$('#n13'),$('#n14')];
var con11 = [$('#n15'),$('#n16'),$('#n17'),$('#n18'),$('#n19'),$('#n20'),$('#n21')];
var con12 = [$('#n22'),$('#n23'),$('#n24'),$('#n25'),$('#n26'),$('#n27'),$('#n28')];
var con13 = [$('#n29'),$('#n30'),$('#n31'),$('#n32'),$('#n33'),$('#n34'),$('#n35')];
var con14 = [$('#36'),$('#37'),$('#38'),$('#39'),$('#40'),$('#41'),$('#42')];
var con15 = [$('#22'),$('#16'),$('#10'),$('#4')];
var con16 = [$('#29'),$('#23'),$('#17'),$('#11'),$('#5')];
var con17 = [$('#36'),$('#30'),$('#24'),$('#18'),$('#12'),$('#6')];
var con18 = [$('#37'),$('#31'),$('#25'),$('#19'),$('#13'),$('#7')];
var con19 = [$('#38'),$('#32'),$('#26'),$('#20'),$('#14')];
var con20 = [$('#39'),$('#33'),$('#27'),$('#21')];
var con21 = [$('#39'),$('#31'),$('#23'),$('#15')];
var con22 = [$('#40'),$('#32'),$('#24'),$('#16'),$('#8')];
var con23 = [$('#41'),$('#33'),$('#25'),$('#17'),$('#9'),$('#1')];
var con24 = [$('#42'),$('#34'),$('#26'),$('#18'),$('#10'),$('#2')];
var con25 = [$('#35'),$('#27'),$('#19'),$('#11'),$('#3')];
var con26 = [$('#28'),$('#20'),$('#12'),$('#4')];
var checkRed = 0;
var checkBlack = 0;
var variables = [con1,con2,con3,con4,con5,con6,con7,con8,con9,con10,con11,con12,con13,con14,con15,con16,con17,con18,con19,con20,con21,con22,con23,con24,con25,con26];
function winConditions() {
for (var i = 0; i <= con1.length; i++) {
    for (var j = 0; j <= variables.length; j++) {
    if (con1[i].attr('class') === 'redCircle') {
        checkBlack = 0 && checkRed ++;
    if (checkRed === 4){
        alert('Red Wins!');
   } else if (variables[j][i].attr('class') === 'blackCircle') {
        checkRed = 0 && checkBlack++;   
         if (checkBlack === 4){
        alert('Black Wins!');
     }   
    }   
   }
  }
 }
}

$('#column1').on('click', function () { 
    var firstColumn = [$('#n36'),$('#n29'),$('#n22'),$('#n15'),$('#n8'),$('#n1')];
  for (var i = 0; i < firstColumn.length; i++) {
      if (firstColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
         firstColumn[i].addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            winConditions()
            break
      } else if (firstColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) { 
         firstColumn[i].addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;           
            winConditions()
            break
      }
  }
})
$('#column2').on('click', function () { 
    var secondColumn = [$('#n37'),$('#n30'),$('#n23'),$('#n16'),$('#n9'),$('#n2')];
  for (var i = 0; i < secondColumn.length; i++) {
      if (secondColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
         secondColumn[i].addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            break
      } else if (secondColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) { 
         secondColumn[i].addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;           break
      }
  }
})
$('#column3').on('click', function () { 
    var thirdColumn = [$('#n38'),$('#n31'),$('#n24'),$('#n17'),$('#n10'),$('#n3')];
  for (var i = 0; i < thirdColumn.length; i++) {
      if (thirdColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
         thirdColumn[i].addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            break
      } else if (thirdColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) { 
         thirdColumn[i].addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;           break
      }
  }
})
$('#column4').on('click', function () { 
    var fourthColumn = [$('#n39'),$('#n32'),$('#n25'),$('#n18'),$('#n11'),$('#n4')];
  for (var i = 0; i < fourthColumn.length; i++) {
      if (fourthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
         fourthColumn[i].addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            break
      } else if (fourthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) { 
         fourthColumn[i].addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;           break
      }
  }
})
$('#column5').on('click', function () { 
    var fifthColumn = [$('#n40'),$('#n33'),$('#n26'),$('#n19'),$('#n12'),$('#n5')];
  for (var i = 0; i < fifthColumn.length; i++) {
      if (fifthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
         fifthColumn[i].addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            break
      } else if (fifthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) { 
         fifthColumn[i].addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;           break
      }
  }
})
$('#column6').on('click', function () { 
    var sixthColumn = [$('#n41'),$('#n34'),$('#n27'),$('#n20'),$('#n13'),$('#n6')];
  for (var i = 0; i < sixthColumn.length; i++) {
      if (sixthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
         sixthColumn[i].addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            break
      } else if (sixthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) { 
         sixthColumn[i].addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;           break
      }
  }
})
$('#column7').on('click', function () { 
    var seventhColumn = [$('#n42'),$('#n35'),$('#n28'),$('#n21'),$('#n14'),$('#n7')];
  for (var i = 0; i < seventhColumn.length; i++) {
      if (seventhColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
         seventhColumn[i].addClass('blackCircle').removeClass('emptyCircle');
            playerNumber = 2;
            break
      } else if (seventhColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) { 
         seventhColumn[i].addClass('redCircle').removeClass('emptyCircle');
            playerNumber = 1;           break
      }
  }
})

});