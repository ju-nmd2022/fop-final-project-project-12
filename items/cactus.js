export function cactus(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  noStroke();

  // Body of cactus
  fill(80, 200, 120);
  ellipse(200, 300, 100, 300);
  ellipse(150, 190, 50, 90);
  ellipse(260, 320, 50, 90);

  // Orange pot
  fill(2255, 127, 80);
  rect(155, 400, 90);
  rect(150, 480, 100, 10);

  // Thorns
  fill(53, 94, 59);
  ellipse(140, 160, 3, 7);
  ellipse(210, 180, 3, 7);
  ellipse(230, 200, 3, 7);
  ellipse(180, 180, 3, 7);
  ellipse(155, 200, 3, 7);
  ellipse(135, 190, 3, 7);
  ellipse(180, 230, 3, 7);
  ellipse(215, 250, 3, 7);
  ellipse(170, 285, 3, 7);
  ellipse(260, 300, 3, 7);
  ellipse(270, 330, 3, 7);
  ellipse(210, 320, 3, 7);
  ellipse(170, 345, 3, 7);
  ellipse(230, 370, 3, 7);
  pop();
}
