  var car, wall;
  var speed, weight;
  
  function setup(){
      createCanvas (1600,400);
  
      speed = random (55,90);
      weight = random (400,1500);
  
      car = createSprite (50,200,50,50);
      car.shapeColor = "red"
      wall = createSprite (1500,200,60,height/2);
      wall.shapeColor = "blue"
  
      car.velocityX = speed;
  
  
  }
  
  function draw(){

    background(255,255,255);
  
      if (wall.x-car.x < (car.width+wall.width)/2){
          
          car.velocityX = 0;
   
      }
  
      drawSprites();
  }
background(255,255,255);