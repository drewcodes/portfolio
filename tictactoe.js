$(document).ready(function(){
    // Default Player's Turn When Game Starts
    var turn = "X";
    
    // Array stores values to check for winner
    var turns = [" "," "," "," "," "," "," "," "," "];
    
    // Default computer's turn
    var computersTurn = "O";
    
    // Keeps track who's turn it is
    var gameOn = false;
    
    // Track computer's turn
    var count = 0;
    
    // Toggle player's position (X or O)
    $('#turnX').click(function(){
        turn = "X";
        computersTurn = "O";
        $('#turnX').html('Player is X');
        $('#turnO').html('Computer is O');
        $('#turnX').css('background-color', '#73b970');
        $('#turnO').css('background-color', 'black');
        reset();
    });
    
    $('#turnO').click(function(){
        turn = "O";
        computersTurn = "X";
        $('#turnX').html('Computer is X');
        $('#turnO').html('Player is O');
        $('#turnX').css('background-color', 'black');
        $('#turnO').css('background-color', '#73b970');
        reset();
    });
    
    function computerTurn(){
        // Var to break while loop
        var taken = false;
        while(taken === false && count !== 5){
            // Generate random turn
            var computersMove = (Math.random()*10).toFixed();
            var move = $('#'+computersMove).text();
            if(move === ' '){
                $('#'+computersMove).text(computersTurn);
                $('#'+computersMove).css('background-color', '#d3c300');
                taken = true;
                turns[computersMove] = computersTurn;
            }
        }
    }
    
    function playerTurn(turn, id){
        var spotTaken = $('#'+id).text();
        if(spotTaken === " "){
            count++;
            turns[id] = turn;
            $('#'+id).text(turn);
            $('#'+id).css('background-color', '#4295ba');
            winCondition(turns, turn);
            if(gameOn === false){
                computerTurn();
                winCondition(turns, computersTurn);
            }
        }
    }
    
    function winCondition(turnArray, currentTurn){
        if(turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn){
            gameOn = true;
            setTimeout(function () {
                reset();
                alert('Player '+ currentTurn + ' wins!'); 
            }, 300);
        } else if(turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn){
            gameOn = true;
            setTimeout(function () {
                reset();
                alert('Player '+ currentTurn + ' wins!'); 
            }, 300);
        } else if(turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn){
            gameOn = true;
            setTimeout(function () {
                reset();
                alert('Player '+ currentTurn + ' wins!'); 
            }, 300);
        } else if(turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn){
            gameOn = true;
            setTimeout(function () {
                reset();
                alert('Player '+ currentTurn + ' wins!'); 
            }, 300);
        } else if(turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn){
            gameOn = true;
            setTimeout(function () {
                reset();
                alert('Player '+ currentTurn + ' wins!'); 
            }, 300);
        } else if(turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn){
            gameOn = true;
            setTimeout(function () {
                reset();
                alert('Player '+ currentTurn + ' wins!'); 
            }, 300);
        } else if(turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn){
            gameOn = true;
            setTimeout(function () {
                reset();
                alert('Player '+ currentTurn + ' wins!'); 
            }, 300);
        } else if(turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn){
            gameOn = true;
            setTimeout(function () {
                reset();
                alert('Player '+ currentTurn + ' wins!'); 
            }, 300);
        } else {
            gameOn = false;
        }
    }
    
    $('.tic').click(function(){
        var slot = $(this).attr('id');
        playerTurn(turn, slot);
    });
    
    // Reset
    function reset(){
        turns = [" "," "," "," "," "," "," "," "," "];
        count = 0;
        $('.tic').text(' ');
        gameOn = false;
        $('.tic').css('background-color', '#ffffff');
    }
    
});
