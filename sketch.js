var fixedRect, movingRect, ab, te;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ab = createSprite(200,500,40,70);
  ab.shapeColor = "green";
  ab.debug = true;
  te = createSprite(400,200,40,70)
  te.shapeColor = "blue";
  te.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 ab.x = World.mouseX
 ab.y = World.mouseY
 var a = cool(movingRect,te)
 var b = cool(fixedRect,ab)
 if (a===true){
  movingRect.shapeColor = "red";
  //fixedRect.shapeColor = "red";
  te.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  //fixedRect.shapeColor = "green";
  te.shapeColor = "blue";
 }
 if (b===true){
  ab.shapeColor = "red";
  fixedRect.shapeColor = "red";
  
}
else {
  
  fixedRect.shapeColor = "green";
  ab.shapeColor = "green";
 }
  drawSprites();
}


//