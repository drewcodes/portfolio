$(document).ready(function () {
    // Default Player's Turn When Game Starts
    var turn = "X";
    // Array stores values to check for winner
    var turns = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    // Default computer's turn
    var computersTurn = "O";
    // Keeps track who's turn it is
    var gameOn = false;
    // Track computer's turn
    var count = 0;
    // Reset
    function reset() {
        turns = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        count = 0;
        $('.tic').text(' ');
        gameOn = false;
        $('.player-move').addClass('active');
        $('.tic').css('background-color', '#ffffff');
        $('#thinking').html('');
    }
    // Toggle player's position (X or O)
    $('#turnX').click(function () {
        turn = "X";
        computersTurn = "O";
        $('.player-move').addClass('active');
        $('#turnX').css('background-color', '#45c362');
        $('#turnO').css('background-color', '#3c3c3c');
        reset();
    });
    $('#turnO').click(function () {
        turn = "O";
        computersTurn = "X";
        $('.player-move').addClass('active');
        $('#turnX').css('background-color', '#3c3c3c');
        $('#turnO').css('background-color', '#45c362');
        reset();
    });
    $('.reset').click(function () {
        reset();
    });

    function computerTurn() {
        $('.player-move').removeClass('active');
        $('#thinking').html('Computer is thinking...');
        // Var to break while loop
        var taken = false;
      
        var thinking = ((Math.random() * 1000)+200).toFixed();
      
        setTimeout(function () {
            $('#thinking').html('');
            while (taken === false && count !== 5) {
                // Generate random turn
                var computersMove = (Math.random() * 10).toFixed();
                var move = $('#' + computersMove).text();
                if (move === ' ') {
                    $('#' + computersMove).text(computersTurn);
                    taken = true;
                    turns[computersMove] = computersTurn;
                    winCondition(turns, computersTurn);
                    $('.player-move').addClass('active');
                }
            }
        }, thinking);
    }

    function playerTurn(turn, id) {
        var spotTaken = $('#' + id).text();
        if (spotTaken === " ") {
            count++;
            turns[id] = turn;
            $('#' + id).text(turn);
            winCondition(turns, turn);
            if (gameOn === false) {
                computerTurn();
                winCondition(turns, computersTurn);
            }
        }
    }

    function winCondition(turnArray, currentTurn) {
        if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset();
            }, 1200);
        }
        else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset();
            }, 1200);
        }
        else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset();
            }, 1200);
        }
        else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset();
            }, 1200);
        }
        else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset();
            }, 1200);
        }
        else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset();
            }, 1200);
        }
        else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset();
            }, 1200);
        }
        else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset();
            }, 1500);
        }
        else {
            gameOn = false;
        }
    }
    $('.tic').click(function () {
        var slot = $(this).attr('id');
        playerTurn(turn, slot);
    });
});
