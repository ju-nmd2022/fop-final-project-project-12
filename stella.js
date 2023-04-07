noStroke();
background(150, 150, 150);

fill(200, 200, 200);

//Face
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
rotate(-15);
ellipse(0, 0, 8, 6);
fill(0, 0, 0);
ellipse(0, 0, 4, 5);
pop();

//Nose

//Mouth

//Body

//Legs

//Tail
