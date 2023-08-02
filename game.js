
var buttonColours=["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;


$(document).keypress(function() {
    if (!started) {
  
      //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
  

function nextSequence(){
    level++;
    $("h1").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    userClickedPattern=[];
        
        


    
   
    
}

$(".btn").on("click",function(){
    var userChosenColor=this.id;
    userClickedPattern.push(userChosenColor);
    playSound(this.id);
    animatePress(this.id);
    checkAnswer(userClickedPattern.length-1);
});
function playSound(name){
    var tune=new Audio("./sounds/"+name+".mp3");
    tune.play();


}
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");

    },100);
}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
      playSound("wrong");

      //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
    }

}
function startOver(){
    level=0;
    gamePattern=[];
    started=false;
    userClickedPattern=[];

}
    

       /* if(userClickedPattern.toString() === gamePattern.toString()){
            nextSequence();
        }
        else{
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");

            },200);
            var tune1=new Audio("./sounds/wrong.mp3");
            tune1.play();
        }*/
    
    










/*

$(".btn").on("click",function(){
    tuner(this.id);
    gotClicked.push(this.id);
    $("#"+this.id).fadeOut().fadeIn();
});

function tuner(key){
    var hi= new Audio("./sounds/"+key+".mp3");
    hi.play();

}
if(gamePattern.toString() === gotClicked.toString()){
    console.log("yes");
}
*/