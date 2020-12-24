var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
    weight=random(400,1500);
    thickness=random(22,83);

    bullet=createSprite(50,200,50,50);
    bullet.shapeColor="blue";
    bullet.velocityX=speed;

    wall=createSprite(1200,200,thickness,100);
    wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage < 10){
    wall.shapeColor="green";
  }

  if(damage > 10){
    wall.shapeColor="red";
  }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
 bulletRightEgde=lbullet.x+lbullet.width;
 wallLeftEdge=lwall.x;
 if(bulletRightEgde>=wallLeftEdge){
   return true;
 }
 return false;
}