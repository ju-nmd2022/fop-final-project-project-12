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

function doorToNextLevel() {
  fill(0, 0, 0);
  rect(840, 500, 50, 100);
}

//#region Item objects
let mouseItem1 = {
  id: "mouse1",
  type: "mouse",
  posX: 90,
  posY: 480,
  hasPickedUp: false,
};

let mouseItem2 = {
  id: "mouse2",
  type: "mouse",
  posX: 240,
  posY: 400,
  hasPickedUp: false,
};

let mouseItem3 = {
  id: "mouse3",
  type: "mouse",
  posX: 700,
  posY: 330,
  hasPickedUp: false,
};

let fishItem1 = {
  id: "fish1",
  type: "fish",
  posX: 450,
  posY: 375,
  hasPickedUp: false,
};

let fishItem2 = {
  id: "fish2",
  type: "fish",
  posX: 600,
  posY: 485,
  hasPickedUp: false,
};

let fishItem3 = {
  id: "fish3",
  type: "fish",
  posX: 900,
  posY: 425,
  hasPickedUp: false,
};
//#endregion

//#region Cactus objects
let cactus1 = {
  id: "cactus1",
  type: "cactus",
  posX: 300,
  posY: 455,
  hasLandedOn: false,
};

let cactus2 = {
  id: "cactus2",
  type: "cactus",
  posX: 200,
  posY: 455,
  hasLandedOn: false,
};

//#endregion

let door1 = {
  id: "door1",
  type: "door",
  posX: 840,
  posY: 500,
  hasOpened: false,
};
// Array for items to pick up
let mouseAndFishArray = [
  mouseItem1,
  mouseItem2,
  mouseItem3,
  fishItem1,
  fishItem2,
  fishItem3,
];

let itemPickedUp = [];

// Array for cactus
let cactusArray = [cactus1, cactus2];

const JUMP_HEIGHT = 16;
const CAT_SPEED = 3;
const CAT_HEIGHT = 60;

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

function isHeadWithin(x1, x2, y1, y2, callback) {
  let newCatY = catY + CAT_HEIGHT;
}

window.draw = () => {
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

    let catMirror = 1;

    switch (character) {
      case "fia":
        standingFia(catX, catY, catMirror, 0.8);
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

    // Displaying clouds in the sky
    clouds();
    clouds(600, 90, 1);
    clouds(250, 100, 0.7);

    speedY += gravity;
    catX = catX + speedX;
    catY = catY + speedY;

    isCatWithin(-200, 1000, 600, 700);
    isCatWithin(30, 130, 510, 530);
    isCatWithin(140, 240, 480, 500);
    isCatWithin(220, 320, 430, 450);
    isCatWithin(350, 450, 510, 530);
    isCatWithin(430, 530, 400, 420);
    isCatWithin(510, 610, 510, 530);
    isCatWithin(630, 730, 360, 380);
    isCatWithin(710, 810, 480, 500);
    isCatWithin(830, 930, 450, 470);

    if (keyIsDown(RIGHT_ARROW)) {
      speedX = CAT_SPEED;
    } else if (keyIsDown(LEFT_ARROW)) {
      catMirror = -1;
      speedX = -CAT_SPEED;
      console.log(catMirror);
    } else {
      speedX = 0;
    }

    if (keyIsDown(32) && catIsOnGround) {
      speedY -= JUMP_HEIGHT;
      catIsOnGround = false;
    }

    function opacityMouseAndFish() {
      mouseAndFishArray.forEach((item, index) => {
        if (item.hasPickedUp) {
          if (item.type === "mouse") {
            mouse(index * 50, 0, 1, 255);
          } else if (item.type === "fish") {
            fish(index * 50, 0, 1, 255);
          } else {
            // console.log("invalid item type");
          }
        } else {
          if (item.type === "mouse") {
            mouse(index * 50, 0, 1, 50);
            mouse(item.posX, item.posY, 1, 255);
          } else if (item.type === "fish") {
            fish(index * 50, 0, 1, 50);
            fish(item.posX, item.posY, 1, 255);
          } else {
            // console.log("invalid item type");
          }
          isCatWithin(
            item.posX,
            item.posX + 50,
            item.posY,
            item.posY + 50,
            () => {
              item.hasPickedUp = true;
              itemPickedUp.push(item);
              // console.log("hit the fish");
            }
          );
        }
      });

      if (itemPickedUp.length === 6) {
        doorToNextLevel();

        isCatWithin(
          door1.posX,
          door1.posX + 50,
          door1.posY,
          door1.posY + 100,
          () => {
            door1.hasOpened = true;
            console.log("nylevel");
            state = "levelTwo";
          }
        );
      }
    }

    function walkedInOnCactus() {
      cactusArray.forEach((enemy) => {
        if (enemy.hasLandedOn) {
          state = "lose";
        } else {
          cactus(enemy.posX, enemy.posY, 0.3);
        }
        isCatWithin(
          enemy.posX,
          enemy.posX + 70,
          enemy.posY,
          enemy.posY + 200,
          () => {
            enemy.hasLandedOn = true;
            // console.log("has landed on cactus");
          }
        );
      });
    }
    opacityMouseAndFish();
    walkedInOnCactus();
  }

  function loseScreen() {
    background(255, 0, 0);
  }

  function levelTwoScreen() {
    state = "levelTwo";
    noStroke();
    background(135, 206, 250);

    // Grass
    fill(112, 209, 126);
    rect(0, 600, 1000);

    // The vertical rect of cat tree
    fill(181, 174, 153);
    rect(100, 300, 20, 300);
    rect(210, 350, 20, 250);
    rect(290, 450, 20, 150);
    rect(420, 500, 20, 100);
    rect(500, 420, 20, 180);
    rect(580, 530, 20, 70);
    rect(700, 410, 20, 190);
    rect(780, 500, 20, 100);
    rect(900, 470, 20, 130);

    // The horizontal rect of cat tree
    fill(217, 217, 217);
    rect(60, 300, 100, 20);
    rect(170, 350, 100, 20);
    rect(250, 430, 100, 20);
    rect(380, 500, 100, 20);
    rect(460, 400, 100, 20);
    rect(540, 510, 100, 20);
    rect(660, 410, 100, 20);
    rect(740, 480, 100, 20);
    rect(860, 450, 100, 20);

    // Displaying clouds in the sky
    clouds();
    clouds(600, 90, 1);
    clouds(250, 100, 0.7);
  }

  if (state === "start") {
    startScreen();
  } else if (state === "choose") {
    characterScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lose") {
    loseScreen();
    // window.setTimeout(loseScreen, 10000);
  } else if (state === "levelTwo") {
    levelTwoScreen();
  }
};
