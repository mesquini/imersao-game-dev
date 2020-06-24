class Animation {
  constructor(
    matrix,
    image,
    x,
    variationY,
    widthX,
    heightY,
    witdhSprit,
    heightSprit
  ) {
    this.matrix = matrix;
    this.image = image;
    this.x = x;
    this.variationY = variationY;
    this.widthX = widthX;
    this.heightY = heightY;
    this.y = height - this.heightY - this.variationY;
    this.witdhSprit = witdhSprit;
    this.heightSprit = heightSprit;

    this.frameCurrent = 0;
  }

  show() {
    image(
      this.image,
      this.x,
      this.y,
      this.widthX,
      this.heightY,
      this.matrix[this.frameCurrent][0],
      this.matrix[this.frameCurrent][1],
      this.witdhSprit,
      this.heightSprit
    );

    this.anima();
  }

  anima() {
    this.frameCurrent++;
    if (this.frameCurrent >= this.matrix.length - 1) this.frameCurrent = 0;
  }

  delete() {
    this.y = -200;
  }
}
