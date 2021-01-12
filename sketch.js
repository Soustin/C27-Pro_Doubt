
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;

var bobDiameter = Bob.r/2*2;

function preload(){
	
}

function setup() {
	createCanvas(1000, 900);
	//createCanvas(500, 300);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(170, 250, 120);
	bob2 = new Bob(200, 250, 120);
	bob3 = new Bob(230, 250, 120);
	bob4 = new Bob(260, 250, 120);
	bob5 = new Bob(290, 250, 120);

	roof = new Roof(230, 180, 20, 8);

	rope1 = new Rope(bob1.body, roof.body);

	console.log(bob1.body.position);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();

  drawSprites();
 
}



