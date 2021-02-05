var hr,min,sec;
let hr= hour();
text('current hour:\n'+hr , 5,50);
let min = minute();
text('Current minute: \n' + min, 5, 50);
let sec = second();
text('current second:\n'+sec,5,50)
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}