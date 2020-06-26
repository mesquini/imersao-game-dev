class Life {
  constructor(total, initial) {
    this.total = total;
    this.initial = initial;
    this.lifes = this.initial;

    this.widthX = 25;
    this.heitghY = 25;
    this.xInitial = 20;
    this.yInitial = 20;
  }

  draw() {
    for (let i = 0; i < this.lifes; i++) {
      const margin = i * 10;
      const position = this.xInitial * (1 + i);
      image(
        imageLife,
        position + margin,
        this.yInitial,
        this.widthX,
        this.heitghY
      );
    }
  }

  addLife() {
    if (this.lifes <= this.total) {
      this.lifes++;
    }
  }

  removeLife() {
    this.lifes--;
  }
}
