
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter = 50;

function setup() {
	createCanvas(1280,720);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(640,100,800,50);

	bobObject1 = new Bob(400,500,70);
	bobObject2 = new Bob(500,500,70);
	bobObject3 = new Bob(600,500,70);
	bobObject4 = new Bob(800,500,70);
	bobObject5 = new Bob(900,500,70);
	
	rope1 = new Rope (bobObject1.body, roof1.body , -bobDiameter*2, 0)
	rope2= new Rope(bobObject2.body, roof1.body, -bobDiameter*2, 0)
	rope3= new Rope(bobObject3.body, roof1.body, -bobDiameter*2, 0)
	rope4= new Rope(bobObject4.body, roof1.body, -bobDiameter*2, 0)
	rope5= new Rope(bobObject5.body, roof1.body, -bobDiameter*2, 0)


	
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

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:50,y:-45});

	}
}



