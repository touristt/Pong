let B;
let b1, b2;
let hitSound, bounceSound, lossSound, bellSound;
let stats = {
	p1: [0, 0],
	p2: [0, 0],
};
let message = '';
let started = false;
function ready(theme) {
	B = new Ball(width / 2, height / 2, theme);
}
function start() {
	message = '';
	B.update({
		x: map(random(), 0, 1, 12, 12),
		y: map(random(), 0, 1, -2, -12),
	});
	random() > 0.5 ? null : B.vel.mult(-1);
	started = true;
}
function setup() {
	createCanvas(innerWidth, innerHeight - 4);
	ready(0);
	b1 = new Bar(1, themes[0].paddleColor);
	b2 = new Bar(0, themes[0].paddleColor);
	background(11);
	hitSound = loadSound('sounds/hit.m4a');
	bounceSound = loadSound('sounds/bounce.m4a');
	message =
		'Press Spacebar To start \n Press M to change the theme \n Left paddle Control W-S \n Right paddle Controle UP-Down Arrow keys';
	lossSound = loadSound('sounds/loss.mp3');
	bellSound = loadSound('sounds/bell.mp3');
}
function keyPressed() {
	if (keyCode == 77) {
		B.toggle();
	}
}

function draw() {
	console.log(B.vel.mag());
	keyIsDown(32) && !started ? start() : null;
	background(...themes[B.theme].background);
	B.show();
	B.move();
	if (B.checkEdges()) bounceSound.play();
	b1.show();
	b2.show();
	if (B.pos.x < width + 150 && B.pos.x > -150) {
		if (
			B.pos.x > width &&
			B.pos.y > b2.pos.y - 100 &&
			B.pos.y < b2.pos.y + 100
		) {
			B.pos.x = width;
			B.vel.x *= -1;
			B.applyForce(createVector(-1.5, 0));
			if ((b2.vel.y > 0 && B.vel.y > 0) || (b2.vel.y < 0 && B.vel.y < 0)) {
				B.applyForce(createVector(-1.5, 0));
			} else if (
				(b2.vel.y > 0 && B.vel.y < 0) ||
				(b2.vel.y < 0 && B.vel.y > 0)
			) {
				B.applyForce(createVector(3, 0));
			}
			fill(255);
			rectMode(CENTER);
			rect(b2.pos.x, b2.pos.y, 10, 200);
			hitSound.play();
		} else if (
			B.pos.x < 0 &&
			B.pos.y > b1.pos.y - 100 &&
			B.pos.y < b1.pos.y + 100
		) {
			B.vel.x *= -1;
			B.pos.x = 0;

			B.applyForce(createVector(1.5, 0));
			if ((b1.vel.y > 0 && B.vel.y > 0) || (b1.vel.y < 0 && B.vel.y < 0)) {
				B.applyForce(createVector(1.5, 0));
			} else if (
				(b1.vel.y > 0 && B.vel.y < 0) ||
				(b1.vel.y < 0 && B.vel.y > 0)
			) {
				B.applyForce(createVector(-3, 0));
			}
			fill(255);
			rectMode(CENTER);
			rect(b1.pos.x, b1.pos.y, 10, 200);
			hitSound.play();
		}
	} else {
		lossSound.play();
		if (B.pos.x < 0) {
			if (stats.p2[0] == 9) {
				stats.p2[1] += 1;
				stats.p2[0] = 0;
				stats.p1[0] = 0;

				message = 'Right Wins!!!';
				bellSound.play();
			} else stats.p2[0] += 1;
		} else {
			if (stats.p1[0] == 9) {
				stats.p1[1] += 1;
				stats.p2[0] = 0;
				stats.p1[0] = 0;

				message = 'Left Wins!!!';
				bellSound.play();
			} else stats.p1[0] += 1;
		}
		started = false;
		ready(B.theme);
	}
	B.trail.unshift({ x: B.pos.x, y: B.pos.y });
	B.trail.pop();
	let c1 = 0,
		c2 = 0;
	if (keyIsDown(UP_ARROW) && b2.pos.y - 100 > 0) b2.move(0), c2++;
	if (keyIsDown(87) && b1.pos.y - 100 > 0) b1.move(0), c1++;
	if (keyIsDown(DOWN_ARROW) && b2.pos.y + 100 < height) b2.move(1), c2++;
	if (keyIsDown(83) && b1.pos.y + 100 < height) b1.move(1), c1++;

	if (!c1) b1.move(2);
	if (!c2) b2.move(2);

	b1.slide();
	b2.slide();
	strokeWeight(1);
	stroke(26, 35, 126);
	line(0, 0, width, 0);
	line(0, height, width, height);
	textAlign(CENTER);
	textSize(60);
	fill(...themes[B.theme].textColor);
	text(stats.p1[0], width / 2 - 150, 100);
	if (stats.p1[1] > 0) text(`(${stats.p1[1]})`, width / 2 - 150 + 60, 100);
	if (stats.p2[1] > 0) text(`(${stats.p2[1]})`, width / 2 + 150 + 60, 100);
	text(stats.p2[0], width / 2 + 150, 100);
	textSize(30);
	if (message) text(message, width / 2, height / 2 - 300);
}
