var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudsGroup, cloudImage;
var newImage;
var obstaculo, obstaculoImage1,obstaculoImage2, obstaculoImage3,obstaculoImage4,obstaculoImage5,obstaculoImage6;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  obstaculoImage1 = loadImage("obstacle1.png");
  obstaculoImage2 = loadImage("obstacle2.png");
  obstaculoImage3 = loadImage("obstacle3.png");
  obstaculoImage4 = loadImage("obstacle4.png");
  obstaculoImage5 = loadImage("obstacle5.png");
  obstaculoImage6 = loadImage("obstacle6.png");

}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  background(180);
  
  
  
  if(keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();
  gerarObstaculo();
  drawSprites();
}

function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    //ajuste a profundidade
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function gerarObstaculo(){
  if (frameCount % 60 === 0) {
    obstaculo = createSprite(600,150,10,10);
    obstaculo.velocityX = -3;

    var rand = Math.round(random(1,6));

    switch(rand){
      case 1: obstaculo.addImage(obstaculoImage1); break;
      case 2: obstaculo.addImage(obstaculoImage2); break;


    }



  }
}

