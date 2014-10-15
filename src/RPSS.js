function Rock() {
	this.type = "rock";
};

function Paper() {
	this.type = "paper";
};

function Scissors() {
	this.type = "scissors";
};

function Rules(){};

Rules.prototype.winner = function(objectOne, objectTwo) {
	if(objectOne.type === objectTwo.type) {return "draw"};

	if(objectOne.type === "rock")
		if(objectTwo.type === "scissors")
			return true;
		else 
			return false;
	else if(objectOne.type === "scissors")
		if(objectTwo.type === "paper")
			return true;
		else
			return false;
	else
		if(objectTwo.type === "rock")
			return true;
		else
		return false;
};