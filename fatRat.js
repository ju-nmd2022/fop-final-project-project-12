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

let catTreeLevelTwo1 = {
  type: "catTree",
  posX: 60,
  posY: 300,
  hasLandedOn: false,
  posXVertical: 100,
  posYVertical: 300,
  height: 300,
};

//#region Cat tree objects for level 1
let catTree1 = {
  type: "catTree",
  posX: 60,
  posY: 510,
  hasLandedOn: false,
  posXVertical: 100,
  posYVertical: 530,
  height: 70,
};

let catTree2 = {
  type: "catTree",
  posX: 170,
  posY: 480,
  hasLandedOn: false,
  posXVertical: 210,
  posYVertical: 500,
  height: 100,
};

let catTree3 = {
  type: "catTree",
  posX: 250,
  posY: 430,
  hasLandedOn: false,
  posXVertical: 290,
  posYVertical: 450,
  height: 150,
};

let catTree4 = {
  type: "catTree",
  posX: 380,
  posY: 510,
  hasLandedOn: false,
  posXVertical: 420,
  posYVertical: 530,
  height: 70,
};

let catTree5 = {
  type: "catTree",
  posX: 460,
  posY: 400,
  hasLandedOn: false,
  posXVertical: 500,
  posYVertical: 420,
  height: 180,
};

let catTree6 = {
  type: "catTree",
  posX: 540,
  posY: 510,
  hasLandedOn: false,
  posXVertical: 580,
  posYVertical: 530,
  height: 70,
};

let catTree7 = {
  type: "catTree",
  posX: 660,
  posY: 360,
  hasLandedOn: false,
  posXVertical: 700,
  posYVertical: 380,
  height: 220,
};

let catTree8 = {
  type: "catTree",
  posX: 740,
  posY: 480,
  hasLandedOn: false,
  posXVertical: 780,
  posYVertical: 500,
  height: 100,
};

let catTree9 = {
  type: "catTree",
  posX: 860,
  posY: 450,
  hasLandedOn: false,
  posXVertical: 900,
  posYVertical: 470,
  height: 130,
};

//#endregion

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
  posX: 350,
  posY: 505,
  hasLandedOn: false,
};

let cactus2 = {
  id: "cactus2",
  type: "cactus",
  posX: 650,
  posY: 505,
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

let catTreeArray = [
  catTree1,
  catTree2,
  catTree3,
  catTree4,
  catTree5,
  catTree6,
  catTree7,
  catTree8,
  catTree9,
];

let catTreeArrayLevelTwo = [catTreeLevelTwo1];

let lifeArray = ["❤️", "❤️", "❤️", "❤️", "❤️", "❤️", "❤️", "❤️", "❤️"];
let dieArray = [];

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
let catMirror = 1;
let s = 0.8;

let state = "start";
let character = null;
let characterButtonIsClicked = false;

let inventoryItemWidth = 60;

//#region Functionality

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

function catTreeDisplay() {
  catTreeArray.forEach((item) => {
    fill(217, 217, 217);
    rect(item.posX, item.posY, 100, 20);

    fill(181, 174, 153);
    rect(item.posXVertical, item.posYVertical, 20, item.height);
  });
}

// function catTreeDisplayLevelTwo() {
//   catTreeArrayLevelTwo.forEach((item) => {
//     fill(217, 217, 217);
//     rect(item.posX, item.posY, 100, 20);

//     fill(181, 174, 153);
//     rect(item.posXVertical, item.posYVertical, 20, item.height);
//   });
// }

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
      isCatWithin(item.posX, item.posX + 50, item.posY, item.posY + 50, () => {
        item.hasPickedUp = true;
        itemPickedUp.push(item);
        // console.log("hit the fish");
      });
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
        // catTreeDisplayLevelTwo();
      }
    );
  }
}

function walkedInOnCactus() {
  cactusArray.forEach((enemy) => {
    if (enemy.hasLandedOn) {
      fill(255, 206, 253);
      rect(350, 200, 300, 100);
      fill(0, 0, 0);
      textSize(15);
      textAlign(CENTER, CENTER);
      text(
        "Be careful! Do not walk in to the cactus.",
        350 + 300 / 2,
        200 + 100 / 2
      );
      text("You only have nine lives.", 350 + 250 / 2, 230 + 100 / 2);
      lifeArray.push(dieArray);
    } else {
      cactus(enemy.posX, enemy.posY, 0.3);
    }
    isCatWithin(
      enemy.posX,
      enemy.posX + 50,
      enemy.posY,
      enemy.posY + 200,
      () => {
        enemy.hasLandedOn = true;
      }
    );
  });
}

// function nineLives() {
//   if (cactus1.hasLandedOn || cactus2.hasLandedOn) {
//   }
// }

//#endregion

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
    textSize(50);
    textStyle(BOLD);
    text("THE GREAT SEARCH", 200, 200);
    text("FOR THE", 490, 260);
    textSize(150);
    textStyle(ITALIC);
    text("FAT RAT", 170, 390);

    function nextButton(x, y, w, h) {
      fill(255, 206, 253);
      rect(x, y, w, h);
      triangle(930, 500, 980, 535, 930, 570);
    }

    nextButton(770, 520, 170, 30);
    cactus(50, 450, 0.5);
    sittingTellus(100, 450);
    fish(170, 545);

    if (
      mouseIsPressed &&
      mouseX > 770 &&
      mouseX < 770 + 160 &&
      mouseY > 520 &&
      mouseY < 520 + 30 &&
      state === "start"
    ) {
      state = "info";
    }
  }

  function infoScreen() {
    state = "info";

    background(135, 206, 250);
    noStroke();

    // Decoration
    fill(112, 209, 126);
    rect(0, 600, 1000);

    clouds();
    clouds(600, 90, 1);
    clouds(100, 100, 0.2);
    clouds(250, 100, 0.7);

    fill(80, 80, 80);
    textSize(20);
    textStyle(BOLD);
    text("There is a fat rat lost in ", 550, 100);
    text("the jungle of cat trees. Choose", 550, 150);
    text("between the cats Fia, Tellus & Stella", 550, 200);
    text("and try to help the fat rat find home.", 550, 250);
    text("Make the cat get through the ?levels.", 550, 350);
    text("But look out for the cacutuses...", 550, 400);

    fill(255, 255, 255);
    textStyle(NORMAL);
    textSize(30);
    text("How to play:", 90, 230);

    triangle(90, 285, 110, 295, 110, 275);
    triangle(210, 275, 210, 295, 230, 285);
    rect(125, 320, 70, 15);
    textSize(20);
    text("Use the left and right", 90, 400);
    text("arrows to stear.", 90, 420);
    text("And spacebar to jump", 90, 440);

    function characterButton(x, y, w, h) {
      fill(255, 206, 253);
      rect(x, y, w, h);
      fill(0, 0, 0);
      textSize(13);
      text("CHOOSE YOUR CHARACTER", 405, 480);
      text("Melody from 'Super Smash Bros'", 405, 500);
    }

    characterButton(400, 450, 200, 70);

    if (
      mouseIsPressed &&
      mouseX > 400 &&
      mouseX < 400 + 200 &&
      mouseY > 450 &&
      mouseY < 450 + 70 &&
      state === "info"
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

    speedY += gravity;
    catX = catX + speedX;
    catY = catY + speedY;

    isCatWithin(-200, 1000, 600, 700);
    isCatWithin(60, 160, 510, 530);
    isCatWithin(170, 270, 480, 500);
    isCatWithin(250, 350, 430, 450);
    isCatWithin(380, 480, 510, 530);
    isCatWithin(460, 560, 400, 420);
    isCatWithin(540, 640, 510, 530);
    isCatWithin(660, 760, 360, 380);
    isCatWithin(740, 840, 480, 500);
    isCatWithin(860, 960, 450, 470);

    if (keyIsDown(RIGHT_ARROW)) {
      speedX = CAT_SPEED;
      catMirror = 1;
    } else if (keyIsDown(LEFT_ARROW)) {
      speedX = -CAT_SPEED;
      catMirror = -1;
    } else {
      speedX = 0;
    }

    if (keyIsDown(32) && catIsOnGround) {
      speedY -= JUMP_HEIGHT;
      catIsOnGround = false;
    }

    catTreeDisplay();
    opacityMouseAndFish();
    walkedInOnCactus();
    // nineLives();

    switch (character) {
      case "fia":
        standingFia(catX, catY, catMirror, s);
        break;

      case "tellus":
        standingTellus(catX, catY, catMirror, s);
        break;

      case "stella":
        standingStella(catX, catY, catMirror, s);
        break;

      default:
        console.log("no character chosen");
    }

    // Displaying clouds in the sky
    clouds();
    clouds(600, 90, 1);
    clouds(250, 100, 0.7);
  }

  function loseScreen() {
    background(255, 0, 0);
  }

  // function levelTwoScreen() {
  //   state = "levelTwo";
  //   noStroke();
  //   background(135, 206, 250);

  //   // Grass
  //   fill(112, 209, 126);
  //   rect(0, 600, 1000);

  //   // The vertical rect of cat tree
  //   fill(181, 174, 153);
  //   rect(100, 300, 20, 300);
  //   rect(210, 350, 20, 250);
  //   rect(290, 450, 20, 150);
  //   rect(420, 500, 20, 100);
  //   rect(500, 420, 20, 180);
  //   rect(580, 530, 20, 70);
  //   rect(700, 410, 20, 190);
  //   rect(780, 500, 20, 100);
  //   rect(900, 470, 20, 130);

  //   // The horizontal rect of cat tree
  //   fill(217, 217, 217);
  //   rect(60, 300, 100, 20);
  //   rect(170, 350, 100, 20);
  //   rect(250, 430, 100, 20);
  //   rect(380, 500, 100, 20);
  //   rect(460, 400, 100, 20);
  //   rect(540, 510, 100, 20);
  //   rect(660, 410, 100, 20);
  //   rect(740, 480, 100, 20);
  //   rect(860, 450, 100, 20);

  //   // Displaying clouds in the sky
  //   clouds();
  //   clouds(600, 90, 1);
  //   clouds(250, 100, 0.7);
  // }

  if (state === "start") {
    startScreen();
  } else if (state === "info") {
    infoScreen();
  } else if (state === "choose") {
    characterScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "levelTwo") {
    levelTwoScreen();
  }
};
