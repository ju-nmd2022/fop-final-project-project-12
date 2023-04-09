noStroke();
background(150, 150, 150);

//Body

fill(190, 190, 190);
rect(95, 119, 10);
triangle(105, 120, 111, 125, 105, 125);
rect(95, 123, 70, 25, 8);
rect(160, 132, 7);

beginShape();
vertex(165, 140);
bezierVertex(197, 110, 180, 104, 178, 106);
endShape();

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
triangle(97, 108, 103, 108, 100, 113);

//Mouth
stroke(180, 180, 180);
strokeWeight(0.5);
noFill();

line(100, 114, 100, 116);
arc(95, 110, 20, 15, 15, 50, OPEN);

push();
angleMode(DEGREES);
translate(95, 110);
rotate(180);
arc(0, 0, 20, 15, 15, 50, OPEN);
pop();

//Legs

//Tail
