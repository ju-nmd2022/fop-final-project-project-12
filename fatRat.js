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

//#region Cat tree objects for level 1
let catTree1 = {
  type: "catTree",
  posX: 60,
  posY: 510,
  hasLandedOn: false,
  posXVertical: 100,
  posYVertical: 530,
  height: 70,
  level: 1,
};

let catTree2 = {
  type: "catTree",
  posX: 170,
  posY: 480,
  hasLandedOn: false,
  posXVertical: 210,
  posYVertical: 500,
  height: 100,
  level: 1,
};

let catTree3 = {
  type: "catTree",
  posX: 250,
  posY: 430,
  hasLandedOn: false,
  posXVertical: 290,
  posYVertical: 450,
  height: 150,
  level: 1,
};

let catTree4 = {
  type: "catTree",
  posX: 380,
  posY: 510,
  hasLandedOn: false,
  posXVertical: 420,
  posYVertical: 530,
  height: 70,
  level: 1,
};

let catTree5 = {
  type: "catTree",
  posX: 460,
  posY: 400,
  hasLandedOn: false,
  posXVertical: 500,
  posYVertical: 420,
  height: 180,
  level: 1,
};

let catTree6 = {
  type: "catTree",
  posX: 540,
  posY: 510,
  hasLandedOn: false,
  posXVertical: 580,
  posYVertical: 530,
  height: 70,
  level: 1,
};

let catTree7 = {
  type: "catTree",
  posX: 660,
  posY: 360,
  hasLandedOn: false,
  posXVertical: 700,
  posYVertical: 380,
  height: 220,
  level: 1,
};

let catTree8 = {
  type: "catTree",
  posX: 740,
  posY: 480,
  hasLandedOn: false,
  posXVertical: 780,
  posYVertical: 500,
  height: 100,
  level: 1,
};

let catTree9 = {
  type: "catTree",
  posX: 860,
  posY: 450,
  hasLandedOn: false,
  posXVertical: 900,
  posYVertical: 470,
  height: 130,
  level: 1,
};

//#endregion

//#region Cat tree object for level 2
let catTreeLevelTwo1 = {
  type: "catTree",
  posX: 60,
  posY: 300,
  hasLandedOn: false,
  posXVertical: 100,
  posYVertical: 320,
  height: 280,
  level: 2,
};

let catTreeLevelTwo2 = {
  type: "catTree",
  posX: 170,
  posY: 350,
  hasLandedOn: false,
  posXVertical: 210,
  posYVertical: 370,
  height: 230,
  level: 2,
};

let catTreeLevelTwo3 = {
  type: "catTree",
  posX: 250,
  posY: 430,
  hasLandedOn: false,
  posXVertical: 290,
  posYVertical: 450,
  height: 150,
  level: 2,
};

let catTreeLevelTwo4 = {
  type: "catTree",
  posX: 380,
  posY: 500,
  hasLandedOn: false,
  posXVertical: 420,
  posYVertical: 520,
  height: 80,
  level: 2,
};

let catTreeLevelTwo5 = {
  type: "catTree",
  posX: 460,
  posY: 400,
  hasLandedOn: false,
  posXVertical: 500,
  posYVertical: 420,
  height: 180,
  level: 2,
};

let catTreeLevelTwo6 = {
  type: "catTree",
  posX: 540,
  posY: 510,
  hasLandedOn: false,
  posXVertical: 580,
  posYVertical: 530,
  height: 70,
  level: 2,
};

let catTreeLevelTwo7 = {
  type: "catTree",
  posX: 660,
  posY: 410,
  hasLandedOn: false,
  posXVertical: 700,
  posYVertical: 430,
  height: 170,
  level: 2,
};

let catTreeLevelTwo8 = {
  type: "catTree",
  posX: 740,
  posY: 480,
  hasLandedOn: false,
  posXVertical: 780,
  posYVertical: 500,
  height: 100,
  level: 2,
};

let catTreeLevelTwo9 = {
  type: "catTree",
  posX: 860,
  posY: 450,
  hasLandedOn: false,
  posXVertical: 900,
  posYVertical: 470,
  height: 130,
  level: 2,
};
//#endregion

//#region Item objects
let mouseItem1 = {
  type: "mouse",
  posX: 90,
  posY: 480,
  hasPickedUp: false,
  level: 1,
};

let mouseItem2 = {
  type: "mouse",
  posX: 240,
  posY: 400,
  hasPickedUp: false,
  level: 1,
};

let mouseItem3 = {
  type: "mouse",
  posX: 700,
  posY: 330,
  hasPickedUp: false,
  level: 1,
};

let mouseItem4 = {
  type: "mouse",
  posX: 260,
  posY: 400,
  hasPickedUp: false,
  level: 2,
};

let mouseItem5 = {
  type: "mouse",
  posX: 680,
  posY: 380,
  hasPickedUp: false,
  level: 2,
};

let mouseItem6 = {
  type: "mouse",
  posX: 490,
  posY: 370,
  hasPickedUp: false,
  level: 2,
};

let fishItem1 = {
  type: "fish",
  posX: 450,
  posY: 375,
  hasPickedUp: false,
  level: 1,
};

let fishItem2 = {
  type: "fish",
  posX: 600,
  posY: 485,
  hasPickedUp: false,
  level: 1,
};

let fishItem3 = {
  type: "fish",
  posX: 900,
  posY: 425,
  hasPickedUp: false,
  level: 1,
};

let fishItem4 = {
  type: "fish",
  posX: 780,
  posY: 455,
  hasPickedUp: false,
  level: 2,
};

let fishItem5 = {
  type: "fish",
  posX: 80,
  posY: 275,
  hasPickedUp: false,
  level: 2,
};

let fishItem6 = {
  type: "fish",
  posX: 880,
  posY: 425,
  hasPickedUp: false,
  level: 2,
};
//#endregion

//#region Cactus objects
let cactus1 = {
  type: "cactus",
  posX: 350,
  posY: 505,
  hasLandedOn: false,
  level: 1,
};

let cactus2 = {
  type: "cactus",
  posX: 650,
  posY: 505,
  hasLandedOn: false,
  level: 1,
};

let cactus3 = {
  type: "cactus",
  posX: 500,
  posY: 505,
  hasLandedOn: false,
  level: 2,
};

let cactus4 = {
  type: "cactus",
  posX: 850,
  posY: 505,
  hasLandedOn: false,
  level: 2,
};
//#endregion

let door = {
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
  mouseItem4,
  mouseItem5,
  mouseItem6,
  fishItem1,
  fishItem2,
  fishItem3,
  fishItem4,
  fishItem5,
  fishItem6,
];

let allCatTreesArray = [
  catTree1,
  catTree2,
  catTree3,
  catTree4,
  catTree5,
  catTree6,
  catTree7,
  catTree8,
  catTree9,
  catTreeLevelTwo1,
  catTreeLevelTwo2,
  catTreeLevelTwo3,
  catTreeLevelTwo4,
  catTreeLevelTwo5,
  catTreeLevelTwo6,
  catTreeLevelTwo7,
  catTreeLevelTwo7,
  catTreeLevelTwo8,
  catTreeLevelTwo9,
];

let itemPickedUp = [];

// Array for cactus
let cactusArray = [cactus1, cactus2, cactus3, cactus4];

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
let level = 1;

let lives = 9;
let enemyMessageShow = false;

let pressedCharacterButton;

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

function catTreeDisplay() {
  allCatTreesArray.forEach((item) => {
    if (item.level == level) {
      fill(217, 217, 217);
      rect(item.posX, item.posY, 100, 20);
      fill(181, 174, 153);
      rect(item.posXVertical, item.posYVertical, 20, item.height);
      isCatWithin(item.posX, item.posX + 100, item.posY, item.posY + 20);
    }
  });
}

function drawMouseAndFish() {
  let placedItemCount = 0;
  mouseAndFishArray.forEach((item, index) => {
    if (item.level != level) {
      return;
    }
    if (item.hasPickedUp) {
      if (item.type === "mouse") {
        mouse(placedItemCount * 50, 0, 1, 255);
      } else if (item.type === "fish") {
        fish(placedItemCount * 50, 0, 1, 255);
      }
    } else {
      if (item.type === "mouse") {
        mouse(placedItemCount * 50, 0, 1, 50);
        mouse(item.posX, item.posY, 1, 255);
      } else if (item.type === "fish") {
        fish(placedItemCount * 50, 0, 1, 50);
        fish(item.posX, item.posY, 1, 255);
      }
      isCatWithin(item.posX, item.posX + 50, item.posY, item.posY + 50, () => {
        item.hasPickedUp = true;
        itemPickedUp.push(item);
      });
    }
    placedItemCount += 1;
  });

  if (itemPickedUp.length === 6) {
    doorToNextLevel();

    isCatWithin(door.posX, door.posX + 50, door.posY, door.posY + 100, () => {
      door.hasOpened = true;
      console.log("nylevel");
      level = 2;
    });
  }
}

function drawEnemyMessage() {
  if (enemyMessageShow == true) {
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
  }
}

function drawCactus() {
  cactusArray.forEach((enemy) => {
    if (enemy.level != level) {
      return;
    }
    cactus(enemy.posX, enemy.posY, 0.3);
    isCatWithin(
      enemy.posX,
      enemy.posX + 50,
      enemy.posY,
      enemy.posY + 200,
      () => {
        hitCactus();
      }
    );
  });
}

function hitCactus() {
  lives -= 1;

  if (lives > 0) {
    enemyMessageShow = true;
    window.setTimeout(() => {
      enemyMessageShow = false;
    }, 5000);
    catX = 0;
    catY = 600 - CAT_HEIGHT;
  } else {
    speedX = 0;
    speedY = 0;
    window.setTimeout(() => {
      state = "lose";
    }, 1000);
  }
}

function drawHearts() {
  for (let i = 1; i <= 9; i++) {
    let x = 970 + (i - 1) * -30;
    let y = 20;
    if (lives >= i) {
      heart(x, y);
    }
  }
}

function heart(x, y) {
  push();
  noStroke();
  fill(202, 0, 0);
  translate(x, y);
  translate(-100, -100);
  ellipse(95, 100, 13, 15);
  ellipse(105, 100, 13, 15);
  triangle(90, 105, 100, 115, 110, 105);
  triangle(100, 105, 100, 115, 90, 105);
  pop();
}

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
      pressedCharacterButton = Date.now();
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
    if (pressedCharacterButton + 1000 < Date.now()) {
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

    // To walk on ground
    isCatWithin(-200, 1200, 600, 700);
    catTreeDisplay();

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

    drawMouseAndFish();
    drawCactus();

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
    drawHearts();
    drawEnemyMessage();
    // Displaying clouds in the sky
    clouds();
    clouds(600, 90, 1);
    clouds(250, 100, 0.7);
  }

  function loseScreen() {
    background(255, 0, 0);
  }

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
  }
};
