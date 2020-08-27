var bullet,wall,thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 20, 50);
  bullet.shapeColor=(255,255,255);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  
 
 hasCollided();



  drawSprites();
}

function hasCollided(bullet,wall);
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  
  if (hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weigth*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
     
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }

  }   
  
  if(bulletRightEdge>=wallLeftEdge);
  {
    return true
  }
    return false
}