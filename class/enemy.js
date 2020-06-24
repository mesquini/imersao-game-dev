class Enemy extends Animation {
  constructor(matrix, image, x, widthX, heightY, witdhSprit, heightSprit) {
    super(matrix, image, x, widthX, heightY, witdhSprit, heightSprit);

    this.velocidade = 10;
  }

  move() {
    this.x = this.x - this.velocidade;

    if (this.x <= -this.widthX) {
      this.x = width;
    }
  }
}
