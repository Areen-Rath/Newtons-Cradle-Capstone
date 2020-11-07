
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

var bobX = 280;

function setup(){

	createCanvas(windowWidth/2, windowHeight/2);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Pendulum(bobX, 350, "lightblue");
	bobObject2 = new Pendulum(bobX + 40, 350, "lightgreen");
	bobObject3 = new Pendulum(bobX + 80, 350, "orange");
	bobObject4 = new Pendulum(bobX + 120, 350, "pink");
	bobObject5 = new Pendulum(bobX + 160, 350, "yellow");

	roof = new Roof();

	rope1 = new Sling(bobObject1.body, {x: 280, y: 100});
	rope2 = new Sling(bobObject2.body, {x: 320, y: 100});
	rope3 = new Sling(bobObject3.body, {x: 360, y: 100});
	rope4 = new Sling(bobObject4.body, {x: 400, y: 100});
	rope5 = new Sling(bobObject5.body, {x: 440, y: 100});

	Engine.run(engine);
  
}


function draw() {

  	background(0);
  
  	bobObject1.display();
  	bobObject2.display();
  	bobObject3.display();
  	bobObject4.display();
  	bobObject5.display();
 
	roof.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

}

function mouseDragged(){
	Matter.Body.setPosition(bobObject1.body, {x: mouseX, y: mouseY});
}