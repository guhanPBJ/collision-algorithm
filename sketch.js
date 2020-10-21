var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 80);
 fixedRect.shapeColor="skyblue";
 fixedRect.debug=true;

 movingRect= createSprite(200, 400, 80, 50);
 movingRect.shapeColor="yellow";
 movingRect.debug=true;



}

function draw() {
  background(255,255,255);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 
    && movingRect.y-fixedRect.y < fixedRect.width/2+movingRect.width/2
    && fixedRect.y-movingRect.y < fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2
    ){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="skyblue";
    movingRect.shapeColor="yellow";
  }


   drawSprites();
}