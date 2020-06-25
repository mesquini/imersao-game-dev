class ScreenInitial {
  constructor() {}
  draw() {
    this._imageBackground();
    this._text();
    // this._button();
    this.keyPressed();
  }

  _imageBackground() {
    image(imageScreenInitial, 0, 0, width, height);
  }

  _text() {
    let titleColor = [
      128 + sin(frameCount * 0.1) * 25,
      20,
      128 + sin(frameCount * 0.1) * 25,
    ];

    let startColor = [
      200 + sin(frameCount * 0.1) * 25,
      200 + cos(frameCount * 0.1) * 25,
      200 + sin(frameCount * 0.1) * 25,
    ];

    textFont(fontScreenInitial);

    textAlign(CENTER);
    this.drawText(
      "As aventuras de",
      width / 12 + 10,
      titleColor,
      width / 2.5,
      height / 2 - width / 12 + 20 + 5 * sin(frameCount * 0.1),
      5
    );

    this.drawText(
      "Hipsta",
      width / 12,
      titleColor,
      width / 1.5,
      height / 2 + 5 * cos(frameCount * 0.1),
      5
    );

    textSize(52);
    textAlign(CENTER);
    this.drawText(
      "Enter para inicial",
      52,
      startColor,
      width / 2 - (textWidth("Enter para inicial") / 3) * 0.5,
      height - 100 + sin(frameCount * 0.09),
      5
    );
  }

  _button() {
    button.y = (height / 7) * 5;
    button.draw();
  }

  drawText(value, size, cor, posX, posY, dropShadow = 0) {
    textSize(size);
    if (dropShadow) {
      fill("black");
      text(value, posX + dropShadow, posY + dropShadow);
    }
    fill(cor);
    text(value, posX, posY);
  }

  keyPressed() {
    if (key === "Enter") {
      scenarioAtual = "game";
    }
  }

  drw() {
    beginShape();
    translate(
      (-this.bounds.x * width) / this.bounds.w,
      (-this.bounds.y * height) / this.bounds.h
    );
    for (let i = 0; i < this.points.length; i++) {
      let p = this.points[i];
      vertex(
        (p.x * width) / this.bounds.w +
          (sin((20 * p.y) / this.bounds.h + millis() / 1000) * width) / 30,
        (p.y * height) / this.bounds.h
      );
    }
    endShape(CLOSE);
  }
}
