
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;
var wedge;
var wall;
var wall2;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);
  
  wedge = Bodies.rectangle(200, 200, 100, 20, ground_options);
  World.add(world,wedge);
  
  wall = Bodies.rectangle(380, 200, 20, 400, ground_options);
  World.add(world,wall);

  wall2 = Bodies.rectangle(20, 200, 20, 400, ground_options);
  World.add(world,wall2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(wall.position.x,wall.position.y,20,400);
  rect(wall2.position.x,wall2.position.y,20,400);
  rect(ground.position.x,ground.position.y,400,20);
  Body.rotate(wedge, angle);
  push();
  translate(wedge.position.x, wedge.position.y);
  rotate(angle); 
  rect(0, 0, 100, 20);
  pop();
  angle = angle+0.1

  
  
}

