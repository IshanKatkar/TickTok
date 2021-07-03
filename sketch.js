

function setup() {
  createCanvas(400,400);


  angleMode(DEGREES);
}

function draw() {
  background(0);  

  drawSprites();

  hr= hour();
  mn=minute();
  sc=second();
 
  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

  translate(200,200)
  rotate(-90)
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0)
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0)
  pop();

  noFill()
  stroke(0,0,255)
  strokeWeight(9);
  arc(0,0,250,250,0,hrAngle);

  noFill()
  stroke(0,255,0)
  strokeWeight(9);
  arc(0,0,290,290,0,mnAngle);

  noFill()
  stroke(255,0,0)
  strokeWeight(9);
  arc(0,0,340,340,0,scAngle);
  
}
