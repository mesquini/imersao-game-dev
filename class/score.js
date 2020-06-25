class Score {
  constructor() {
    this.score = 0;
  }

  show() {
    textAlign(RIGHT);
    textSize(80);
    fill("#f49000");
    text(parseInt(this.score), width - 100, 100);

    this.addScore();
  }

  addScore() {
    this.score += 0.08;
  }

  verifyScore() {
    const currentyScore = parseInt(this.score);
    const score = localStorage.getItem("@game/score", currentyScore);

    if (score === null) {
      localStorage.setItem("@game/score", currentyScore);
      return currentyScore;
    }

    if (!score) return currentyScore;

    if (currentyScore > score) {
      localStorage.setItem("@game/score", currentyScore);
      return currentyScore;
    } else {
      return score;
    }
  }
}
