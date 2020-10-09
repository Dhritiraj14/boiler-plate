var movingRectangle,fixedRectangle;







function setup() {
  createCanvas(1200,800);
  movingRectangle=createSprite(400, 800, 80, 30);
movingRectangle.shapeColor="yellow";
movingRectangle.velocityY=-5;

  fixedRectangle=createSprite(400,100,50,80);
  fixedRectangle.shapeColor="yellow";
  fixedRectangle.velocityY=5;
}

function draw() {
  background(255,255,255);
  //movingRectangle.x=World.mouseX;
 // movingRectangle.y=World.mouseY;
  console.log(movingRectangle.x-fixedRectangle.x);
  console.log(fixedRectangle.width/2+movingRectangle.width/2);
  if(movingRectangle.x-fixedRectangle.x < fixedRectangle.width/2+movingRectangle.width/2 && 
    fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2+movingRectangle.width/2 
     ){
movingRectangle.velocityX=movingRectangle.velocityX*(-1);
fixedRectangle.velocityX=fixedRectangle.velocityX*(-1);



  }
if( movingRectangle.y-fixedRectangle.y < fixedRectangle.height/2+movingRectangle.height/2&&
  fixedRectangle.y-movingRectangle.y < fixedRectangle.height/2+movingRectangle.height/2){
    movingRectangle.velocityY=movingRectangle.velocityY*-1;
    fixedRectangle.velocityY=fixedRectangle.velocityY*-1;
}



  drawSprites();
}