class Character extends Animation {
  constructor(matrix, image, x, widthX, heightY, witdhSprit, heightSprit) {
    super(matrix, image, x, widthX, heightY, witdhSprit, heightSprit);
    this.image = image;

    this.yInitial = height - heightY;
    this.y = this.yInitial;

    this.speedJump = 0;
    this.gravity = 3;
  }

  jump() {
    this.speedJump = -30;
  }

  applyGravity() {
    this.y = this.y + this.speedJump;
    this.speedJump = this.speedJump + this.gravity;

    if (this.y > this.yInitial) this.y = this.yInitial;
  }

  colliding(enemy) {
    const precision = 0.7;
    const collide = collideRectRect(
      this.x,
      this.y,
      this.widthX * precision,
      this.heightY * precision,
      enemy.x,
      enemy.y,
      enemy.widthX * precision,
      enemy.heightY * precision
    );

    return collide;
  }
}
