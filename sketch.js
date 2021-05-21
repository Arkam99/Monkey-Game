
var monkey , monkey_running ,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup
var score,survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {

  monkey = createSprite(40,350,10,10);
monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(200,400,400,40);

  foodGroup = createGroup();
  obstacleGroup = createGroup();

}


function draw() {
background("green");
  

 if(keyDown("space")&& monkey.y >= 100)
{
        monkey.velocityY = -12;
}
monkey.velocityY = monkey.velocityY + 0.6; monkey.collide(ground)
 
if(World.frameCount%45===0){
    food();
 }
  
   if(World.frameCount%300===0){
    stone()
 }
  
  if(monkey.isTouching(foodGroup)){
     foodGroup.destroyEach()
    score=score+1
    
   
  
}
      
 //stone()
drawSprites(); 
  
  fill("white") 
  text("survivalTime: "+ score, 200,50);
  
}
function food(){
 

 if (frameCount % 60 === 0) {
    banana = createSprite(400,20,10,10);
    banana.y =Math.round(random(160,355));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    foodGroup.add(banana);
  }

}

function stone(){
  
 obstacle = createSprite(360,355,10,10);
 obstacle.addImage("stone",obstaceImage);  obstacle.scale = 0.150;
 obstacle.velocityX = -3;
}



