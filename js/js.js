$(document).ready(function(){
	// define variables
	var ranNumGoal = 0;
	var myClick = 0;
	var myTotal = 0;
	var wins = 0;
	var losses = 0;
	var gameMessage;
	
	// set a random number on each element
	function resetGame(){
		var rands = [];
		var inc = 0;
		gameMessage = "&nbsp;";
		$('#game-message').html(gameMessage);
		//set random numbers in an array to avoid duplicates.
		while (inc < 4) {
			var ranNum = Math.floor((Math.random() * 10) + 5);
			if(rands.indexOf(ranNum) < 0){
				rands.push(ranNum);
				inc++;
			}
		}
		// create the buttons
		$( ".fah" ).each(function(u, element){
			$(this).attr("data-value", rands[u]);
			$(this).text(rands[u]);
		});
		// set the goal number
		$('#goal-number').html(ranNumGoal = Math.floor((Math.random() * 100) + 50));
		// reset vars
		myClick = 0;
		myTotal = 0;
		$('#my-total').html(myTotal);
	}

	// reset the game
	$('button').click(resetGame);

	// click the buttons to get the total
	$(".fah").click(function(){
		myClick = parseInt($(this).attr("data-value"));
		myTotal = myTotal + myClick;
		$('#my-total').html(myTotal);
		
		if(myTotal > ranNumGoal){
			gameMessage = "You Lose";
			losses++;
		}else if(ranNumGoal === myTotal){
			gameMessage = "You win!";
			wins++;
		}
		$('#game-message').html(gameMessage);
		$('#wins').html(wins);
		$('#losses').html(losses);
	});
	resetGame();
});
