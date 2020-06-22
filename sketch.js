/// <reference path="./references/p5.global-mode.d.ts" />

let imageScenario;
let imageCharacter;
let scenario;
let musicGame;
let character;

function preload() {
  imageScenario = loadImage("./assets/imagens/cenario/floresta.png");
  imageCharacter = loadImage("./assets/imagens/personagem/correndo.png");
  musicGame = loadSound("./assets/sons/trilha_jogo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenario, 3);
  character = new Character(imageCharacter);
  frameRate(30);
  musicGame.loop();
}

function draw() {
  scenario.show();
  scenario.move();

  character.show();
}
