function Rock() {
	this.type = "rock";
};

function Paper() {
	this.type = "paper";
};

function Scissors() {
	this.type = "scissors";
};

function Rules(){
	this.beats = {
		"rock": "scissors",
		"scissors": "paper",
		"paper": "rock"};
};


Rules.prototype.winner = function(objectOne, objectTwo) {
	 if(objectOne.type === objectTwo.type) {return "draw"};

	 if(this.beats[objectOne.type] === objectTwo.type)
	 	return objectOne.type;
	 else
	 	return objectTwo.type;
};