
var rat,ratImg;
var cat,catImg;
var backGround,backGroundImg;
var catImg2,ratImg2;
var catImg3,ratImg3;
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload() {

  ratImg=loadAnimation("jerry1.png");
  catImg=loadAnimation("tom1.png");
  backGroundImg=loadImage("garden.png");
  catImg2=loadAnimation("tom3.png","tom2.png");
  ratImg2=loadAnimation("jerry2.png","jerry3.png");
  ratImg3=loadAnimation("jerry4.png");
  catImg3=loadAnimation("tom4.png");
}


function setup(){
    createCanvas(600,600);

   backGround=createSprite(300,300,20,20)
   backGround.addImage("garden",backGroundImg);
   backGround.scale=0.9;

  rat=createSprite(100,500,20,20)
  rat.addAnimation("jerry",ratImg);
  rat.scale=0.1;
  
  cat=createSprite(530,510,20,20)
  cat.addAnimation("tom",catImg);
  cat.scale=0.1;

}

function draw() {

   background("white");

   if(gameState===PLAY){

    if(cat.x-rat.x<(cat.width-rat.width)/2) {
      rat.addAnimation("stop",ratImg3);
      rat.changeAnimation("stop");
 
      cat.addAnimation("stand",catImg3);
      cat.changeAnimation("stand");
 
      cat.x=150;
      cat.y=500;
      cat.velocityX=0;
      gameState=0;
    }

     fill("white")
     text(mouseX+','+mouseY,10,15);

    keyPressed();

   }else if(gameState=END){
      
   }

 
  drawSprites();
}

function keyPressed(){
if(keyDown("left")){
cat.velocityX=-5;
cat.addAnimation("running",catImg2)
cat.changeAnimation("running");
 
rat.addAnimation("teasing",ratImg2);
rat.changeAnimation("teasing");
 }
}
