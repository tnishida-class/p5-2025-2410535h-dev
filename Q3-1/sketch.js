// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数
let count = 0;
let size = 50; // 何フレーム目か

function setup() {
  createCanvas(200, 200);
  count = 0;
}

function draw() {
  background(160, 192, 255);

  let speed = 1; // アニメーションの速さ
  // BLANK[2]
  count = (count + speed) % cycle;
  if (keyIsPressed) {
    count = (count + 2) % cycle;
  }
  if (count < cycle / 2) {
    size += 1;　　　
  }
  else {
    size -= 1;
  }

  //let size = 50;
  // BLANK[1] 1周期の前半は size が大きくなり、後半は小さくなる
  ellipse(width / 2, height / 2, size, size);
}
