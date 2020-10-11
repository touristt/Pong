class Ball {
	constructor(x, y, theme) {
		this.pos = createVector(x, y);
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);
		this.topSpeed = 150;
		this.mass = 1;
		this.trail = new Array(themes[theme].trailLength);
		this.trail.fill({ x, y });
		this.theme = theme;
	}
	move() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}
	show() {
		noStroke();
		const theme = themes[this.theme];
		if (theme.trailType == 'decreasing') {
			fill(...theme.ballColor);
			ellipse(this.pos.x, this.pos.y, 30);
			for (let i = 0; i < this.trail.length - 1; i++) {
				stroke(...theme.trailColor);
				strokeWeight(10 / (0.3 * i + 1));
				line(
					this.trail[i].x,
					this.trail[i].y,
					this.trail[i + 1].x,
					this.trail[i + 1].y,
				);
			}
		} else {
			fill(...theme.ballColor);
			ellipse(this.pos.x, this.pos.y, 30);
			for (let i = 0; i < this.trail.length - 1; i++) {
				stroke(...theme.trailColor, 100 / (0.8 * i + 1));
				strokeWeight(30);
				line(
					this.trail[i].x,
					this.trail[i].y,
					this.trail[i + 1].x,
					this.trail[i + 1].y,
				);
				noStroke();
			}
		}
	}
	toggle() {
		this.theme = (this.theme + 1) % themes.length;
		this.trail = new Array(themes[this.theme].trailLength);
		this.trail.fill({ x: this.pos.x, y: this.pos.y });
		console.log(this.theme);
		b1.color = themes[this.theme].paddleColor;
		b2.color = themes[this.theme].paddleColor;
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
