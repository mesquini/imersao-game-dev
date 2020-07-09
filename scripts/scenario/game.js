class Game {
  constructor() {
    this.index = 0;
    // this.map = configGame.map;
  }

  setup() {
    scenario = new Scenario(imageScenario, 5);
    score = new Score();
    life = new Life(
      configGame.configs.lifeTotal,
      configGame.configs.lifeInitial
    );

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

  keyPressed(keyCode) {
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

    life.draw();

    character.show();
    character.applyGravity();

    // const lineCurrent = this.map[this.index];
    const enemy = enemyes[this.index];

    const enemyVisibled = enemy.x < -enemy.widthX;
    enemy.speed = parseInt(random(10, 35));
    // const enemyHalfWay = width / 2 >= enemy.x;

    enemy.show();
    enemy.move();

    if (enemyVisibled) {
      this.index = parseInt(random(0, enemyes.length));
      if (this.index >= enemyes.length) this.index = getRandomEnemy();
    }

    if (character.colliding(enemy)) {
      soundHitDamage.play();
      life.removeLife();
      character.isImmune();

      if (life.lifes === 0) gameOver(enemy);
    }
  }
}
