
let x, y;
let vy;
let size;
let groundY;
const g = 1;
const jump = 20

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2
  vy = 0;
  // vx = 0
  speed = 5
  size = height * 0.1;
  groundY = height * 0.8;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  groundY = height * 0.8;
  size = height * 0.1;

  background(160, 192, 255);
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  if (keyIsDown(LEFT_ARROW)) { x -= speed; }
  if (keyIsDown(RIGHT_ARROW)) { x += speed; }
  if (keyIsDown("A".charCodeAt(0))) { speed = 20 }
  else { speed = 5 }


  y += vy

  if (y < groundY - size / 2) {
    vy += g;
  }
  else {
    vy = 0;
    y = groundY - size / 2;
  }


  // vx = constrain(vx, -20, 20)
  vy = constrain(vy, -20, 20)

  fill(0);
  ellipse(x, y, size, size);

}

function keyPressed() {
  if (key == ' ' && y + size / 2 >= groundY) {
    vy = -jump;
  }
}
