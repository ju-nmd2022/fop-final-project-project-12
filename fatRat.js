window.setup = () => {
  const canvas = createCanvas(1000, 700);
  frameRate(30);
  canvas.parent("canvas");
};

import { standingTellus, sittingTellus } from "./characters/tellus.js";
import { standingStella, sittingStella } from "./characters/stella.js";
import { standingFia, sittingFia } from "./characters/fia.js";
import { cactus } from "./items/cactus.js";
import { fish } from "./items/fish.js";

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

window.draw = () => {
  if (state === "start") {
    startScreen();
  } else if (state === "choose") {
    characterScreen();
  } else if (state === "game") {
    gameScreen();
  }
};
