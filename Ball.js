class Ball {
  constructor(x, y, mode) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.topSpeed = 150;
    this.mass = 1;
    this.trail = new Array(15);
    this.trail.fill({ x, y });
    this.mode = mode;
  }
  move() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  show() {
    noStroke();
    if (this.mode) {
      fill(26, 35, 126);
      ellipse(this.pos.x, this.pos.y, 30);

      //   colorMode(RGB, width, height, 255);
      for (let i = 0; i < this.trail.length - 1; i++) {
        //   stroke(this.trail[i].y, this.trail[i].x, 255);
        stroke(191, 54, 12);
        strokeWeight(10 / (0.3 * i + 1));
        line(
          this.trail[i].x,
          this.trail[i].y,
          this.trail[i + 1].x,
          this.trail[i + 1].y
        );
      }
    } else {
      fill(255, 193, 7);
      ellipse(this.pos.x, this.pos.y, 30);
      for (let i = 0; i < this.trail.length - 1; i++) {
        //   stroke(this.trail[i].y, this.trail[i].x, 255);
        //   strokeWeight(10 / (0.3 * i + 1));
        stroke(255, 193, 7, 100 / (0.8 * i + 1));
        // noStroke();
        strokeWeight(30);
        line(
          this.trail[i].x,
          this.trail[i].y,
          this.trail[i + 1].x,
          this.trail[i + 1].y
        );
        noStroke();
        // ellipse(this.trail[i].x, this.trail[i].y, 30);
      }
    }

    // colorMode(RGB, 255, 255, 255);
  }
  toggle() {
    this.mode = !this.mode;
  }
  update(acc) {
    this.acc.add(createVector(acc.x, acc.y));
    this.vel.add(this.acc);
    this.vel.limit(this.topSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  applyForce(force) {
    this.update(force);
  }
  checkEdges() {
    if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.y *= -1;
      return true;
    } else if (this.pos.y < 0) {
      this.vel.y *= -1;
      this.pos.y = 0;
      return true;
    }
    return false;
  }
}
