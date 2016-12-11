$(document).ready(function(){
  
  //Vars and Arrays
  
  //Arr for player to input their moves
  var playerSeq = [];
  //Arr for random sequence to push into
  var compSeq = [];
  
//Audio files
var audio1 = new Audio(
  'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio2 = new Audio(
  'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio3 = new Audio(
  'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio4 = new Audio(
  'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var audioBuzzer = new Audio('https://s3-us-west-2.amazonaws.com/guylemon/Buzzer.mp3');
  
  //COMPUTER MOVES =======================
  //Random Color Gets Selected
  function randomColor() {
  var random = Math.floor(Math.random() * 4) + 1;
  compSeq.push(random);
  }
  
  // Decides which color lights up and sound to play
  function playSounds(num){
    if(num === 1) {
      $(".red").addClass("brighten");
      window.setTimeout(function(){
        $(".red").removeClass("brighten");
      }, 500);
      audio1.play();
    } else if (num === 2){
      $(".green").addClass("brighten");
      window.setTimeout(function(){
        $(".green").removeClass("brighten");
      }, 500);
      audio2.play();
    } else if (num === 3){
      $(".blue").addClass("brighten");
      window.setTimeout(function(){
        $(".blue").removeClass("brighten");
      }, 500);
      audio3.play();
    } else if (num === 4){
      $(".yellow").addClass("brighten");
      window.setTimeout(function(){
        $(".yellow").removeClass("brighten");
      }, 500);
      audio4.play();
    }
  }
  
  //======================
  
  function red(){
    $(".red").addClass("brighten");
      window.setTimeout(function(){
        $(".red").removeClass("brighten");
      }, 500);
      audio1.play();
  }
  
  function green() {
    $(".green").addClass("brighten");
      window.setTimeout(function(){
        $(".green").removeClass("brighten");
      }, 500);
      audio2.play();
  }
  
  function blue(){
    $(".blue").addClass("brighten");
      window.setTimeout(function(){
        $(".blue").removeClass("brighten");
      }, 500);
      audio3.play();
  }
  
  function yellow(){
    $(".yellow").addClass("brighten");
      window.setTimeout(function(){
        $(".yellow").removeClass("brighten");
      }, 500);
      audio4.play();
  }
  
  //========================
  
  
  // Loops Arr and Animates the sequence for player to copy
  function animate(){
   $.each(compSeq, function(i,number){
    setTimeout(function(){
        playSounds(compSeq[i]);
      }, i * 1000);
  });
  }
  
  
  //GAME PLAYING LOGIC ========================
  
  // game starts
  // animateSeq starts
  
  
  // player must copy seq
  function playerMoves(){
    $('.red').click(function(){
    red();
    playerSeq.push(1);
    checkScore();
    console.log("Player: "+playerSeq);
  });
  
   $('.green').click(function(){
     green();
    playerSeq.push(2);
     checkScore();
    console.log("Player: "+playerSeq);
  });
  
   $('.blue').click(function(){
     blue();
    playerSeq.push(3);
     checkScore();
    console.log("Player: "+playerSeq);
  });
  
   $('.yellow').click(function(){
     yellow();
    playerSeq.push(4);
     checkScore();
    console.log("Player: "+playerSeq);
  });
  }
  //=============================================
  
  
  //Combines randomColor and animate together
  function startCompSeq(){
    randomColor();
    animate();
  }
  
  
//   function checkScore() {
//     //checks for unmatched number
//     for(var i =0;i<playerSeq.length; i++){
//       if(playerSeq[i] !== compSeq[i]) {
//       audioBuzzer.play();
//       //this checks to make sure the entire seq is entered before comp goes again
//     }
//     }
//     if(playerSeq.length === compSeq.length){
//       startCompSeq();
      
//     }
//   }
  
  function checkScore(){
    if(playerSeq[playerSeq.length-1] !== compSeq[compSeq.length-1]) {
      audioBuzzer.play();
    }
    //DONT ALLOW BUTTON TO PLAY ANY SOUNDS IF WRONG INPUT
    if(playerSeq.length === compSeq.length){
      startCompSeq();
    }
  }
  
  //CONSOLE TEST BUTTON =======================
  $('#test-button').click(function(){
   
  });
  
  //Test Start Button
  $('#comp').click(function(){
    //start the game
    //animate the first seq
    startCompSeq();
    //player inputs seq
    playerMoves();
    //console.log
    console.log("Comp Seq: "+compSeq);
  });
  
//END of DOCUMENT READY
});
