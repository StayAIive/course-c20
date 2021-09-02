
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball, theball;
var ground;
var stand;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  var theball_options = {
    restitution: 0.75,
    frictionAir: 0.02
  }

  var ground_options = {
    isStatic: true
  };


  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);

  stand = Bodies.rectangle(300, 200, 100, 10, ground_options);
  World.add(world, stand);

  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);

  ball2 = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball2);

  theball = Bodies.circle(300, 10, 30, theball_options);
  World.add(world, theball);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20);
  ellipse(theball.position.x, theball.position.y, 30);
  ellipse(ball2.position.x, ball2.position.y, 20);
  rect(ground.position.x, ground.position.y, 400, 20);
  rect(stand.position.x, stand.position.y, 200, 10);

}

