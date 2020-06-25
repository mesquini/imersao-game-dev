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
  textFont("Arial");
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

  gameover = true;
  noLoop();
}
