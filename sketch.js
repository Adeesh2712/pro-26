
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammar1;
var ground1;
var iron1;
var sand1,sand2,sand3,sand4;
var rubber1;
var stone1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(750,700,1580,20)

	hammar1 = new hammar(100,100,100,10)

	iron1 = new iron(100,100,100,100)

	stone1 = new stone(500,100,150,150)

	rubber1 = new rubber(700,500,100,100)

	sand1=new sand(300,300,10,10)
	sand2=new sand(320,300,10,10)
	sand3=new sand(340,300,10,10)
	sand4=new sand(360,300,10,10)
	sand5=new sand(380,300,10,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  

  ground.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  iron1.display();
  hammar1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
 drawSprites();
}



