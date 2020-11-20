
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const MouseConstraint = Matter.MouseConstraint;
const Mouse =	Matter.Mouse;

var roof, bob1, bob2, bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


var canvas, mouse, mconstraint;
function preload() {
	dustbinImage = loadImage("dustbin.png")
}

function setup() {
	canvas = createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;
	// mouse = Mouse.create(canvas.elt);
	// mouse.pixelRatio = pixelDensity();
	// var options = {
	// 	mouse:mouse
	// }
	// mconstraint = MouseConstraint.create(engine, options);
	// World.add(world, mconstraint)

	//Create the Bodies Here.
	roof = new Ground(width / 2, height/10, width, 20);
	ball = new Ball(125, height-20, 20);
	dustbin1 = new Dustbin(width * 3 / 4, height - 10, 100, 10);
	dustbin2 = new Dustbin(width * 3 / 4 + 55, height - 55, 10, 100);
	dustbin3 = new Dustbin(width * 3 / 4 - 55, height - 55, 10, 100);
	

}


function draw() {
	rectMode(CENTER);

	background(150);

	Engine.update(engine);
	// imageMode(CENTER);
	// image(dustbinImage, width*3/4, height-65,100,100);
	ball.display();
	ground.display();
	// dustbin1.display();
	// dustbin2.display();
	// dustbin3.display();


}
function keyPressed(){
	if(keyCode===32){
		Body.applyForce(ball.body, ball.body.position, {x:65,y:-65});
	}
}



