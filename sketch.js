const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1, ground;
var box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12;
var box13;

var slingshot;

var stand;

var score = 0;

var bg;

function preload() {
  getBackground();
}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  fill("brown");
  ground = Bodies.rectangle(400,380,800,20,options);
  World.add(world,ground);

  stand = Bodies.rectangle(330,250,300,15,options);
  World.add(world,stand);


  box1 = new Box(170,200);
  box2 = new Box(210,200);
  box3 = new Box(250,200);
  box4 = new Box(290,200);
  box5 = new Box(330,200);
  box6 = new Box(370,200);


  box7 = new Box(210,150);
  box8 = new Box(250,150);
  box9 = new Box(290,150);
  box10 = new Box(330,150);

  fill("yellow");
  box11 = new Box(250,100);
  box12= new Box(290,100);

  box13 = new Box(270,50);

  ball = Bodies.circle(80,100,200);
  World.add(world,ball);
  slingshot = new SlingShot(this.ball,{x:80, y:100});
  Engine.run(engine);
}

function draw() {
  background(0);
  
  textSize(28);
  fill("white");
  text("SCORE : "+score,width-300,50);
     

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  slingshot.display();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  rect(stand.position.x,stand.position.y,300,15);

  ellipse(ball.position.x,ball.position.y,20,20);

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(ball.body);
  }  
}

async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON);
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>=06 && hour<=19){
      bg.shapeColor("brown");
  }

  else{
      bg.shapeColor("yellow");
  }
}
