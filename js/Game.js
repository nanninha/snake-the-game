class Game {
  constructor() {

    //botão de reset
    this.resetButton = createButton("");

    //elementos do rank, 5 melhores posições
    this.leadeboardTitle = createElement("h2");

    this.leader1 = createElement("h2");
    this.leader2 = createElement("h2");
    this.leader3 = createElement("h2");
    this.leader4 = createElement("h2");
    this.leader5 = createElement("h2");

    //controle de direção da cobrinha
    this.direction = "right";
    this.leftKeyActive = false
    this.playerMoving= false
  }


  start() {

    player = new Player();
   // gameState = 0;

    form = new Form();
    form.display();
  
    snake= createSprite(width/2,height/2,30,30)
    snake.velocityY=2
  }


  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");

    //C39

    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 430, 100);

    this.leadeboardTitle.html("Leaderboard");
    this.leadeboardTitle.class("resetText");
    this.leadeboardTitle.position(60, 200);

    this.leader1.class("leadersText");
    this.leader1.position(60, 250);

    this.leader2.class("leadersText");
    this.leader2.position(60, 300);

    

  }

  handlePlayerControls() {
    
      if (keyIsDown(UP_ARROW)) {
        //this.playerMoving = true;
        snake.y-=2
        
        console.log("teste")
      }  

      if (keyIsDown(LEFT_ARROW))  {
        //this.leftKeyActive = true;
        snake.x -= 5;
        
      }

      if (keyIsDown(RIGHT_ARROW))  {
        this.leftKeyActive = false;
        //snake.x += 5;
        
      }

  }
  play() {

  this.handleElements();
  this.handleResetButton();


    
  

    
  if (gameState === 1) {

    image(backgroundImage, 300, 100, 800, 500);
    this.showLeaderboard();
    
    this.handlePlayerControls();
    drawSprites();
    }

  }

  handleResetButton() {

    this.resetButton.mousePressed(this.jogar);
            
  }

 jogar(){
  gameState= 0
 }

  showLeaderboard() {
    let leader1, leader2;
  
    this.leader1.html("nana");
    this.leader2.html("mari");
  }


  showRank() {
    swal({
      title: `Incrível!${"\n"}Rank${"\n"}${player.rank}`,
      text: "Você alcançou a linha de chegada com sucesso!",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }

  gameOver() {
    swal({
      title: `Fim de Jogo`,
      text: "Oops você perdeu a corrida!",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Obrigado por jogar"
    });
  }
  
  end() {
    console.log("Fim de Jogo");
  }
}
