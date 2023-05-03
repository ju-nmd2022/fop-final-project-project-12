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
import { mouse } from "./items/mouse.js";
import { fatRat } from "./items/rat.js";

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

//#region Item objects
let mouseItem1 = {
  id: "mouse1",
  type: "mouse",
  posX: -50,
  posY: 340,
  hasPickedUp: false,
};

let mouseItem2 = {
  id: "mouse2",
  type: "mouse",
  posX: 100,
  posY: 306,
  hasPickedUp: false,
};

let mouseItem3 = {
  id: "mouse3",
  type: "mouse",
  posX: 200,
  posY: 200,
  hasPickedUp: false,
};

let fishItem1 = {
  id: "fish1",
  type: "fish",
  posX: 300,
  posY: 400,
  hasPickedUp: false,
};

let fishItem2 = {
  id: "fish2",
  type: "fish",
  posX: 200,
  posY: 400,
  hasPickedUp: false,
};

let fishItem3 = {
  id: "fish3",
  type: "fish",
  posX: 100,
  posY: 400,
  hasPickedUp: false,
};
//#endregion

// Array for items to pick up
let mouseAndFishArray = [
  mouseItem1,
  mouseItem2,
  mouseItem3,
  fishItem1,
  fishItem2,
  fishItem3,
];

const JUMP_HEIGHT = 16;
const CAT_SPEED = 3;
const CAT_HEIGHT = 120;

let speedX = 0;
let speedY = 0;
let gravity = 1;

let catX = 0;
let catY = 600 - CAT_HEIGHT;
let catIsOnGround = false;

let state = "start";
let character = null;
let characterButtonIsClicked = false;

let inventoryItemWidth = 60;

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
  function opacityMouseAndFish() {
    mouseAndFishArray.forEach((item, index) => {
      if (item.hasPickedUp) {
        if (item.type === "mouse") {
          mouse(index * 50 - 150, -150, 1, 100);
        } else if (item.type === "fish") {
          fish(index * 50 - 150, -150, 1, 100);
        } else {
          console.log("invalid item type");
        }
      } else {
        if (item.type === "mouse") {
          mouse(index * 50 - 150, -150, 1, 50);
          mouse(item.posX, item.posY, 1, 255);
          if (item.id === "mouse2") {
          }

          isCatWithin(
            item.posX,
            item.posX + 200,
            item.posY,
            item.posY + 200,
            () => {
              item.hasPickedUp = true;
              console.log("hit the mouse");
            }
          );
        } else if (item.type === "fish") {
          fish(index * 50 - 150, -150, 1, 50);
          fish(item.posX, item.posY, 1, 255);
          isCatWithin(
            item.posX,
            item.posX + 200,
            item.posY,
            item.posY + 200,
            () => {
              item.hasPickedUp = true;
              console.log("hit the fish");
            }
          );
        } else {
          console.log("invalid item type");
        }
      }
    });
  }

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
    clouds(100, 100, 0.2);
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

    if (
      mouseIsPressed &&
      mouseX > 250 &&
      mouseX < 250 + 80 &&
      mouseY > 400 &&
      mouseY < 400 + 240 &&
      state === "choose"
    ) {
      character = "fia";
      state = "game";
    } else if (
      mouseIsPressed &&
      mouseX > 450 &&
      mouseX < 450 + 80 &&
      mouseY > 400 &&
      mouseY < 400 + 240 &&
      state === "choose"
    ) {
      character = "tellus";
      state = "game";
    } else if (
      mouseIsPressed &&
      mouseX > 650 &&
      mouseX < 650 + 80 &&
      mouseY > 400 &&
      mouseY < 400 + 240 &&
      state === "choose"
    ) {
      character = "stella";
      state = "game";
    }
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

    // fish(-150, -170, 1, 100);
    // fish(-100, -170, 1, 100);
    // fish(-50, -170, 1, 100);
    // mouse(-100, -100, 0.8, 100);
    // mouse(-50, -100, 0.8, 100);
    // mouse(0, -100, 0.8, 100);

    switch (character) {
      case "fia":
        standingFia(catX, catY, 0.8);
        break;

      case "tellus":
        standingTellus(catX, catY, 0.8);
        break;

      case "stella":
        standingStella(catX, catY, 0.8);
        break;

      default:
        console.log("no character chosen");
    }

    opacityMouseAndFish();
  }

  // Displaying clouds in the sky
  clouds();
  clouds(600, 90, 1);
  clouds(250, 100, 0.7);

  speedY += gravity;
  catX = catX + speedX;
  catY = catY + speedY;

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

  if (state === "start") {
    startScreen();
  } else if (state === "choose") {
    characterScreen();
  } else if (state === "game") {
    gameScreen();
  }
};
