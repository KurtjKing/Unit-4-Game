$(document).ready(function () { //The ready event occurs when the DOM (document object model) has been loaded.

	var max = 120;
	var min = 19;

	var compPick = Math.floor(Math.random() * (max - min + 1)); // Math.random gives range 0-1. max - min is between 119.9999 - 19 the +1 makes it an integer
	console.log("compPick: " + compPick); // shows value in console log 
	$(".randomNumber").html(compPick); // inserts compPick in .randomNumber HTML div





	var gemRed = Math.floor(Math.random() * 12) + 1; // Calls #img1 div from html inserts image tag with value=gemRed. This value is tied to the Math.floor(Math.random(). Why is the image source broken into so many pieces?
	console.log("Gem 1: " + gemRed);
	$("#img1").html("<img src=" + "assets/images/red.png" + " value=" + gemRed + ">");

	var gemBlue = Math.floor(Math.random() * 12) + 1;
	console.log("Gem 2: " + gemBlue);
	$("#img2").html("<img src=" + "assets/images/blue.png" + " value=" + gemBlue + ">");

	var gemYellow = Math.floor(Math.random() * 12) + 1;
	console.log("Gem 3: " + gemYellow);
	$("#img3").html("<img src=" + "assets/images/yellow.png" + " value=" + gemYellow + ">");

	var gemGreen = Math.floor(Math.random() * 12) + 1;
	console.log("Gem 4: " + gemGreen);
	$("#img4").html("<img src=" + "assets/images/green.png" + " value=" + gemGreen + ">");

	var wins = 0;
	console.log("wins: " + wins);

	var losses = 0;
	console.log("losses: " + losses);

	var score = 0;
	console.log("score: " + score);

	  $("img").on("click", function () {       // where should a global funtion position with 
		var newScore = score += parseInt($(this).attr("value"));
		console.log("New Score: " + newScore);
		$(".scoreDisplay").html(newScore);

		if (newScore === compPick) {
			wins++;
			$(".wins").html("Wins: " + wins);
			console.log("Wins: " + wins);
			reset();
		}

		else if (newScore > compPick) {
			losses++;
			$(".losses").html("Losses: " + losses);
			console.log("Losses: " + losses);
			reset();
		}

	});

	function reset() {

		var max = 120;
		var min = 19;
		var compPick = Math.floor(Math.random() * (max - min + 1));
		console.log("compPick: " + compPick);
		$(".randomNumber").html(compPick);

		score = 0;
		$(".scoreDisplay").html(score);

		gemRed = Math.floor(Math.random() * 12) + 1;
		console.log("Gem 1: " + gemRed);
		$("#img1").html("<img src=" + "assets/images/red.png" + " value=" + gemRed + ">");

		gemBlue = Math.floor(Math.random() * 12) + 1;
		console.log("Gem 2: " + gemBlue);
		$("#img2").html("<img src=" + "assets/images/blue.png" + " value=" + gemBlue + ">");

		gemYellow = Math.floor(Math.random() * 12) + 1;
		console.log("Gem 3: " + gemYellow);
		$("#img3").html("<img src=" + "assets/images/yellow.png" + " value=" + gemYellow + ">");

		gemGreen = Math.floor(Math.random() * 12) + 1;
		console.log("Gem 4: " + gemGreen);
		$("#img4").html("<img src=" + "assets/images/green.png" + " value=" + gemGreen + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); // score = score + value
			console.log("New Score: " + newScore);
			$(".scoreDisplay").html(newScore);

			if (newScore === compPick) {  // if new score + comPick then you win
				wins++;
				$(".wins").html("Wins: " + wins); // looks for .wins div and updates with wins value
				console.log("Wins: " + wins);
				reset();

			}

			else if (newScore > compPick) {    // if new score is greater than compPick you lose
				losses++;
				$(".losses").html("Losses: " + losses);
				console.log("Losses: " + losses);
				reset();

			}

		});



	}

	

}); 