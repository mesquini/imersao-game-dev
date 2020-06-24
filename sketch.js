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

let enemyTroll;
let imageEnemyTroll;

let enemyFly;
let imageEnemyFly;

let imageGamerOver;
let imageTeclas;

let musicGame;
let soundJump;
let soundGameOver;

let score;
let gameover = false;

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

const matrixEnemyTroll = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];

const matrixEnemyFly = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

const enemyes = [];

function preload() {
  imageScenario = loadImage("./assets/imagens/cenario/floresta.png");

  imageCharacter = loadImage("./assets/imagens/personagem/correndo.png");

  imageEnemy = loadImage("./assets/imagens/inimigos/gotinha.png");
  imageEnemyTroll = loadImage("./assets/imagens/inimigos/troll.png");
  imageEnemyFly = loadImage("./assets/imagens/inimigos/gotinha-voadora.png");

  imageGamerOver = loadImage("./assets/imagens/gameOver.jpg");
  imageTeclas = loadImage("./assets/imagens/teclas.png");

  musicGame = loadSound("./assets/sons/trilha_jogo.mp3");
  musicGame.setVolume(0.3);
  soundJump = loadSound("./assets/sons/somPulo.mp3");
  soundGameOver = loadSound("./assets/sons/gameOver.mp3");
  soundGameOver.setVolume(0.2);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenario, 3);
  score = new Score();
  character = new Character(
    matrixCharacter,
    imageCharacter,
    50,
    30,
    110,
    135,
    220,
    270
  );

  const enemy = new Enemy(
    "Gotinha",
    matrixEnemy,
    imageEnemy,
    width - 52,
    30,
    52,
    52,
    104,
    104,
    Math.floor(Math.random() * 100 + 10),
    5,
    0.8,
    15,
    5
  );
  const enemyTroll = new Enemy(
    "Troll",
    matrixEnemyTroll,
    imageEnemyTroll,
    width - 52,
    0,
    200,
    200,
    400,
    400,
    Math.floor(Math.random() * 5000 + 1000),
    8,
    0.765,
    20,
    35
  );
  const enemyFly = new Enemy(
    "Gotinha Voadora",
    matrixEnemyFly,
    imageEnemyFly,
    width - 50,
    150,
    100,
    75,
    200,
    150,
    Math.floor(Math.random() * 1000 + 100),
    5,
    0.665,
    22,
    15
  );

  enemyes.push(enemy);
  enemyes.push(enemyFly);
  enemyes.push(enemyTroll);

  frameRate(30);
  musicGame.loop();
}

function keyPressed() {
  if (!gameover) {
    if (keyCode === 38 || keyCode === 32 || keyCode === 87) {
      character.jump();
      soundJump.play();
    }
  }
  if (gameover) {
    if (keyCode === 13) {
      window.location.reload();
    }
  }
}

function draw() {
  initialGame();

  enemyes.forEach((enemy) => {
    enemy.show();
    enemy.move();

    if (character.colliding(enemy)) {
      gameOver(enemy);
    }
  });
}

function initialGame() {
  scenario.show();
  score.show();

  character.show();
  character.applyGravity();
}

function gameOver(enemy) {
  enemyes.map((e) => {
    if (e.name !== enemy.name) e.y = -200;

    return e;
  });

  image(imageGamerOver, 0, 0, width, height);
  musicGame.stop();
  soundGameOver.play();
  fill("#fff");
  textAlign(CENTER);
  textSize(22);
  text(`Você foi pego pelo/a ${enemy.name}`, width / 2, height / 2 + 80);
  textSize(30);
  text(
    `Pontuação feita: ${parseInt(score.score)}`,
    width / 2,
    height / 2 + 160
  );

  const recordScore = score.verifyScore();
  text(`Maior pontuação feita: ${recordScore}`, width / 2, height / 2 + 200);

  textSize(32);
  text("Pressione ENTER para tentar novamente.", width / 2, height / 2 + 120);

  enemy.x = width / 2;
  enemy.y = height - 200;
  enemy.show();
  gameover = true;
  noLoop();
}
