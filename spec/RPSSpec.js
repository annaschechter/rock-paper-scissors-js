describe("Rock, Paper, Scissors", function() {

	describe("types of choices", function() {

		it("Rock", function() {
			rock = new Rock;
			expect(rock.type).toEqual("rock");
		});

		it("Paper", function() {
			paper = new Paper;
			expect(paper.type).toEqual("paper");
		});

		it("Scissors", function() {
			scissors = new Scissors;
			expect(scissors.type).toEqual("scissors");
		});

	});

	describe("rules of the game", function() {
		it("Rock beats scissors", function() {
			rock = new Rock;
			scissors = new Scissors;
			rules = new Rules;
			expect(rules.play(rock, scissors)).toBe(true);
		});
	});

});