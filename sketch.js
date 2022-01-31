var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3
var coinImage
var score = 0
var coinGroup

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

obsTop1 = loadImage("assets/obsTop1.png")
obsTop2 = loadImage("assets/obsTop2.png")

obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")
coinImage = loadImage("assets/coin.png")

}

function setup(){

  createCanvas(900,500)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3


//creating top and bottom grounds
bottomGround = createSprite(200,490,1400,20);
bottomGround.visible = true;

topGround = createSprite(200,10,1400,20);
topGround.visible = true;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

coinGroup = new Group()


}

function draw() {
  
  background("black");

 
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -10 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 1;

           balloon.overlap(coinGroup,function(collector,collected){
             collected.remove()
             score = score+5
           })
          //Bar();
   
        drawSprites();

        fill("red")
        textSize(20)
        text("Score:"+score,800,30)
       
        //spawning top obstacles
      spawnObstaclesTop();
      spawnObstaclesBottom();
      spawnCoin();

      
}


function spawnObstaclesTop() 
{
  var randomFramesTop = Math.round(round(90,200));
      if(World.frameCount % randomFramesTop === 0) {
        obstacleTop = createSprite(800,50,40,50);
    
    obstacleTop.addImage(obsTop1);
    obstacleTop.addImage(obsTop2);

    
    obstacleTop.scale = 0.1;
    obstacleTop.velocityX = -4;

    //random y positions for top obstacles
    obstacleTop.y = Math.round(random(10,180));

    //generate random top obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacleTop.addImage(obsTop1);
              break;
      case 2: obstacleTop.addImage(obsTop2);
              break;
      default: break;
    }

     //assign lifetime to the variable
   obstacleTop.lifetime = 200;
    
   balloon.depth = balloon.depth + 1;
   
      }
}

function spawnObstaclesBottom() 
{
  var randomFramesBottom = Math.round(random(100,200));

      if(World.frameCount % randomFramesBottom === 0) {
        obstacleBottom = createSprite(900,400,40,50);
    
    obstacleBottom.addImage(obsBottom1);
    obstacleBottom.addImage(obsBottom2);
    obstacleBottom.addImage(obsBottom3);
    
    obstacleBottom.scale = 0.12;
    obstacleBottom.velocityX = -4;

    //random y positions for top obstacles
    //obstacleBottom.x = Math.round(random(700));

    //generate random top obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1:  obstacleBottom.addImage(obsBottom1);
              break;
      case 2:  obstacleBottom.addImage(obsBottom2);
              break;
      case 3: obstacleBottom.addImage(obsBottom3)
              break;
      default: break;
    }

     //assign lifetime to the variable
   obstacleBottom.lifetime = 200;
    
   balloon.depth = balloon.depth + 1;
   
      }
}

 function Bar() 
 {
         if(World.frameCount % 60 === 0)
         {
           var bar = createSprite(800,200,10,800);
          bar.velocityX = -7
          bar.depth = balloon.depth;
          bar.lifetime = 70;
          bar.visible = false;
         }
}

function spawnCoin()
{
  var coinRandom = Math.round(random(20,180))
  if(World.frameCount % 80 === 0){

   var randomY = Math.round(random(50,200))
    var coin = createSprite(900, randomY)
    coin.addImage(coinImage)

    coin.velocityX = -2
    coin.scale = 0.1
    coinGroup.add(coin)
  }

}


  
