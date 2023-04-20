function standingTellus(catX, catY, s) {
  push();
  translate(catX, catY);
  scale(s);
  noStroke();

  //Head
  fill(150, 75, 0);
  ellipse(100, 100, 20, 30);

  //Ear
  fill(150, 75, 0);
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
  fill(200, 200, 200);
  triangle(108, 100, 108, 107, 112, 107);

  //Eye
  fill(0, 0, 0);
  ellipse(107, 98, 5, 6);
  fill(106, 136, 168);
  ellipse(107, 98, 2, 6);

  //Tail
  fill(150, 75, 0);
  stroke(200, 200, 200);

  curve(100, 90, 50, 122, 30, 100, 60, 140);
  noStroke();
  //Body
  fill(150, 75, 0);
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
  fill(150, 75, 0);
  ellipse(60, 150, 12, 6);
  ellipse(86, 150, 12, 6);

  //Whiskers
  stroke(180, 180, 180);
  strokeWeight(0.5);
  line(107, 106, 104, 106);
  line(107, 107, 104, 108);
  line(107, 105, 104, 104);
}

export { standingTellus };
