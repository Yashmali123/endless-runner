const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var img,bg
var engine,world;
 var ground,player,playerimg;




function preload() {
walking=loadAnimation("sprites/run1.png","sprites/run2.png","sprites/run3.png",
"sprites/run4.png","sprites/run5.png")
img=loadImage("sprites/bg.png") 
  }

  function setup(){
    var canvas  = createCanvas(displayWidth-20,displayHeight-30);
    engine = Engine.create();
    world = engine.world;
 
    ground=createSprite(displayWidth+3600,displayHeight-370,displayWidth-20,displayHeight-30);
    ground.addImage("red",img)
    ground.scale=0.64;
    //camera.position.x=displayWidth/2
    //camera.position.x=ground.x+100

    player=createSprite(300,displayHeight-190,20,20);
    player.addAnimation("palyerimg",walking)
    player.scale=0.3;
    player.setVelocity(0,0)
    
  // player.x=camera.position.x




  }


  function draw(){
    background(0);

    if (keyCode==32) {
      player.setVelocity(3,0);
     
      }
      
      if (keyCode==LEFT_ARROW) {
        player.setVelocity(0,0);
       
        } 
    
 

    Engine.update(engine);
    drawSprites();
    }









