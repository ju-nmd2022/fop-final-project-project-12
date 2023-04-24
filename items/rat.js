export function fatRat(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  noStroke();

  // backfoot
  fill(151, 151, 151);
  triangle(330, 385, 320, 400, 355, 400);

  // backhand
  rect(380, 290, 15, 25);
  triangle(395, 287, 395, 317, 408, 300);

  // cheese
  fill(255, 255, 153);
  triangle(410, 270, 390, 335, 410, 340);
  fill(240, 230, 140);
  rect(410, 270, 10, 70);
  ellipse(400, 325, 7);
  ellipse(410, 300, 7);
  fill(135, 206, 250);
  ellipse(420, 280, 9);

  // tail
  fill(255, 145, 164);
  stroke(255, 145, 164);
  curve(450, 400, 230, 345, 155, 255, 180, 200);
  noStroke();

  // body
  fill(191, 191, 191);
  ellipse(300, 300, 170, 190);
  triangle(250, 375, 240, 410, 285, 410);
  rect(250, 380, 80, 30);
  triangle(330, 390, 330, 410, 350, 410);

  // frontarm
  fill(151, 151, 151);
  rect(285, 280, 25, 45);
  ellipse(310, 320, 8, 12);
  ellipse(304, 325, 8);
  ellipse(300, 325, 8);
  ellipse(294, 325, 8);
  ellipse(288, 325, 8);

  //face
  fill(151, 151, 151);
  ellipse(280, 165, 25);
  fill(191, 191, 191);
  triangle(298, 165, 400, 235, 300, 220);
  ellipse(280, 210, 80, 100);
  triangle(245, 190, 220, 270, 260, 260);
  ellipse(265, 165, 25);
  fill(255, 145, 164);
  ellipse(265, 165, 15);
  fill(0, 0, 0);
  ellipse(393, 235, 15);
  stroke(0, 0, 0);
  line(400, 235, 310, 223);
  strokeWeight(0.5);
  line(340, 220, 310, 240);
  line(350, 223, 330, 243);
  line(360, 227, 355, 245);

  // eyes
  fill(255, 255, 255);
  ellipse(295, 180, 15);
  noStroke();
  fill(154, 205, 50);
  ellipse(295, 180, 9);

  fill(0, 0, 0);
  ellipse(295, 180, 4);

  fill(255, 255, 255);
  ellipse(294, 178, 3);

  pop();
}
