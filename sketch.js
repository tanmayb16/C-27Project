
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter = 100;

function setup() {
	createCanvas(1280,720);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(600,100,1200,50);

	bobObject1 = new Bob(400,500,50);
	bobObject2 = new Bob(500,500,50);
	bobObject3 = new Bob(600,500,50);
	bobObject4 = new Bob(700,500,50);
	bobObject5 = new Bob(800,500,50);
	
	rope1 = new Rope (bobObject1.body, roof1.body , -bobDiameter*2, 0)
	rope2= new Rope(bobObject2.body, roof1.body, -bobDiameter*1, 0)
	rope3= new Rope(bobObject3.body, roof1.body, bobDiameter*0, 0)
	rope4= new Rope(bobObject4.body, roof1.body, bobDiameter*1, 0)
	rope5= new Rope(bobObject5.body, roof1.body, bobDiameter*2, 0)


	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});

	}
}



