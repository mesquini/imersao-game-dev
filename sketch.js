/// <reference path="./references/p5.global-mode.d.ts" />

let imageScenario;
let scenario;

let character;
let imageCharacter;
let matrixCharacter = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];

let enemy;
let imageEnemy;

let imageGamerOver;

let musicGame;
let soundJump;
let soundGameOver;

const matrixEnemy = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];

function preload() {
  imageScenario = loadImage("./assets/imagens/cenario/floresta.png");

  imageCharacter = loadImage("./assets/imagens/personagem/correndo.png");
  imageEnemy = loadImage("./assets/imagens/inimigos/gotinha.png");

  imageGamerOver = loadImage("./assets/imagens/gameOver.jpg");

  musicGame = loadSound("./assets/sons/trilha_jogo.mp3");
  soundJump = loadSound("./assets/sons/somPulo.mp3");
  soundGameOver = loadSound("./assets/sons/gameOver.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenario, 3);
  character = new Character(
    matrixCharacter,
    imageCharacter,
    50,
    110,
    135,
    220,
    270
  );
  enemy = new Enemy(matrixEnemy, imageEnemy, width - 52, 52, 52, 104, 104);
  frameRate(30);
  musicGame.loop();
}

function keyPressed() {
  if (!character.colliding(enemy)) {
    if (keyCode === 38 || keyCode === 32 || keyCode === 87) {
      character.jump();
      soundJump.play();
    }
  }
  // if (character.colliding(enemy)) {
  //   if (keyCode === 13)  {
  //   }
  // }
}

function draw() {
  scenario.show();

  character.show();
  character.applyGravity();

  enemy.show();
  enemy.move();

  if (character.colliding(enemy)) {
    noLoop();
    image(imageGamerOver, 0, 0, width, height);
    musicGame.stop();
    soundGameOver.play();
  }
}
