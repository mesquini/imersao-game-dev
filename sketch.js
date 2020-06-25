/// <reference path="./references/p5.global-mode.d.ts" />

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game();
  game.setup();

  screenInitial = new ScreenInitial();
  // button = new Button("Iniciar", width / 2, height / 2);

  // scenarioAtual = "game";
  scenarios = {
    screenInitial,
    game,
  };

  frameRate(30);
  musicGame.loop();
}

function keyPressed() {
  game.keyPressed();
}

function draw() {
  scenarios[scenarioAtual].draw();
}

function getRandomEnemy() {
  return parseInt(random(0, enemyes.length));
}
