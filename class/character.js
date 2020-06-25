class Character extends Animation {
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
    this.image = image;

    this.variationY = variationY;
    this.yInitial = height - heightY - this.variationY;
    this.y = this.yInitial;

    this.speedJump = 0;
    this.gravity = 4;
    this.heightJump = -40;
    this.jumps = 0;
  }

  jump() {
    if (this.jumps < 2) {
      this.speedJump = this.heightJump;
      this.jumps++;
    }
  }

  move(keyCode) {
    if (keyCode === 39 || keyCode === 68) this.x += 35;
    if (keyCode === 37 || keyCode === 65) this.x -= 35;
  }

  applyGravity() {
    this.y = this.y + this.speedJump;
    this.speedJump = this.speedJump + this.gravity;

    if (this.y > this.yInitial) {
      this.y = this.yInitial;
      this.jumps = 0;
    }
  }

  colliding(enemy) {
    noFill();

    // rect(this.x + 15, this.y + 10, this.widthX * 0.67, this.heightY - 10);
    // rect(
    //   enemy.x + enemy.precisionX,
    //   enemy.y + enemy.precisionY,
    //   enemy.widthX * enemy.precision,
    //   enemy.heightY * enemy.precision
    // );

    const collide = collideRectRect(
      this.x + 15,
      this.y + 10,
      this.widthX * 0.67,
      this.heightY - 10,
      enemy.x + enemy.precisionX,
      enemy.y + enemy.precisionY,
      enemy.widthX * enemy.precision,
      enemy.heightY * enemy.precision
    );

    return collide;
  }
}
