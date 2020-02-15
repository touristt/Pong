class Bar {
  constructor(num) {
    if (num) this.pos = createVector(0, height / 2);
    else this.pos = createVector(width, height / 2);
  }
  show() {
    fill(191, 54, 12);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, 10, 200);
  }
  move(dir) {
    if (dir) this.pos.y += 15;
    else this.pos.y -= 15;
  }
}
