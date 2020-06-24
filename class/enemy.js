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
    velocidade,
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

    this.velocidade = velocidade;
    this.delay = delay;
    this.x = width + this.delay;

    this.precision = precision;
    this.precisionX = precisionX;
    this.precisionY = precisionY;
  }

  move() {
    this.x = this.x - this.velocidade;

    if (this.x <= -this.widthX - this.delay) {
      this.x = width;
    }
  }
}
