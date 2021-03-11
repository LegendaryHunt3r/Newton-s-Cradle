const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ballThing1, ballThing2, ballThing3, ballThing4, ballThing5;
var roofThing, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ballThing1 = new ball(400,400);
	ballThing2 = new ball(450,400);
	ballThing3 = new ball(500,400);
	ballThing4 = new ball(350,400);
	ballThing5 = new ball(300,400);
  roofThing = new Ground(400,200,300,30); 
  rope1 = new Rope(ballThing1.body, roofThing.body, 0, 0);``
  rope2 = new Rope(ballThing2.body, roofThing.body,50,0);
  rope3 = new Rope(ballThing3.body, roofThing.body,100, 0);
  rope4 = new Rope(ballThing4.body, roofThing.body, -50, 0);
  rope5 = new Rope(ballThing5.body, roofThing.body, -100, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ballThing1.display();
  ballThing2.display();
  ballThing3.display();
  ballThing4.display();
  ballThing5.display();
  roofThing.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 }
 function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ballThing3.body, ballThing5.body.position,{x:75,y:-75});
   }
 }




