var ghost, ghoststand_image
var climber, climber_image
var door, door_image
var tower, tower_image
var doom_sound
var DoorGroup, ClimbGroup, DeathGroup
var groundofdeath
function preload(){
  ghoststand_image = loadImage("ghost-standing.png")
  climber_image = loadImage("climber.png")
  door_image = loadImage("door.png")
  tower_image = loadImage("tower.png")
  doom_sound = loadSound("spooky.wav")
}
function setup(){
  createCanvas(400,400)
  tower = createSprite(200,200,20,20)  
  tower.addImage("Shambhavi Tower", tower_image)
  tower.scale = 0.7
  ghost = createSprite(200,100,20,20)
  ghost.addImage("Deb's Ghost", ghoststand_image)
  ghost.scale = 0.2
  DoorGroup = createGroup()
  ClimbGroup = createGroup()
  DeathGroup = createGroup() 
}



function draw(){
  background("black")
  tower.velocityY = 4;
  if (ClimbGroup.isTouching(ghost)){
    ghost.velocityY = 0
  }
  if (tower.y > 400){
      tower.y = 200 ;
    }
  if(keyDown("space")&& ghost.y >=100) {
        ghost.velocityY = -13;
    }
 if(keyDown("left")){
    ghost.x = ghost.x - 3
  }
  if(keyDown("right")){
    ghost.x = ghost.x + 3
  }
  ghost.velocityY = ghost.velocityY + 0.8
  CapstoneDoor();
  if (DeathGroup.isTouching(ghost)){
    DoorGroup.destroyEach()
    DoorGroup.setVelocityYEach(-1)
    ClimbGroup.destroyEach()
    ClimbGroup.setVelocityYEach(-1)
    DeathGroup.destroyEach()
    DeathGroup.setVelocityYEach(-1)
    tower.destroy()
    ghost.destroy()
    console.log("I EXIST")
  }
  
  drawSprites();
}

function CapstoneDoor(){
  if (frameCount % 60 === 0){
   door = createSprite(Math.round(random(100,300)),-20,10,40);
     climber = createSprite(door.x,10,10,40);
    groundofdeath = createSprite(door.x, 12,40,10)
   door.velocityY = 6;
   climber.velocityY = 6;
    groundofdeath.velocityY = 6
    groundofdeath.visible = true
    door.addImage("DHDHHDHDHD", door_image)
    climber.addImage("Ceeeeee", climber_image)
    door.scale = 0.5;
    climber.scale = 0.5;
    door.lifetime = 300;
    climber.lifetime = 300;
    groundofdeath.lifetime = 300;
   door.depth = ghost.depth
    climber.depth = ghost.depth
    ghost.depth = ghost.depth+1
    DoorGroup.add(door);
    ClimbGroup.add(climber)
    DeathGroup.add(groundofdeath)
 }
}
