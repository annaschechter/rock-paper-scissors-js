$('.choices').eq(0).data("type", "rock");
$('.choices').eq(1).data("type", "paper");
$('.choices').eq(2).data("type", "scissors");

$('.choices').each(function() {
	$(this).on("click", function() {

		var computerChoice = function(){
			var compIndex = Math.floor(Math.random() * 3);
			var objects = [new Rock, new Paper, new Scissors];
			return objects[compIndex]; 
		};

		rules = new Rules;
		var playerChoice = $(this);
		var winner = rules.winner(playerChoice.data(), computerChoice());
		if(winner === "draw") var winningText = "It's a draw!";
		if(winner === "rock") var winningText = "Rock crushes scissors!";
		if(winner === "paper") var winningText = "Paper covers rock!";
		if(winner === "scissors") var winningText = "Scissors cut paper!";
		// $('#text-winner').
		alert(winningText);
	});
});

