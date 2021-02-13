var movingRect;
var object1, object2, object3, object4;


function setup() {
  createCanvas(400, 400);
  movingRect = createSprite(200,200,50,50);
  movingRect.shapeColor = "white";
  movingRect.debug = true;
  object1 = createSprite(0,10,90,50);
  object1.shapeColor = "blue";
  object2 = createSprite(100,10,90,50);
  object2.shapeColor = "orange";
  object3 = createSprite(200,10,90,50);
  object3.shapeColor = "red";
  object4 = createSprite(300,10,90,50);
  object4.shapeColor = "green";
}

function draw() {
  background(220);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  aisTouching();
  bisTouching();
  cisTouching();
  disTouching();

}

function aisTouching(){
  if (movingRect.isTouching(object1)){
    movingRect.shapeColor = "blue";
    movingRect.velocityX = 0;
    movingRect.velocityY = 0;
    music.stop()
  }
}
function bisTouching(){
  if (movingRect.isTouching(object2)){
    movingRect.shapeColor = "orange";
   
  }
}
function cisTouching(){
  if (movingRect.isTouching(object3)){
    movingRect.shapeColor = "red";
   
  }
}
function disTouching(){
  if (movingRect.isTouching(object4)){
    movingRect.shapeColor = "green";
   
  }
}