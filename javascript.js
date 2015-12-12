$(document).ready(function(){
  alert('works');

  var userScore = 0;
  var cpScore = 0; 
  var roundCount = 0;
  var userRoundsWon = 0;
  var cpRoundsWon = 0;
  var tied = "Tied";
  var userWinning = "You";
  var cpWinning = "CP";

  $("#startStop").on("click", function() {
    if ($(this).attr("data-status") === "on") {
      $(this)
        .addClass("btn-success")
        .removeClass("btn-danger")
        .attr("data-status", "off")
        .html("Reset Game");
      controls();
      enableAnimation();
    } else {
      $(this)
        .addClass("btn-danger")
        .removeClass("btn-success")
        .attr("data-status", "on")
        .html("Start Game");
      $(".choice").unbind();
      $("h1").empty();
      $(".scoreStatus").empty();
      $(".allClear").empty();
      userScore = cpScore  = roundCount = userRoundsWon = cpRoundsWon = tiedRounds = 0;
    }
  })
function controls(){
  $(".choice").on("click", function(){

  var choiceOptions = ["rock", "paper", "scissor"];
  var randomNum = Math.floor(Math.random() * choiceOptions.length);
  var userChoice = this.id;
  var cpChoice = choiceOptions[randomNum];

      console.log(userChoice);
      console.log(cpChoice);
    
// user choice vs cp choice logic //

    if (userChoice == cpChoice){};
     if (userChoice === "rock" &&  cpChoice === "paper"){
      cpScore ++;
    }
     if (userChoice === "rock" &&  cpChoice === "scissor"){
      userScore++;
    }
     if (userChoice === "paper" &&  cpChoice === "rock"){
      userScore++;
    }
     if (userChoice === "paper" &&  cpChoice === "scissor"){
      cpScore++;
    }
     if (userChoice === "scissors" &&  cpChoice === "rock"){
      cpScore++;
    }
     if (userChoice === "scissors" &&  cpChoice === "paper"){
      userScore++;
    }
    /*if (userScore == cpScore ){
      currentWinner === tied;
    }
    if (userScore > cpScore ){
      currentWinner === userWinning;
    }
    if (userScore < cpScore ){
      currentWinner === cpWinning;
    } */
    roundCount ++;
    if (roundCount === 15){
      if (userScore > cpScore){
        $(".modal-title").html("yey!");
          $(".modal-text").html("u better than camputor, jood gob");
          $("#win").modal({
            keyboard: false
          });

      } else if (userScore < cpScore){
        $(".modal-title").html(":(");
          $(".modal-text").html("get rekt");
          $("#win").modal({
            keyboard: false
          });

      } else if (userScore == cpScore){
        $(".modal-title").html("tie");
          $(".modal-text").html("boring");
          $("#win").modal({
            keyboard: false
          });
        };
      }
    
    console.log(roundCount);
    console.log(cpScore);
    $("#userScore").html(userScore).prepend("<p> You: </p>");
    $("#cpScore").html(cpScore).prepend("<p> CP: </p>");
    $("#round").html(roundCount).prepend("<p> Round: </p>");
    $("#userChoice").html(userChoice).prepend("<p> You Chose: </p>");
    $("#cpChoice").html(cpChoice).prepend("<p> CP Chose: </p>");
    

    })
  }

function enableAnimation() {
    $(".change").on("mouseenter", function() {
      $(this).toggleClass("pulse");
    }).on("mouseleave", function() {
      $(this).toggleClass("pulse");
    });
  };

});






