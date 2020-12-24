function collision(){
    
  if(wall.x-car.x < wall.width/2+car.width/2){
    bullet.velocityX=0;
    var deformation = 0.5*weight*speed*speed/thickness*thickness*thickness;
    return true;
  } else return false; 
  
}