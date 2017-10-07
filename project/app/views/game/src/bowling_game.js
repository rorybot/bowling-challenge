"use strict";

function Game() {
  this.frameCounter = 0;
  this.frameArray = [];
  this.spareNumber = 1;
  this.strikeNumber = 2;
  this.spare = false;
  this.strike = false;
}

Game.prototype._newFrame = function(number) {
  var frame = new Frame(number);
  this.frameArray.push(frame);
  this.frameCounter += 1;
  return this.frameArray.slice(-1)[0];
};

Game.prototype.newFrameRules = function(number) {
  if (this.frameCounter > 10) {
    return "Game over!";
  } else if (this.frameCounter === 10 && this._bonusStatus() === true) {
    return this._newFrame(this._bonusValue(), true);
  } else {
    return this._newFrame(number);
  }
};

Game.prototype.getFrameCounter = function() {
  return this.frameCounter;
};

Game.prototype._bonusStatus = function() {
  return this.spare || this.strike;
};

Game.prototype._bonusValue = function() {
  if (this.spare === true) {
    return this.spareNumber;
  } else {
    return this.strikeNumber;
  }
};
//
// Game.prototype.bonusScoring = function () {
//
// };
