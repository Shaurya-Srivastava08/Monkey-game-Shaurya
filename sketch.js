
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  
  
  FoodGroup = new Group();
obstacleGroup = new Group();
}


function draw() {
background("white");
  
   if(keyDown("space")&& monkey.y>= 100) {
        monkey.velocityY = -12;
   }
  if (ground.x < 0){
      ground.x = ground.width/2;
    monkey.velocityY=-12;
    }
  
   monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  var score = 0;
stroke("white");
textSize(20);
fill("white");
text("score: " + score,500,50);

stroke("black");
textSize(20);
fill("black");
score=Math.ceil(frameCount/frameRate());
text("score: "+ score , 100,50);

  
   Food();
  obstacles();
  
  drawSprites();
}

function Food(){
  
  if (frameCount % 80 === 0){
   var banana = createSprite(600,165,10,40);
   banana.velocityX = -6;
    
    
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    
    banana.addImage(bananaImage)
    
    banana.scale = 0.1;
    banana.lifetime = 300;
    
    FoodGroup.add(banana);
  }
}

function obstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(600,320,10,40);
    obstacle.velocityX = -6;
    //add image to the obstacle
    obstacle.addImage(obstacleImage); 
    obstacle.scale=0.15; //lifetime to the obstacle
    obstacle.lifetime = 100;
    //add each obstacle to the group 
    obstacleGroup.add(obstacle); 
  }
}





