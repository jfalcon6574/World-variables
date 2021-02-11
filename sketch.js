const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world

function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  object = Bodies.rectangle (100,100,50,50)
  World.add (world,object)

  console.log(object)

  var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle (200, 380, 400, 20, ground_options)
  World.add(world,ground)
  var ball_options = {
   restitution : 1.0
  }
  ball = Bodies.circle (200,50,20,ball_options)
  World.add (world,ball)
  
  

}




function draw() {
  background("Blue");  
  Engine.update(engine)
  rectMode(CENTER)
  rect (object.position.x, object.position.y, 50 ,50 )
  rect (ground.position.x, ground.position.y,400,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,20,20)

}