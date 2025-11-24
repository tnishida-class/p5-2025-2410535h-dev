// 最終課題を制作しよう
let people;
let r, g, b

function setup() {
  createCanvas(windowWidth, windowHeight);
  people = [];

}

function draw() {
  const tyusinx = width / 2;
  const tyusiny = height / 2;
  //background(167, 181, 194);
  background(255);
  noStroke();


  for (let i = 0; i < people.length; i++) {
    let t = people[i];

    fill(t.color);
    ellipse(t.x, t.y, t.size);
    t.x += t.vx;
    t.y += t.vy;
    let kyori = dist(tyusinx, tyusiny, t.x, t.y);
    let d = random(200, 900);
    if (!t.returning && kyori > 300) {
      t.returning = true;

    }
    if (t.returning) {
      let dx = tyusinx - t.x;
      let dy = tyusiny - t.y;
      let speed = 0.8;
      t.vx = dx * speed / kyori;
      t.vy = dy * speed / kyori;
      grow(t, 1);
      if (kyori < 25) {
        t.vx = 0
        t.vy = 0
        t.returningDone = true
      }
      if (t.returningDone) {
        if (t.size < 100) {//400
          t.size += 0.5;
        }
        if (t.alpha < 255) {
          if (r + g + b < 400) {
            t.alpha -= 0.5;
          }
          else {
            t.alpha -= 0.15;
          }
        }
        t.color = color(red(t.color), green(t.color), blue(t.color), t.alpha);
      }


    }

  }



  if (frameCount % 110 === 0) {
    let dx = random(-1, 1)
    let dy = random(-1, 1)
    // constrain(dx, low, high)
    // constrain(dy, low, high)
    const c = {
      x: tyusinx, y: tyusiny, vx: dx, vy: dy, size: 25, returning: false,
      color: color(r = random(80, 255), g = random(100, 255), b = random(150, 255), 150),
      returningDone: false, alpha: 100, growsize: random(25, 70),
    }
    people.push(c);

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function grow(t, growspeed) {
  if (t.size < t.growsize) {
    t.size += growspeed
  }
}
