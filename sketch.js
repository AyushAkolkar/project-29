const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, box1, box2, box3, box4, box5, box7;

var box1, box2, box3, box4, box5, box6, box7;

var box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21;

var polygon1;

function setup() {

  createCanvas(1200, 700);

  engine = Engine.create();

  world = engine.world

  ground1 = new Ground(600, 600,1200, 20);
  ground2 = new Ground(399,450,270,20);

  //first level

  box1 = new Box(330,440,30,30);

  box2=new Box(360,440,30,30);

  box3=new Box(390,440,30,30);

  box4=new Box(420,440,30,30);

  box5=new Box(450,440,30,30);

  box6=new Box(480,440,30,30);

  //second level

    box7=new Box(350,420,30,30);

		box8=new Box(380,420,30,30);

		box9=new Box(410,420,30,30);

		box10=new Box(440,420,30,30);

		box11=new Box(470,420,30,30);

  //third level

  box12  = new Box(370,400, 30, 30);

  box13  = new Box(400,400, 30, 30);

  box14  = new Box(430,400, 30, 30);

  box15  = new Box(460,400, 30, 30);

  //fourth level

  box16 = new Box(380, 360, 30, 30);

  box17 = new Box(410, 360, 30, 30);

  box18 = new Box(440, 360, 30, 30);

  //fifth level

  box19 = new Box(400, 330, 30, 30);

  box20 = new Box(430, 330, 30, 30);

  //sixth line

  box21 = new Box(415, 300, 30, 30);


  polygon_1 = new poly(150, 270, 30, 30);

  sling = new SlingShot(polygon_1.body, { x: 160, y: 280 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  ground1.display();

  box1.display();

  box2.display();

  box3.display();

  box4.display();

  box5.display();

  box6.display();

  box7.display ();

  box8.display ();

  box9.display ();

  box10.display ();

  box11.display ();

  box12.display ();

  box13.display ();

  box14.display ();

  box15.display ();

  box16.display();

  box17.display();

  box18.display();

  box19.display();

  box20.display();

  box21.display();

  polygon_1.display();

  ground2.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

