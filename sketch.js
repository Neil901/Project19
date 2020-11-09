var groundImg, ground
var topPipeImg, topPipe, obstacle1Group
var bottomPipeImg, bottomPipe ,obstacle2Group
var birdImg, bird
var gameState = "play"

function preload()
{
 birdImg = loadImage ("BIRD.jpg")
 groundImg = loadImage ("background.png")
 bottomPipeImg = loadImage ("bottomPipe.jpg")
 topPipeImg = loadImage ("topPipe.jpg")
 
}
function setup()
{createCanvas (600,600);
ground = createSprite (300,300,100,100);
bird = createSprite (300,300,100,100)
bird.addImage (birdImg)
ground.addImage (groundImg)
bird.scale= 0.1
ground.scale=0.75
 obstacle1Group= new Group();
 obstacle2Group= new Group();
 
}
function draw()
{
  background ("black")
  ground.velocityX = 5
  if(ground.x >600) 
  {ground.x= 300}


  if (keyDown("up"))
  {bird.y = bird.y -10}
  bird.velocityY = 4
  
  if (bird.isTouching (obstacle1Group)||bird.isTouching (obstacle2Group))
  {
    gameState = "gameOver"
  }
  
  if (gameState == "gameOver")
    {obstacle1Group.destroyEach();
    obstacle2Group.destroyEach();
    bird.destroy();
    ground.destroy();
    obstacle1Group.setLifetimeEach (0)
    obstacle2Group.setLifetimeEach (0)
    obstacle1Group.setVelocityYEach (0)
    obstacle2Group.setVelocityYEach (0)
    textSize (50)
    text ("GAME OVER",150,300)
  }
 

  obstacleSpawn ();
  drawSprites();
}

function obstacleSpawn ()
{ 
  if (frameCount % 100 == 0)  
  {
topPipe = createSprite (610,100,10,10);
bottomPipe = createSprite (610,500,10,10);
topPipe.velocityX = -5;
bottomPipe.velocityX = -5;
bottomPipe.scale= 0.25
topPipe.scale = 0.25
topPipe.addImage (topPipeImg);
bottomPipe.addImage (bottomPipeImg);
obstacle2Group.add (bottomPipe)
obstacle1Group.add (topPipe)
obstacle1Group.lifetime= 120;
obstacle2Group.lifetime= 120 
}
}