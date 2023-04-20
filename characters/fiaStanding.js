function standingFia(catX, catY, s) {
  push();
  translate(catX, catY);
  scale(s);
  noStroke();
  background(250, 250, 250);

  //Head
  fill(225, 198, 153);
  ellipse(100, 100, 20, 30);

  //Ear
  fill(225, 198, 153);
  beginShape();
  vertex(95, 88);
  bezierVertex(105, 70, 105, 80, 105, 88);
  endShape();

  fill(221, 171, 155);
  beginShape();
  vertex(100, 87);
  bezierVertex(100, 78, 108, 79, 104, 87);
  endShape();

  //Nose
  fill(221, 171, 155);
  triangle(108, 100, 108, 107, 112, 107);

  //Eye
  fill(106, 136, 168);
  ellipse(107, 98, 5, 6);
  fill(0, 0, 0);
  ellipse(107, 98, 2, 6);

  //Tail
  fill(225, 198, 153);
  stroke(200, 200, 200);

  curve(100, 90, 50, 122, 30, 100, 60, 140);
  noStroke();
  //Body
  fill(225, 198, 153);
  rect(45, 110, 50, 25, 10);

  //Neck
  rect(87, 103, 10, 15, 40);

  //Legs
  stroke(180, 180, 180);
  line(54, 135, 54, 150);
  line(80, 135, 80, 150);
  line(64, 135, 64, 150);
  line(90, 133, 90, 150);

  noStroke();
  rect(54, 130, 10, 20);
  rect(80, 130, 10, 20);

  //Paws
  noStroke();
  fill(225, 198, 153);
  ellipse(60, 150, 12, 6);
  ellipse(86, 150, 12, 6);

  //Whiskers
  stroke(180, 180, 180);
  strokeWeight(0.5);
  line(107, 106, 104, 106);
  line(107, 107, 104, 108);
  line(107, 105, 104, 104);
}


export { standingFia };
