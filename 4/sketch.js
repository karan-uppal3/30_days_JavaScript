function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(10);
  translate(200,200);
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(4);
  noFill();  
  
  stroke(255,100,150);
  let end1 = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end1);
  
  push();
  rotate(end1);
  stroke(255,100,150);
  line(0,0,100,0);
  pop();
  
  stroke(0,255,150);
  let end2 = map(mn+sc/60,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  push();
  rotate(end2);
  stroke(0,255,150);
  line(0,0,75,0);
  pop();
  
  stroke(150,0,200);
  let end3 = map(hr%12+mn/60 + sc/3600,0,12,0,360);
  arc(0,0,260,260,0,end3);
  
  push();
  rotate(end3);
  stroke(150,0,200);
  line(0,0,50,0);
  pop();
  
  stroke(255);
  point(0,0);
}