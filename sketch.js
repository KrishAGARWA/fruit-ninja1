var g,backgroundi;
var s, swordImage;
var score;
var gameover,gameoverImage
var f1,f2,f3,f4;
var eImage
var PLAY=1
var END=0
var gameState=PLAY
var fruitGroup
var enemyGroup
function preload(){
  gameoverImage=loadImage("gameover.png")
 swordImage=loadImage("sword.png")
  f1=loadImage("fruit1.png")
  f2=loadImage("fruit3.png")
  f3=loadImage("fruit2.png")
  f4=loadImage("fruit4.png")
  eImage=loadAnimation("alien3.jpg")
  g=loadSound("gameover.mp3")
// backgroundi=loadImage("i.jpg")
}
function setup(){
  createCanvas(400,400)
 background(220)
   //background.addImage(backgroundi);
fruitGroup=new Group()
  enemyGroup=new Group();
score=0
  s=createSprite(350,150,20,20)
  s.addImage(swordImage)
  s.scale=0.7
  gameover=createSprite(200,200,20,20)
  gameover.addImage(gameoverImage)

}
function draw(){
  background(220)
 
    text("score"+score,320,30)
  if(gameState===PLAY){
   s.y=mouseY
  s.x=mouseX
    fruits()
  gameover.visible=false
  enemy()
 if(fruitGroup.isTouching(s)){
   fruitGroup.destroyEach()
   score=score+2
 }
    
    if(enemyGroup.isTouching(s)){
       g.play()
   
     gameState=END
   } 
  }else
    if(gameState===END){
     gameover.visible=true
      text("press r to restart",250,250)
      fruitGroup.setVelocityEach(0)
    enemyGroup.setVelocityEach(0)
      fruitGroup.destroyEach()
      enemyGroup.destroyEach()
     
    if(keyDown("r")){
    gameState=PLAY
    score=0}
  
  }
  drawSprites();
  
}

function fruits(){
 if(frameCount%80===0){
  var fr=createSprite(0, Math.round(random(20,360)),20,20)

   
   fr.scale=0.2
  fr.velocityX=7;
   fr.lifetime=130
   var position=Math.round(random(1,4))
   if(position===1){
     fr.x=400
     fr.addImage(f1)
     fr.velocityX=-(7+(score/4))
   }else
     if(position===2){
     fr.x=0
     fr.velocityX=7+(score/4)
      fr.addImage(f2)
     }else
      if(position===4){
     fr.x=400
     fr.velocityX=-(7+(score/4))  
      fr.addImage(f3)  
      }else
         if(position===3){
     fr.x=0
     fr.velocityX=7+(score/4)
      fr.addImage(f4)  
      } 
  // var ran =Math.round(random(1,4))
  // switch(ran){
    // case 1:fr.addImage(f1)
     //  break;
      // case 2:fr.addImage(f2)
      // break;
       //case 3:fr.addImage(f3)
     //  break;
     //  case 4:fr.addImage(f4)
      // break;
       //default:
       //break;
       
  // }
 fruitGroup.add(fr) 
   fr.lifetime=130
}

}
function enemy(){
 if(frameCount%200===0){
   var e =createSprite(0,Math.round(random(20,380)),20,20)
  
  
   e.scale=0.3
   var positio=Math.round(random(1,2))
   if(positio===1){
     e.x=0
     e.addAnimation("run",eImage) 
      e.velocityX=7+(score/10)
   }else
  if(positio===2){
     e.x=400
     e.addAnimation("run",eImage) 
      e.velocityX=-7+(score/10)
   }
  
  enemyGroup.add(e)
   e.lifetime=130
}}




