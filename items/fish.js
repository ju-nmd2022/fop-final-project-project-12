export function fish(x, y, s, alpha) {
  push();
  translate(-170, -180);
  translate(x, y);
  scale(s);
  noStroke();

  fill(255, 145, 164, alpha);
  ellipse(200, 200, 40, 10);
  triangle(218, 200, 225, 195, 225, 205);

  fill(255, 255, 255, alpha);
  ellipse(185, 199, 3);

  fill(0, 0, 0, alpha);
  ellipse(185, 199, 1.5);
  pop();
}
