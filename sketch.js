
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse =	Matter.Mouse;

var roof, bob1, bob2, bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


var canvas, mouse, mconstraint;
function preload() {
	//dustbinImage = loadImage("dustbin.png")
}

function setup() {
	canvas = createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;
	mouse = Mouse.create(canvas.elt);
	mouse.pixelRatio = pixelDensity();
	var options = {
		mouse:mouse
	}
	mconstraint = MouseConstraint.create(engine, options);
	World.add(world, mconstraint)

	//Create the Bodies Here.
	roof = new Ground(width / 2, height/10, width-200, 20);
	bob1 = new Ball(100, 500, 50);
	bob2 = new Ball(200, 500, 50);
	bob3 = new Ball(300, 500, 50);
	bob4 = new Ball(500, 500, 50);
	bob5 = new Ball(600, 500, 50);
	rope1 = new Chain(bob1.body, roof.body, {x:-200,y:0});
	rope2 = new Chain(bob2.body, roof.body, {x:-100,y:0});
	rope3 = new Chain(bob3.body, roof.body, {x:0,y:0});
	rope4 = new Chain(bob4.body, roof.body, {x:100,y:0});
	rope5 = new Chain(bob5.body, roof.body, {x:200,y:0});

}


function draw() {
	rectMode(CENTER);

	background(150);

	Engine.update(engine);
	// imageMode(CENTER);
	// image(dustbinImage, width*3/4, height-65,100,100);
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	roof.display();
	
}
function keyPressed(){
	if(keyCode===32){
		Body.applyForce(ball.body, ball.body.position, {x:65,y:-65});
	}
}



