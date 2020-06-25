function preload() {
  imageScenario = loadImage("./assets/imagens/cenario/floresta.png");
  imageScreenInitial = loadImage("../assets/imagens/cenario/telaInicial.png");

  fontScreenInitial = loadFont("../assets/fonteTelaInicial.otf");

  imageCharacter = loadImage("../assets/imagens/personagem/correndo.png");

  imageEnemy = loadImage("../assets/imagens/inimigos/gotinha.png");
  imageEnemyTroll = loadImage("../assets/imagens/inimigos/troll.png");
  imageEnemyFly = loadImage("../assets/imagens/inimigos/gotinha-voadora.png");

  imageGamerOver = loadImage("../assets/imagens/gameOver.jpg");
  imageTeclas = loadImage("../assets/imagens/teclas.png");

  musicGame = loadSound("../assets/sons/trilha_jogo.mp3");
  musicGame.setVolume(0.25);

  soundJump = loadSound("../assets/sons/somPulo.mp3");

  soundGameOver = loadSound("../assets/sons/gameOver.mp3");
  soundGameOver.setVolume(0.1);
}
