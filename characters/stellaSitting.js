function sittingStella(catX, catY, s) {
  push();
  translate(catX, catY);
  scale(s);
  noStroke();

  //Tail
  fill(180, 180, 180);

  beginShape();
  vertex(120, 160);
  bezierVertex(90, 200, 140, 80, 130, 130);
  endShape();

  //Body
  fill(190, 190, 190);
  rect(82.5, 110, 35, 70, 20);
  ellipse(100, 155, 40, 50);

  //Legs
  stroke(170, 170, 170);
  strokeWeight(1);
  line(88, 150, 90, 177);
  line(93, 150, 95, 177);

  line(107, 150, 105, 177);
  line(112, 150, 110, 177);

  //Paws
  fill(180, 180, 180);
  noStroke();
  ellipse(93, 177, 10, 7);
  ellipse(107, 177, 10, 7);

  //Face
  fill(200, 200, 200);
  ellipse(100, 100, 40, 30);
  ellipse(100, 105, 30);

  //Outside of ears
  beginShape();
  vertex(83, 95);
  bezierVertex(80, 70, 90, 88, 95, 88);
  endShape();

  beginShape();
  vertex(117, 95);
  bezierVertex(120, 70, 110, 88, 105, 88);
  endShape();

  //Pink inside of ears
  fill(221, 171, 155);
  beginShape();
  vertex(85, 93);
  bezierVertex(80, 75, 90, 88, 90, 90);
  endShape();

  beginShape();
  vertex(115, 93);
  bezierVertex(120, 75, 110, 88, 110, 90);
  endShape();

  //Left eye
  push();
  fill(106, 136, 168);
  translate(91, 101);
  angleMode(DEGREES);
  rotate(15);
  ellipse(0, 0, 8, 6);
  fill(0, 0, 0);
  ellipse(0, 0, 4, 5);
  pop();

  //Right eye
  push();
  fill(106, 136, 168);
  translate(109, 101);
  angleMode(DEGREES);
  rotate(165);
  ellipse(0, 0, 8, 6);
  fill(0, 0, 0);
  ellipse(0, 0, 4, 5);
  pop();

  //Nose
  fill(180, 180, 180);
  triangle(97, 108, 103, 108, 100, 113);

  //Mouth
  stroke(180, 180, 180);
  strokeWeight(0.5);
  noFill();

  line(100, 114, 100, 116);
  arc(95, 110, 20, 15, 15, 50, OPEN);

  push();
  translate(100, 106);
  angleMode(DEGREES);
  rotate(80);
  arc(0, 0, 20, 15, 15, 50, OPEN);
  pop();

  //Whiskers
  line(94, 110, 90, 109);
  line(94, 111, 90, 111);
  line(94, 112, 90, 113);

  line(106, 110, 110, 109);
  line(106, 111, 110, 111);
  line(106, 112, 110, 113);
  pop();
}

export { sittingStella };
