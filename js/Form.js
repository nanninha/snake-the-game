class Form {
  constructor() {
    this.image=createImg("./assets/cobrinha-google.webp","fundo do game")
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.playButton = createButton("PLAY");
    this.titleImg =createElement("h1")
    this.greeting = createElement("h2");
    this.creditos= createElement("h6")
    }

  setElementsPosition() {

    this.image.size(1100,500);
    this.image.position(150,100);

    this.titleImg.position(width/2-220, 90);
    this.titleImg.html("SNAKE GAME");

    this.creditos.html("@desenvolvido por Mariana Carneiro")
    this.creditos.position(width/2-90,height-100)

    this.input.position(width / 2 - 110, height / 2 + 80);
    this.playButton.position(width / 2 - 90, height / 2 + 150);
    this.greeting.position(width / 2 - 300, height / 2 + 120);
  }

  setElementsStyle() {
    this.image.class("fundo");
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.creditos.hide();
    this.image.hide();
    }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      
      this.hide()
     
      gameState = 1;
      player.name = this.input.value();
        
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
