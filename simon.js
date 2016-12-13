$(document).ready(function () {
    //Audio files
    var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    var audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    var audioBuzzer = new Audio('https://s3-us-west-2.amazonaws.com/guylemon/Buzzer.mp3');
    //COUNTER
    var counter = 0;
    //GAME LOGIC AND CONFIGURATION========================
    //Win or Lost
    var win = false;
    
    //Power Button
    var power = false;
    $('.power-button').click(function () {
      if(power === false){
        power = true;
        $('.power-light').css('background', "red");
      } else {
        power = false;
        $('.power-light').css('background', "black");
        $('.game-button').removeClass('active');
        powerOff();
      }
    });
    
    //Arr for player to input their moves.
    var player = [];
    //comp seq used to animate, play game and compare player seq against
    var compMoves = [];
    //holds arr interval position for var computer, pushing the one move at a time into compMoves;
    var compPosition = 0;
    //Arr for random generated sequence to push into
    var computer = [];
    //Game Speed Time
    var speed = 1000;
    
    //Start/Restart Function
    function startRestart() {
        win = false;
        computer = [];
        generate20Moves();
        compMoves = [];
        player = [];
        counter = 0;
        $('.counter').html(counter);
        $('.game-button').addClass('active');
        setTimeout(function () {
            compMove();
            animate();
            counter += 1;
            $('.counter').html(counter);            
        }, 1500);
    }
  
  function powerOff(){
        win = false;
        computer = [];
        compMoves = [];
        player = [];
        $('.counter').html("--");
        strict = false;
        $('.strict-light').css('background', "black");    
  }
  
    //Start Button
    $('.start-button').click(function () {
        if(power === true){
          startRestart();
        }
    });
  
    //Strict Button
    var strict = false;
    //when true, if wrong input => call strict() to reset everything
    $('.strict-button').click(function () {
        if(power === true){
          if (strict == false) {
            startRestart();
            $('.strict-light').css('background', "red");
            strict = true;
        }
        else {
            startRestart();
            $('.strict-light').css('background', "black");
            strict = false;
        }
        } else {
          $('.strict-light').css('background', "black");
            strict = false;
        }
    });
    //comp seq starts (random 20 moves get picked and pushed into the computer arr)
    function generate20Moves() {
        for (var i = 0; i < 20; i++) {
            computer.push(Math.floor(Math.random() * 4 + 1));
        }
    }
    //Allows comp to add one additional move to its sequence
    function compMove() {
        if (compPosition <= 19) {
            //pushes just ONE value from computer arr into compMoves
            compMoves.push(computer[compPosition]);
            //increments to the next interval when function is called again
            compPosition += 1;
        }
    }
    //Colors, buttons and configurations
    function red() {
        $(".red").addClass("brighten");
        window.setTimeout(function () {
            $(".red").removeClass("brighten");
        }, 500);
        audio1.play();
    }

    function green() {
        $(".green").addClass("brighten");
        window.setTimeout(function () {
            $(".green").removeClass("brighten");
        }, 500);
        audio2.play();
    }

    function blue() {
        $(".blue").addClass("brighten");
        window.setTimeout(function () {
            $(".blue").removeClass("brighten");
        }, 500);
        audio3.play();
    }

    function yellow() {
        $(".yellow").addClass("brighten");
        window.setTimeout(function () {
            $(".yellow").removeClass("brighten");
        }, 500);
        audio4.play();
    }
    // Decides which color lights up and sound to play
    function playSounds(num) {
        if (num === 1) {
            red();
        }
        else if (num === 2) {
            green();
        }
        else if (num === 3) {
            blue();
        }
        else if (num === 4) {
            yellow();
        }
    }
    //Animate computer sequence and play
    function animate() {
        if (win === false) {
            if (counter >= 4) speed = 800;
            if (counter >= 8) speed = 600;
            if (counter >= 12) speed = 400;
            $.each(compMoves, function (i, number) {
                setTimeout(function () {
                    playSounds(compMoves[i]);
                }, i * speed);
            });
        }
    }
    //Controls buttons being pressable or not
        $('.red').click(function () {
        player.push(1);
        red();
        check();
    });
    $('.green').click(function () {
        player.push(2);
        green();
        check();
    });
    $('.blue').click(function () {
        player.push(3);
        blue();
        check();
    });
    $('.yellow').click(function () {
        player.push(4);
        yellow();
        check();
    });

    function check() {
        //compare inputs
        if (player[player.length - 1] == compMoves[player.length - 1]) {
            //compare lengths
            if (player.length === compMoves.length) {
                //if true, pass
                setTimeout(function () {
                    player = [];
                    if (win === false) {
                        counter += 1;
                        $('.counter').html(counter);
                    }
                    compMove();
                    animate();
                }, 1500);
                
                //Checks for Winner
                if (counter === 20) {
                    //turn off animate()
                    win = true;
                    audioBuzzer.play();
                    alert("You win!");
                }
            }
        }
        else {
            audioBuzzer.play();
            if (strict === true) {
                setTimeout(function () {
                    startRestart();
                }, 1500);
            }
            else {
                console.log("Wrong. Your seq was: " + player + ". " + "Comp seq was: " + compMoves);
                setTimeout(function () {
                    player = [];
                    animate();
                }, 1500);
            }
        }
    }
});
