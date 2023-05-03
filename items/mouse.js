export function mouse(x, y, s, alpha) {
  push();
  translate(-160, -180);
  translate(x, y);
  scale(s);
  noStroke();

  fill(150, 150, 150, alpha);
  ellipse(200, 200, 30, 20);
  triangle(210, 195, 220, 200, 210, 205);
  ellipse(205, 190, 8);
  fill(255, 145, 164, alpha);
  ellipse(205, 190, 5);
  stroke(0, 0, 0, alpha);
  line(160, 195, 185, 200);
  fill(0, 0, 0, alpha);
  ellipse(208, 197, 3);
  pop();
}
