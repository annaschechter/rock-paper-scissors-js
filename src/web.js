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
		if(winner === "draw") var winningText = "It's a draw!!!";
	 	else winningText = "The winner is "+ winner + "!!!";
		$('#text-winner').text(winningText);
	});
});

