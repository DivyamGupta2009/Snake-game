var food;
var group = [];
var head;
var gameState = "play";
var score = 0;
var edges;

function setup() {
  createCanvas(400,400);
  
  head = createSprite(200, 200, 10, 10);
  head.velocityX = -2;
  group.push(head);
  food = createSprite(random(30, 100),random(30, 100), 10, 10);
  food.shapeColor = "red";
}

function draw() {
  background("green");
  edges = createEdgeSprites();

  if(gameState === "play"){

    CheckTouch();
    move();
  }

  if(gameState === "end"){
    background("black");
    textSize(40);
    text("GAME OVER", 80, 200);
    head.destroy();
    group = [];
    food.destroy();
  }

  fill("blue");
  textSize(25);
  text("SCORE: " +score, 10, 30);

  drawSprites();
}

function move(){
  if(keyDown("UP_ARROW")){
    head.setSpeedAndDirection(4, -90)
  }
  if(keyDown("Down_ARROW")){
    head.setSpeedAndDirection(4, 90)
  }
  if(keyDown("LEFT_ARROW")){
    head.setSpeedAndDirection(4, 180)
  }
  if(keyDown("RIGHT_ARROW")){
    head.setSpeedAndDirection(4, 0)
  }
}

function CheckTouch(){
  if(head.isTouching(food)){
    food.x = Math.round((random(20, 350)));
    food.y = Math.round((random(20, 350)));
    var body = createSprite(200, 200, 10, 10);
    group.push(body);
    score ++;
  }
  if(edges[0].isTouching(head) || edges[1].isTouching(head) || edges[2].isTouching(head) || edges[3].isTouching(head)){ 
  gameState = "end";
  head.setSpeedAndDirection(0, 0);
  }

for (var i = group.length - 1; i > 0; i--){
  group[i].x = group[i-1].x;
  group[i].y = group[i-1].y;
}
}