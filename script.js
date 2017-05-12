
$(document).ready(function () {

    //game board creation
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
   //reset board  
   function resetGameBoard() {
            $("#game-board div").removeClass("blackCircle");
            $("#game-board div").removeClass("redCircle");
            $("#game-board div").addClass("emptyCircle");  
    }
    $('#reset').click(resetGameBoard);
    

//playerNames
    var playerNumber = 1;

    
//change player AND check win conditions
    function playerChange() {
        if (playerNumber === 1) {
            playerNumber = 2;
        } else if (playerNumber === 2) {
            playerNumber = 1;
        }
        winConditions ();
        winConditions2 ();
        winConditions3 ();
        winConditions4 ();
        winConditions5 ();
        winConditions6 ();
        winConditions7 ();
        winConditions8 ();
        winConditions9 ();
        winConditions10 ();
        winConditions11 ();
        winConditions12 ();
        winConditions13 ();
        winConditions14 ();
        winConditions15 ();
        winConditions16 ();
        winConditions17 ();
        winConditions18 ();
        winConditions19 ();
        winConditions20 ();
        winConditions21 ();
        winConditions22 ();
        winConditions23 ();
        winConditions24 ();
        winConditions25 ();
        
    }

//arrays containing all possible win conditions
    var con1 =  [$('#n36'), $('#n29'), $('#n22'), $('#n15'), $('#n8'), $('#n1')];
    var con2 =  [$('#n37'), $('#n30'), $('#n23'), $('#n16'), $('#n9'), $('#n2')];
    var con3 =  [$('#n38'), $('#n31'), $('#n24'), $('#n17'), $('#n10'), $('#n3')];
    var con4 =  [$('#n39'), $('#n32'), $('#n25'), $('#n18'), $('#n11'), $('#n4')];
    var con5 =  [$('#n40'), $('#n33'), $('#n26'), $('#n19'), $('#n12'), $('#n5')];
    var con6 =  [$('#n41'), $('#n34'), $('#n27'), $('#n20'), $('#n13'), $('#n6')];
    var con7 =  [$('#n42'), $('#n35'), $('#n28'), $('#n21'), $('#n14'), $('#n7')];
    
    var con8 =  [$('#n36'), $('#n30'), $('#n24'), $('#n18'), $('#n12'), $('#n6')];
    var con9 =  [$('#n37'), $('#n31'), $('#n25'), $('#n19'), $('#n13'), $('#n7')];
    var con10 = [$('#n41'), $('#n33'), $('#n25'), $('#n17'), $('#n9'), $('#n1')];
    var con11 = [$('#n42'), $('#n34'), $('#n26'), $('#n18'), $('#n10'), $('#n2')];

    var con12 = [$('#n1'), $('#n2'), $('#n3'), $('#n4'), $('#n5'), $('#n6'), $('#n7')];
    var con13 = [$('#n8'), $('#n9'), $('#n10'), $('#n11'), $('#n12'), $('#n13'), $('#n14')];
    var con14 = [$('#n15'), $('#n16'), $('#n17'), $('#n18'), $('#n19'), $('#n20'), $('#n21')];
    var con15 = [$('#n22'), $('#n23'), $('#n24'), $('#n25'), $('#n26'), $('#n27'), $('#n28')];
    var con16 = [$('#n29'), $('#n30'), $('#n31'), $('#n32'), $('#n33'), $('#n34'), $('#n35')];
    var con17 = [$('#n36'), $('#n37'), $('#n38'), $('#n39'), $('#n40'), $('#n41'), $('#n42')];

    var con18 = [$('#n29'), $('#n23'), $('#n17'), $('#n11'), $('#n5')];
    var con19 = [$('#n38'), $('#n32'), $('#n26'), $('#n20'), $('#n14')];
    var con20 = [$('#n40'), $('#n32'), $('#n24'), $('#n16'), $('#n8')];
    var con21 = [$('#n35'), $('#n27'), $('#n19'), $('#n11'), $('#n3')];

    var con22 = [$('#n39'), $('#n33'), $('#n27'), $('#n21')];
    var con23 = [$('#n39'), $('#n31'), $('#n23'), $('#n15')];
    var con24 = [$('#n28'), $('#n20'), $('#n12'), $('#n4')];
    var con25 = [$('#n22'), $('#n16'), $('#n10'), $('#n4')];

   //not DRY but working functions that check for wins
    function winConditions() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con1.length; i++) {
            if (con1[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con1[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
 function winConditions2() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con2.length; i++) {
            if (con2[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con2[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions3() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con3.length; i++) {
            if (con3[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con3[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions4() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con4.length; i++) {
            if (con4[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con4[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions5() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con5.length; i++) {
            if (con5[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con5[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions6() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con6.length; i++) {
            if (con6[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con6[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions7() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con7.length; i++) {
            if (con7[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con7[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions8() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con8.length; i++) {
            if (con8[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con8[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions9() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con9.length; i++) {
            if (con9[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con9[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions10() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con10.length; i++) {
            if (con10[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con10[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions11() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con11.length; i++) {
            if (con11[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con11[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions12() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con12.length; i++) {
            if (con12[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con12[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions13() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con13.length; i++) {
            if (con13[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con13[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions14() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con14.length; i++) {
            if (con14[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con14[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions15() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con15.length; i++) {
            if (con15[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con15[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions16() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con16.length; i++) {
            if (con16[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con16[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions17() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con17.length; i++) {
            if (con17[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con17[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions18() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con18.length; i++) {
            if (con18[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con18[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions19() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con19.length; i++) {
            if (con19[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con19[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions20() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con20.length; i++) {
            if (con20[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con20[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions21() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con21.length; i++) {
            if (con21[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con21[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
     function winConditions22() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con22.length; i++) {
            if (con22[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con22[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
       function winConditions23() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con23.length; i++) {
            if (con23[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con23[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
       function winConditions24() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con24.length; i++) {
            if (con24[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con24[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }
       function winConditions25() {
        var checkRed = 0;
        var checkBlack = 0;
        for (var i = 0; i < con25.length; i++) {
            if (con25[i].attr('class') === 'blackCircle') {
                checkBlack = checkBlack + 1;
                checkRed = 0;
                if (checkBlack === 4)
                    alert('Black Wins!')
            } else if (con25[i].attr('class') === 'redCircle') {
                checkRed = checkRed + 1;
                checkBlack = 0;
                if (checkRed === 4) {
                    alert('Red Wins!')
                }
            }
        }
    }

//functions to fill in stacking rows on button click
    $('#column1').on('click', function () {
        var firstColumn = [$('#n36'), $('#n29'), $('#n22'), $('#n15'), $('#n8'), $('#n1')];
        for (var i = 0; i < firstColumn.length; i++) {
            if (firstColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
                firstColumn[i].addClass('blackCircle').removeClass('emptyCircle');
                playerChange();
                break

            } else if (firstColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) {
                firstColumn[i].addClass('redCircle').removeClass('emptyCircle');
                playerChange();
                break
            }
        }
    })
    $('#column2').on('click', function () {
        var secondColumn = [$('#n37'), $('#n30'), $('#n23'), $('#n16'), $('#n9'), $('#n2')];
        for (var i = 0; i < secondColumn.length; i++) {
            if (secondColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
                secondColumn[i].addClass('blackCircle').removeClass('emptyCircle');
                playerNumber = 2;
                break
            } else if (secondColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) {
                secondColumn[i].addClass('redCircle').removeClass('emptyCircle');
                playerChange();
                break
            }
        }
    })
    $('#column3').on('click', function () {
        var thirdColumn = [$('#n38'), $('#n31'), $('#n24'), $('#n17'), $('#n10'), $('#n3')];
        for (var i = 0; i < thirdColumn.length; i++) {
            if (thirdColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
                thirdColumn[i].addClass('blackCircle').removeClass('emptyCircle');
                playerChange();
                break
            } else if (thirdColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) {
                thirdColumn[i].addClass('redCircle').removeClass('emptyCircle');
                playerChange();
                break
            }
        }
    })
    $('#column4').on('click', function () {
        var fourthColumn = [$('#n39'), $('#n32'), $('#n25'), $('#n18'), $('#n11'), $('#n4')];
        for (var i = 0; i < fourthColumn.length; i++) {
            if (fourthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
                fourthColumn[i].addClass('blackCircle').removeClass('emptyCircle');
                playerChange();
                break
            } else if (fourthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) {
                fourthColumn[i].addClass('redCircle').removeClass('emptyCircle');
                playerChange();
                break
            }
        }
    })
    $('#column5').on('click', function () {
        var fifthColumn = [$('#n40'), $('#n33'), $('#n26'), $('#n19'), $('#n12'), $('#n5')];
        for (var i = 0; i < fifthColumn.length; i++) {
            if (fifthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
                fifthColumn[i].addClass('blackCircle').removeClass('emptyCircle');
                playerChange();
                break
            } else if (fifthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) {
                fifthColumn[i].addClass('redCircle').removeClass('emptyCircle');
                playerChange();
                break
            }
        }
    })
    $('#column6').on('click', function () {
        var sixthColumn = [$('#n41'), $('#n34'), $('#n27'), $('#n20'), $('#n13'), $('#n6')];
        for (var i = 0; i < sixthColumn.length; i++) {
            if (sixthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
                sixthColumn[i].addClass('blackCircle').removeClass('emptyCircle');
                playerChange();
                break
            } else if (sixthColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) {
                sixthColumn[i].addClass('redCircle').removeClass('emptyCircle');
                playerChange();
                break
            }
        }
    })
    $('#column7').on('click', function () {
        var seventhColumn = [$('#n42'), $('#n35'), $('#n28'), $('#n21'), $('#n14'), $('#n7')];
        for (var i = 0; i < seventhColumn.length; i++) {
            if (seventhColumn[i].attr('class') === 'emptyCircle' && playerNumber === 1) {
                seventhColumn[i].addClass('blackCircle').removeClass('emptyCircle');
                playerChange();
                break
            } else if (seventhColumn[i].attr('class') === 'emptyCircle' && playerNumber === 2) {
                seventhColumn[i].addClass('redCircle').removeClass('emptyCircle');
                playerChange();
                break
            }
        }
    })

});