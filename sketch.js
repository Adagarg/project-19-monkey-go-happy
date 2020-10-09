var score=0;
var foodGroup,ObsGroup;

function preload(){
  jungleImg=loadImage("jungle.jpg");
  monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png",)
  stoneImg=loadImage("stone.png")
  bananaImg=loadImage("banana.png")
}







function setup() {
  createCanvas(400, 400);
  jungle=createSprite(200,200);
  jungle.addImage(jungleImg)
  monkey=createSprite(60,340);
  monkey.addAnimation("monkeyRunning",monkeyImg)
  monkey.scale=0.1
  ground=createSprite(200,390,400,20)
  foodGroup=new Group();
  obsGroup=new Group();
}


function draw() {
  background(220);
  if(keyDown("space")){
    monkey.velocityY=-5 
  }
  if(obsGroup.isTouching(monkey)){
    monkey.scale=0.1
  }
  monkey.velocityY=monkey.velocityY+1
    spawnObs();
  spawnBanana();
    
  drawSprites();
  textSize(20)
  text("Score= "+score,250,50);
  //score =score+ Math.round(World.frameRate/60);
  monkey.collide(ground);
  ground.visible=false
  switch(score){
    case 10: monkey.scale=0.12;
            break;
    case 20: monkey.scale=0.14;
            break;
    case 30: monkey.scale=0.16;
            break;
    case 40: monkey.scale=0.18;
            break;
    default: break;
  }
  if(foodGroup.isTouching(monkey)){
    score=score+2
    foodGroup.destroyEach();  
  }
}
function spawnObs(){
if(frameCount%80===0) {
  var stone=createSprite(400,380)
  stone.addImage(stoneImg)
  stone.scale=random(0.2,0.1)
  stone.velocityX=-4
  obsGroup.add(stone)
}
  
}
 function spawnBanana(){
if(frameCount%160===0) {
  var banana=createSprite(400,200)
  banana.y= random(50,300)
  banana.addImage(bananaImg)
  banana.scale=0.1
  banana.velocityX=-4
  foodGroup.add(banana)

}
   
  
  
  
}