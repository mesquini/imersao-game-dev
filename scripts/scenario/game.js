class Game {
  constructor() {
    this.enemyAtual = 0;
  }

  setup() {
    scenario = new Scenario(imageScenario, 5);
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
      100,
      parseInt(random(5, 20)),
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
      100,
      parseInt(random(10, 20)),
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
      100,
      parseInt(random(5, 15)),
      0.665,
      22,
      15
    );

    enemyes.push(enemy);
    enemyes.push(enemyFly);
    enemyes.push(enemyTroll);

    this.enemyAtual = getRandomEnemy();
  }

  keyPressed() {
    if (!gameover && scenarioAtual === "game") {
      if (keyCode === 38 || keyCode === 32 || keyCode === 87) {
        character.jump();
        soundJump.play();
      }
      if (keyCode === 39 || keyCode === 37 || keyCode === 65 || keyCode === 68)
        character.move(keyCode);
    }
    if (gameover) {
      if (keyCode === 13) {
        window.location.reload();
      }
    }
  }

  draw() {
    scenario.show();
    score.show();

    character.show();
    character.applyGravity();

    const enemy = enemyes[this.enemyAtual];

    const enemyVisibled = enemy.x < -enemy.widthX;
    // const enemyHalfWay = width / 2 >= enemy.x;

    enemy.show();
    enemy.move();

    if (enemyVisibled) {
      this.enemyAtual = parseInt(random(0, enemyes.length));
      if (this.enemyAtual >= enemyes.length) this.enemyAtual = getRandomEnemy();
      enemy.speed = parseInt(random(15, 30));
    }

    if (character.colliding(enemy)) {
      gameOver(enemy);
    }
  }
}
