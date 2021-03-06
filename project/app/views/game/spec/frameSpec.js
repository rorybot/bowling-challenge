describe("Frame", function() {
  var frame;

  beforeEach(function() {
    game = new Game;
    frame = new Frame(2);
  });

  describe("Can create a frame", function() {
    it("has two rolls as limit", function() {
      expect(frame.getRollLimit()).toEqual(2);
    });

    it("has five rolls as limit", function() {
      frame = new Frame(5);
      expect(frame.getRollLimit()).toEqual(5);
    });

    it("creates bonus frame", function() {
      frame = new Frame(2, true);
      expect(frame.bonusFrame).toEqual(true);
    });
  });

  describe("Score tracking", function() {
    it("can increment the score value", function() {
      frame = new Frame(2);
      frame.ROLL_SCORES = [5, 3];
      expect(frame.updateFrameScore()).toEqual(8);
    });

    it("returns strike on 10 on first roll", function(){
      game.newFrameRules(2)
      first_frame = game.frameArray[0]
      roller.rollBall(first_frame, 10)
      console.log(first_frame)
      expect(first_frame.strike).toEqual(true)
    });

    it("returns spare on 10 on second roll", function(){
      game.newFrameRules(2)
      first_frame = game.frameArray[0]
      roller.rollBall(first_frame, 7)
      roller.rollBall(first_frame, 3)
      console.log(first_frame.frameScore)
      expect(first_frame.spare).toEqual(true)
    });

  });
});
