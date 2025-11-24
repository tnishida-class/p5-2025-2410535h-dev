// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ
  noStroke();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
      if ((i + j) % 2 == 0) {
        fill(255)
        rect(size * i, size * j, size, size)
      }
      else {
        fill(160)
        rect(size * i, size * j, size, size)
        if (j <= 2) {
          fill(228, 8, 10)
          ellipse(size * i + (size / 2), size * j + (size / 2), size - 3, size - 3)
        }
        else if (j >= 5) {
          fill(0)
          ellipse(size * i + (size / 2), size * j + (size / 2), size - 3, size - 3)
        }
      }
    }
  }
}