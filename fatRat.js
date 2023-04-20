import * as sittingTellus from "./characters/tellusSitting";
import * as standingTellus from "./characters/tellusStanding";

import * as sittingStella from "./characters/stellaSitting";
import * as standingStella from "./characters/stellaStanding";

import * as sittingFia from "./characters/fiaSitting";
import * as standingFia from "./characters/fiaStanding";

function setup() {
  const canvas = createCanvas(1000, 700);
  frameRate(30);
  canvas.parent("canvas");
}

function clouds(x, y, s) {
  push();
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
  pop();
}

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

// function sittingFia(x, y, s) {
//   push();
//   translate(x, y);
//   scale(s);
//   noStroke();

//   //Tail
//   fill(225, 198, 153);

//   beginShape();
//   vertex(120, 160);
//   bezierVertex(90, 200, 140, 80, 130, 130);
//   endShape();

//   //Body
//   fill(225, 198, 153);
//   rect(82.5, 110, 35, 70, 20);
//   ellipse(100, 155, 40, 50);

//   //Legs
//   stroke(169, 149, 123);
//   strokeWeight(1);
//   line(88, 150, 90, 177);
//   line(93, 150, 95, 177);

//   line(107, 150, 105, 177);
//   line(112, 150, 110, 177);

//   //Paws
//   fill(225, 198, 153);
//   noStroke();
//   ellipse(93, 177, 10, 7);
//   ellipse(107, 177, 10, 7);

//   //Face
//   fill(225, 198, 153);
//   ellipse(100, 100, 40, 30);
//   ellipse(100, 105, 30);

//   //Outside of ears
//   beginShape();
//   vertex(83, 95);
//   bezierVertex(80, 70, 90, 88, 95, 88);
//   endShape();

//   beginShape();
//   vertex(117, 95);
//   bezierVertex(120, 70, 110, 88, 105, 88);
//   endShape();

//   //Pink inside of ears
//   fill(230, 180, 193);
//   beginShape();
//   vertex(85, 93);
//   bezierVertex(80, 75, 90, 88, 90, 90);
//   endShape();

//   beginShape();
//   vertex(115, 93);
//   bezierVertex(120, 75, 110, 88, 110, 90);
//   endShape();

//   //Left eye
//   push();
//   fill(255, 255, 255);
//   translate(91, 101);
//   angleMode(DEGREES);
//   rotate(15);
//   ellipse(0, 0, 8, 6);
//   fill(251, 177, 23);
//   ellipse(0, 0, 4, 5);
//   pop();

//   //Right eye
//   push();
//   fill(255, 255, 255);
//   translate(109, 101);
//   angleMode(DEGREES);
//   rotate(165);
//   ellipse(0, 0, 8, 6);
//   fill(251, 177, 23);
//   ellipse(0, 0, 4, 5);
//   pop();

//   //Nose
//   fill(230, 180, 193);
//   triangle(97, 108, 103, 108, 100, 113);

//   //Mouth
//   stroke(180, 180, 180);
//   strokeWeight(0.5);
//   noFill();

//   line(100, 114, 100, 116);
//   arc(95, 110, 20, 15, 15, 50, OPEN);

//   push();
//   translate(100, 106);
//   angleMode(DEGREES);
//   rotate(80);
//   arc(0, 0, 20, 15, 15, 50, OPEN);
//   pop();

//   //Whiskers
//   line(94, 110, 90, 109);
//   line(94, 111, 90, 111);
//   line(94, 112, 90, 113);

//   line(106, 110, 110, 109);
//   line(106, 111, 110, 111);
//   line(106, 112, 110, 113);
//   pop();
// }

// function standingFia(catX, catY, s) {
//   push();
//   translate(catX, catY);
//   scale(s);
//   noStroke();

//   //Head
//   fill(225, 198, 153);
//   ellipse(100, 100, 20, 30);

//   //Ear
//   fill(225, 198, 153);
//   beginShape();
//   vertex(95, 88);
//   bezierVertex(105, 70, 105, 80, 105, 88);
//   endShape();

//   fill(221, 171, 155);
//   beginShape();
//   vertex(100, 87);
//   bezierVertex(100, 78, 108, 79, 104, 87);
//   endShape();

//   //Nose
//   fill(221, 171, 155);
//   triangle(108, 100, 108, 107, 112, 107);

//   //Eye
//   fill(106, 136, 168);
//   ellipse(107, 98, 5, 6);
//   fill(0, 0, 0);
//   ellipse(107, 98, 2, 6);

//   //Tail
//   fill(225, 198, 153);
//   stroke(200, 200, 200);

//   curve(100, 90, 50, 122, 30, 100, 60, 140);
//   noStroke();
//   //Body
//   fill(225, 198, 153);
//   rect(45, 110, 50, 25, 10);

//   //Neck
//   rect(87, 103, 10, 15, 40);

//   //Legs
//   stroke(180, 180, 180);
//   line(54, 135, 54, 150);
//   line(80, 135, 80, 150);
//   line(64, 135, 64, 150);
//   line(90, 133, 90, 150);

//   noStroke();
//   rect(54, 130, 10, 20);
//   rect(80, 130, 10, 20);

//   //Paws
//   noStroke();
//   fill(225, 198, 153);
//   ellipse(60, 150, 12, 6);
//   ellipse(86, 150, 12, 6);

//   //Whiskers
//   stroke(180, 180, 180);
//   strokeWeight(0.5);
//   line(107, 106, 104, 106);
//   line(107, 107, 104, 108);
//   line(107, 105, 104, 104);
// }

// function sittingTellus(x, y, s) {
//   push();
//   translate(x, y);
//   scale(s);
//   noStroke();

//   //Tail
//   fill(150, 75, 0);

//   beginShape();
//   vertex(120, 160);
//   bezierVertex(90, 200, 140, 80, 130, 130);
//   endShape();

//   //Body
//   fill(160, 80, 0);
//   rect(82.5, 110, 35, 70, 20);
//   ellipse(100, 155, 40, 50);

//   //Legs
//   stroke(140, 55, 20);
//   strokeWeight(1);
//   line(88, 150, 90, 177);
//   line(93, 150, 95, 177);

//   line(107, 150, 105, 177);
//   line(112, 150, 110, 177);

//   //Paws
//   fill(150, 70, 0);
//   noStroke();
//   ellipse(93, 177, 10, 7);
//   ellipse(107, 177, 10, 7);

//   //Face
//   fill(150, 75, 0);
//   ellipse(100, 100, 40, 30);
//   ellipse(100, 105, 30);

//   //Outside of ears
//   beginShape();
//   vertex(83, 95);
//   bezierVertex(80, 70, 90, 88, 95, 88);
//   endShape();

//   beginShape();
//   vertex(117, 95);
//   bezierVertex(120, 70, 110, 88, 105, 88);
//   endShape();

//   //Pink inside of ears
//   fill(140, 55, 20);
//   beginShape();
//   vertex(85, 93);
//   bezierVertex(80, 75, 90, 88, 90, 90);
//   endShape();

//   beginShape();
//   vertex(115, 93);
//   bezierVertex(120, 75, 110, 88, 110, 90);
//   endShape();

//   //Left eye
//   push();
//   fill(255, 255, 255);
//   translate(91, 101);
//   angleMode(DEGREES);
//   rotate(15);
//   ellipse(0, 0, 8, 6);
//   fill(106, 136, 168);
//   ellipse(0, 0, 4, 5);
//   pop();

//   //Right eye
//   push();
//   fill(255, 255, 255);
//   translate(109, 101);
//   angleMode(DEGREES);
//   rotate(165);
//   ellipse(0, 0, 8, 6);
//   fill(106, 136, 168);
//   ellipse(0, 0, 4, 5);
//   pop();

//   //Nose
//   fill(180, 180, 180);
//   triangle(97, 108, 103, 108, 100, 113);

//   //Mouth
//   stroke(180, 180, 180);
//   strokeWeight(0.5);
//   noFill();

//   line(100, 114, 100, 116);
//   arc(95, 110, 20, 15, 15, 50, OPEN);

//   push();
//   translate(100, 106);
//   angleMode(DEGREES);
//   rotate(80);
//   arc(0, 0, 20, 15, 15, 50, OPEN);
//   pop();

//   //Whiskers
//   line(94, 110, 90, 109);
//   line(94, 111, 90, 111);
//   line(94, 112, 90, 113);

//   line(106, 110, 110, 109);
//   line(106, 111, 110, 111);
//   line(106, 112, 110, 113);
//   pop();
// }

// function standingTellus(x, y, s) {
//   push();
//   translate(x, y);
//   scale(s);
//   noStroke();

//   //Head
//   fill(150, 75, 0);
//   ellipse(100, 100, 20, 30);

//   //Ear
//   fill(150, 75, 0);
//   beginShape();
//   vertex(95, 88);
//   bezierVertex(105, 70, 105, 80, 105, 88);
//   endShape();

//   fill(221, 171, 155);
//   beginShape();
//   vertex(100, 87);
//   bezierVertex(100, 78, 108, 79, 104, 87);
//   endShape();

//   //Nose
//   fill(200, 200, 200);
//   triangle(108, 100, 108, 107, 112, 107);

//   //Eye
//   fill(0, 0, 0);
//   ellipse(107, 98, 5, 6);
//   fill(106, 136, 168);
//   ellipse(107, 98, 2, 6);

//   //Tail
//   fill(150, 75, 0);
//   stroke(200, 200, 200);

//   curve(100, 90, 50, 122, 30, 100, 60, 140);
//   noStroke();
//   //Body
//   fill(150, 75, 0);
//   rect(45, 110, 50, 25, 10);

//   //Neck
//   rect(87, 103, 10, 15, 40);

//   //Legs
//   stroke(180, 180, 180);
//   line(54, 135, 54, 150);
//   line(80, 135, 80, 150);
//   line(64, 135, 64, 150);
//   line(90, 133, 90, 150);

//   noStroke();
//   rect(54, 130, 10, 20);
//   rect(80, 130, 10, 20);

//   //Paws
//   noStroke();
//   fill(150, 75, 0);
//   ellipse(60, 150, 12, 6);
//   ellipse(86, 150, 12, 6);

//   //Whiskers
//   stroke(180, 180, 180);
//   strokeWeight(0.5);
//   line(107, 106, 104, 106);
//   line(107, 107, 104, 108);
//   line(107, 105, 104, 104);
// }

// function sittingStella(x, y, s) {
//   push();
//   translate(x, y);
//   scale(s);
//   noStroke();

//   //Tail
//   fill(180, 180, 180);

//   beginShape();
//   vertex(120, 160);
//   bezierVertex(90, 200, 140, 80, 130, 130);
//   endShape();

//   //Body
//   fill(190, 190, 190);
//   rect(82.5, 110, 35, 70, 20);
//   ellipse(100, 155, 40, 50);

//   //Legs
//   stroke(170, 170, 170);
//   strokeWeight(1);
//   line(88, 150, 90, 177);
//   line(93, 150, 95, 177);

//   line(107, 150, 105, 177);
//   line(112, 150, 110, 177);

//   //Paws
//   fill(180, 180, 180);
//   noStroke();
//   ellipse(93, 177, 10, 7);
//   ellipse(107, 177, 10, 7);

//   //Face
//   fill(200, 200, 200);
//   ellipse(100, 100, 40, 30);
//   ellipse(100, 105, 30);

//   //Outside of ears
//   beginShape();
//   vertex(83, 95);
//   bezierVertex(80, 70, 90, 88, 95, 88);
//   endShape();

//   beginShape();
//   vertex(117, 95);
//   bezierVertex(120, 70, 110, 88, 105, 88);
//   endShape();

//   //Pink inside of ears
//   fill(221, 171, 155);
//   beginShape();
//   vertex(85, 93);
//   bezierVertex(80, 75, 90, 88, 90, 90);
//   endShape();

//   beginShape();
//   vertex(115, 93);
//   bezierVertex(120, 75, 110, 88, 110, 90);
//   endShape();

//   //Left eye
//   push();
//   fill(106, 136, 168);
//   translate(91, 101);
//   angleMode(DEGREES);
//   rotate(15);
//   ellipse(0, 0, 8, 6);
//   fill(0, 0, 0);
//   ellipse(0, 0, 4, 5);
//   pop();

//   //Right eye
//   push();
//   fill(106, 136, 168);
//   translate(109, 101);
//   angleMode(DEGREES);
//   rotate(165);
//   ellipse(0, 0, 8, 6);
//   fill(0, 0, 0);
//   ellipse(0, 0, 4, 5);
//   pop();

//   //Nose
//   fill(180, 180, 180);
//   triangle(97, 108, 103, 108, 100, 113);

//   //Mouth
//   stroke(180, 180, 180);
//   strokeWeight(0.5);
//   noFill();

//   line(100, 114, 100, 116);
//   arc(95, 110, 20, 15, 15, 50, OPEN);

//   push();
//   translate(100, 106);
//   angleMode(DEGREES);
//   rotate(80);
//   arc(0, 0, 20, 15, 15, 50, OPEN);
//   pop();

//   //Whiskers
//   line(94, 110, 90, 109);
//   line(94, 111, 90, 111);
//   line(94, 112, 90, 113);

//   line(106, 110, 110, 109);
//   line(106, 111, 110, 111);
//   line(106, 112, 110, 113);
//   pop();
// }

// function standingStella(x, y, s) {
//   push();
//   translate(x, y);
//   scale(s);
//   noStroke();

//   //Head
//   fill(200, 200, 200);
//   ellipse(100, 100, 20, 30);

//   //Ear
//   fill(200, 200, 200);
//   beginShape();
//   vertex(95, 88);
//   bezierVertex(105, 70, 105, 80, 105, 88);
//   endShape();

//   fill(221, 171, 155);
//   beginShape();
//   vertex(100, 87);
//   bezierVertex(100, 78, 108, 79, 104, 87);
//   endShape();

//   //Nose
//   fill(200, 200, 200);
//   triangle(108, 100, 108, 107, 112, 107);

//   //Eye
//   fill(106, 136, 168);
//   ellipse(107, 98, 5, 6);
//   fill(0, 0, 0);
//   ellipse(107, 98, 2, 6);

//   //Tail
//   fill(200, 200, 200);
//   stroke(200, 200, 200);

//   curve(100, 90, 50, 122, 30, 100, 60, 140);
//   noStroke();
//   //Body
//   fill(200, 200, 200);
//   rect(45, 110, 50, 25, 10);

//   //Neck
//   rect(87, 103, 10, 15, 40);

//   //Legs
//   stroke(180, 180, 180);
//   line(54, 135, 54, 150);
//   line(80, 135, 80, 150);
//   line(64, 135, 64, 150);
//   line(90, 133, 90, 150);

//   noStroke();
//   rect(54, 130, 10, 20);
//   rect(80, 130, 10, 20);

//   //Paws
//   noStroke();
//   fill(180, 180, 180);
//   ellipse(60, 150, 12, 6);
//   ellipse(86, 150, 12, 6);

//   //Whiskers
//   stroke(180, 180, 180);
//   strokeWeight(0.5);
//   line(107, 106, 104, 106);
//   line(107, 107, 104, 108);
//   line(107, 105, 104, 104);
// }

// Varaiables
const JUMP_HEIGHT = 16;
const CAT_SPEED = 3;
const CAT_HEIGHT = 120;

let speedX = 0;
let speedY = 0;
let gravity = 1;

let catX = -20;
let catY = 600 - CAT_HEIGHT;
let catIsOnGround = false;

let state = "start";
let characterButtonIsClicked = false;

// Screens
function startScreen() {
  state = "start";
  background(135, 206, 250);
  noStroke();

  // Decoration
  fill(112, 209, 126);
  rect(0, 600, 1000);

  clouds();
  clouds(600, 90, 1);
  clouds(250, 100, 0.7);

  fatRat(500, 250);

  // Instructions
  fill(80, 80, 80);
  textSize(30);
  text("There is a fat rat lost in the jungle of cat-trees", 150, 250);
  text("and we need your help to find him!! Can you help us?", 150, 300);

  fill(255, 255, 255);
  textSize(20);
  text("How to play:", 40, 400);

  triangle(90, 455, 110, 465, 110, 445);
  triangle(210, 445, 210, 465, 230, 455);
  rect(60, 500, 200, 30);
  fill(0, 0, 0);
  textSize(20);
  text("JUMP", 125, 520);

  function characterButton(x, y, w, h) {
    fill(255, 182, 193);
    rect(x, y, w, h);
    fill(0, 0, 0);
    textSize(20);
    text("Choose your character!", x + 50, y + 30);
  }

  characterButton(350, 400, 300, 50);

  if (
    mouseIsPressed &&
    mouseX > 350 &&
    mouseX < 350 + 300 &&
    mouseY > 400 &&
    mouseY < 400 + 50 &&
    state === "start"
  ) {

    state = "choose";
  }
}

function characterScreen() {
  state = "choose";
  background(135, 206, 250);
  noStroke();

  // Decoration
  fill(112, 209, 126);
  rect(0, 600, 1000);

  clouds();
  clouds(600, 90, 1);
  clouds(250, 100, 0.7);

  sittingFia(100, 260, 2);
  sittingTellus(300, 260, 2);
  sittingStella(500, 260, 2);

  fill(80, 80, 80);
  textSize(50);
  text("CHOOSE YOUR CHARACTER!!", 160, 200);

  textSize(20);
  text("Fia", 280, 400);
  text("Tellus", 470, 400);
  text("Stella", 670, 400);
}

function gameScreen() {
  state = "game";
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
  clouds(250, 100, 0.7);

  speedY += gravity;
  catX = catX + speedX;
  catY = catY + speedY;

  standingFia(catX, catY, 0.8);
  isCatWithin(-200, 1000, 600, 700);
  isCatWithin(0, 100, 510, 530);
  isCatWithin(110, 210, 480, 500);
  isCatWithin(200, 300, 430, 450);
  isCatWithin(320, 420, 510, 530);
  isCatWithin(400, 500, 400, 420);
  isCatWithin(480, 580, 510, 530);
  isCatWithin(600, 700, 360, 380);
  isCatWithin(680, 780, 480, 500);
  isCatWithin(800, 900, 450, 470);

  if (keyIsDown(RIGHT_ARROW)) {
    speedX = CAT_SPEED;
  } else if (keyIsDown(LEFT_ARROW)) {
    speedX = -CAT_SPEED;
  } else {
    speedX = 0;
  }

  if (keyIsDown(32) && catIsOnGround) {
    speedY -= JUMP_HEIGHT;
    catIsOnGround = false;
  }
}

function isCatWithin(x1, x2, y1, y2, callback) {
  let newCatY = catY + CAT_HEIGHT;
  if (catX >= x1 && catX <= x2 && newCatY >= y1 && newCatY <= y2) {
    if (callback == null) {
      catY = y1 - CAT_HEIGHT;
      catIsOnGround = true;
      speedY = 0;
    } else callback();
  }
}
 
function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "choose") {
    characterScreen();
  } else if (state === "game") {
    gameScreen();
  }
}
