let canvas;

//variaveis de imagem
let backgroundImage, track;
let snake;
let form, player, playerCount;
let allPlayers, car1, car2;
let fundo;
let gameState=0;

function preload() {
  backgroundImage = loadImage("./assets/grama.png");
}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);

 // snake= createSprite(width/2,height/2,30,30)
 
  

  game = new Game();
  game.start();
}

function draw() {
 

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }  
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
