const Constraint= Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var level;
var L1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	level= new Level();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  level.display();

 
}
/*

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.position, {x:-300,y:-270});

	}
}
*/
