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
  game.keyPressed(keyCode);
}

function draw() {
  scenarios[scenarioAtual].draw();
}

function getRandomEnemy() {
  return parseInt(random(0, enemyes.length));
}
