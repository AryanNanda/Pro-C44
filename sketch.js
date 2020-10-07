
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var button,box;
function preload()
{
	button = createButton("Play",450)

}

function setup() {
	createCanvas(600, 900);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(246, 113, 11);
  fill("White")
  textSize(15)
  textFont("AIRSTRIKE")
  text("Hi,my Name is Aryan..Welcome to my Game App. This is a Quiz that will   ",10,50)
  text("help you to choose the perfect career.....",10,70)
  text("I wanted to make this game because I was having a bit of trouble ",10,90)
  text("deciding a career for myself so I took some career test and ",10,110)
  text("found out what I really liked to do and it really helped .While I was",10,130)
  text("taking that quiz it was really boring so I thought it would be a really",10,150)
  text("good idea to create a career quiz that will help people to decide a ",10,170)
  text("career in a fun way.",10,190)
fill("black")
  text("The Instructions for this quiz that you need to follow are:" , 10,220)
  text("1. Please answer all the questions truthfully.",10,240)
  text("2. Do not use Google or  any other web browser to answer",10,260)
  text("3. There will be minigames for each level so you will have to complete ",10,280)
  text("the minigame to answer the question.",10,300)
  drawSprites();
 
}



