class Bar {
  constructor(num) {
    if (num) this.pos = createVector(0, height / 2);
    else this.pos = createVector(width, height / 2);
    this.vel = createVector(0, 0);
  }
  show() {
    fill(191, 54, 12);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, 10, 200);
  }
  slide() {
    this.pos.add(this.vel);
  }
  move(dir) {
    if (dir == 1) this.vel.y = 15;
    else if (dir) this.vel.y = 0;
    else this.vel.y = -15;
  }
}
