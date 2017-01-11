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
    // Scores
    var player = 0;
    var computer = 0;
    // Reset
    function reset() {
        turns = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        count = 0;
        $('.tic').text(' ');
        gameOn = false;
        $('.player-move').addClass('active');
        $('.tic').css('background-color', '#ffffff');
        $('#thinking').html('');
        player = 0;
        computer = 0;
        $('#player').html('0');
        $('#computer').html('0');
    }
    
    // Reset when tied
    function reset2() {
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
        $('#thinking').html("Player's turn!");
    });
    $('#turnO').click(function () {
        turn = "O";
        computersTurn = "X";
        $('.player-move').addClass('active');
        $('#turnX').css('background-color', '#3c3c3c');
        $('#turnO').css('background-color', '#45c362');
        reset();
        $('#thinking').html("Player's turn!");
    });
    
    
    // Reset Button
    $('.reset').click(function () {
        reset();
    });

    function computerTurn() {
        $('.player-move').removeClass('active');
        $('#thinking').css('color','#e24646');
        $('#thinking').html("Computer's turn. Thinking...");
        // Var to break while loop
        var taken = false;
        var thinking = ((Math.random() * 1000) + 200).toFixed();
        // EDITS
        if (count === 5) {
            reset2();
            $('#thinking').css('color','yellow');
            $('#thinking').html('Tie!');
            setTimeout(function(){
                $('#thinking').html('');
            }, 1200);
        }
        else {
            setTimeout(function () {
                $('#thinking').html("");
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
                        $('#thinking').css('color','#00ff27');
                        $('#thinking').html("Player's turn!");
                    }
                }
            }, thinking);
        }
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
                reset2();
                if (currentTurn === "X" && turn === "X" || currentTurn === "O" && turn === "O") {
                    player++;
                    $('#player').html(player);
                    console.log(player);
                }
                else {
                    computer++;
                    $('#computer').html(computer);
                }
            }, 1200);
        }
        else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset2();
                if (currentTurn === "X" && turn === "X" || currentTurn === "O" && turn === "O") {
                    player++;
                    $('#player').html(player);
                    console.log(player);
                }
                else {
                    computer++;
                    $('#computer').html(computer);
                }
            }, 1200);
        }
        else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset2();
                if (currentTurn === "X" && turn === "X" || currentTurn === "O" && turn === "O") {
                    player++;
                    $('#player').html(player);
                    console.log(player);
                }
                else {
                    computer++;
                    $('#computer').html(computer);
                }
            }, 1200);
        }
        else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset2();
                if (currentTurn === "X" && turn === "X" || currentTurn === "O" && turn === "O") {
                    player++;
                    $('#player').html(player);
                    console.log(player);
                }
                else {
                    computer++;
                    $('#computer').html(computer);
                }
            }, 1200);
        }
        else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset2();
                if (currentTurn === "X" && turn === "X" || currentTurn === "O" && turn === "O") {
                    player++;
                    $('#player').html(player);
                    console.log(player);
                }
                else {
                    computer++;
                    $('#computer').html(computer);
                }
            }, 1200);
        }
        else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset2();
                if (currentTurn === "X" && turn === "X" || currentTurn === "O" && turn === "O") {
                    player++;
                    $('#player').html(player);
                    console.log(player);
                }
                else {
                    computer++;
                    $('#computer').html(computer);
                }
            }, 1200);
        }
        else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset2();
                if (currentTurn === "X" && turn === "X" || currentTurn === "O" && turn === "O") {
                    player++;
                    $('#player').html(player);
                    console.log(player);
                }
                else {
                    computer++;
                    $('#computer').html(computer);
                }
            }, 1200);
        }
        else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            $('#thinking').html(currentTurn + ' wins!');
            setTimeout(function () {
                reset2();
                if (currentTurn === "X" && turn === "X" || currentTurn === "O" && turn === "O") {
                    player++;
                    $('#player').html(player);
                    console.log(player);
                }
                else {
                    computer++;
                    $('#computer').html(computer);
                }
            }, 1200);
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
