// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("shoot").click(function(){
    let choice= $("#input").val();
    let computerChoice = ["rock" , "paper" ,"scissors"];
    
    if(choice === rock && computerChoice === paper){
        $("shoot").html("You Lose!");
 }
    
});


// DOCUMENT READY FUNCTION BELOW


