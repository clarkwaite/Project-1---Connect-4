
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
    //player turn global variable
    var playerColor = 'Black';

    //change player names for alerts
    var name1 = 'Black';
    var name2 = 'Red';

    //reset board  
    function resetGameBoard() {
        $("#game-board div").removeClass("blackCircle");
        $("#game-board div").removeClass("redCircle");
        $("#game-board div").addClass("emptyCircle");
    }
    $('#reset').click(resetGameBoard);

    //change player AND check win conditions
    function playerChange() {

        winConditionsLength6();
        winConditionsLength7();
        winConditionsLength5();
        winConditionsLength4();
        
        if (playerColor === 'Black') {
            $("#aboveBoard").empty();
            $("#aboveBoard").prepend('<div><div/>').html(name2 + "\'s" + " Turn!");
            $("#aboveBoard").css('color', 'rgba(255, 75, 75, .9)');
            playerColor = 'Red';
        } else if (playerColor === 'Red') {
            $("#aboveBoard").empty();
            $("#aboveBoard").prepend('<div><div/>').html(name1 + "\'s" + " Turn!");
            $("#aboveBoard").css('color', 'rgba(0,0,0,.7)');
            playerColor = 'Black';
        }
        // winConditions5();
        // winConditions6();
        // winConditions7();
        // winConditions8();
        // winConditions9();
        // winConditions10();
        // winConditions11();
        // winConditions12();
        // winConditions13();
        // winConditions14();
        // winConditions15();
        // winConditions16();
        // winConditions17();
        // winConditions18();
        // winConditions19();
        // winConditions20();
        // winConditions21();
        // winConditions22();
        // winConditions23();
        // winConditions24();
        // winConditions25();
    }

    //arrays containing all possible win conditions
    var con1 = [$('#n36'), $('#n29'), $('#n22'), $('#n15'), $('#n8'), $('#n1')];
    var con2 = [$('#n37'), $('#n30'), $('#n23'), $('#n16'), $('#n9'), $('#n2')];
    var con3 = [$('#n38'), $('#n31'), $('#n24'), $('#n17'), $('#n10'), $('#n3')];
    var con4 = [$('#n39'), $('#n32'), $('#n25'), $('#n18'), $('#n11'), $('#n4')];
    var con5 = [$('#n40'), $('#n33'), $('#n26'), $('#n19'), $('#n12'), $('#n5')];
    var con6 = [$('#n41'), $('#n34'), $('#n27'), $('#n20'), $('#n13'), $('#n6')];
    var con7 = [$('#n42'), $('#n35'), $('#n28'), $('#n21'), $('#n14'), $('#n7')];
    var con8 = [$('#n36'), $('#n30'), $('#n24'), $('#n18'), $('#n12'), $('#n6')];
    var con9 = [$('#n37'), $('#n31'), $('#n25'), $('#n19'), $('#n13'), $('#n7')];
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

    var conditionsLength6 = [con1,con2,con3,con4,con5,con6,con7,con8,con9,con10,con11];
    var conditionsLength7 = [con12,con13,con14,con15,con16,con17];
    var conditionsLength5 = [con18,con19,con20,con21];
    var conditionsLength4 = [con22,con23,con24,con25];

 //testing win conditions with a length of 6
    function winConditionsLength6() {
        var currentValue = null,
        previousValue = 0,
        tally = 0;

 for (var i = 0; i < conditionsLength6.length; i++) {
    for (var x = 0; x < con1.length; x++) {
           
            currentValue = conditionsLength6[i][x].attr('class');
            if (currentValue === previousValue && currentValue !== 'emptyCircle') {
                tally += 1;
            } else {
                // Reset the tally if you find a gap.
                tally = 0;
            }
            if (tally === 3) {
                
            }
            previousValue = currentValue;
        }

        // After each row, reset the tally and previous value.
        tally = 0;
        previousValue = 0;
    }
    }

//testing win conditions with a length of 7
     function winConditionsLength7() {
        var currentValue = null,
        previousValue = 0,
        tally = 0;

 for (var i = 0; i < conditionsLength7.length; i++) {
    for (var x = 0; x < con12.length; x++) {
           
            currentValue = conditionsLength7[i][x].attr('class');
            if (currentValue === previousValue && currentValue !== 'emptyCircle') {
                tally += 1;
            } else {
                // Reset the tally if you find a gap.
                tally = 0;
            }
            if (tally === 3) {
                
            }
            previousValue = currentValue;
        }

        // After each row, reset the tally and previous value.
        tally = 0;
        previousValue = 0;
    }
    }


//testing win conditions with a length of 5
     function winConditionsLength5() {
        var currentValue = null,
        previousValue = 0,
        tally = 0;

 for (var i = 0; i < conditionsLength5.length; i++) {
    for (var x = 0; x < con18.length; x++) {
           
            currentValue = conditionsLength5[i][x].attr('class');
            if (currentValue === previousValue && currentValue !== 'emptyCircle') {
                tally += 1;
            } else {
                // Reset the tally if you find a gap.
                tally = 0;
            }
            if (tally === 3) {
                
            }
            previousValue = currentValue;
        }

        // After each row, reset the tally and previous value.
        tally = 0;
        previousValue = 0;
    }
    }

     
//testing win conditions with a length of 4
     function winConditionsLength4() {
        var currentValue = null,
        previousValue = 0,
        tally = 0;

 for (var i = 0; i < conditionsLength4.length; i++) {
    for (var x = 0; x < con22.length; x++) {
           
            currentValue = conditionsLength4[i][x].attr('class');
            if (currentValue === previousValue && currentValue !== 'emptyCircle') {
                tally += 1;
            } else {
                // Reset the tally if you find a gap.
                tally = 0;
            }
            if (tally === 3) {
                
            }
            previousValue = currentValue;
        }

        // After each row, reset the tally and previous value.
        tally = 0;
        previousValue = 0;
    }
    }

    //functions to fill in stacking rows on button click
    $('#column1').on('click', function () {
        var firstColumn = [$('#n36'), $('#n29'), $('#n22'), $('#n15'), $('#n8'), $('#n1')];
        for (var i = 0; i < firstColumn.length; i++) {
            if (firstColumn[i].attr('class') === 'emptyCircle' && playerColor === 'Black') {
                firstColumn[i].addClass('blackCircle').removeClass('emptyCircle');
                playerChange();
                break
            } else if (firstColumn[i].attr('class') === 'emptyCircle' && playerColor === 'Red') {
                firstColumn[i].addClass('redCircle').removeClass('emptyCircle');
                playerChange();
                break
            }
        }
    })
    $('#column2').on('click', function () {
        var secondColumn = [$('#n37'), $('#n30'), $('#n23'), $('#n16'), $('#n9'), $('#n2')];
        for (var i = 0; i < secondColumn.length; i++) {
            if (secondColumn[i].attr('class') === 'emptyCircle' && playerColor === 'Black') {
                secondColumn[i].addClass('blackCircle').removeClass('emptyCircle');
                playerChange();
                break
            } else if (secondColumn[i].attr('class') === 'emptyCircle' && playerColor === 'Red') {
                secondColumn[i].addClass('redCircle').removeClass('emptyCircle');
                playerChange();
                break
            }
        }
    })
    $('#column3').on('click', function () {
        var thirdColumn = [$('#n38'), $('#n31'), $('#n24'), $('#n17'), $('#n10'), $('#n3')];
        for (var i = 0; i < thirdColumn.length; i++) {
            if (thirdColumn[i].attr('class') === 'emptyCircle' && playerColor === 'Black') {
                thirdColumn[i].addClass('blackCircle').removeClass('emptyCircle');
                playerChange();
                break
            } else if (thirdColumn[i].attr('class') === 'emptyCircle' && playerColor === 'Red') {
                thirdColumn[i].addClass('redCircle').removeClass('emptyCircle');
                playerChange();
                break
            }
        }
    })
    $('#column4').on('click', function () {
        var fourthColumn = [$('#n39'), $('#n32'), $('#n25'), $('#n18'), $('#n11'), $('#n4')];
        for (var i = 0; i < fourthColumn.length; i++) {
            if (fourthColumn[i].attr('class') === 'emptyCircle' && playerColor === 'Black') {
                fourthColumn[i].addClass('blackCircle').removeClass('emptyCircle');
                playerChange();
                break
            } else if (fourthColumn[i].attr('class') === 'emptyCircle' && playerColor === 'Red') {
                fourthColumn[i].addClass('redCircle').removeClass('emptyCircle');
                playerChange();
                break
            }
        }
    })
    $('#column5').on('click', function () {
        var fifthColumn = [$('#n40'), $('#n33'), $('#n26'), $('#n19'), $('#n12'), $('#n5')];
        for (var i = 0; i < fifthColumn.length; i++) {
            if (fifthColumn[i].attr('class') === 'emptyCircle' && playerColor === 'Black') {
                fifthColumn[i].addClass('blackCircle').removeClass('emptyCircle');
                playerChange();
                break
            } else if (fifthColumn[i].attr('class') === 'emptyCircle' && playerColor === 'Red') {
                fifthColumn[i].addClass('redCircle').removeClass('emptyCircle');
                playerChange();
                break
            }
        }
    })
    $('#column6').on('click', function () {
        var sixthColumn = [$('#n41'), $('#n34'), $('#n27'), $('#n20'), $('#n13'), $('#n6')];
        for (var i = 0; i < sixthColumn.length; i++) {
            if (sixthColumn[i].attr('class') === 'emptyCircle' && playerColor === 'Black') {
                sixthColumn[i].addClass('blackCircle').removeClass('emptyCircle');
                playerChange();
                break
            } else if (sixthColumn[i].attr('class') === 'emptyCircle' && playerColor === 'Red') {
                sixthColumn[i].addClass('redCircle').removeClass('emptyCircle');
                playerChange();
                break
            }
        }
    })
    $('#column7').on('click', function () {
        var seventhColumn = [$('#n42'), $('#n35'), $('#n28'), $('#n21'), $('#n14'), $('#n7')];
        for (var i = 0; i < seventhColumn.length; i++) {
            if (seventhColumn[i].attr('class') === 'emptyCircle' && playerColor === 'Black') {
                seventhColumn[i].addClass('blackCircle').removeClass('emptyCircle');
                playerChange();
                break
            } else if (seventhColumn[i].attr('class') === 'emptyCircle' && playerColor === 'Red') {
                seventhColumn[i].addClass('redCircle').removeClass('emptyCircle');
                playerChange();
                break
            }
        }
    })

});