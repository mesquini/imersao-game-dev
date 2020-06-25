class Enemy extends Animation {
  constructor(
    name,
    matrix,
    image,
    x,
    variationY,
    widthX,
    heightY,
    witdhSprit,
    heightSprit,
    delay,
    speed,
    precision,
    precisionX,
    precisionY
  ) {
    super(
      matrix,
      image,
      x,
      variationY,
      widthX,
      heightY,
      witdhSprit,
      heightSprit
    );

    this.name = name;

    this.speed = speed;
    this.delay = delay;
    this.x = width + this.delay;

    this.precision = precision;
    this.precisionX = precisionX;
    this.precisionY = precisionY;
  }

  move() {
    this.x = this.x - this.speed;

    if (this.x <= -this.widthX - this.delay) {
      this.x = width;
    }

    if (this.name === "Gotinha Voadora") {
      const baseline = height - this.heightY + random(50, 450);

      this.y += 5 * cos(frameCount * 0.15);

      if (this.y > baseline) {
        this.y = baseline;
      }
    }
  }
}
