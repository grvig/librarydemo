 var fixedRect, fixedRect2, movingRect; 

 function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 0, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 5;
  fixedRect.debug = true;
  fixedRect2 = createSprite(400, 400, 40, 60);
  fixedRect2.shapeColor = "green";
  fixedRect2.velocityY = -4;
  fixedRect2.debug = true;
  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX; 
  movingRect.y = mouseY;

  /*if (isTouching(fixedRect2, movingRect) || isTouching(fixedRect, movingRect)){ 
    text("They are touching", 300, 100);
  }  else { 
    text("They are not touching", 300, 100);
  }*/
  bounceOff(fixedRect2, fixedRect);
  drawSprites();
}
