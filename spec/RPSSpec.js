describe("Rock, Paper, Scissors", function() {
	beforeEach(function() {
		rock = new Rock;
		paper = new Paper;
		scissors = new Scissors;
	});			

	describe("types of choices", function() {

		it("Rock", function() {
			expect(rock.type).toEqual("rock");
		});

		it("Paper", function() {
			expect(paper.type).toEqual("paper");
		});

		it("Scissors", function() {
			expect(scissors.type).toEqual("scissors");
		});

	});

	describe("rules of the game", function() {
		beforeEach(function() {
			rules = new Rules;
		});

		it("rock beats scissors", function() {
			expect(rules.winner(rock, scissors)).toBe(true);
		});

		it("scissors don't beat rock", function(){
			expect(rules.winner(scissors, rock)).toBe(false);
		});

		it("same choices give draw", function(){
			expect(rules.winner(rock, rock)).toEqual("draw");
		});

		it("scissors beat paper", function() {
			expect(rules.winner(scissors, paper)).toBe(true);
		});

		it("paper doesn't beat scissors", function() {
			expect(rules.winner(paper, scissors)).toBe(false);
		});

		it("paper beats rock", function() {
			expect(rules.winner(paper, rock)).toBe(true);
		});

		it("rock doesn't beat paper", function() {
			expect(rules.winner(rock, paper)).toBe(false);
		});
	});

});