function setup() {
  const canvas = createCanvas(600, 800);
  frameRate(30);
}

// StartScreen
background(135, 206, 250);
noStroke();
fatRat(300, 150, 0.7);
fill(255, 255, 255);
textSize(20);
text("Help your cat to find this fat rat", 30, 30);

triangle(90, 455, 110, 465, 110, 445);
triangle(210, 445, 210, 465, 230, 455);
rect(60, 500, 200, 30);

fill(0, 0, 0);
text("Jump", 100, 530);

function fatRat(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  //Rat body
  noStroke();
  fill(191, 191, 191);
  ellipse(300, 300, 150, 200);

  beginShape();
  vertex(229, 275);
  bezierVertex(280, 150, 320, 150, 371, 275);
  endShape();

  beginShape();
  vertex(270, 200);
  bezierVertex(280, 120, 320, 120, 330, 200);
  endShape();

  //Rat ears
  ellipse(280, 145, 20);
  ellipse(320, 145, 20);

  fill(255, 192, 203);
  ellipse(280, 145, 8, 10);
  ellipse(320, 145, 8, 10);

  //Rat nose and mouth
  ellipse(300, 180, 13);

  fill(255, 240, 190);
  rect(290, 180, 6);
  rect(297, 177, 6);

  fill(191, 191, 191);
  triangle(290, 167, 284, 187, 310, 170);

  push();
  stroke(153, 153, 153);
  strokeWeight(1.5);
  line(290, 167, 284, 187);
  line(284, 187, 310, 170);
  pop();
  fill(0, 0, 0);
  ellipse(286, 185, 5);

  //Rat eyes
  fill(255, 255, 255);
  ellipse(290, 160, 7);
  ellipse(310, 160, 7);

  fill(0, 0, 0);
  ellipse(290, 160, 3);
  ellipse(310, 160, 3);

  //Rat arms
  stroke(0, 0, 0);
  strokeWeight(3);
  curve(234, 288, 236, 257, 285, 287, 292, 244);

  pop();
}
