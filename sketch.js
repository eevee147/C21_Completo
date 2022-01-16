const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball, ground;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ground =new Ground(200,390,400,20);

  var ball_options = {
    restitution: 0.95
}

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
}

function draw() 
{
  background(55);
  ellipse(ball.position.x,ball.position.y,20);
  ground.display();

  Engine.update(engine);

}

