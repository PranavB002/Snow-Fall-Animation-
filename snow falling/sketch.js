const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
var snowback1, person1, person2
var snowImage, snow1
var snows=[]
function preload(){
snowImage=loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,400);
  engine= Engine.create()
  world=engine.world
snow1=new snow(200,200,10,10)

}

function draw() {
  Engine.update(engine)
  background(snowImage);  
  snow1.display();
  if (frameCount%50===0) {
    snows.push(new snow(random(0,800),0,50,50))

  
  }
  for(var i=0;i<snows.length;i++){
    snows[i].display();
  }
  drawSprites();
}