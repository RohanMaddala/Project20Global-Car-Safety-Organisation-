var wall,car;
var speed,weight;
var deformation;



function setup() {
  createCanvas(1500,800);

  //create wall,car
  car=createSprite(50,300,50,50);
  car.shapeColor=("white");

  wall=createSprite(1400, 300, 40, 200);
  wall.shapeColor=("grey");

  speed=random(50,90);
  weight=random(400,1500);

  car.velocityX=speed;

  
}

function draw() { 
  background("black"); 
  
  

  if( wall.x-car.x<=wall.width/2+car.width/2){
    
    deformation=(0.5* weight * speed* speed/22500);
    
    car.velocityX=0;
    if(deformation>180){
      car.shapeColor="red"
    }
    if(deformation>100 && deformation<180 ){
      car.shapeColor="yellow"
    }
    if(deformation<100){
      car.shapeColor="green"
    }
   
  }
  

  drawSprites();
}