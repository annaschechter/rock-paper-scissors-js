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

Rules.prototype.play = function(objectOne, objectTwo) {
	return true
};