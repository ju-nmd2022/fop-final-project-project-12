noStroke();
background(135, 206, 250);

// Grass
fill(112, 209, 126);
rect(0, 600, 1000);

// The vertical rect of cat tree
fill(181, 174, 153);
rect(100, 530, 20, 70);
rect(210, 500, 20, 100);
rect(290, 450, 20, 150);
rect(420, 530, 20, 70);
rect(500, 420, 20, 180);
rect(580, 530, 20, 70);
rect(700, 380, 20, 220);
rect(780, 500, 20, 100);
rect(900, 470, 20, 130);

// The horizontal rect of cat tree
fill(217, 217, 217);
rect(60, 510, 100, 20);
rect(170, 480, 100, 20);
rect(250, 430, 100, 20);
rect(380, 510, 100, 20);
rect(460, 400, 100, 20);
rect(540, 510, 100, 20);
rect(660, 360, 100, 20);
rect(740, 480, 100, 20);
rect(860, 450, 100, 20);

// Displaying clouds in the sky
clouds();
clouds(600, 90, 1);
clouds(-200, -100, 0.7);

// Function for the clouds
function clouds(x, y, s) {
  translate(x, y);
  scale(s);
  fill(255, 255, 255);
  ellipse(100, 100, 70, 50);
  ellipse(120, 130, 80, 70);
  ellipse(165, 150, 70, 40);
  ellipse(160, 100, 80);
  ellipse(220, 130, 100, 60);
  ellipse(220, 100, 90, 70);
  ellipse(165, 80, 70, 50);
  ellipse(130, 80, 60, 40);
}
