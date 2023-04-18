function fish(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  background(255, 255, 255);

  fill(255, 145, 164);
  ellipse(200, 200, 40, 10);
  triangle(218, 200, 225, 195, 225, 205);

  fill(255, 255, 255);
  ellipse(185, 199, 3);

  fill(0, 0, 0);
  ellipse(185, 199, 1.5);
  pop();
}

function mice() {}
